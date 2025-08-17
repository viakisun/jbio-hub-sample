from datetime import datetime
from ..models.announcement import Announcement, FileLink, RelatedLink
from ..models.company import Company
from ..models.infra import Infra
from ..models.content import News, Event, Tech
from ..models.consultation import Consultation
from ..models.user import UserInDB
from ..models.service import Service
from ..models.stat import Stat

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
