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
        id="sp_001",
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
        id="sp_002",
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
    Technology(id='tech_001', title='차세대 CAR-T 세포 치료제 기술', summary='개선된 안전성과 효능을 갖춘 동종유래 CAR-T 세포 치료제 플랫폼', organization='(주)이뮨셀바이오', patentNumber='KR-10-2023-0011223', applicationDate=date(2023, 1, 25), category='레드바이오', subCategory='의약품', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech1/300/200', createdAt=datetime(2023, 3, 1, 10, 0, 0)),
    Technology(id='tech_002', title='AI 기반 폐암 조기 진단 솔루션', summary='CT 영상 분석을 통해 폐암을 95% 정확도로 조기 진단하는 인공지능 소프트웨어', organization='메디컬AI', patentNumber='KR-10-2022-0098765', applicationDate=date(2022, 8, 10), category='그린바이오', subCategory='미생물비료', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech2/300/200', createdAt=datetime(2022, 11, 5, 10, 0, 0)),
    Technology(id='tech_003', title='고수확 가뭄 저항성 옥수수 품종', summary='유전자 편집 기술을 이용하여 개발된 가뭄 환경에서도 높은 수확량을 보장하는 옥수수', organization='그린시드', patentNumber='KR-10-2023-0045678', applicationDate=date(2023, 4, 2), category='화이트바이오', subCategory='바이오연료', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech3/300/200', createdAt=datetime(2023, 6, 15, 10, 0, 0)),
    Technology(id='tech_004', title='생분해성 바이오플라스틱 PLA 제조 기술', summary='옥수수 전분을 원료로 하여 높은 투명도와 강도를 가지는 PLA 제조 공법', organization='(주)네이처플라스틱', patentNumber='KR-10-2021-0033445', applicationDate=date(2021, 3, 12), category='레드바이오', subCategory='백신', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech4/300/200', createdAt=datetime(2021, 7, 20, 10, 0, 0)),
    Technology(id='tech_005', title='알츠하이머 치료용 펩타이드 신약 후보물질', summary='아밀로이드 베타 플라크 형성을 억제하는 신규 펩타이드', organization='뉴로펩', patentNumber=None, applicationDate=None, category='그린바이오', subCategory='종자/육종', transferable=False, thumbnailUrl='https://picsum.photos/seed/tech5/300/200', createdAt=datetime(2024, 1, 10, 10, 0, 0)),
    Technology(id='tech_006', title='토양개선용 미생물 복합 비료', summary='질소 고정 및 인산 가용화 능력이 뛰어난 미생물 컨소시엄 기반 비료', organization='농업기술실용화재단', patentNumber='KR-10-2022-0077889', applicationDate=date(2022, 6, 20), category='화이트바이오', subCategory='산업용효소', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech6/300/200', createdAt=datetime(2022, 9, 1, 10, 0, 0)),
    Technology(id='tech_007', title='고효율 산업용 셀룰레이스 효소', summary='목질계 바이오매스를 효과적으로 분해하는 내열성, 내산성 셀룰레이스', organization='(주)엔자임텍', patentNumber='KR-10-2023-0055667', applicationDate=date(2023, 5, 2), category='레드바이오', subCategory='진단기기', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech7/300/200', createdAt=datetime(2023, 8, 1, 10, 0, 0)),
    Technology(id='tech_008', title='Title for tech_008', summary='Summary for tech_008', organization='Org8', patentNumber='PN008', applicationDate=date(2023, 1, 1), category='그린바이오', subCategory='기능성식품', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech8/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_009', title='Title for tech_009', summary='Summary for tech_009', organization='Org9', patentNumber='PN009', applicationDate=date(2023, 1, 1), category='화이트바이오', subCategory='환경정화', transferable=False, thumbnailUrl='https://picsum.photos/seed/tech9/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_010', title='Title for tech_010', summary='Summary for tech_010', organization='Org10', patentNumber='PN010', applicationDate=date(2023, 1, 1), category='레드바이오', subCategory='세포치료', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech10/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_011', title='Title for tech_011', summary='Summary for tech_011', organization='Org11', patentNumber='PN011', applicationDate=date(2023, 1, 1), category='그린바이오', subCategory='스마트팜', transferable=False, thumbnailUrl='https://picsum.photos/seed/tech11/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_012', title='Title for tech_012', summary='Summary for tech_012', organization='Org12', patentNumber='PN012', applicationDate=date(2023, 1, 1), category='화이트바이오', subCategory='바이오플라스틱', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech12/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_013', title='Title for tech_013', summary='Summary for tech_013', organization='Org13', patentNumber='PN013', applicationDate=date(2023, 1, 1), category='레드바이오', subCategory='의약품', transferable=False, thumbnailUrl='https://picsum.photos/seed/tech13/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_014', title='Title for tech_014', summary='Summary for tech_014', organization='Org14', patentNumber='PN014', applicationDate=date(2023, 1, 1), category='그린바이오', subCategory='미생물비료', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech14/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_015', title='Title for tech_015', summary='Summary for tech_015', organization='Org15', patentNumber='PN015', applicationDate=date(2023, 1, 1), category='화이트바이오', subCategory='바이오연료', transferable=False, thumbnailUrl='https://picsum.photos/seed/tech15/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_016', title='Title for tech_016', summary='Summary for tech_016', organization='Org16', patentNumber='PN016', applicationDate=date(2023, 1, 1), category='레드바이오', subCategory='백신', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech16/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_017', title='Title for tech_017', summary='Summary for tech_017', organization='Org17', patentNumber='PN017', applicationDate=date(2023, 1, 1), category='그린바이오', subCategory='종자/육종', transferable=False, thumbnailUrl='https://picsum.photos/seed/tech17/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_018', title='Title for tech_018', summary='Summary for tech_018', organization='Org18', patentNumber='PN018', applicationDate=date(2023, 1, 1), category='화이트바이오', subCategory='산업용효소', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech18/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_019', title='Title for tech_019', summary='Summary for tech_019', organization='Org19', patentNumber='PN019', applicationDate=date(2023, 1, 1), category='레드바이오', subCategory='진단기기', transferable=False, thumbnailUrl='https://picsum.photos/seed/tech19/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_020', title='Title for tech_020', summary='Summary for tech_020', organization='Org20', patentNumber='PN020', applicationDate=date(2023, 1, 1), category='그린바이오', subCategory='기능성식품', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech20/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_021', title='Title for tech_021', summary='Summary for tech_021', organization='Org21', patentNumber='PN021', applicationDate=date(2023, 1, 1), category='화이트바이오', subCategory='환경정화', transferable=False, thumbnailUrl='https://picsum.photos/seed/tech21/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_022', title='Title for tech_022', summary='Summary for tech_022', organization='Org22', patentNumber='PN022', applicationDate=date(2023, 1, 1), category='레드바이오', subCategory='세포치료', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech22/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_023', title='Title for tech_023', summary='Summary for tech_023', organization='Org23', patentNumber='PN023', applicationDate=date(2023, 1, 1), category='그린바이오', subCategory='스마트팜', transferable=False, thumbnailUrl='https://picsum.photos/seed/tech23/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_024', title='Title for tech_024', summary='Summary for tech_024', organization='Org24', patentNumber='PN024', applicationDate=date(2023, 1, 1), category='화이트바이오', subCategory='바이오플라스틱', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech24/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_025', title='Title for tech_025', summary='Summary for tech_025', organization='Org25', patentNumber='PN025', applicationDate=date(2023, 1, 1), category='레드바이오', subCategory='의약품', transferable=False, thumbnailUrl='https://picsum.photos/seed/tech25/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_026', title='Title for tech_026', summary='Summary for tech_026', organization='Org26', patentNumber='PN026', applicationDate=date(2023, 1, 1), category='그린바이오', subCategory='미생물비료', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech26/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_027', title='Title for tech_027', summary='Summary for tech_027', organization='Org27', patentNumber='PN027', applicationDate=date(2023, 1, 1), category='화이트바이오', subCategory='바이오연료', transferable=False, thumbnailUrl='https://picsum.photos/seed/tech27/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_028', title='Title for tech_028', summary='Summary for tech_028', organization='Org28', patentNumber='PN028', applicationDate=date(2023, 1, 1), category='레드바이오', subCategory='백신', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech28/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_029', title='Title for tech_029', summary='Summary for tech_029', organization='Org29', patentNumber='PN029', applicationDate=date(2023, 1, 1), category='그린바이오', subCategory='종자/육종', transferable=False, thumbnailUrl='https://picsum.photos/seed/tech29/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_030', title='Title for tech_030', summary='Summary for tech_030', organization='Org30', patentNumber='PN030', applicationDate=date(2023, 1, 1), category='화이트바이오', subCategory='산업용효소', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech30/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_031', title='Title for tech_031', summary='Summary for tech_031', organization='Org31', patentNumber='PN031', applicationDate=date(2023, 1, 1), category='레드바이오', subCategory='진단기기', transferable=False, thumbnailUrl='https://picsum.photos/seed/tech31/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_032', title='Title for tech_032', summary='Summary for tech_032', organization='Org32', patentNumber='PN032', applicationDate=date(2023, 1, 1), category='그린바이오', subCategory='기능성식품', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech32/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_033', title='Title for tech_033', summary='Summary for tech_033', organization='Org33', patentNumber='PN033', applicationDate=date(2023, 1, 1), category='화이트바이오', subCategory='환경정화', transferable=False, thumbnailUrl='https://picsum.photos/seed/tech33/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_034', title='Title for tech_034', summary='Summary for tech_034', organization='Org34', patentNumber='PN034', applicationDate=date(2023, 1, 1), category='레드바이오', subCategory='세포치료', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech34/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_035', title='Title for tech_035', summary='Summary for tech_035', organization='Org35', patentNumber='PN035', applicationDate=date(2023, 1, 1), category='그린바이오', subCategory='스마트팜', transferable=False, thumbnailUrl='https://picsum.photos/seed/tech35/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_036', title='Title for tech_036', summary='Summary for tech_036', organization='Org36', patentNumber='PN036', applicationDate=date(2023, 1, 1), category='화이트바이오', subCategory='바이오플라스틱', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech36/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_037', title='Title for tech_037', summary='Summary for tech_037', organization='Org37', patentNumber='PN037', applicationDate=date(2023, 1, 1), category='레드바이오', subCategory='의약품', transferable=False, thumbnailUrl='https://picsum.photos/seed/tech37/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_038', title='Title for tech_038', summary='Summary for tech_038', organization='Org38', patentNumber='PN038', applicationDate=date(2023, 1, 1), category='그린바이오', subCategory='미생물비료', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech38/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_039', title='Title for tech_039', summary='Summary for tech_039', organization='Org39', patentNumber='PN039', applicationDate=date(2023, 1, 1), category='화이트바이오', subCategory='바이오연료', transferable=False, thumbnailUrl='https://picsum.photos/seed/tech39/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_040', title='Title for tech_040', summary='Summary for tech_040', organization='Org40', patentNumber='PN040', applicationDate=date(2023, 1, 1), category='레드바이오', subCategory='백신', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech40/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_041', title='Title for tech_041', summary='Summary for tech_041', organization='Org41', patentNumber='PN041', applicationDate=date(2023, 1, 1), category='그린바이오', subCategory='종자/육종', transferable=False, thumbnailUrl='https://picsum.photos/seed/tech41/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_042', title='Title for tech_042', summary='Summary for tech_042', organization='Org42', patentNumber='PN042', applicationDate=date(2023, 1, 1), category='화이트바이오', subCategory='산업용효소', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech42/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_043', title='Title for tech_043', summary='Summary for tech_043', organization='Org43', patentNumber='PN043', applicationDate=date(2023, 1, 1), category='레드바이오', subCategory='진단기기', transferable=False, thumbnailUrl='https://picsum.photos/seed/tech43/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_044', title='Title for tech_044', summary='Summary for tech_044', organization='Org44', patentNumber='PN044', applicationDate=date(2023, 1, 1), category='그린바이오', subCategory='기능성식품', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech44/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_045', title='Title for tech_045', summary='Summary for tech_045', organization='Org45', patentNumber='PN045', applicationDate=date(2023, 1, 1), category='화이트바이오', subCategory='환경정화', transferable=False, thumbnailUrl='https://picsum.photos/seed/tech45/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_046', title='Title for tech_046', summary='Summary for tech_046', organization='Org46', patentNumber='PN046', applicationDate=date(2023, 1, 1), category='레드바이오', subCategory='세포치료', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech46/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_047', title='Title for tech_047', summary='Summary for tech_047', organization='Org47', patentNumber='PN047', applicationDate=date(2023, 1, 1), category='그린바이오', subCategory='스마트팜', transferable=False, thumbnailUrl='https://picsum.photos/seed/tech47/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_048', title='Title for tech_048', summary='Summary for tech_048', organization='Org48', patentNumber='PN048', applicationDate=date(2023, 1, 1), category='화이트바이오', subCategory='바이오플라스틱', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech48/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_049', title='Title for tech_049', summary='Summary for tech_049', organization='Org49', patentNumber='PN049', applicationDate=date(2023, 1, 1), category='레드바이오', subCategory='의약품', transferable=False, thumbnailUrl='https://picsum.photos/seed/tech49/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_050', title='Title for tech_050', summary='Summary for tech_050', organization='Org50', patentNumber='PN050', applicationDate=date(2023, 1, 1), category='그린바이오', subCategory='미생물비료', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech50/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_051', title='Title for tech_051', summary='Summary for tech_051', organization='Org51', patentNumber='PN051', applicationDate=date(2023, 1, 1), category='화이트바이오', subCategory='바이오연료', transferable=False, thumbnailUrl='https://picsum.photos/seed/tech51/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_052', title='Title for tech_052', summary='Summary for tech_052', organization='Org52', patentNumber='PN052', applicationDate=date(2023, 1, 1), category='레드바이오', subCategory='백신', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech52/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_053', title='Title for tech_053', summary='Summary for tech_053', organization='Org53', patentNumber='PN053', applicationDate=date(2023, 1, 1), category='그린바이오', subCategory='종자/육종', transferable=False, thumbnailUrl='https://picsum.photos/seed/tech53/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_054', title='Title for tech_054', summary='Summary for tech_054', organization='Org54', patentNumber='PN054', applicationDate=date(2023, 1, 1), category='화이트바이오', subCategory='산업용효소', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech54/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_055', title='Title for tech_055', summary='Summary for tech_055', organization='Org55', patentNumber='PN055', applicationDate=date(2023, 1, 1), category='레드바이오', subCategory='진단기기', transferable=False, thumbnailUrl='https://picsum.photos/seed/tech55/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_056', title='Title for tech_056', summary='Summary for tech_056', organization='Org56', patentNumber='PN056', applicationDate=date(2023, 1, 1), category='그린바이오', subCategory='기능성식품', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech56/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_057', title='Title for tech_057', summary='Summary for tech_057', organization='Org57', patentNumber='PN057', applicationDate=date(2023, 1, 1), category='화이트바이오', subCategory='환경정화', transferable=False, thumbnailUrl='https://picsum.photos/seed/tech57/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_058', title='Title for tech_058', summary='Summary for tech_058', organization='Org58', patentNumber='PN058', applicationDate=date(2023, 1, 1), category='레드바이오', subCategory='세포치료', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech58/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_059', title='Title for tech_059', summary='Summary for tech_059', organization='Org59', patentNumber='PN059', applicationDate=date(2023, 1, 1), category='그린바이오', subCategory='스마트팜', transferable=False, thumbnailUrl='https://picsum.photos/seed/tech59/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_060', title='Title for tech_060', summary='Summary for tech_060', organization='Org60', patentNumber='PN060', applicationDate=date(2023, 1, 1), category='화이트바이오', subCategory='바이오플라스틱', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech60/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_061', title='Title for tech_061', summary='Summary for tech_061', organization='Org61', patentNumber='PN061', applicationDate=date(2023, 1, 1), category='레드바이오', subCategory='의약품', transferable=False, thumbnailUrl='https://picsum.photos/seed/tech61/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_062', title='Title for tech_062', summary='Summary for tech_062', organization='Org62', patentNumber='PN062', applicationDate=date(2023, 1, 1), category='그린바이오', subCategory='미생물비료', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech62/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_063', title='Title for tech_063', summary='Summary for tech_063', organization='Org63', patentNumber='PN063', applicationDate=date(2023, 1, 1), category='화이트바이오', subCategory='바이오연료', transferable=False, thumbnailUrl='https://picsum.photos/seed/tech63/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_064', title='Title for tech_064', summary='Summary for tech_064', organization='Org64', patentNumber='PN064', applicationDate=date(2023, 1, 1), category='레드바이오', subCategory='백신', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech64/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_065', title='Title for tech_065', summary='Summary for tech_065', organization='Org65', patentNumber='PN065', applicationDate=date(2023, 1, 1), category='그린바이오', subCategory='종자/육종', transferable=False, thumbnailUrl='https://picsum.photos/seed/tech65/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_066', title='Title for tech_066', summary='Summary for tech_066', organization='Org66', patentNumber='PN066', applicationDate=date(2023, 1, 1), category='화이트바이오', subCategory='산업용효소', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech66/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_067', title='Title for tech_067', summary='Summary for tech_067', organization='Org67', patentNumber='PN067', applicationDate=date(2023, 1, 1), category='레드바이오', subCategory='진단기기', transferable=False, thumbnailUrl='https://picsum.photos/seed/tech67/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_068', title='Title for tech_068', summary='Summary for tech_068', organization='Org68', patentNumber='PN068', applicationDate=date(2023, 1, 1), category='그린바이오', subCategory='기능성식품', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech68/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_069', title='Title for tech_069', summary='Summary for tech_069', organization='Org69', patentNumber='PN069', applicationDate=date(2023, 1, 1), category='화이트바이오', subCategory='환경정화', transferable=False, thumbnailUrl='https://picsum.photos/seed/tech69/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_070', title='Title for tech_070', summary='Summary for tech_070', organization='Org70', patentNumber='PN070', applicationDate=date(2023, 1, 1), category='레드바이오', subCategory='세포치료', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech70/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_071', title='Title for tech_071', summary='Summary for tech_071', organization='Org71', patentNumber='PN071', applicationDate=date(2023, 1, 1), category='그린바이오', subCategory='스마트팜', transferable=False, thumbnailUrl='https://picsum.photos/seed/tech71/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_072', title='Title for tech_072', summary='Summary for tech_072', organization='Org72', patentNumber='PN072', applicationDate=date(2023, 1, 1), category='화이트바이오', subCategory='바이오플라스틱', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech72/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_073', title='Title for tech_073', summary='Summary for tech_073', organization='Org73', patentNumber='PN073', applicationDate=date(2023, 1, 1), category='레드바이오', subCategory='의약품', transferable=False, thumbnailUrl='https://picsum.photos/seed/tech73/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_074', title='Title for tech_074', summary='Summary for tech_074', organization='Org74', patentNumber='PN074', applicationDate=date(2023, 1, 1), category='그린바이오', subCategory='미생물비료', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech74/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_075', title='Title for tech_075', summary='Summary for tech_075', organization='Org75', patentNumber='PN075', applicationDate=date(2023, 1, 1), category='화이트바이오', subCategory='바이오연료', transferable=False, thumbnailUrl='https://picsum.photos/seed/tech75/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_076', title='Title for tech_076', summary='Summary for tech_076', organization='Org76', patentNumber='PN076', applicationDate=date(2023, 1, 1), category='레드바이오', subCategory='백신', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech76/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_077', title='Title for tech_077', summary='Summary for tech_077', organization='Org77', patentNumber='PN077', applicationDate=date(2023, 1, 1), category='그린바이오', subCategory='종자/육종', transferable=False, thumbnailUrl='https://picsum.photos/seed/tech77/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_078', title='Title for tech_078', summary='Summary for tech_078', organization='Org78', patentNumber='PN078', applicationDate=date(2023, 1, 1), category='화이트바이오', subCategory='산업용효소', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech78/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_079', title='Title for tech_079', summary='Summary for tech_079', organization='Org79', patentNumber='PN079', applicationDate=date(2023, 1, 1), category='레드바이오', subCategory='진단기기', transferable=False, thumbnailUrl='https://picsum.photos/seed/tech79/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_080', title='Title for tech_080', summary='Summary for tech_080', organization='Org80', patentNumber='PN080', applicationDate=date(2023, 1, 1), category='그린바이오', subCategory='기능성식품', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech80/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_081', title='Title for tech_081', summary='Summary for tech_081', organization='Org81', patentNumber='PN081', applicationDate=date(2023, 1, 1), category='화이트바이오', subCategory='환경정화', transferable=False, thumbnailUrl='https://picsum.photos/seed/tech81/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_082', title='Title for tech_082', summary='Summary for tech_082', organization='Org82', patentNumber='PN082', applicationDate=date(2023, 1, 1), category='레드바이오', subCategory='세포치료', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech82/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_083', title='Title for tech_083', summary='Summary for tech_083', organization='Org83', patentNumber='PN083', applicationDate=date(2023, 1, 1), category='그린바이오', subCategory='스마트팜', transferable=False, thumbnailUrl='https://picsum.photos/seed/tech83/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_084', title='Title for tech_084', summary='Summary for tech_084', organization='Org84', patentNumber='PN084', applicationDate=date(2023, 1, 1), category='화이트바이오', subCategory='바이오플라스틱', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech84/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_085', title='Title for tech_085', summary='Summary for tech_085', organization='Org85', patentNumber='PN085', applicationDate=date(2023, 1, 1), category='레드바이오', subCategory='의약품', transferable=False, thumbnailUrl='https://picsum.photos/seed/tech85/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_086', title='Title for tech_086', summary='Summary for tech_086', organization='Org86', patentNumber='PN086', applicationDate=date(2023, 1, 1), category='그린바이오', subCategory='미생물비료', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech86/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_087', title='Title for tech_087', summary='Summary for tech_087', organization='Org87', patentNumber='PN087', applicationDate=date(2023, 1, 1), category='화이트바이오', subCategory='바이오연료', transferable=False, thumbnailUrl='https://picsum.photos/seed/tech87/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_088', title='Title for tech_088', summary='Summary for tech_088', organization='Org88', patentNumber='PN088', applicationDate=date(2023, 1, 1), category='레드바이오', subCategory='백신', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech88/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_089', title='Title for tech_089', summary='Summary for tech_089', organization='Org89', patentNumber='PN089', applicationDate=date(2023, 1, 1), category='그린바이오', subCategory='종자/육종', transferable=False, thumbnailUrl='https://picsum.photos/seed/tech89/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_090', title='Title for tech_090', summary='Summary for tech_090', organization='Org90', patentNumber='PN090', applicationDate=date(2023, 1, 1), category='화이트바이오', subCategory='산업용효소', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech90/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_091', title='Title for tech_091', summary='Summary for tech_091', organization='Org91', patentNumber='PN091', applicationDate=date(2023, 1, 1), category='레드바이오', subCategory='진단기기', transferable=False, thumbnailUrl='https://picsum.photos/seed/tech91/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_092', title='Title for tech_092', summary='Summary for tech_092', organization='Org92', patentNumber='PN092', applicationDate=date(2023, 1, 1), category='그린바이오', subCategory='기능성식품', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech92/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_093', title='Title for tech_093', summary='Summary for tech_093', organization='Org93', patentNumber='PN093', applicationDate=date(2023, 1, 1), category='화이트바이오', subCategory='환경정화', transferable=False, thumbnailUrl='https://picsum.photos/seed/tech93/300/200', createdAt=datetime(2023, 1, 1)),
    Technology(id='tech_094', title='항바이러스 점막 면역 백신 플랫폼', summary='비강 투여로 강력한 점막 면역을 유도하는 백신 플랫폼', organization='백신랩', patentNumber='KR-10-2023-0099112', applicationDate=date(2023, 8, 14), category='레드바이오', subCategory='세포치료', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech94/300/200', createdAt=datetime(2023, 10, 2, 10, 0, 0)),
    Technology(id='tech_095', title='해양 미세조류 기반 바이오디젤 생산', summary='광합성 효율이 높은 미세조류를 이용한 3세대 바이오디젤 생산 공정', organization='한국해양과학기술원', patentNumber='KR-10-2022-0012390', applicationDate=date(2022, 2, 1), category='그린바이오', subCategory='스마트팜', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech95/300/200', createdAt=datetime(2022, 4, 18, 10, 0, 0)),
    Technology(id='tech_096', title='스마트팜용 작물 생육상태 진단 드론', summary='다중분광 카메라를 탑재하여 작물의 질병 및 영양상태를 분석하는 드론 시스템', organization='(주)팜테크', patentNumber='KR-10-2023-0044556', applicationDate=date(2023, 4, 10), category='화이트바이오', subCategory='바이오플라스틱', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech96/300/200', createdAt=datetime(2023, 6, 22, 10, 0, 0)),
    Technology(id='tech_097', title='미세플라스틱 분해 미생물 발굴', summary='해양 퇴적물에서 미세플라스틱을 분해하는 신규 미생물 균주 발굴 및 특성 분석', organization='한국생명공학연구원', patentNumber=None, applicationDate=None, category='레드바이오', subCategory='의약품', transferable=False, thumbnailUrl='https://picsum.photos/seed/tech97/300/200', createdAt=datetime(2024, 2, 5, 10, 0, 0)),
    Technology(id='tech_098', title='액체생검 기반 암 동반진단 기술', summary='혈액 내 ctDNA를 분석하여 항암제 반응성을 예측하는 동반진단 기술', organization='(주)클리노믹스', patentNumber='KR-10-2023-0011228', applicationDate=date(2023, 1, 26), category='그린바이오', subCategory='미생물비료', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech98/300/200', createdAt=datetime(2023, 3, 15, 10, 0, 0)),
    Technology(id='tech_099', title='고기능성 화장품 원료용 식물세포 배양 기술', summary='희귀식물 세포 배양을 통해 유효성분을 대량생산하는 기술', organization='(주)네이처셀', patentNumber='KR-10-2022-0088990', applicationDate=date(2022, 7, 22), category='화이트바이오', subCategory='바이오연료', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech99/300/200', createdAt=datetime(2022, 10, 3, 10, 0, 0)),
    Technology(id='tech_100', title='바이오의약품 정제용 고효율 크로마토그래피 레진', summary='항체 및 단백질 의약품 정제 효율을 2배 이상 향상시킨 신규 레진 소재', organization='(주)퓨어바이오', patentNumber='KR-10-2023-0065432', applicationDate=date(2023, 5, 25), category='레드바이오', subCategory='백신', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech100/300/200', createdAt=datetime(2023, 8, 11, 10, 0, 0))
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
        programId="sp_001",
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
