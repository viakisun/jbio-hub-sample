from fastapi import APIRouter, Depends, HTTPException, status, Body
from fastapi.security import OAuth2PasswordBearer
from typing import Annotated, List

from ..models.user import User
from ..models.application import Application
from ..models.company import Company
from ..models.article import Article
from ..db.mock_data import users_db, applications_db, companies_db, articles_db, bookmarks_db

router = APIRouter(
    tags=["Users"]
)

# The tokenUrl should point to the new login endpoint, which is in the auth router
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/auth/login")


# This is a mock dependency. In a real app, this would decode a JWT.
async def get_current_user(token: Annotated[str, Depends(oauth2_scheme)]):
    """
    Dependency to get the current user from a token.
    For mocking, we assume the token is the user's ID.
    e.g., "fake-jwt-token-for-user-1"
    """
    if not token.startswith("fake-jwt-token-for-user-"):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid token format")

    try:
        # Extract user ID from the fake token
        user_id_str = token.replace("fake-jwt-token-for-user-", "")
        user_id = int(user_id_str)
    except (ValueError, TypeError):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid user ID in token")

    user_in_db = next((u for u in users_db if u.id == user_id), None)
    if user_in_db is None:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="User not found")

    # Return the public User model, not UserInDB with password
    return User(**user_in_db.model_dump(exclude={'password'}))


@router.get("/users/me", response_model=User)
def read_users_me(current_user: Annotated[User, Depends(get_current_user)]):
    """
    Get the profile of the current authenticated user.
    """
    return current_user


@router.patch("/users/me", response_model=User)
def update_user_me(
    updates: dict = Body(...),
    current_user: Annotated[User, Depends(get_current_user)] = None
):
    """
    Update the current user's profile (name, phone, organization).
    """
    user_in_db = next((u for u in users_db if u.id == current_user.id), None)
    if not user_in_db:
        # This case should ideally not be reached if get_current_user works correctly
        raise HTTPException(status_code=404, detail="User not found in DB")

    # Update only the allowed fields
    allowed_fields = ["name", "phone", "organization"]
    for field, value in updates.items():
        if field in allowed_fields:
            setattr(user_in_db, field, value)

    return User(**user_in_db.model_dump(exclude={'password'}))


@router.patch("/users/me/password")
def update_user_password(
    passwords: dict = Body(...),
    current_user: Annotated[User, Depends(get_current_user)] = None
):
    """
    Update the current user's password.
    """
    user_in_db = next((u for u in users_db if u.id == current_user.id), None)
    if not user_in_db:
        raise HTTPException(status_code=404, detail="User not found in DB")

    current_password = passwords.get("currentPassword")
    new_password = passwords.get("newPassword")

    if not current_password or not new_password:
        raise HTTPException(status_code=400, detail="Both current and new passwords are required")

    if user_in_db.password != current_password:
        raise HTTPException(status_code=400, detail="Incorrect current password")

    user_in_db.password = new_password
    return {"message": "Password updated successfully"}


@router.get("/users/me/applications", response_model=List[Application])
def get_my_applications(current_user: Annotated[User, Depends(get_current_user)]):
    """
    Get the current user's application history.
    This is a mock implementation. In a real app, you would query based on user_id.
    """
    # Mock logic: associate users to applications.
    # In a real system, the application would have a user_id.
    # For now, let's assume user 1 applied to app 1, user 2 to app 2.
    if current_user.id == 1:
        return [app for app in applications_db if app.id == "app_001"]
    elif current_user.id == 2:
        return [app for app in applications_db if app.id == "app_002"]

    return []


# ===== Bookmarking Endpoints =====

@router.get("/users/me/bookmarks/companies", response_model=List[Company])
def get_bookmarked_companies(current_user: Annotated[User, Depends(get_current_user)]):
    user_bookmarks = bookmarks_db.get(current_user.id, {"companies": set()})
    company_ids = user_bookmarks.get("companies", set())
    return [companies_db[cid] for cid in company_ids if cid in companies_db]

@router.post("/users/me/bookmarks/companies", status_code=status.HTTP_201_CREATED)
def add_company_bookmark(
    payload: dict = Body(..., example={"companyId": "comp-001"}),
    current_user: Annotated[User, Depends(get_current_user)] = None
):
    company_id = payload.get("companyId")
    if not company_id or company_id not in companies_db:
        raise HTTPException(status_code=404, detail="Company not found")

    user_bookmarks = bookmarks_db.setdefault(current_user.id, {"companies": set(), "articles": set()})
    user_bookmarks["companies"].add(company_id)
    return {"status": "created"}

@router.delete("/users/me/bookmarks/companies/{companyId}", status_code=status.HTTP_204_NO_CONTENT)
def remove_company_bookmark(
    companyId: str,
    current_user: Annotated[User, Depends(get_current_user)] = None
):
    user_bookmarks = bookmarks_db.get(current_user.id)
    if user_bookmarks and companyId in user_bookmarks.get("companies", set()):
        user_bookmarks["companies"].remove(companyId)
        return
    raise HTTPException(status_code=404, detail="Bookmark not found")

@router.get("/users/me/bookmarks/articles", response_model=List[Article])
def get_bookmarked_articles(current_user: Annotated[User, Depends(get_current_user)]):
    user_bookmarks = bookmarks_db.get(current_user.id, {"articles": set()})
    article_ids = user_bookmarks.get("articles", set())
    return [articles_db[aid] for aid in article_ids if aid in articles_db]

@router.post("/users/me/bookmarks/articles", status_code=status.HTTP_201_CREATED)
def add_article_bookmark(
    payload: dict = Body(..., example={"articleId": "article-001"}),
    current_user: Annotated[User, Depends(get_current_user)] = None
):
    article_id = payload.get("articleId")
    if not article_id or article_id not in articles_db:
        raise HTTPException(status_code=404, detail="Article not found")

    user_bookmarks = bookmarks_db.setdefault(current_user.id, {"companies": set(), "articles": set()})
    user_bookmarks["articles"].add(article_id)
    return {"status": "created"}

@router.delete("/users/me/bookmarks/articles/{articleId}", status_code=status.HTTP_204_NO_CONTENT)
def remove_article_bookmark(
    articleId: str,
    current_user: Annotated[User, Depends(get_current_user)] = None
):
    user_bookmarks = bookmarks_db.get(current_user.id)
    if user_bookmarks and articleId in user_bookmarks.get("articles", set()):
        user_bookmarks["articles"].remove(articleId)
        return
    raise HTTPException(status_code=404, detail="Bookmark not found")
