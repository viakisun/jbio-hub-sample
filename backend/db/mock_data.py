from datetime import datetime
from ..models.announcement import Announcement, FileLink, RelatedLink
from ..models.company import Company
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

# SQL Schema comments from the original request
"""
-- Database Schema for Announcements
CREATE TABLE announcements (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    author VARCHAR(100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
"""

# Mock data for announcements
announcements_db: list[Announcement] = [
    Announcement(
        id=1,
        title='2025년 상반기 바이오 연구직 채용 공고',
        content='유전체 분석 및 단백질체학 연구 분야의 신규 연구원을 모집합니다. 상세 요강은 홈페이지를 참고하세요.',
        author='전북바이오융합산업진흥원',
        created_at=datetime(2025, 8, 10, 10, 0, 0),
        files=[FileLink(name='채용공고.pdf', url='/files/recruitment_notice_01.pdf')],
        related_links=[RelatedLink(title='진흥원 홈페이지', url='https://www.jif.re.kr/')]
    ),
    Announcement(
        id=2,
        title='미생물 배양 기술 이전 설명회 개최',
        content='신규 미생물 배양 기술에 대한 기술 이전 설명회를 개최합니다. 관심 있는 기업 및 기관의 많은 참여 바랍니다.',
        author='한국생명공학연구원',
        created_at=datetime(2025, 8, 5, 14, 30, 0),
        files=[FileLink(name='기술이전설명회_안내.hwp', url='/files/tech_briefing_01.hwp')],
        related_links=[]
    ),
    Announcement(
        id=3,
        title='제3회 바이오산업 포럼 참가 신청',
        content='미래 바이오산업의 전망을 주제로 제3회 바이오산업 포럼이 개최됩니다. 참가 신청은 8월 20일까지입니다.',
        author='산업통상자원부',
        created_at=datetime(2025, 7, 28, 9, 0, 0),
        files=[],
        related_links=[RelatedLink(title='포럼 신청 페이지', url='https://example.com/forum-signup')]
    ),
    Announcement(
        id=4,
        title='농생명 기술 사업화 지원 프로그램 안내',
        content='농생명 분야의 유망 기술을 보유한 기업을 대상으로 사업화 자금을 지원합니다. 많은 관심 부탁드립니다.',
        author='농림축산식품부',
        created_at=datetime(2025, 8, 15, 11, 0, 0),
        files=[],
        related_links=[]
    ),
    Announcement(
        id=5,
        title='스마트팜 기술 도입 컨설팅 지원',
        content='스마트팜 도입을 희망하는 농가를 대상으로 전문가 컨설팅을 제공합니다.',
        author='전북농업기술원',
        created_at=datetime(2025, 8, 14, 10, 0, 0),
        files=[],
        related_links=[]
    ),
    Announcement(
        id=6,
        title='바이오 인력양성사업 교육생 모집',
        content='차세대 바이오 산업을 이끌어갈 전문 인력 양성을 위한 교육 프로그램을 시작합니다.',
        author='전북대학교',
        created_at=datetime(2025, 8, 12, 13, 0, 0),
        files=[],
        related_links=[]
    ),
    Announcement(
        id=7,
        title='해외 바이오 박람회 참가 지원',
        content='해외 시장 진출을 희망하는 도내 바이오 기업의 박람회 참가를 지원합니다.',
        author='전라북도경제통상진흥원',
        created_at=datetime(2025, 8, 11, 9, 30, 0),
        files=[],
        related_links=[]
    ),
    Announcement(
        id=8,
        title='연구장비 공동활용 안내',
        content='대학 및 연구기관이 보유한 고가의 연구장비를 공동으로 활용할 수 있도록 지원합니다.',
        author='국가연구시설장비진흥센터',
        created_at=datetime(2025, 8, 9, 16, 0, 0),
        files=[],
        related_links=[]
    )
]

# SQL Schema for Companies/Institutions
"""
CREATE TABLE companies (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(50) NOT NULL, -- '기업' or '기관'
    description TEXT,
    address VARCHAR(255),
    contact_person VARCHAR(100),
    contact_email VARCHAR(100),
    contact_phone VARCHAR(50),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
"""

companies_db: list[Company] = [
    Company(
        id=1,
        name='(주)바이오노트',
        type='기업',
        description='동물용 진단제품 개발 및 제조를 선도하는 기업입니다.',
        address='전라북도 익산시 왕궁면 국가식품로 100',
        contact_person='김담당',
        contact_email='contact@bionote.co.kr',
        contact_phone='063-123-4567'
    ),
    Company(
        id=2,
        name='한국생명공학연구원 전북분원',
        type='기관',
        description='생명공학 분야의 국가 거점 연구기관입니다.',
        address='전라북도 정읍시 입암면 첨단과기로 241',
        contact_person='이연구원',
        contact_email='info@kribb.re.kr',
        contact_phone='063-570-5600'
    ),
    Company(
        id=3,
        name='전북대학교 병원',
        type='기관',
        description='지역 거점 국립대학교 병원. 임상 연구 및 시험 진행.',
        address='전라북도 전주시 덕진구 건지로 20',
        contact_person='최교수',
        contact_email='med@jbnu.ac.kr',
        contact_phone='063-250-1114'
    )
]

# SQL Schema for Infrastructure
"""
CREATE TABLE infrastructure (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(100),
    address VARCHAR(255),
    latitude DECIMAL(9, 6) NOT NULL,
    longitude DECIMAL(9, 6) NOT NULL,
    description TEXT
);
"""

infra_db: list[Infra] = [
    Infra(
        id=1,
        name='전북바이오융합산업진흥원',
        category='연구시설',
        address='전라북도 전주시 덕진구 월드컵로 305',
        latitude=35.8613,
        longitude=127.0648,
        description='바이오 산업의 핵심 연구 및 지원 기관.'
    ),
    Infra(
        id=2,
        name='한국생명공학연구원 전북분원',
        category='연구시설',
        address='전라북도 정읍시 입암면 첨단과기로 241',
        latitude=35.5931,
        longitude=126.8665,
        description='국가 생명공학 연구의 중심.'
    ),
    Infra(
        id=3,
        name='농축산용 미생물산업육성지원센터',
        category='지원시설',
        address='전라북도 정읍시 신정동 1558-2',
        latitude=35.5675,
        longitude=126.8820,
        description='농축산용 미생물 관련 기업 지원 및 육성.'
    )
]

# SQL Schema for Content
"""
CREATE TABLE news (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    category VARCHAR(50) DEFAULT 'news',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE techs (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    field VARCHAR(100),
    description TEXT,
    presenter VARCHAR(100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
"""

news_db: list[News] = [
    News(id=1, title='전북 바이오 특화단지 유치 성공', summary='정부가 전북을 바이오 특화단지로 최종 선정했습니다.', content='상세 내용...', category='news', created_at=datetime(2025, 8, 12, 11, 0, 0), sourceName='전북도청', thumbnailUrl='https://picsum.photos/seed/news1/400/225'),
    News(id=2, title='시스템 점검 안내 (09/01 02:00 ~ 04:00)', summary='더 나은 서비스 제공을 위해 시스템 정기 점검을 실시합니다.', content='상세 내용...', category='notice', created_at=datetime(2025, 8, 11, 17, 0, 0), sourceName='관리팀', thumbnailUrl='https://picsum.photos/seed/notice1/400/225'),
    News(id=3, title='익산 국가식품클러스터, K-푸드 전진기지로 발돋움', summary='익산 국가식품클러스터가 국내외 식품 시장에서 주목받고 있습니다.', content='상세 내용...', category='news', created_at=datetime(2025, 8, 15, 9, 0, 0), sourceName='농림축산식품부', thumbnailUrl='https://picsum.photos/seed/news2/400/225'),
    News(id=4, title='정읍 방사선융합기술원, 신약 개발 새 지평 열어', summary='방사선 기술을 이용한 혁신적인 신약 개발에 성공했습니다.', content='상세 내용...', category='news', created_at=datetime(2025, 8, 14, 14, 0, 0), sourceName='한국원자력연구원', thumbnailUrl='https://picsum.photos/seed/news3/400/225'),
    News(id=5, title='전주 농생명 혁신성장위원회 출범', summary='전주시가 농생명 산업의 혁신 성장을 이끌기 위한 민관 협력 위원회를 공식 출범시켰습니다.', content='상세 내용...', category='news', created_at=datetime(2025, 8, 13, 10, 0, 0), sourceName='전주시청', thumbnailUrl='https://picsum.photos/seed/news4/400/225'),
    News(id=6, title='플랫폼 이용약관 개정 안내', summary='2025년 9월 1일부터 새로운 이용약관이 적용됩니다.', content='상세 내용...', category='notice', created_at=datetime(2025, 8, 10, 0, 0, 0), sourceName='법무팀', thumbnailUrl='https://picsum.photos/seed/notice2/400/225'),
    News(id=7, title='김제 민간육종연구단지, 글로벌 종자 강국 도약의 발판', summary='국내 종자 산업의 경쟁력을 세계적인 수준으로 끌어올리고 있습니다.', content='상세 내용...', category='news', created_at=datetime(2025, 8, 9, 11, 20, 0), sourceName='민간육종연구단지', thumbnailUrl='https://picsum.photos/seed/news5/400/225'),
    News(id=8, title='개인정보처리방침 변경 고지', summary='개인정보보호법 개정에 따라 개인정보처리방침이 변경됩니다.', content='상세 내용...', category='notice', created_at=datetime(2025, 8, 8, 10, 0, 0), sourceName='정보보호팀', thumbnailUrl='https://picsum.photos/seed/notice3/400/225'),
]

events_db: list[Event] = [
    Event(id=1, title='제12회 국제 바이오산업 컨퍼런스', summary='글로벌 바이오 산업의 최신 동향과 미래 전망을 논의합니다.', thumbnailUrl='https://picsum.photos/seed/event1/400/225', eventStartAt=datetime(2025, 9, 5, 9, 0, 0), eventEndAt=datetime(2025, 9, 6, 18, 0, 0), locationType='offline', locationName='전주 컨벤션센터', host='전북바이오융합산업진흥원', registerDeadline=datetime(2025, 8, 31, 23, 59, 59), status='예정'),
    Event(id=2, title='AI 기반 신약 개발 온라인 세미나', summary='인공지능을 활용한 신약 개발의 최신 사례와 기술을 소개합니다.', thumbnailUrl='https://picsum.photos/seed/event2/400/225', eventStartAt=datetime(2025, 8, 25, 14, 0, 0), eventEndAt=datetime(2025, 8, 25, 16, 0, 0), locationType='online', host='한국생명공학연구원', registerDeadline=datetime(2025, 8, 24, 18, 0, 0), status='진행중'),
    Event(id=3, title='농생명 기술 투자유치 설명회(IR)', summary='유망 농생명 기술을 보유한 스타트업 및 중소기업을 위한 투자유치 설명회입니다.', thumbnailUrl='https://picsum.photos/seed/event3/400/225', eventStartAt=datetime(2025, 8, 1, 10, 0, 0), eventEndAt=datetime(2025, 8, 1, 17, 0, 0), locationType='hybrid', locationName='전북창조경제혁신센터', host='농업기술실용화재단', registerDeadline=datetime(2025, 7, 25, 18, 0, 0), status='마감'),
    Event(id=4, title='제약바이오 채용박람회 2024', summary='국내 최대 규모의 제약바이오 분야 채용 박람회.', thumbnailUrl='https://picsum.photos/seed/event4/400/225', eventStartAt=datetime(2025, 9, 20, 10, 0, 0), eventEndAt=datetime(2025, 9, 21, 17, 0, 0), locationType='offline', locationName='코엑스, 서울', host='한국제약바이오협회', registerDeadline=datetime(2025, 9, 15, 18, 0, 0), status='예정'),
    Event(id=5, title='스마트팜 기술 워크숍', summary='최신 스마트팜 기술 동향 및 적용 사례 공유.', thumbnailUrl='https://picsum.photos/seed/event5/400/225', eventStartAt=datetime(2025, 10, 5, 13, 0, 0), eventEndAt=datetime(2025, 10, 5, 18, 0, 0), locationType='offline', locationName='전북농업기술원', host='전북농업기술원', registerDeadline=datetime(2025, 10, 1, 18, 0, 0), status='예정'),
]

techs_db: list[Tech] = [
    Tech(
        id=1,
        title='유전자 가위 기술을 이용한 신품종 개발',
        field='농생명',
        description='CRISPR-Cas9 기술을 활용하여 특정 유전자를 편집, 병충해에 강한 신품종 쌀을 개발하는 데 성공했습니다.',
        presenter='한국농업기술원',
        created_at=datetime(2025, 8, 1, 15, 0, 0)
    ),
    Tech(
        id=2,
        title='미생물 기반 암 치료제 개발 성과',
        field='의료',
        description='장내 미생물을 활용한 면역 항암 치료제의 초기 임상 시험에서 긍정적인 결과를 얻었습니다.',
        presenter='(주)마이크로바이옴',
        created_at=datetime(2025, 7, 20, 10, 30, 0)
    )
]

# SQL Schema for Consultations
"""
CREATE TABLE consultations (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(50),
    organization VARCHAR(100),
    subject VARCHAR(255) NOT NULL,
    body TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'submitted',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
"""

consultations_db: list[Consultation] = []

# SQL Schema for Users
"""
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    full_name VARCHAR(100),
    role VARCHAR(50) DEFAULT 'user',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
"""

users_db: list[UserInDB] = [
    UserInDB(
        id=1,
        username='testuser',
        password='password123',
        email='testuser@example.com',
        full_name='테스트 사용자',
        role='user',
        interests=['바이오', '의료']
    ),
    UserInDB(
        id=2,
        username='admin',
        password='adminpassword',
        email='admin@example.com',
        full_name='관리자',
        role='admin',
        interests=[]
    )
]

services_db: list[Service] = [
    Service(
        title='R&D 지원사업',
        description='연구개발 지원사업 신청 및 관리',
        icon='flask',
        gradient='linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    ),
    Service(
        title='창업보육센터',
        description='바이오 창업 지원 프로그램',
        icon='target',
        gradient='linear-gradient(135deg, #f6d365 0%, #fda085 100%)'
    ),
    Service(
        title='기업 정보',
        description='전북 바이오 기업 현황',
        icon='building',
        gradient='linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)'
    ),
    Service(
        title='기술 정보',
        description='최신 바이오 기술 동향',
        icon='trendingUp',
        gradient='linear-gradient(135deg, #059669 0%, #0891b2 100%)'
    )
]

stats_db: list[Stat] = [
    Stat(
        label='등록 기업수',
        value='1,247',
        change='+5.2%',
        icon='building',
        color='#4f46e5'
    ),
    Stat(
        label='진행중 공고',
        value='89',
        change='+12',
        icon='target',
        color='#10b981'
    ),
    Stat(
        label='기술 보유수',
        value='3,456',
        change='+8.1%',
        icon='flask',
        color='#8b5cf6'
    ),
    Stat(
        label='이달 뉴스',
        value='145',
        change='+23',
        icon='trendingUp',
        color='#f97316'
    )
]

# SQL Schema for Support Programs
"""
CREATE TABLE support_programs (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    organization VARCHAR(255),
    description TEXT,
    start_date DATE,
    end_date DATE,
    status VARCHAR(50),
    category VARCHAR(100),
    support_type TEXT[],
    target_company TEXT,
    external_url VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
"""

support_programs_db: list[SupportProgram] = [
    SupportProgram(
        id="sp_001",
        title="2025년 중소기업 기술혁신 개발사업",
        organization="중소벤처기업부",
        description="중소기업의 기술 경쟁력 강화를 위한 R&D 자금 지원.",
        startDate=date(2025, 3, 1),
        endDate=date(2025, 9, 30),
        status=SupportProgramStatus.ONGOING,
        category="R&D",
        supportType=["자금지원", "기술개발"],
        targetCompany="창업 7년 이하, 매출 20억 미만 중소기업",
        externalUrl="https://example.com/support/program1",
        createdAt=datetime(2025, 2, 1, 9, 0, 0)
    ),
    SupportProgram(
        id="sp_002",
        title="바이오 분야 창업기업 육성 프로그램",
        organization="한국생명공학연구원",
        description="예비 창업자 및 초기 창업기업 대상 맞춤형 보육 및 멘토링 제공.",
        startDate=date(2025, 4, 15),
        endDate=date(2025, 10, 15),
        status=SupportProgramStatus.ONGOING,
        category="창업지원",
        supportType=["멘토링", "공간지원", "네트워킹"],
        targetCompany="예비 창업자 또는 3년 미만 창업기업",
        externalUrl="https://example.com/support/program2",
        createdAt=datetime(2025, 3, 10, 10, 0, 0)
    ),
    SupportProgram(
        id="sp_003",
        title="해외시장 진출 지원사업",
        organization="KOTRA",
        description="해외 바이어 매칭, 수출 상담회, 해외 전시회 참가 지원.",
        startDate=date(2025, 1, 1),
        endDate=date(2025, 12, 31),
        status=SupportProgramStatus.UPCOMING,
        category="수출지원",
        supportType=["마케팅", "수출상담"],
        targetCompany="수출 실적 500만불 미만 중소/중견기업",
        externalUrl="https://example.com/support/program3",
        createdAt=datetime(2024, 12, 15, 14, 0, 0)
    ),
    SupportProgram(
        id="sp_004",
        title="2024년 스마트공장 보급확산사업",
        organization="스마트제조혁신추진단",
        description="스마트공장 구축 및 고도화를 위한 비용 지원.",
        startDate=date(2024, 5, 1),
        endDate=date(2024, 11, 30),
        status=SupportProgramStatus.CLOSED,
        category="제조혁신",
        supportType=["자금지원", "컨설팅"],
        targetCompany="국내 중소/중견 제조기업",
        externalUrl="https://example.com/support/program4",
        createdAt=datetime(2024, 4, 5, 9, 0, 0)
    ),
]

# SQL Schema for Incubation Centers
"""
CREATE TABLE incubation_centers (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    total_rooms INT,
    vacant_rooms INT,
    occupancy_rate FLOAT,
    address VARCHAR(255),
    contact VARCHAR(255),
    manager VARCHAR(255),
    latitude DECIMAL(9, 6),
    longitude DECIMAL(9, 6)
);
"""

incubation_centers_db: list[IncubationCenter] = [
    IncubationCenter(
        id="ic_001",
        name="전북대학교 창업보육센터",
        totalRooms=50,
        vacantRooms=5,
        occupancyRate=0.90,
        address="전라북도 전주시 덕진구 백제대로 567",
        contact="063-270-1234",
        manager="김철수 센터장",
        location=Location(latitude=35.8464, longitude=127.1293)
    ),
    IncubationCenter(
        id="ic_002",
        name="원광대학교 창업보육센터",
        totalRooms=40,
        vacantRooms=0,
        occupancyRate=1.0,
        address="전라북도 익산시 익산대로 460",
        contact="063-850-5678",
        manager="박영희 매니저",
        location=Location(latitude=35.9687, longitude=126.9575)
    ),
    IncubationCenter(
        id="ic_003",
        name="전주정보문화산업진흥원 (JICA)",
        totalRooms=30,
        vacantRooms=8,
        occupancyRate=0.73,
        address="전라북도 전주시 완산구 아중로 225",
        contact="063-281-4114",
        manager="이진아 팀장",
        location=Location(latitude=35.8227, longitude=127.1643)
    ),
]

# SQL Schema for Technologies
"""
CREATE TABLE technologies (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    summary TEXT,
    organization VARCHAR(255),
    patent_number VARCHAR(100),
    application_date DATE,
    category VARCHAR(100),
    transferable BOOLEAN,
    thumbnail_url VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
"""

technologies_db: list[Technology] = [
    Technology(
        id="tech_001",
        title="고효율 미생물 연료전지 개발",
        summary="폐수를 활용하여 전기를 생산하는 친환경 고효율 미생물 연료전지 기술. 기존 기술 대비 전력 생산 효율 30% 향상.",
        organization="전북대학교 신재생에너지연구소",
        patentNumber="10-2024-0123456",
        applicationDate=date(2024, 8, 1),
        category="환경/에너지",
        transferable=True,
        thumbnail="https://picsum.photos/seed/tech1/400/300",
        createdAt=datetime(2024, 9, 15, 10, 0, 0)
    ),
    Technology(
        id="tech_002",
        title="AI 기반 암 진단 보조 소프트웨어",
        summary="의료 영상을 AI로 분석하여 초기 단계의 암을 95% 정확도로 판별하는 진단 보조 소프트웨어.",
        organization="(주)메디컬AI",
        patentNumber="10-2025-0011223",
        applicationDate=date(2025, 1, 20),
        category="의료/헬스케어",
        transferable=True,
        thumbnail="https://picsum.photos/seed/tech2/400/300",
        createdAt=datetime(2025, 2, 28, 14, 30, 0)
    ),
    Technology(
        id="tech_003",
        title="스마트팜용 복합 환경제어 시스템",
        summary="온도, 습도, CO2 농도, 광량 등을 통합 제어하여 작물 생산성을 극대화하는 IoT 기반 스마트팜 솔루션.",
        organization="농업기술실용화재단",
        patentNumber=None,
        applicationDate=None,
        category="농생명",
        transferable=False,
        thumbnail="https://picsum.photos/seed/tech3/400/300",
        createdAt=datetime(2025, 5, 10, 11, 0, 0)
    ),
    Technology(
        id="tech_004",
        title="식물성 대체육 제조 기술",
        summary="콩 단백질을 이용하여 실제 고기의 식감과 풍미를 재현한 식물성 대체육 제조 기술.",
        organization="익산 국가식품클러스터",
        patentNumber="10-2023-0987654",
        applicationDate=date(2023, 11, 5),
        category="식품/바이오",
        transferable=True,
        thumbnail="https://picsum.photos/seed/tech4/400/300",
        createdAt=datetime(2024, 1, 15, 9, 0, 0)
    ),
]

# SQL Schema for Education Programs
"""
CREATE TABLE education_programs (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    organization VARCHAR(255),
    category VARCHAR(100),
    start_date DATE,
    end_date DATE,
    location VARCHAR(255),
    cost FLOAT,
    status VARCHAR(50),
    target_audience VARCHAR(255),
    application_url VARCHAR(255)
);

CREATE TABLE education_contents (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    category VARCHAR(100),
    type VARCHAR(50),
    url VARCHAR(255),
    thumbnail_url VARCHAR(255),
    view_count INT DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
"""

education_programs_db: list[EducationProgram] = [
    EducationProgram(
        id="edu_p_001",
        title="바이오 전문인력 양성과정",
        organization="전북바이오융합산업진흥원",
        category="전문인력양성",
        startDate=date(2025, 9, 1),
        endDate=date(2025, 11, 30),
        location="전북바이오융합산업진흥원 교육장",
        cost=0.0,
        status=EducationProgramStatus.UPCOMING,
        targetAudience="바이오 분야 취업 희망자 및 재직자",
        applicationUrl="https://example.com/edu/program1"
    ),
    EducationProgram(
        id="edu_p_002",
        title="GMP(우수 의약품 제조 및 품질관리 기준) 실무 과정",
        organization="한국제약바이오협회",
        category="품질관리",
        startDate=date(2025, 7, 15),
        endDate=date(2025, 7, 17),
        location="온라인 (Zoom)",
        cost=300000.0,
        status=EducationProgramStatus.ONGOING,
        targetAudience="제약/바이오 기업 품질관리/보증 담당자",
        applicationUrl="https://example.com/edu/program2"
    ),
]

education_contents_db: list[EducationContent] = [
    EducationContent(
        id="edu_c_001",
        title="[영상] CRISPR-Cas9 유전자 가위 기술의 원리",
        description="노벨상을 수상한 3세대 유전자 가위 기술, CRISPR-Cas9의 작동 원리를 쉽게 설명합니다.",
        category="유전공학",
        type=EducationContentType.VIDEO,
        url="https://youtube.com/watch?v=example1",
        thumbnail="https://picsum.photos/seed/content1/400/225",
        viewCount=12048,
        createdAt=datetime(2024, 10, 5, 10, 0, 0)
    ),
    EducationContent(
        id="edu_c_002",
        title="[PDF] 국내 바이오산업 특허 출원 동향 보고서",
        description="2024년 상반기 국내 바이오산업의 특허 출원 동향 및 기술 트렌드 분석 자료입니다.",
        category="기술동향",
        type=EducationContentType.PDF,
        url="https://example.com/report.pdf",
        thumbnail="https://picsum.photos/seed/content2/400/225",
        viewCount=5890,
        createdAt=datetime(2024, 7, 28, 15, 30, 0)
    ),
]

# SQL Schema for Mentors
"""
CREATE TABLE mentors (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    organization VARCHAR(255),
    field TEXT[],
    expertise TEXT,
    experience TEXT,
    available BOOLEAN,
    contact_email VARCHAR(255),
    external_url VARCHAR(255)
);
"""

mentors_db: list[Mentor] = [
    Mentor(
        id="mentor_001",
        name="김민준",
        organization="전북창조경제혁신센터",
        field=["사업화", "투자유치"],
        expertise="초기 스타트업 비즈니스 모델 수립 및 IR 피칭 전문가. 다수의 스타트업을 성공적으로 엑셀러레이팅한 경험 보유.",
        experience="창업기획자(액셀러레이터) 경력 10년, 50개 이상 기업 멘토링",
        available=True,
        contactEmail="minjun.kim@ccei.or.kr",
        externalUrl="https://ccei.creativekorea.or.kr/jeonbuk/"
    ),
    Mentor(
        id="mentor_002",
        name="이서연",
        organization="특허법인 A&P",
        field=["특허", "법률"],
        expertise="바이오 분야 기술 특허 출원 및 분쟁 해결 전문 변리사. 국내외 특허 전략 수립 컨설팅 제공.",
        experience="변리사 경력 8년, 바이오 분야 특허 200건 이상 출원",
        available=True,
        contactEmail="seoyeon.lee@ap-patent.com",
        externalUrl=None
    ),
    Mentor(
        id="mentor_003",
        name="박지훈",
        organization="한국생명공학연구원",
        field=["기술개발", "R&D"],
        expertise="유전자 편집 기술 및 세포 치료제 연구 개발 전문가. 국가 R&D 과제 다수 수행.",
        experience="선임연구원 경력 15년, SCI급 논문 30편 이상",
        available=False,
        contactEmail="jihun.park@kribb.re.kr",
        externalUrl=None
    ),
]

# SQL Schema for Sitemap (usually generated dynamically, but here for structure)
"""
CREATE TABLE sitemap_nodes (
    id SERIAL PRIMARY KEY,
    parent_id INTEGER REFERENCES sitemap_nodes(id),
    title VARCHAR(255) NOT NULL,
    url VARCHAR(255) NOT NULL,
    "order" INT
);
"""

sitemap_db: list[SitemapNode] = [
    SitemapNode(title="홈", url="/", children=[]),
    SitemapNode(
        title="기업지원",
        url="/support",
        children=[
            SitemapNode(title="지원사업", url="/support-programs", children=[]),
            SitemapNode(title="창업보육센터", url="/incubation-centers", children=[]),
        ]
    ),
    SitemapNode(
        title="기술정보",
        url="/tech",
        children=[
            SitemapNode(title="기술 및 특허", url="/tech-summary/list", children=[]),
        ]
    ),
    SitemapNode(
        title="교육 및 인력",
        url="/education",
        children=[
            SitemapNode(title="교육 프로그램", url="/programs", children=[]),
            SitemapNode(title="교육 콘텐츠", url="/education/contents", children=[]),
            SitemapNode(title="전문가 멘토링", url="/mentors", children=[]),
        ]
    ),
    SitemapNode(title="기업DB", url="/companies", children=[]),
    SitemapNode(title="알림마당", url="/notices", children=[]),
]

# SQL Schema for Applications
"""
CREATE TABLE applications (
    id VARCHAR(255) PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    program_id VARCHAR(255) REFERENCES support_programs(id),
    program_title VARCHAR(255),
    status VARCHAR(50),
    applied_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    reviewed_at TIMESTAMP WITH TIME ZONE,
    review_comment TEXT
);
"""

applications_db: list[Application] = [
    Application(
        id="app_001",
        programId="sp_001",
        programTitle="2025년 중소기업 기술혁신 개발사업",
        status=ApplicationStatus.PENDING,
        appliedAt=datetime(2025, 3, 5, 10, 30, 0),
    ),
    Application(
        id="app_002",
        programId="sp_002",
        programTitle="바이오 분야 창업기업 육성 프로그램",
        status=ApplicationStatus.APPROVED,
        appliedAt=datetime(2025, 4, 20, 15, 0, 0),
        reviewedAt=datetime(2025, 4, 22, 11, 0, 0),
        reviewComment="서류 심사 통과. 대면 심사 예정."
    ),
]

# SQL Schema for Registration Requests
"""
CREATE TABLE registration_requests (
    id SERIAL PRIMARY KEY,
    user_id VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    organization VARCHAR(255),
    requested_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50) DEFAULT 'pending'
);
"""

registration_requests_db: list[RegistrationRequest] = [
    RegistrationRequest(
        userId="user_req_1",
        name="김신청",
        email="newuser1@example.com",
        organization="미래 바이오",
        requestedAt=datetime(2025, 8, 17, 11, 0, 0),
        status="pending"
    ),
    RegistrationRequest(
        userId="user_req_2",
        name="박대기",
        email="newuser2@example.com",
        organization="헬스케어 스타트업",
        requestedAt=datetime(2025, 8, 16, 18, 30, 0),
        status="pending"
    )
]
