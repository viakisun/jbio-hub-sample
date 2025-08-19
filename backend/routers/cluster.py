from fastapi import APIRouter
from typing import List, Dict, Any
from ..db.mock_data import stats_db, companies_db, announcements_db
from datetime import datetime

router = APIRouter(
    prefix="/cluster",
    tags=["Cluster"],
)

@router.get("/dashboard", response_model=Dict[str, Any])
def get_cluster_dashboard():
    """
    Get data for the cluster dashboard.
    """
    # 1. Prepare KPIs data
    kpis = [
        {"title": stat.label, "value": stat.value, "change": stat.change}
        for stat in stats_db
    ]

    # 2. Prepare Latest Organizations data
    # NOTE: The Company model doesn't have date/status, so we'll generate mock ones.
    latest_orgs = [
        {
            "id": org.id,
            "name": org.name,
            "date": "2025-08-15", # Using a fixed date for consistency
            "status": "NEW"
        }
        for org in list(companies_db.values())[:4] # Take first 4
    ]

    # 3. Prepare Latest Policies data
    # Sort announcements by date to get the latest ones
    latest_policies_raw = sorted(announcements_db, key=lambda x: x.created_at, reverse=True)
    latest_policies = [
        {
            "id": policy.id,
            "name": policy.title,
            "date": policy.created_at.strftime('%Y-%m-%d'),
            "status": "NEW" if (datetime.now() - policy.created_at).days < 30 else "UPDATED"
        }
        for policy in latest_policies_raw[:4] # Take first 4
    ]

    return {
        "kpis": kpis,
        "latestOrgs": latest_orgs,
        "latestPolicies": latest_policies,
    }
