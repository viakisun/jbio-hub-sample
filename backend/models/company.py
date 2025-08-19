from pydantic import BaseModel, EmailStr, HttpUrl
from typing import List, Optional, Dict
from enum import Enum


class CompanyContact(BaseModel):
    name: str
    email: EmailStr
    phone: str


class SizeCategory(str, Enum):
    STARTUP = "Startup"
    SME = "SME"
    LARGE = "Large"


class Company(BaseModel):
    id: str
    name: str
    logoUrl: Optional[str] = None # Using str for now, as HttpUrl can be strict
    industry: str
    region: str
    foundedYear: int
    sizeCategory: SizeCategory
    employees: int
    description: str
    products: List[str] = []
    achievements: List[str] = []
    patents: List[str] = []
    contact: CompanyContact
    websiteUrl: Optional[str] = None # Using str for now
    relatedArticles: List[str] = []


class CompanyStats(BaseModel):
    totalCount: int
    regionDistribution: Dict[str, int]
    sizeDistribution: Dict[str, int]
