from pydantic import BaseModel, EmailStr
from typing import List, Optional
from datetime import datetime


class LoginRequest(BaseModel):
    email: EmailStr
    password: str
    rememberMe: bool = False


class RegisterRequest(BaseModel):
    name: str
    email: EmailStr
    password: str
    organization: str
    phone: Optional[str] = None
    agreedToTerms: bool
    agreedToPrivacy: bool


class PasswordResetRequest(BaseModel):
    email: EmailStr


class PasswordResetVerify(BaseModel):
    token: str
    newPassword: str


class RegistrationRequest(BaseModel):
    userId: str
    name: str
    email: EmailStr
    organization: str
    requestedAt: datetime
    status: str  # enum: [pending, approved, rejected]
