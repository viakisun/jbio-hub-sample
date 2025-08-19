import json
from faker import Faker
import random

fake = Faker('ko_KR')

def create_random_company(i):
    size_map = {
        "Startup": "스타트업",
        "SME": "중견기업",
        "Large": "대기업",
    }
    size_category = random.choice(list(size_map.keys()))

    industry_map = {
        "레드 바이오": ["신약개발", "백신", "세포치료"],
        "그린 바이오": ["스마트팜", "종자개량", "미생물비료"],
        "화이트 바이오": ["바이오플라스틱", "바이오연료", "산업효소"],
    }
    industry = random.choice(list(industry_map.keys()))
    products = random.sample(industry_map[industry], k=random.randint(1, 3))

    return {
        "id": f"comp-{i:03d}",
        "name": f"{fake.company()} {random.choice(['바이오', '사이언스', '제약', '테크', '랩'])}",
        "logoUrl": f"https://picsum.photos/seed/comp{i}/200/200",
        "industry": industry,
        "region": fake.city(),
        "foundedYear": random.randint(2000, 2023),
        "sizeCategory": size_category,
        "employees": random.randint(5, 500),
        "description": f"{size_map[size_category]}으로서 {', '.join(products)} 분야를 선도합니다. {fake.bs()}",
        "products": products,
        "achievements": [fake.catch_phrase() for _ in range(random.randint(0, 3))],
        "patents": [f"KR-10-{random.randint(2018, 2024)}-{random.randint(100000, 999999)}" for _ in range(random.randint(0, 2))],
        "contact": {
            "name": fake.name(),
            "email": fake.email(),
            "phone": fake.phone_number(),
        },
        "websiteUrl": fake.url(),
        "relatedArticles": []
    }

companies = [create_random_company(i + 1) for i in range(100)]

# Print as a Python dictionary for backend/db/mock_data.py
print("companies_db: dict[str, Company] = {")
for company in companies:
    print(f'    "{company["id"]}": Company(')
    for key, value in company.items():
        if key == 'sizeCategory':
            print(f'        {key}=SizeCategory.{value.upper()},')
        elif isinstance(value, dict):
             print(f'        {key}=CompanyContact(name="{value["name"]}", email="{value["email"]}", phone="{value["phone"]}"),')
        else:
            print(f'        {key}={repr(value)},')
    print("    ),")
print("}")

print("\n\n" + "="*50 + "\n\n")

# Print as a JavaScript array of objects for src/mocks/handlers.ts
print("const companiesDb = ")
print(json.dumps(companies, indent=4, ensure_ascii=False))
print(";")
