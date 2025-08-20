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

news_db: List[News] = [
    News(
        id=1,
        title="전북바이오융합산업진흥원, 바이오 특화단지 유치 총력",
        summary="전북특별자치도가 바이오 특화단지 유치를 위해 산학연관 협력체계를 구축하고 총력을 기울이고 있다.",
        content="전북바이오융합산업진흥원은 최근 전북대, 원광대 등 도내 주요 대학 및 연구기관과 함께 바이오 특화단지 유치를 위한 업무협약을 체결했다고 밝혔다. 이번 협약은 레드바이오, 그린바이오, 화이트바이오 등 전 분야에 걸친 협력을 통해 전북을 대한민국 바이오 산업의 허브로 만들기 위한 초석이 될 것이다.",
        category='news',
        created_at=datetime(2024, 7, 20, 11, 0, 0),
        sourceName="전북일보",
        thumbnailUrl="https://picsum.photos/seed/news1/300/200"
    ),
    News(
        id=2,
        title="[채용공고] J-Bio-Hub 연구지원 인력 채용",
        summary="J-Bio-Hub에서 함께 성장할 열정적인 연구지원 인재를 모집합니다.",
        content="1. 모집분야: 연구기획, 장비관리, 행정지원\n2. 자격요건: 관련분야 학사 학위 이상 소지자\n3. 접수기간: 2024년 8월 1일 ~ 8월 15일\n자세한 내용은 홈페이지를 참고하세요.",
        category='notice',
        created_at=datetime(2024, 7, 18, 15, 0, 0),
        sourceName="J-Bio-Hub",
        thumbnailUrl="https://picsum.photos/seed/news2/300/200"
    ),
]

events_db: List[Event] = [
    Event(
        id=1,
        title="2024 국제 바이오 기술 컨퍼런스 (BioTech 2024)",
        summary="전 세계 바이오 기술 전문가들이 모이는 네트워킹의 장!",
        thumbnailUrl="https://picsum.photos/seed/event1/300/200",
        eventStartAt=datetime(2024, 9, 5, 9, 0, 0),
        eventEndAt=datetime(2024, 9, 7, 18, 0, 0),
        locationType='offline',
        locationName="전주 컨벤션센터",
        host="한국바이오협회",
        registerDeadline=datetime(2024, 8, 20, 18, 0, 0),
        status='예정'
    ),
    Event(
        id=2,
        title="AI 신약개발 온라인 세미나",
        summary="최신 AI 기술을 활용한 신약개발 트렌드와 성공사례를 공유합니다.",
        thumbnailUrl="https://picsum.photos/seed/event2/300/200",
        eventStartAt=datetime(2024, 8, 22, 14, 0, 0),
        eventEndAt=datetime(2024, 8, 22, 16, 0, 0),
        locationType='online',
        locationName="Zoom 웨비나",
        host="J-Bio-Hub",
        registerDeadline=datetime(2024, 8, 21, 18, 0, 0),
        status='예정'
    ),
]

techs_db: List[Tech] = [
    Tech(
        id=1,
        title="고효율 미생물 기반 친환경 비료 생산 기술",
        field="그린바이오",
        description="토양 환경을 개선하고 작물 생산성을 극대화하는 차세대 친환경 비료 생산 기술. 기존 화학 비료 대비 탄소 배출량을 30% 이상 절감.",
        presenter="(주)그린애그리",
        created_at=datetime(2024, 5, 30, 10, 0, 0)
    ),
    Tech(
        id=2,
        title="CRISPR-Cas9 유전자 가위 기술을 이용한 항암 치료제 개발",
        field="레드바이오",
        description="특정 암세포의 유전자를 정밀하게 타겟하여 부작용을 최소화하고 치료 효과를 높인 혁신적인 항암 치료제 파이프라인.",
        presenter="전북대학교병원 암센터",
        created_at=datetime(2024, 6, 15, 13, 0, 0)
    ),
]

consultations_db: List[Consultation] = []

sitemap_db: List[SitemapNode] = [
    SitemapNode(title="Home", url="/"),
    SitemapNode(title="클러스터", url="/cluster", children=[
        SitemapNode(title="클러스터 대시보드", url="/cluster/dashboard"),
        SitemapNode(title="클러스터 허브", url="/cluster/hub"),
    ]),
    SitemapNode(title="기업", url="/companies"),
    SitemapNode(title="기술", url="/technologies"),
    SitemapNode(title="교육", url="/education"),
]

services_db: List[Service] = [
    Service(title="기업 지원", description="성장 단계별 맞춤형 기업 지원 프로그램 안내", icon="briefcase", gradient="from-blue-400 to-blue-600"),
    Service(title="기술 이전", description="우수 기술 매칭 및 기술 이전 상담", icon="share", gradient="from-green-400 to-green-600"),
    Service(title="장비 예약", description="고가의 연구 장비 공동 활용 예약 시스템", icon="calendar", gradient="from-purple-400 to-purple-600"),
    Service(title="전문가 매칭", description="분야별 전문가 멘토링 및 컨설팅 연결", icon="users", gradient="from-yellow-400 to-yellow-600"),
]

stats_db: List[Stat] = [
    Stat(label="입주기업", value="128개", change="+5.2%", icon="building", color="blue"),
    Stat(label="기술이전 건수", value="76건", change="+12%", icon="share", color="green"),
    Stat(label="총 투자유치액", value="3,200억", change="+25%", icon="dollar-sign", color="purple"),
    Stat(label="고용인원", value="1,500명", change="+8.7%", icon="users", color="yellow"),
]

support_programs_db: List[SupportProgram] = [
    SupportProgram(
        id="sp-001",
        title="2024년 바이오 스타트업 인큐베이팅 프로그램",
        organization="J-Bio-Hub",
        description="초기 바이오 스타트업을 위한 사무공간, 멘토링, 시드 투자 지원.",
        startDate=date(2024, 9, 1),
        endDate=date(2025, 3, 1),
        status=SupportProgramStatus.UPCOMING,
        category="창업지원",
        supportType=["자금", "멘토링", "인프라"],
        targetCompany="예비창업자 및 3년 미만 스타트업",
        externalUrl="https://jbiohub.or.kr/support/1",
        createdAt=datetime(2024, 7, 15, 10, 0, 0)
    ),
    SupportProgram(
        id="sp-002",
        title="글로벌 진출 지원사업",
        organization="전북테크노파크",
        description="해외 전시회 참가, 바이어 매칭, 수출 컨설팅 지원.",
        startDate=date(2024, 6, 1),
        endDate=date(2024, 11, 30),
        status=SupportProgramStatus.ONGOING,
        category="수출지원",
        supportType=["컨설팅", "마케팅"],
        targetCompany="수출 유망 중소기업",
        externalUrl="https://jbtp.or.kr/support/2",
        createdAt=datetime(2024, 5, 20, 9, 0, 0)
    ),
]

education_programs_db: List[EducationProgram] = [
    EducationProgram(
        id="ep-001",
        title="GMP 기본과정",
        organization="한국바이오협회",
        category="제조/품질관리",
        startDate=date(2024, 8, 19),
        endDate=date(2024, 8, 23),
        location="온라인",
        cost=300000,
        status=EducationProgramStatus.UPCOMING,
        targetAudience="제약/바이오 기업 재직자",
        applicationUrl="https://koreabio.org/education/1"
    ),
]

education_contents_db: List[EducationContent] = [
    EducationContent(
        id="ec-001",
        title="바이오 기술과 특허 전략",
        description="특허 출원부터 권리 보호까지, 바이오 기업을 위한 필수 특허 전략을 다룹니다.",
        category="특허/IP",
        type=EducationContentType.VIDEO,
        url="/videos/patent_strategy.mp4",
        thumbnail="https://picsum.photos/seed/edu1/300/200",
        viewCount=1204,
        createdAt=datetime(2024, 6, 10, 11, 0, 0)
    ),
]

mentors_db: List[Mentor] = [
    Mentor(
        id="mentor-001",
        name="김박사",
        organization="ABC 바이오",
        field=["신약개발", "임상시험"],
        expertise="항암제 개발 전문가",
        experience="글로벌 제약사 20년 경력",
        available=True,
        contactEmail="dr.kim@example.com"
    ),
]

technologies_db: List[Technology] = [
    Technology(
        id="tech-001",
        title="AI 기반 신약 후보물질 발굴 플랫폼",
        summary="딥러닝을 활용하여 신약 개발 기간과 비용을 획기적으로 단축시키는 플랫폼 기술",
        organization="전북대학교 AI 연구센터",
        patentNumber="KR-10-2023-0012345",
        applicationDate=date(2023, 2, 1),
        category="플랫폼 기술",
        transferable=True,
        thumbnail="https://picsum.photos/seed/tech1/300/200",
        createdAt=datetime(2023, 10, 1, 10, 0, 0)
    )
]

incubation_centers_db: List[IncubationCenter] = [
    IncubationCenter(
        id="ic-001",
        name="J-Bio-Hub 창업보육센터",
        totalRooms=50,
        vacantRooms=5,
        occupancyRate=90.0,
        address="전주시 덕진구",
        manager="홍길동",
        contact="063-123-4567",
        location=Location(latitude=35.8461, longitude=127.1292)
    )
]

users_db: List[UserInDB] = [
    UserInDB(id=1, username="admin", email="admin@example.com", full_name="관리자", role="admin", password="hashed_password_admin"),
    UserInDB(id=2, username="user1", email="user1@example.com", full_name="김사용", role="user", interests=["레드바이오", "신약개발"], password="hashed_password_user1"),
]

registration_requests_db: List[RegistrationRequest] = [
    RegistrationRequest(
        userId="req-001",
        name="박신청",
        email="applicant@example.com",
        organization="(주)미래바이오",
        requestedAt=datetime(2024, 7, 21, 10, 30, 0),
        status="pending"
    )
]

applications_db: List[Application] = [
    Application(
        id="app-001",
        programId="sp-001",
        programTitle="2024년 바이오 스타트업 인큐베이팅 프로그램",
        status=ApplicationStatus.PENDING,
        appliedAt=datetime(2024, 7, 22, 15, 0, 0),
    )
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
