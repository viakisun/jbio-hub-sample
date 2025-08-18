from pydantic import BaseModel
from typing import List, Dict


class Admin(BaseModel):
    id: str
    username: str
    role: str  # In a real app, use Enum: [admin, super_admin]
    permissions: List[str]


class SystemStats(BaseModel):
    dailyLogins: int
    monthlyTraffic: int


class DashboardSummary(BaseModel):
    userCount: int
    activeUsers: int
    pendingApprovals: int
    announcementCount: int
    systemStats: SystemStats
