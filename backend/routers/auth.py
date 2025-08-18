from fastapi import APIRouter, Depends, HTTPException, status
from typing import Annotated
import uuid
from datetime import datetime

from ..models.user import User, Token
from ..models.auth import LoginRequest, RegisterRequest, PasswordResetRequest, PasswordResetVerify, RegistrationRequest
from ..db.mock_data import users_db, registration_requests_db

router = APIRouter(
    tags=["Auth"]
)


def get_user_by_email(email: str):
    user = next((user for user in users_db if user.email == email), None)
    return user


@router.post("/auth/login", response_model=Token)
def login_for_access_token(form_data: LoginRequest):
    """
    Logs in a user and returns an access token.
    """
    user = get_user_by_email(form_data.email)
    if not user or user.password != form_data.password:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )

    # In a real app, you'd create a real JWT token here.
    access_token = f"fake-jwt-token-for-user-{user.id}"

    # Exclude password from the returned user object
    user_data = User(**user.model_dump(exclude={'password'}))

    return Token(access_token=access_token, token_type="bearer", user=user_data)


@router.post("/auth/register", status_code=status.HTTP_201_CREATED)
def register_user(form_data: RegisterRequest):
    """
    Handles a new user registration request.
    This mock implementation adds the request to a queue for admin approval.
    """
    if get_user_by_email(form_data.email):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email already registered",
        )

    new_request = RegistrationRequest(
        userId=f"user_req_{uuid.uuid4()}",
        name=form_data.name,
        email=form_data.email,
        organization=form_data.organization,
        requestedAt=datetime.now(),
        status="pending"
    )
    registration_requests_db.append(new_request)

    return {"status": "pending", "message": "가입 요청이 접수되었습니다. 관리자의 승인을 기다려주세요."}


@router.post("/auth/password-reset/request")
def request_password_reset(form_data: PasswordResetRequest):
    """
    Initiates a password reset request.
    In a real app, this would send a reset link/code to the user's email.
    """
    # Check if user exists
    if not get_user_by_email(form_data.email):
        # Still return a success message to prevent user enumeration attacks
        return {"message": "인증 코드 발송 완료"}

    # Mock response
    return {"message": "인증 코드 발송 완료"}


@router.post("/auth/password-reset/verify")
def verify_password_reset(form_data: PasswordResetVerify):
    """
    Verifies the password reset token and sets a new password.
    """
    # Mock response
    print(f"Password reset for token {form_data.token} with new password {form_data.newPassword}")
    return {"message": "비밀번호 재설정 완료"}
