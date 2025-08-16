from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from typing import Annotated

from ..models.user import User, Token
from ..db.mock_data import users_db

router = APIRouter(tags=["Users"])

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/auth/token")

def get_user(username: str):
    user = next((user for user in users_db if user.username == username), None)
    return user

@router.post("/auth/token", response_model=Token)
def login_for_access_token(form_data: Annotated[OAuth2PasswordRequestForm, Depends()]):
    """
    UI-07-01: Login and get an access token.
    """
    user = get_user(form_data.username)
    if not user or user.password != form_data.password:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )

    # In a real app, you'd create a real JWT token here.
    access_token = f"fake-jwt-token-for-user-{user.id}"

    # Exclude password from the returned user object
    user_data = User(**user.model_dump(exclude={'password'}))

    return Token(access_token=access_token, token_type="bearer", user=user_data)


async def get_current_user(token: Annotated[str, Depends(oauth2_scheme)]):
    """
    Dependency to get the current user from a token.
    """
    if not token.startswith("fake-jwt-token-for-user-"):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid token")

    user_id = int(token.replace("fake-jwt-token-for-user-", ""))
    user = next((user for user in users_db if user.id == user_id), None)
    if user is None:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="User not found")

    return User(**user.model_dump(exclude={'password'}))


@router.get("/me", response_model=User)
def read_users_me(current_user: Annotated[User, Depends(get_current_user)]):
    """
    UI-07-02: Get the profile of the current authenticated user.
    """
    return current_user
