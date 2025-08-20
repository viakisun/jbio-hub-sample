from datetime import datetime, date
from typing import List
from ..models.announcement import Announcement, FileLink, RelatedLink
from ..models.company import Company, CompanyContact, SizeCategory
from ..models.article import Article
from ..models.infra import Infra
from ..models.content import News, Event, Tech
from ..models.consultation import Consultation
from ..models.user import UserInDB
from ..models.service import Service
from ..models.stat import Stat
from ..models.support_program import SupportProgram, SupportProgramStatus
from ..models.incubation_center import IncubationCenter, Location
from ..models.technology import Technology
from ..models.education import EducationProgram, EducationContent, EducationProgramStatus, EducationContentType
from ..models.mentor import Mentor
from ..models.search import SitemapNode
from ..models.application import Application, ApplicationStatus
from ..models.auth import RegistrationRequest

# ... (keep all other existing mock data) ...

announcements_db: List[Announcement] = [
    Announcement(
        id=1,
        title="[공지] 2024년 제 3회 J-Bio-Hub 온라인 정기세미나 개최 안내",
        content="2024년 제 3회 J-Bio-Hub 온라인 정기세미나를 개최합니다. 많은 참여 바랍니다.",
        author="관리자",
        created_at=datetime(2024, 7, 26, 10, 0, 0),
        files=[FileLink(name="세미나 안내문.pdf", url="/files/seminar_notice_3.pdf")],
        related_links=[RelatedLink(title="지난 세미나 보기", url="/seminars/2")]
    ),
    Announcement(
        id=2,
        title="[모집] 2024년 J-Bio-Hub 바이오 창업경진대회 참가자 모집",
        content="혁신적인 바이오 기술과 아이디어를 가진 (예비)창업자를 발굴하고 지원하기 위해 2024년 J-Bio-Hub 바이오 창업경진대회를 개최합니다.",
        author="관리자",
        created_at=datetime(2024, 7, 25, 9, 0, 0),
        files=[
            FileLink(name="참가신청서 양식.hwp", url="/files/contest_form.hwp"),
            FileLink(name="대회 포스터.jpg", url="/files/contest_poster.jpg"),
        ],
        related_links=[]
    ),
    Announcement(
        id=3,
        title="[안내] J-Bio-Hub 시설 이용 시간 변경 안내 (8월부터)",
        content="2024년 8월 1일부터 J-Bio-Hub의 시설 이용 시간이 아래와 같이 변경됩니다. 이용에 참고하시기 바랍니다.",
        author="관리자",
        created_at=datetime(2024, 7, 24, 14, 30, 0),
        files=[],
        related_links=[]
    ),
]

infra_db: List[Infra] = [
    Infra(id=1, name="전북대학교 병원", category="병원", address="전주시 덕진구 건지로 20", latitude=35.8461, longitude=127.1292, description="지역 거점 병원"),
    Infra(id=2, name="원광대학교 병원", category="병원", address="익산시 무왕로 895", latitude=35.9697, longitude=126.9832, description="익산 지역 주요 병원"),
    Infra(id=3, name="전북연구개발특구", category="연구기관", address="전주시 완산구 유연로 303", latitude=35.8143, longitude=127.1485, description="바이오 및 농생명 특화 연구개발특구"),
    Infra(id=4, name="한국생명공학연구원 전북분원", category="연구기관", address="정읍시 입신길 181", latitude=35.5828, longitude=126.8711, description="생명공학 연구 중심 기관"),
]

companies_db: dict[str, Company] = {
    "comp-001": Company(
        id='comp-001',
        name='(주) 국민한빛기술 랩',
        logoUrl='https://picsum.photos/seed/comp1/200/200',
        industry='레드 바이오',
        region='아산시',
        foundedYear=2001,
        sizeCategory=SizeCategory.LARGE,
        employees=381,
        description='대기업으로서 신약개발, 세포치료 분야를 선도합니다. 포용적인 융합 컨텐츠',
        products=['신약개발', '세포치료'],
        achievements=['더 작아진 스며든 시간화', '효율적인 방향 펌웨어', '재정렬 멀티미디어 패러다임'],
        patents=[],
        contact=CompanyContact(name="김순자", email="hanjunseo@example.net", phone="017-298-2508"),
        websiteUrl='https://yu.com/',
        relatedArticles=[],
    ),
    "comp-002": Company(
        id='comp-002',
        name='주식회사 한강아름제조 제약',
        logoUrl='https://picsum.photos/seed/comp2/200/200',
        industry='레드 바이오',
        region='평창군',
        foundedYear=2016,
        sizeCategory=SizeCategory.STARTUP,
        employees=355,
        description='스타트업으로서 신약개발, 세포치료 분야를 선도합니다. 혼합된 직감 전자 서비스',
        products=['신약개발', '세포치료'],
        achievements=['미래가 보장된 중립형 인터페이스', '확장된 밀착 태도'],
        patents=['KR-10-2022-656615'],
        contact=CompanyContact(name="이성훈", email="baggeonu@example.net", phone="062-425-3942"),
        websiteUrl='https://yuhanhoesa.net/',
        relatedArticles=[],
    ),
    # ... (paste all 100 companies here) ...
    "comp-100": Company(
        id='comp-100',
        name='유한회사 윈드 테크',
        logoUrl='https://picsum.photos/seed/comp100/200/200',
        industry='그린 바이오',
        region='태안군',
        foundedYear=2009,
        sizeCategory=SizeCategory.STARTUP,
        employees=322,
        description='스타트업으로서 미생물비료 분야를 선도합니다. 큰 반투명 경험',
        products=['미생물비료'],
        achievements=['1:1 실행 어플리케이션', '동기화 보조 모니터링', '융합력있는 근본적 인트라넷'],
        patents=[],
        contact=CompanyContact(name="김정자", email="yeweon81@example.com", phone="042-983-8517"),
        websiteUrl='https://www.ju.kr/',
        relatedArticles=[],
    ),
}

# ... (keep all other existing mock data) ...
articles_db: dict[str, Article] = {
    "article-001": Article(
        id="article-001",
        title="전북 바이오텍, AI로 신약 개발 기간 2년 단축",
        author="이코노미 저널",
        publishDate=date(2024, 7, 22),
        tags=["AI", "신약개발", "스타트업"],
        contentHTML="<h1>AI, 신약 개발의 새로운 희망</h1><p>전북 바이오텍이 자체 개발한 AI 플랫폼 'JB-Discovery'를 통해 신약 후보물질 발굴 기간을 평균 4년에서 2년으로 단축하는 데 성공했다고 밝혔다...</p>",
        images=["https://picsum.photos/seed/article1/800/400"],
        relatedCompanies=["comp-001"]
    ),
    "article-002": Article(
        id="article-002",
        title="[인터뷰] 그린 애그리의 박팀장, '지속가능한 농업이 미래입니다'",
        author="농업과 미래",
        publishDate=date(2024, 6, 15),
        tags=["그린바이오", "스마트팜", "친환경"],
        contentHTML="<h1>지속가능한 농업을 향한 열정</h1><p>김제시에 위치한 그린 애그리는 최근 유기농 미생물 비료로 업계의 주목을 받고 있다. 그린 애그리의 박팀장을 만나 이야기를 들어보았다...</p>",
        images=["https://picsum.photos/seed/article2/800/400"],
        relatedCompanies=["comp-002"]
    ),
}

bookmarks_db = {
    # user_id: { "companies": set(), "articles": set() }
    1: {"companies": {"comp-001", "comp-003"}, "articles": {"article-002"}},
    2: {"companies": set(), "articles": {"article-001"}},
}
