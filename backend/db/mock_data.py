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
    Technology(id='tech_008', title='항바이러스 점막 면역 백신 플랫폼', summary='비강 투여로 강력한 점막 면역을 유도하는 백신 플랫폼', organization='백신랩', patentNumber='KR-10-2023-0099112', applicationDate=date(2023, 8, 14), category='그린바이오', subCategory='기능성식품', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech8/300/200', createdAt=datetime(2023, 10, 2, 10, 0, 0)),
    Technology(id='tech_009', title='해양 미세조류 기반 바이오디젤 생산', summary='광합성 효율이 높은 미세조류를 이용한 3세대 바이오디젤 생산 공정', organization='한국해양과학기술원', patentNumber='KR-10-2022-0012390', applicationDate=date(2022, 2, 1), category='화이트바이오', subCategory='환경정화', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech9/300/200', createdAt=datetime(2022, 4, 18, 10, 0, 0)),
    Technology(id='tech_010', title='스마트팜용 작물 생육상태 진단 드론', summary='다중분광 카메라를 탑재하여 작물의 질병 및 영양상태를 분석하는 드론 시스템', organization='(주)팜테크', patentNumber='KR-10-2023-0044556', applicationDate=date(2023, 4, 10), category='레드바이오', subCategory='세포치료', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech10/300/200', createdAt=datetime(2023, 6, 22, 10, 0, 0)),
    Technology(id='tech_011', title='미세플라스틱 분해 미생물 발굴', summary='해양 퇴적물에서 미세플라스틱을 분해하는 신규 미생물 균주 발굴 및 특성 분석', organization='한국생명공학연구원', patentNumber=None, applicationDate=None, category='그린바이오', subCategory='스마트팜', transferable=False, thumbnailUrl='https://picsum.photos/seed/tech11/300/200', createdAt=datetime(2024, 2, 5, 10, 0, 0)),
    Technology(id='tech_012', title='액체생검 기반 암 동반진단 기술', summary='혈액 내 ctDNA를 분석하여 항암제 반응성을 예측하는 동반진단 기술', organization='(주)클리노믹스', patentNumber='KR-10-2023-0011228', applicationDate=date(2023, 1, 26), category='화이트바이오', subCategory='바이오플라스틱', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech12/300/200', createdAt=datetime(2023, 3, 15, 10, 0, 0)),
    Technology(id='tech_013', title='고기능성 화장품 원료용 식물세포 배양 기술', summary='희귀식물 세포 배양을 통해 유효성분을 대량생산하는 기술', organization='(주)네이처셀', patentNumber='KR-10-2022-0088990', applicationDate=date(2022, 7, 22), category='레드바이오', subCategory='의약품', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech13/300/200', createdAt=datetime(2022, 10, 3, 10, 0, 0)),
    Technology(id='tech_014', title='바이오의약품 정제용 고효율 크로마토그래피 레진', summary='항체 및 단백질 의약품 정제 효율을 2배 이상 향상시킨 신규 레진 소재', organization='(주)퓨어바이오', patentNumber='KR-10-2023-0065432', applicationDate=date(2023, 5, 25), category='그린바이오', subCategory='미생물비료', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech14/300/200', createdAt=datetime(2023, 8, 11, 10, 0, 0)),
    Technology(id='tech_015', title='항체-약물 접합체(ADC) 링커 기술', summary='안정성과 효능이 개선된 차세대 ADC 링커 플랫폼', organization='레고켐바이오', patentNumber='KR-10-2023-0011224', applicationDate=date(2023, 1, 26), category='화이트바이오', subCategory='바이오연료', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech15/300/200', createdAt=datetime(2023, 3, 2, 10, 0, 0)),
    Technology(id='tech_016', title='유기농 해충 방제용 미생물 제제', summary='화학 농약 대체 가능한 친환경 미생물 살충제', organization='(주)세레스바이오', patentNumber='KR-10-2022-0098766', applicationDate=date(2022, 8, 11), category='레드바이오', subCategory='백신', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech16/300/200', createdAt=datetime(2022, 11, 6, 10, 0, 0)),
    Technology(id='tech_017', title='LNP 기반 mRNA 백신 전달 기술', summary='mRNA 안정성을 높이고 전달 효율을 극대화하는 지질 나노입자(LNP) 기술', organization='(주)엠큐렉스', patentNumber='KR-10-2023-0045679', applicationDate=date(2023, 4, 3), category='그린바이오', subCategory='종자/육종', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech17/300/200', createdAt=datetime(2023, 6, 16, 10, 0, 0)),
    Technology(id='tech_018', title='산업 폐수 처리용 미생물 컨소시엄', summary='난분해성 유기물을 효과적으로 제거하는 고효율 미생물 복합체', organization='(주)바이오젠', patentNumber='KR-10-2021-0033446', applicationDate=date(2021, 3, 13), category='화이트바이오', subCategory='산업용효소', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech18/300/200', createdAt=datetime(2021, 7, 21, 10, 0, 0)),
    Technology(id='tech_019', title='퇴행성 뇌질환 치료용 마이크로바이옴', summary='장-뇌 축(Gut-Brain Axis) 조절을 통한 파킨슨병 치료 후보물질', organization='지놈앤컴퍼니', patentNumber=None, applicationDate=None, category='레드바이오', subCategory='진단기기', transferable=False, thumbnailUrl='https://picsum.photos/seed/tech19/300/200', createdAt=datetime(2024, 1, 11, 10, 0, 0)),
    Technology(id='tech_020', title='기능성 사료 첨가용 프로바이오틱스', summary='가축의 면역력 증진 및 생산성 향상을 위한 고기능성 프로바이오틱스', organization='(주)메디ogen', patentNumber='KR-10-2022-0077890', applicationDate=date(2022, 6, 21), category='그린바이오', subCategory='기능성식품', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech20/300/200', createdAt=datetime(2022, 9, 2, 10, 0, 0)),
    Technology(id='tech_021', title='바이오매스 기반 차세대 바이오에탄올 생산 기술', summary='비식용 바이오매스로부터 고수율로 바이오에탄올을 생산하는 통합 공정', organization='GS칼텍스', patentNumber='KR-10-2023-0055668', applicationDate=date(2023, 5, 3), category='화이트바이오', subCategory='환경정화', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech21/300/200', createdAt=datetime(2023, 8, 2, 10, 0, 0)),
    Technology(id='tech_022', title='면역항암제 반응 예측 바이오마커', summary='환자 혈액 분석을 통해 면역항암제 치료 효과를 예측하는 바이오마커 패널', organization='(주)루닛', patentNumber='KR-10-2023-0099113', applicationDate=date(2023, 8, 15), category='레드바이오', subCategory='세포치료', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech22/300/200', createdAt=datetime(2023, 10, 3, 10, 0, 0)),
    Technology(id='tech_023', title='디지털 육종 솔루션', summary='빅데이터와 AI를 활용하여 육종 기간을 단축하고 효율을 높이는 플랫폼', organization='(주)그린랩스', patentNumber='KR-10-2022-0012391', applicationDate=date(2022, 2, 2), category='그린바이오', subCategory='스마트팜', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech23/300/200', createdAt=datetime(2022, 4, 19, 10, 0, 0)),
    Technology(id='tech_024', title='해양 미세조류 유래 고순도 오메가-3', summary='친환경 배양 기술로 생산된 고함량 EPA 및 DHA 오메가-3', organization='(주)팀스페이스', patentNumber='KR-10-2023-0044557', applicationDate=date(2023, 4, 11), category='화이트바이오', subCategory='바이오플라스틱', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech24/300/200', createdAt=datetime(2023, 6, 23, 10, 0, 0)),
    Technology(id='tech_025', title='인공혈액 개발 기술', summary='장기 보관이 가능하고 혈액형과 무관하게 수혈할 수 있는 인공 산소 운반체', organization='레드진', patentNumber=None, applicationDate=None, category='레드바이오', subCategory='의약품', transferable=False, thumbnailUrl='https://picsum.photos/seed/tech25/300/200', createdAt=datetime(2024, 2, 6, 10, 0, 0)),
    Technology(id='tech_026', title='식물공장용 LED 광원 제어 시스템', summary='작물 생육 단계별 최적의 광파장을 제공하는 스마트 LED 시스템', organization='(주)팜에이트', patentNumber='KR-10-2023-0011229', applicationDate=date(2023, 1, 27), category='그린바이오', subCategory='미생물비료', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech26/300/200', createdAt=datetime(2023, 3, 16, 10, 0, 0)),
    Technology(id='tech_027', title='바이오서팩턴트 생산 균주 및 공정', summary='석유계 계면활성제를 대체하는 친환경 바이오서팩턴트 대량생산 기술', organization='(주)제노포커스', patentNumber='KR-10-2022-0088991', applicationDate=date(2022, 7, 23), category='화이트바이오', subCategory='바이오연료', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech27/300/200', createdAt=datetime(2022, 10, 4, 10, 0, 0)),
    Technology(id='tech_028', title='T세포 증폭 및 활성화 기술', summary='입양 세포 치료(Adoptive Cell Therapy)의 효능을 극대화하는 T세포 배양 기술', organization='(주)네오이뮨텍', patentNumber='KR-10-2023-0065433', applicationDate=date(2023, 5, 26), category='레드바이오', subCategory='백신', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech28/300/200', createdAt=datetime(2023, 8, 12, 10, 0, 0)),
    Technology(id='tech_029', title='질병 저항성 고추 품종 개발', summary='탄저병, 역병 등에 강한 저항성을 보이는 고추 신품종', organization='농우바이오', patentNumber='KR-10-2023-0011225', applicationDate=date(2023, 1, 26), category='그린바이오', subCategory='종자/육종', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech29/300/200', createdAt=datetime(2023, 3, 3, 10, 0, 0)),
    Technology(id='tech_030', title='폐플라스틱 재활용을 위한 효소 분해 기술', summary='PET, PE 등 폐플라스틱을 단량체로 분해하는 고효율 효소 개발', organization='(주)엔지켐생명과학', patentNumber='KR-10-2022-0098767', applicationDate=date(2022, 8, 12), category='화이트바이오', subCategory='산업용효소', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech30/300/200', createdAt=datetime(2022, 11, 7, 10, 0, 0)),
    Technology(id='tech_031', title='뇌졸중 후 신경재생 촉진 약물', summary='뇌 가소성을 증진시켜 뇌졸중 후 기능 회복을 돕는 신약 후보물질', organization='(주)아스트로젠', patentNumber='KR-10-2023-0045680', applicationDate=date(2023, 4, 4), category='레드바이오', subCategory='진단기기', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech31/300/200', createdAt=datetime(2023, 6, 17, 10, 0, 0)),
    Technology(id='tech_032', title='아쿠아포닉스(Aquaponics) 시스템', summary='물고기 양식과 수경재배를 결합한 지속가능한 순환 농법 시스템', organization='만나CEA', patentNumber='KR-10-2021-0033447', applicationDate=date(2021, 3, 14), category='그린바이오', subCategory='기능성식품', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech32/300/200', createdAt=datetime(2021, 7, 22, 10, 0, 0)),
    Technology(id='tech_033', title='CO2를 원료로 하는 바이오케미컬 생산 기술', summary='미생물 발효를 통해 이산화탄소를 고부가가치 화학물질로 전환하는 기술', organization='(주)씨에이치랩', patentNumber=None, applicationDate=None, category='화이트바이오', subCategory='환경정화', transferable=False, thumbnailUrl='https://picsum.photos/seed/tech33/300/200', createdAt=datetime(2024, 1, 12, 10, 0, 0)),
    Technology(id='tech_034', title='오가노이드 기반 신약 효능 평가 플랫폼', summary='환자 유래 오가노이드를 이용해 약물 반응성을 예측하고 맞춤형 치료를 지원', organization='(주)그래디언트', patentNumber='KR-10-2022-0077891', applicationDate=date(2022, 6, 22), category='레드바이오', subCategory='세포치료', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech34/300/200', createdAt=datetime(2022, 9, 3, 10, 0, 0)),
    Technology(id='tech_035', title='곤충 단백질을 이용한 대체 사료 개발', summary='동애등에를 활용한 고단백, 고기능성 어분 대체 사료', organization='(주)엔토프로', patentNumber='KR-10-2023-0055669', applicationDate=date(2023, 5, 4), category='그린바이오', subCategory='스마트팜', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech35/300/200', createdAt=datetime(2023, 8, 3, 10, 0, 0)),
    Technology(id='tech_036', title='거미줄 단백질 기반 인공 인대', summary='생체적합성과 기계적 강도가 뛰어난 재조합 거미줄 단백질 인공 인대', organization='(주)아머드프레시', patentNumber='KR-10-2023-0099114', applicationDate=date(2023, 8, 16), category='화이트바이오', subCategory='바이오플라스틱', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech36/300/200', createdAt=datetime(2023, 10, 4, 10, 0, 0)),
    Technology(id='tech_037', title='자가면역질환 치료용 Treg 세포치료제', summary='면역 관용을 유도하는 조절 T세포(Treg) 기반의 류마티스 관절염 치료제', organization='(주)셀리드', patentNumber='KR-10-2022-0012392', applicationDate=date(2022, 2, 3), category='레드바이오', subCategory='의약품', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech37/300/200', createdAt=datetime(2022, 4, 20, 10, 0, 0)),
    Technology(id='tech_038', title='식물성 대체육 조직화 기술', summary='대두단백을 활용하여 실제 고기와 유사한 식감과 풍미를 구현하는 기술', organization='(주)지구인컴퍼니', patentNumber='KR-10-2023-0044558', applicationDate=date(2023, 4, 12), category='그린바이오', subCategory='미생물비료', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech38/300/200', createdAt=datetime(2023, 6, 24, 10, 0, 0)),
    Technology(id='tech_039', title='수소 생산용 광합성 미생물', summary='광합성을 통해 물에서 수소를 생산하는 고효율 시아노박테리아 균주', organization='고려대학교', patentNumber=None, applicationDate=None, category='화이트바이오', subCategory='바이오연료', transferable=False, thumbnailUrl='https://picsum.photos/seed/tech39/300/200', createdAt=datetime(2024, 2, 7, 10, 0, 0)),
    Technology(id='tech_040', title='치매 조기진단 혈액검사 키트', summary='혈액 내 특정 단백질 바이오마커를 측정하여 알츠하이머병을 조기 진단', organization='(주)피플바이오', patentNumber='KR-10-2023-0011230', applicationDate=date(2023, 1, 28), category='레드바이오', subCategory='백신', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech40/300/200', createdAt=datetime(2023, 3, 17, 10, 0, 0)),
    Technology(id='tech_041', title='내염성 밀 품종', summary='염해 농지에서도 안정적인 수확이 가능한 내염성 밀 신품종', organization='국립식량과학원', patentNumber='KR-10-2022-0088992', applicationDate=date(2022, 7, 24), category='그린바이오', subCategory='종자/육종', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech41/300/200', createdAt=datetime(2022, 10, 5, 10, 0, 0)),
    Technology(id='tech_042', title='의류용 생분해 섬유', summary='미생물 발효를 통해 생산된 100% 생분해 가능한 단백질 섬유', organization='(주)코오롱', patentNumber='KR-10-2023-0065434', applicationDate=date(2023, 5, 27), category='화이트바이오', subCategory='산업용효소', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech42/300/200', createdAt=datetime(2023, 8, 13, 10, 0, 0)),
    Technology(id='tech_043', title='급성 신손상 치료제', summary='신장세포 보호 및 재생을 촉진하는 펩타이드 기반 신약', organization='(주)젬백스앤카엘', patentNumber='KR-10-2023-0011226', applicationDate=date(2023, 1, 27), category='레드바이오', subCategory='진단기기', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech43/300/200', createdAt=datetime(2023, 3, 4, 10, 0, 0)),
    Technology(id='tech_044', title='천연물 유래 식물성 농약', summary='자리공 추출물을 활용한 친환경 바이러스 방제제', organization='(주)씨앗', patentNumber='KR-10-2022-0098768', applicationDate=date(2022, 8, 13), category='그린바이오', subCategory='기능성식품', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech44/300/200', createdAt=datetime(2022, 11, 8, 10, 0, 0)),
    Technology(id='tech_045', title='미세조류 기반 바이오 항공유', summary='지속가능한 항공연료(SAF)로 사용 가능한 미세조류 유래 항공유 생산 기술', organization='(주)이수화학', patentNumber='KR-10-2023-0045681', applicationDate=date(2023, 4, 5), category='화이트바이오', subCategory='환경정화', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech45/300/200', createdAt=datetime(2023, 6, 18, 10, 0, 0)),
    Technology(id='tech_046', title='3D 바이오프린팅 기반 인공 간 조직', summary='간세포를 포함한 바이오잉크를 이용해 제작한 간 기능성 시험용 인공 조직', organization='(주)티앤알바이오팹', patentNumber='KR-10-2021-0033448', applicationDate=date(2021, 3, 15), category='레드바이오', subCategory='세포치료', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech46/300/200', createdAt=datetime(2021, 7, 23, 10, 0, 0)),
    Technology(id='tech_047', title='고추장 발효 우수 종균', summary='전통 고추장에서 분리한 맛과 향이 뛰어난 고초균(Bacillus) 종균', organization='전북대학교', patentNumber=None, applicationDate=None, category='그린바이오', subCategory='스마트팜', transferable=False, thumbnailUrl='https://picsum.photos/seed/tech47/300/200', createdAt=datetime(2024, 1, 13, 10, 0, 0)),
    Technology(id='tech_048', title='바이오폴리머 기반 의료용 접착제', summary='수술 후 봉합을 대체할 수 있는 강력하고 생분해성인 의료용 접착제', organization='(주)제이엘케이', patentNumber='KR-10-2022-0077892', applicationDate=date(2022, 6, 23), category='화이트바이오', subCategory='바이오플라스틱', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech48/300/200', createdAt=datetime(2022, 9, 4, 10, 0, 0)),
    Technology(id='tech_049', title='항암 바이러스 치료제', summary='암세포만 선택적으로 공격하고 면역반응을 유도하는 유전자 조작 바이러스', organization='(주)신라젠', patentNumber='KR-10-2023-0055670', applicationDate=date(2023, 5, 5), category='레드바이오', subCategory='의약품', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech49/300/200', createdAt=datetime(2023, 8, 4, 10, 0, 0)),
    Technology(id='tech_050', title='배양육 생산을 위한 세포 배양 배지', summary='소 혈청을 대체할 수 있는 식물성 원료 기반의 저비용 세포 배양 배지', organization='(주)스페이스에프', patentNumber='KR-10-2023-0099115', applicationDate=date(2023, 8, 17), category='그린바이오', subCategory='미생물비료', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech50/300/200', createdAt=datetime(2023, 10, 5, 10, 0, 0)),
    Technology(id='tech_051', title='생분해성 어망 개발', summary='해양 미세플라스틱 문제를 해결하기 위한 특정 조건에서 분해되는 어망', organization='(주)포투가', patentNumber='KR-10-2022-0012393', applicationDate=date(2022, 2, 4), category='화이트바이오', subCategory='바이오연료', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech51/300/200', createdAt=datetime(2022, 4, 21, 10, 0, 0)),
    Technology(id='tech_052', title='유전자 치료제용 AAV 벡터 생산 기술', summary='안전성과 효율성이 높은 아데노부속바이러스(AAV) 벡터 대량생산 플랫폼', organization='(주)진코어', patentNumber='KR-10-2023-0044559', applicationDate=date(2023, 4, 13), category='레드바이오', subCategory='백신', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech52/300/200', createdAt=datetime(2023, 6, 25, 10, 0, 0)),
    Technology(id='tech_053', title='스마트 축산 관리 솔루션', summary='가축의 생체 데이터를 실시간으로 모니터링하여 질병을 예방하고 생산성을 관리', organization='(주)유라이크코리아', patentNumber=None, applicationDate=None, category='그린바이오', subCategory='종자/육종', transferable=False, thumbnailUrl='https://picsum.photos/seed/tech53/300/200', createdAt=datetime(2024, 2, 8, 10, 0, 0)),
    Technology(id='tech_054', title='바이오가스 고질화 기술', summary='음식물 쓰레기 등에서 발생하는 바이오가스를 고순도 메탄으로 정제하는 기술', organization='(주)에코프로에이치엔', patentNumber='KR-10-2023-0011231', applicationDate=date(2023, 1, 29), category='화이트바이오', subCategory='산업용효소', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech54/300/200', createdAt=datetime(2023, 3, 18, 10, 0, 0)),
    Technology(id='tech_055', title='C형 간염 진단용 항체', summary='고감도 및 특이도를 가진 C형 간염 바이러스 진단용 단일클론 항체', organization='(주)바디텍메드', patentNumber='KR-10-2022-0088993', applicationDate=date(2022, 7, 25), category='레드바이오', subCategory='진단기기', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech55/300/200', createdAt=datetime(2022, 10, 6, 10, 0, 0)),
    Technology(id='tech_056', title='대체 감미료 알룰로스 생산 효소', summary='과당으로부터 알룰로스를 대량생산할 수 있는 고효율 효소', organization='(주)삼양사', patentNumber='KR-10-2023-0065435', applicationDate=date(2023, 5, 28), category='그린바이오', subCategory='기능성식품', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech56/300/200', createdAt=datetime(2023, 8, 14, 10, 0, 0)),
    Technology(id='tech_057', title='토양 오염 정화 박테리아', summary='중금속 및 유류 오염 토양을 정화하는 능력이 뛰어난 미생물 균주', organization='한국지질자원연구원', patentNumber='KR-10-2023-0011227', applicationDate=date(2023, 1, 28), category='화이트바이오', subCategory='환경정화', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech57/300/200', createdAt=datetime(2023, 3, 5, 10, 0, 0)),
    Technology(id='tech_058', title='연골 재생용 세포 치료제', summary='환자 자신의 연골세포를 이용한 무릎 연골 결손 치료제', organization='(주)메디포스트', patentNumber='KR-10-2022-0098769', applicationDate=date(2022, 8, 14), category='레드바이오', subCategory='세포치료', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech58/300/200', createdAt=datetime(2022, 11, 9, 10, 0, 0)),
    Technology(id='tech_059', title='시설원예용 복합환경제어 시스템', summary='온도, 습도, CO2 등을 통합 제어하여 최적의 생육 환경을 조성하는 시스템', organization='(주)나래트렌드', patentNumber='KR-10-2023-0045682', applicationDate=date(2023, 4, 6), category='그린바이오', subCategory='스마트팜', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech59/300/200', createdAt=datetime(2023, 6, 19, 10, 0, 0)),
    Technology(id='tech_060', title='생체이식용 3D 프린팅 PCL 소재', summary='FDA 승인을 받은 생분해성 폴리카프로락톤(PCL) 기반 3D 프린팅 소재', organization='(주)로킷헬스케어', patentNumber='KR-10-2021-0033449', applicationDate=date(2021, 3, 16), category='화이트바이오', subCategory='바이오플라스틱', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech60/300/200', createdAt=datetime(2021, 7, 24, 10, 0, 0)),
    Technology(id='tech_061', title='비알코올성 지방간염(NASH) 치료제', summary='간 내 염증 및 섬유화를 억제하는 신규 기전의 NASH 치료제', organization='(주)유한양행', patentNumber=None, applicationDate=None, category='레드바이오', subCategory='의약품', transferable=False, thumbnailUrl='https://picsum.photos/seed/tech61/300/200', createdAt=datetime(2024, 1, 14, 10, 0, 0)),
    Technology(id='tech_062', title='유해 조류(녹조) 제거용 미생물 제제', summary='녹조를 선택적으로 사멸시키고 수질을 개선하는 친환경 미생물 제제', organization='(주)비씨엔', patentNumber='KR-10-2022-0077893', applicationDate=date(2022, 6, 24), category='그린바이오', subCategory='미생물비료', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech62/300/200', createdAt=datetime(2022, 9, 5, 10, 0, 0)),
    Technology(id='tech_063', title='바이오항공유 생산용 효모 균주', summary='목질계 바이오매스를 발효하여 항공유를 생산하는 고효율 유전자재조합 효모', organization='KAIST', patentNumber='KR-10-2023-0055671', applicationDate=date(2023, 5, 6), category='화이트바이오', subCategory='바이오연료', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech63/300/200', createdAt=datetime(2023, 8, 5, 10, 0, 0)),
    Technology(id='tech_064', title='대상포진 백신', summary='바이러스 단백질 일부를 항원으로 사용하는 안전성 높은 서브유닛 백신', organization='SK바이오사이언스', patentNumber='KR-10-2023-0099116', applicationDate=date(2023, 8, 18), category='레드바이오', subCategory='백신', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech64/300/200', createdAt=datetime(2023, 10, 6, 10, 0, 0)),
    Technology(id='tech_065', title='저장성 강화 토마토', summary='유전자 편집으로 수확 후 무름 현상을 늦춘 장기보관용 토마토', organization='(주)툴젠', patentNumber='KR-10-2022-0012394', applicationDate=date(2022, 2, 5), category='그린바이오', subCategory='종자/육종', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech65/300/200', createdAt=datetime(2022, 4, 22, 10, 0, 0)),
    Technology(id='tech_066', title='동물 사료용 라이신 생산 균주', summary='발효 생산성이 30% 향상된 고효율 라이신 생산 코리네박테리움 균주', organization='CJ제일제당', patentNumber='KR-10-2023-0044560', applicationDate=date(2023, 4, 14), category='화이트바이오', subCategory='산업용효소', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech66/300/200', createdAt=datetime(2023, 6, 26, 10, 0, 0)),
    Technology(id='tech_067', title='패혈증 신속 진단 키트', summary='환자 혈액에서 30분 내로 패혈증 원인균을 판별하는 분자진단 키트', organization='(주)씨젠', patentNumber=None, applicationDate=None, category='레드바이오', subCategory='진단기기', transferable=False, thumbnailUrl='https://picsum.photos/seed/tech67/300/200', createdAt=datetime(2024, 2, 9, 10, 0, 0)),
    Technology(id='tech_068', title='인삼 사포닌(진세노사이드) 고함량 품종', summary='특정 진세노사이드 함량을 5배 이상 높인 고기능성 인삼 신품종', organization='KGC인삼공사', patentNumber='KR-10-2023-0011232', applicationDate=date(2023, 1, 30), category='그린바이오', subCategory='기능성식품', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech68/300/200', createdAt=datetime(2023, 3, 19, 10, 0, 0)),
    Technology(id='tech_069', title='축산 분뇨 처리 및 에너지화 시스템', summary='가축 분뇨를 바이오가스로 만들고 남은 슬러지를 고품질 퇴비로 전환', organization='(주)부강테크', patentNumber='KR-10-2022-0088994', applicationDate=date(2022, 7, 26), category='화이트바이오', subCategory='환경정화', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech69/300/200', createdAt=datetime(2022, 10, 7, 10, 0, 0)),
    Technology(id='tech_070', title='췌장암 표적 항암 신약', summary='췌장암 암세포에 특이적으로 발현하는 단백질을 표적하는 신약 후보물질', organization='앱클론', patentNumber='KR-10-2023-0065436', applicationDate=date(2023, 5, 29), category='레드바이오', subCategory='세포치료', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech70/300/200', createdAt=datetime(2023, 8, 15, 10, 0, 0)),
    Technology(id='tech_071', title='노지용 스마트 관개 시스템', summary='토양 수분 센서와 기상 데이터를 연동하여 물 사용량을 최적화하는 시스템', organization='(주)이레아이에스', patentNumber='KR-10-2023-0011228', applicationDate=date(2023, 1, 29), category='그린바이오', subCategory='스마트팜', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech71/300/200', createdAt=datetime(2023, 3, 6, 10, 0, 0)),
    Technology(id='tech_072', title='PHA 기반 생분해성 포장재', summary='미생물이 생산하는 폴리히드록시알카노에이트(PHA)를 이용한 고기능성 포장재', organization='(주)롯데케미칼', patentNumber='KR-10-2022-0098770', applicationDate=date(2022, 8, 15), category='화이트바이오', subCategory='바이오플라스틱', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech72/300/200', createdAt=datetime(2022, 11, 10, 10, 0, 0)),
    Technology(id='tech_073', title='아토피 피부염 완화 기능성 프로바이오틱스', summary='면역과민반응을 조절하여 아토피 증상을 완화하는 락토바실러스 균주', organization='(주)쎌바이오텍', patentNumber='KR-10-2023-0045683', applicationDate=date(2023, 4, 7), category='레드바이오', subCategory='의약품', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech73/300/200', createdAt=datetime(2023, 6, 20, 10, 0, 0)),
    Technology(id='tech_074', title='가축 전염병 현장 진단키트', summary='구제역, 조류인플루엔자 등 주요 가축 전염병을 15분 내에 진단하는 키트', organization='(주)메디안디노스틱', patentNumber='KR-10-2021-0033450', applicationDate=date(2021, 3, 17), category='그린바이오', subCategory='미생물비료', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech74/300/200', createdAt=datetime(2021, 7, 25, 10, 0, 0)),
    Technology(id='tech_075', title='리그닌 기반 바이오 아스팔트', summary='목재 폐기물인 리그닌을 활용하여 석유 아스팔트를 대체하는 친환경 소재', organization='국립산림과학원', patentNumber=None, applicationDate=None, category='화이트바이오', subCategory='바이오연료', transferable=False, thumbnailUrl='https://picsum.photos/seed/tech75/300/200', createdAt=datetime(2024, 1, 15, 10, 0, 0)),
    Technology(id='tech_076', title='범용 독감 백신', summary='다양한 인플루엔자 바이러스 변이에 대응 가능한 차세대 독감 백신', organization='(주)옵티팜', patentNumber='KR-10-2022-0077894', applicationDate=date(2022, 6, 25), category='레드바이오', subCategory='백신', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech76/300/200', createdAt=datetime(2022, 9, 6, 10, 0, 0)),
    Technology(id='tech_077', title='바이러스 무병묘 생산 기술', summary='조직 배양 기술을 이용해 바이러스 없는 우량 씨감자 등을 대량 생산', organization='(주)이그린글로벌', patentNumber='KR-10-2023-0055672', applicationDate=date(2023, 5, 7), category='그린바이오', subCategory='종자/육종', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech77/300/200', createdAt=datetime(2023, 8, 6, 10, 0, 0)),
    Technology(id='tech_078', title='나일론 대체용 바이오아미드', summary='식물성 오일 기반으로 생산되는 고성능 바이오아미드 섬유', organization='(주)에코플라스팀', patentNumber='KR-10-2023-0099117', applicationDate=date(2023, 8, 19), category='화이트바이오', subCategory='산업용효소', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech78/300/200', createdAt=datetime(2023, 10, 7, 10, 0, 0)),
    Technology(id='tech_079', title='당뇨병성 족부궤양 치료용 세포 패치', summary='세포와 생체재료를 융합하여 상처 치유를 촉진하는 패치형 치료제', organization='(주)에스바이오메딕스', patentNumber='KR-10-2022-0012395', applicationDate=date(2022, 2, 6), category='레드바이오', subCategory='진단기기', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech79/300/200', createdAt=datetime(2022, 4, 23, 10, 0, 0)),
    Technology(id='tech_080', title='체지방 감소 기능성 유산균', summary='체지방 감소 효과가 입증된 식약처 개별인정형 프로바이오틱스', organization='(주)에이스바이옴', patentNumber='KR-10-2023-0044561', applicationDate=date(2023, 4, 15), category='그린바이오', subCategory='기능성식품', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech80/300/200', createdAt=datetime(2023, 6, 27, 10, 0, 0)),
    Technology(id='tech_081', title='해양 난분해성 플라스틱 분해 효소', summary='PET 뿐만 아니라 다른 난분해성 플라스틱도 분해하는 신규 효소', organization='한국해양과학기술원', patentNumber=None, applicationDate=None, category='화이트바이오', subCategory='환경정화', transferable=False, thumbnailUrl='https://picsum.photos/seed/tech81/300/200', createdAt=datetime(2024, 2, 10, 10, 0, 0)),
    Technology(id='tech_082', title='급성 심근경색 치료용 줄기세포 치료제', summary='심장 기능 회복을 돕는 동종 유래 중간엽 줄기세포 치료제', organization='파미셀', patentNumber='KR-10-2023-0011233', applicationDate=date(2023, 1, 31), category='레드바이오', subCategory='세포치료', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech82/300/200', createdAt=datetime(2023, 3, 20, 10, 0, 0)),
    Technology(id='tech_083', title='수직농장용 AI 기반 자동화 솔루션', summary='파종부터 수확까지 전 과정을 자동화하고 최적의 생육 레시피를 제공', organization='(주)엔씽', patentNumber='KR-10-2022-0088995', applicationDate=date(2022, 7, 27), category='그린바이오', subCategory='스마트팜', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech83/300/200', createdAt=datetime(2022, 10, 8, 10, 0, 0)),
    Technology(id='tech_084', title='생분해 멀칭 필름', summary='토양에서 완전히 분해되어 수거가 필요 없는 농업용 멀칭 필름', organization='(주)그린케미칼', patentNumber='KR-10-2023-0065437', applicationDate=date(2023, 5, 30), category='화이트바이오', subCategory='바이오플라스틱', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech84/300/200', createdAt=datetime(2023, 8, 16, 10, 0, 0)),
    Technology(id='tech_085', title='파킨슨병 진단용 방사성 의약품', summary='뇌의 도파민 운반체를 영상화하여 파킨슨병을 조기 진단하는 의약품', organization='(주)퓨쳐켐', patentNumber='KR-10-2023-0011229', applicationDate=date(2023, 1, 30), category='레드바이오', subCategory='의약품', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech85/300/200', createdAt=datetime(2023, 3, 7, 10, 0, 0)),
    Technology(id='tech_086', title='뿌리혹선충 방제용 미생물', summary='선충에 기생하여 방제 효과를 나타내는 친환경 미생물 제제', organization='(주)중앙바이오텍', patentNumber='KR-10-2022-0098771', applicationDate=date(2022, 8, 16), category='그린바이오', subCategory='미생물비료', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech86/300/200', createdAt=datetime(2022, 11, 11, 10, 0, 0)),
    Technology(id='tech_087', title='미생물 발효 기반 인디고 염료', summary='화학 공정을 대체하는 친환경적인 청바지용 인디고 염료 생산 기술', organization='(주)힉스', patentNumber='KR-10-2023-0045684', applicationDate=date(2023, 4, 8), category='화이트바이오', subCategory='바이오연료', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech87/300/200', createdAt=datetime(2023, 6, 21, 10, 0, 0)),
    Technology(id='tech_088', title='RSV(호흡기세포융합바이러스) 백신', summary='영유아 및 고령층을 위한 호흡기세포융합바이러스 감염 예방 백신', organization='(주)유바이오로직스', patentNumber='KR-10-2021-0033451', applicationDate=date(2021, 3, 18), category='레드바이오', subCategory='백신', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech88/300/200', createdAt=datetime(2021, 7, 26, 10, 0, 0)),
    Technology(id='tech_089', title='다수확 콩 신품종', summary='단위 면적당 수확량이 20% 이상 증가하고 기계 수확에 용이한 콩 품종', organization='농촌진흥청', patentNumber=None, applicationDate=None, category='그린바이오', subCategory='종자/육종', transferable=False, thumbnailUrl='https://picsum.photos/seed/tech89/300/200', createdAt=datetime(2024, 1, 16, 10, 0, 0)),
    Technology(id='tech_090', title='화장품용 히알루론산 생산 균주', summary='고분자 히알루론산을 고수율로 생산하는 유산균 발효 기술', organization='(주)휴메딕스', patentNumber='KR-10-2022-0077895', applicationDate=date(2022, 6, 26), category='화이트바이오', subCategory='산업용효소', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech90/300/200', createdAt=datetime(2022, 9, 7, 10, 0, 0)),
    Technology(id='tech_091', title='유방암 예후 예측 AI', summary='유방암 환자의 조직 이미지를 분석하여 재발 및 생존율을 예측하는 AI', organization='(주)딥바이오', patentNumber='KR-10-2023-0055673', applicationDate=date(2023, 5, 8), category='레드바이오', subCategory='진단기기', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech91/300/200', createdAt=datetime(2023, 8, 7, 10, 0, 0)),
    Technology(id='tech_092', title='수면 개선 기능성 소재', summary='감태 추출물을 활용한 수면의 질 개선 건강기능식품 원료', organization='(주)휴온스', patentNumber='KR-10-2023-0099118', applicationDate=date(2023, 8, 20), category='그린바이오', subCategory='기능성식품', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech92/300/200', createdAt=datetime(2023, 10, 8, 10, 0, 0)),
    Technology(id='tech_093', title='대기 중 탄소 포집 및 활용 기술', summary='특수 설계된 미세조류를 이용하여 공기 중의 이산화탄소를 직접 포집, 바이오연료로 전환', organization='(주)이산화탄소연구소', patentNumber='KR-10-2022-0012396', applicationDate=date(2022, 2, 7), category='화이트바이오', subCategory='환경정화', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech93/300/200', createdAt=datetime(2022, 4, 24, 10, 0, 0)),
    Technology(id='tech_094', title='CAR-NK 세포 치료제', summary='NK세포의 장점과 CAR 기술을 결합한 차세대 고형암 타겟 세포치료제', organization='(주)엔케이맥스', patentNumber='KR-10-2023-0044562', applicationDate=date(2023, 4, 16), category='레드바이오', subCategory='세포치료', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech94/300/200', createdAt=datetime(2023, 6, 28, 10, 0, 0)),
    Technology(id='tech_095', title='딸기 수확량 예측 AI 솔루션', summary='드론 및 CCTV 영상 분석을 통해 딸기 생육 상태를 모니터링하고 수확량을 예측', organization='(주)에이아이에스', patentNumber=None, applicationDate=None, category='그린바이오', subCategory='스마트팜', transferable=False, thumbnailUrl='https://picsum.photos/seed/tech95/300/200', createdAt=datetime(2024, 2, 11, 10, 0, 0)),
    Technology(id='tech_096', title='페인트용 바이오 기반 수지', summary='식물성 오일을 원료로 하여 휘발성유기화합물(VOCs) 배출이 없는 친환경 수지', organization='(주)노루페인트', patentNumber='KR-10-2023-0011234', applicationDate=date(2023, 2, 1), category='화이트바이오', subCategory='바이오플라스틱', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech96/300/200', createdAt=datetime(2023, 3, 21, 10, 0, 0)),
    Technology(id='tech_097', title='만성질환 관리 플랫폼', summary='환자의 라이프로그 데이터를 분석하여 맞춤형 건강관리 서비스를 제공하는 앱', organization='(주)휴레이포지티브', patentNumber='KR-10-2022-0088996', applicationDate=date(2022, 7, 28), category='레드바이오', subCategory='의약품', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech97/300/200', createdAt=datetime(2022, 10, 9, 10, 0, 0)),
    Technology(id='tech_098', title='스마트 양식 솔루션', summary='수질 센서와 자동 사료 공급기를 연동하여 양식장 환경을 최적화하는 시스템', organization='(주)아쿠아매니저', patentNumber='KR-10-2023-0065438', applicationDate=date(2023, 5, 31), category='그린바이오', subCategory='미생물비료', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech98/300/200', createdAt=datetime(2023, 8, 17, 10, 0, 0)),
    Technology(id='tech_099', title='바이오매스 기반 항공유 생산 기술', summary='목질계 바이오매스를 원료로 지속가능한 항공유(SAF)를 생산하는 기술', organization='(주)현대오일뱅크', patentNumber='KR-10-2023-0011230', applicationDate=date(2023, 1, 31), category='화이트바이오', subCategory='바이오연료', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech99/300/200', createdAt=datetime(2023, 3, 8, 10, 0, 0)),
    Technology(id='tech_100', title='자궁경부암 DNA 백신', summary='DNA를 항원으로 사용하여 안전성과 생산성을 높인 차세대 자궁경부암 백신', organization='(주)제넥신', patentNumber='KR-10-2022-0098772', applicationDate=date(2022, 8, 17), category='레드바이오', subCategory='백신', transferable=True, thumbnailUrl='https://picsum.photos/seed/tech100/300/200', createdAt=datetime(2022, 11, 12, 10, 0, 0))
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
