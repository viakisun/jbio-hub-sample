from pydantic import BaseModel, EmailStr
from typing import Optional, List

class User(BaseModel):
    id: int
    username: str
    email: EmailStr
    full_name: Optional[str] = None
    role: str = 'user'
    interests: List[str] = []

class UserInDB(User):
    password: str # This would be a hash in a real app

class Token(BaseModel):
    access_token: str
    token_type: str
    user: User
