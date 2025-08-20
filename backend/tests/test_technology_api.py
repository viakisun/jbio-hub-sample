import sys
import os
from fastapi.testclient import TestClient

# Add the project root to the python path to allow absolute imports
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..')))

from backend.main import app

client = TestClient(app)

def test_get_technologies_default_pagination():
    """
    Tests the default pagination which should return 20 items.
    """
    response = client.get("/api/tech-summary/list")
    assert response.status_code == 200
    response_data = response.json()

    assert "data" in response_data
    assert "pagination" in response_data

    assert len(response_data["data"]) == 20

    pagination = response_data["pagination"]
    assert pagination["total"] == 100
    assert pagination["page"] == 1
    assert pagination["limit"] == 20
    assert pagination["totalPages"] == 5
    assert pagination["hasNext"] is True

def test_get_technologies_data_integrity():
    """
    Tests that the data returned by the API is correct by checking the first item.
    """
    response = client.get("/api/tech-summary/list?page=1&limit=1")
    assert response.status_code == 200
    response_data = response.json()

    assert len(response_data["data"]) == 1
    first_item = response_data["data"][0]

    # Check against the first item in the (now correct) mock database
    assert first_item["id"] == "tech_001"
    assert first_item["title"] == "차세대 CAR-T 세포 치료제 기술"
    assert first_item["category"] == "레드바이오"
    assert first_item["subCategory"] == "의약품"

def test_get_technologies_category_filter():
    """
    Tests filtering by main category.
    """
    response = client.get("/api/tech-summary/list?category=그린바이오")
    assert response.status_code == 200
    response_data = response.json()

    # All returned items should have the category '그린바이오'
    for item in response_data["data"]:
        assert item["category"] == "그린바이오"

def test_get_technologies_sub_category_filter():
    """
    Tests filtering by sub category.
    """
    response = client.get("/api/tech-summary/list?subCategory=백신")
    assert response.status_code == 200
    response_data = response.json()

    # All returned items should have the subCategory '백신'
    for item in response_data["data"]:
        assert item["subCategory"] == "백신"
