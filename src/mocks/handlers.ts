import { http, HttpResponse } from 'msw';


// --- MOCK DATA ---

const organizations = [
  { id: 'org-1', name: '메디퓨처', type: '기업', region: '전주', fields: ['진단', '기기'], services: ['시제품 제작', '임상시험 지원'], summary: '차세대 진단기기 개발 전문 기업' },
  { id: 'org-2', name: '그린사이언스', type: '기업', region: '익산', fields: ['푸드', '화장품'], services: ['성분 분석', '제품화 컨설팅'], summary: '천연물 기반 바이오 소재 연구' },
  { id: 'org-3', name: '한국화학연구원 전북분원', type: '연구소', region: '전주', fields: ['의약', '화학'], services: ['신물질 합성', '분석 서비스'], summary: '탄소소재 및 화학 연구 개발' },
  { id: 'org-4', name: '바이오톡스텍', type: '지원기관', region: '정읍', fields: ['의약', '진단'], services: ['비임상(GLP)', '효능 평가'], summary: '국내 최고 수준의 비임상 CRO' },
  { id: 'org-5', name: '전북대학교 병원', type: '병원', region: '전주', fields: ['의약', '임상'], services: ['임상시험', '의료 데이터 제공'], summary: '지역 거점 종합병원' },
  { id: 'org-6', name: '원광대학교 병원', type: '병원', region: '익산', fields: ['의약', '임상'], services: ['임상시험', '공동 연구'], summary: '의생명과학 연구 중심 병원' },
  { id: 'org-7', name: '전북테크노파크', type: '지원기관', region: '전주', fields: ['전체'], services: ['사업화 지원', '장비 대여'], summary: '지역 산업 기술 혁신 거점 기관' },
  { id: 'org-8', name: '안전성평가연구소', type: '연구소', region: '정읍', fields: ['진단', '화학'], services: ['독성 평가', '안전성 시험'], summary: '화학물질 및 바이오 제품 안전성 평가' },
  { id: 'org-9', name: 'K-BIO 혁신센터', type: '지원기관', region: '전주', fields: ['의약', '기기'], services: ['인큐베이팅', '투자 연계'], summary: '바이오 벤처 육성 전문 기관' },
  { id: 'org-10', name: '군산대학교', type: '대학', region: '군산', fields: ['푸드', '해양바이오'], services: ['산학협력', '인력 양성'], summary: '해양 바이오 특화 연구' },
];

const organizationsHandler = http.get('/api/cluster/organizations', ({ request }: { request: Request }) => {
  const url = new URL(request.url);
  const region = url.searchParams.get('region');
  const field = url.searchParams.get('field');
  const orgType = url.searchParams.get('type');
  const query = url.searchParams.get('query')?.toLowerCase();

  let filteredOrgs = organizations;

  if (region) {
    filteredOrgs = filteredOrgs.filter(org => org.region === region);
  }
  if (field) {
    filteredOrgs = filteredOrgs.filter(org => org.fields.includes(field));
  }
  if (orgType) {
    filteredOrgs = filteredOrgs.filter(org => org.type === orgType);
  }
  if (query) {
    filteredOrgs = filteredOrgs.filter(org =>
      org.name.toLowerCase().includes(query) ||
      org.summary.toLowerCase().includes(query) ||
      org.services.some(s => s.toLowerCase().includes(query))
    );
  }

  return HttpResponse.json({
    organizations: filteredOrgs,
    totalCount: filteredOrgs.length,
  });
});


const organizationDetailHandler = http.get('/api/cluster/organizations/:id', ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const organization = organizations.find(org => org.id === id);

  if (organization) {
    // In a real API, you'd return much more detail here
    return HttpResponse.json(organization);
  } else {
    return new HttpResponse(null, { status: 404, statusText: 'Not Found' });
  }
});

const dashboardHandler = http.get('/api/cluster/dashboard', () => {
  return HttpResponse.json({
    kpis: [
      { title: '총 기관 수', value: '128', change: '+5' },
      { title: '진행중인 지원사업', value: '34', change: '-2' },
      { title: '신규 등록 기술', value: '76', change: '+12' },
      { title: '진행중인 기술이전', value: '21', change: '+3' },
    ],
    latestOrgs: [
      { id: 'org-new-1', name: '바이오퀘스트', date: '2024-08-15', status: 'NEW' },
      { id: 'org-update-1', name: '메디퓨처', date: '2024-08-14', status: 'UPDATED' },
      { id: 'org-new-2', name: '셀트리온 전북지사', date: '2024-08-12', status: 'NEW' },
    ],
    latestPolicies: [
        { id: 'pol-new-1', name: '2024년 바이오 R&D 지원사업', date: '2024-08-10', status: 'NEW' },
        { id: 'pol-update-1', name: '혁신성장 지원 프로그램', date: '2024-08-09', status: 'UPDATED' },
        { id: 'pol-new-2', name: '청년 바이오 창업 지원', date: '2024-08-05', status: 'NEW' },
    ]
  });
});

// --- NEWS & EVENTS MOCK DATA ---

const newsDb = [
    { id: 1, title: '전북 바이오 특화단지 유치 성공', summary: '정부가 전북을 바이오 특화단지로 최종 선정했습니다.', content: '상세 내용...', category: 'news', created_at: '2025-08-12T11:00:00Z', sourceName: '전북도청', thumbnailUrl: 'https://picsum.photos/seed/news1/400/225' },
    { id: 2, title: '시스템 점검 안내 (09/01 02:00 ~ 04:00)', summary: '더 나은 서비스 제공을 위해 시스템 정기 점검을 실시합니다.', content: '상세 내용...', category: 'notice', created_at: '2025-08-11T17:00:00Z', sourceName: '관리팀', thumbnailUrl: 'https://picsum.photos/seed/notice1/400/225' },
    { id: 3, title: '익산 국가식품클러스터, K-푸드 전진기지로 발돋움', summary: '익산 국가식품클러스터가 국내외 식품 시장에서 주목받고 있습니다.', content: '상세 내용...', category: 'news', created_at: '2025-08-15T09:00:00Z', sourceName: '농림축산식품부', thumbnailUrl: 'https://picsum.photos/seed/news2/400/225' },
    { id: 4, title: '정읍 방사선융합기술원, 신약 개발 새 지평 열어', summary: '방사선 기술을 이용한 혁신적인 신약 개발에 성공했습니다.', content: '상세 내용...', category: 'news', created_at: '2025-08-14T14:00:00Z', sourceName: '한국원자력연구원', thumbnailUrl: 'https://picsum.photos/seed/news3/400/225' },
    { id: 5, title: '전주 농생명 혁신성장위원회 출범', summary: '전주시가 농생명 산업의 혁신 성장을 이끌기 위한 민관 협력 위원회를 공식 출범시켰습니다.', content: '상세 내용...', category: 'news', created_at: '2025-08-13T10:00:00Z', sourceName: '전주시청', thumbnailUrl: 'https://picsum.photos/seed/news4/400/225' },
    { id: 6, title: '플랫폼 이용약관 개정 안내', summary: '2025년 9월 1일부터 새로운 이용약관이 적용됩니다.', content: '상세 내용...', category: 'notice', created_at: '2025-08-10T00:00:00Z', sourceName: '법무팀', thumbnailUrl: 'https://picsum.photos/seed/notice2/400/225' },
    { id: 7, title: '김제 민간육종연구단지, 글로벌 종자 강국 도약의 발판', summary: '국내 종자 산업의 경쟁력을 세계적인 수준으로 끌어올리고 있습니다.', content: '상세 내용...', category: 'news', created_at: '2025-08-09T11:20:00Z', sourceName: '민간육종연구단지', thumbnailUrl: 'https://picsum.photos/seed/news5/400/225' },
    { id: 8, title: '개인정보처리방침 변경 고지', summary: '개인정보보호법 개정에 따라 개인정보처리방침이 변경됩니다.', content: '상세 내용...', category: 'notice', created_at: '2025-08-08T10:00:00Z', sourceName: '정보보호팀', thumbnailUrl: 'https://picsum.photos/seed/notice3/400/225' },
];

const eventsDb = [
    { id: 1, title: '제12회 국제 바이오산업 컨퍼런스', summary: '글로벌 바이오 산업의 최신 동향과 미래 전망을 논의합니다.', thumbnailUrl: 'https://picsum.photos/seed/event1/400/225', eventStartAt: '2025-09-05T09:00:00Z', eventEndAt: '2025-09-06T18:00:00Z', locationType: 'offline', locationName: '전주 컨벤션센터', host: '전북바이오융합산업진흥원', registerDeadline: '2025-08-31T23:59:59Z', status: '예정', category: 'event' },
    { id: 2, title: 'AI 기반 신약 개발 온라인 세미나', summary: '인공지능을 활용한 신약 개발의 최신 사례와 기술을 소개합니다.', thumbnailUrl: 'https://picsum.photos/seed/event2/400/225', eventStartAt: '2025-08-25T14:00:00Z', eventEndAt: '2025-08-25T16:00:00Z', locationType: 'online', host: '한국생명공학연구원', registerDeadline: '2025-08-24T18:00:00Z', status: '진행중', category: 'event' },
    { id: 3, title: '농생명 기술 투자유치 설명회(IR)', summary: '유망 농생명 기술을 보유한 스타트업 및 중소기업을 위한 투자유치 설명회입니다.', thumbnailUrl: 'https://picsum.photos/seed/event3/400/225', eventStartAt: '2025-08-01T10:00:00Z', eventEndAt: '2025-08-01T17:00:00Z', locationType: 'hybrid', locationName: '전북창조경제혁신센터', host: '농업기술실용화재단', registerDeadline: '2025-07-25T18:00:00Z', status: '마감', category: 'event' },
    { id: 4, title: '제약바이오 채용박람회 2024', summary: '국내 최대 규모의 제약바이오 분야 채용 박람회.', thumbnailUrl: 'https://picsum.photos/seed/event4/400/225', eventStartAt: '2025-09-20T10:00:00Z', eventEndAt: '2025-09-21T17:00:00Z', locationType: 'offline', locationName: '코엑스, 서울', host: '한국제약바이오협회', registerDeadline: '2025-09-15T18:00:00Z', status: '예정', category: 'event' },
    { id: 5, title: '스마트팜 기술 워크숍', summary: '최신 스마트팜 기술 동향 및 적용 사례 공유.', thumbnailUrl: 'https://picsum.photos/seed/event5/400/225', eventStartAt: '2025-10-05T13:00:00Z', eventEndAt: '2025-10-05T18:00:00Z', locationType: 'offline', locationName: '전북농업기술원', host: '전북농업기술원', registerDeadline: '2025-10-01T18:00:00Z', status: '예정', category: 'event' },
];


const newsHandler = http.get('/api/news', ({ request }) => {
  const url = new URL(request.url);
  const limit = url.searchParams.get('limit');
  const data = limit ? newsDb.slice(0, Number(limit)) : newsDb;
  return HttpResponse.json(data);
});

const eventsHandler = http.get('/api/events', ({ request }) => {
  const url = new URL(request.url);
  const limit = url.searchParams.get('limit');
  const data = limit ? eventsDb.slice(0, Number(limit)) : eventsDb;
  return HttpResponse.json(data);
});


const supportProgramsDb = [
    {
        id: "sp_001",
        title: "2024년 바이오 스타트업 인큐베이팅 프로그램",
        organization: "J-Bio-Hub",
        description: "초기 바이오 스타트업을 위한 사무공간, 멘토링, 시드 투자 지원.",
        startDate: "2024-09-01",
        endDate: "2025-03-01",
        status: "UPCOMING",
        category: "창업지원",
        supportType: ["자금", "멘토링", "인프라"],
        targetCompany: "예비창업자 및 3년 미만 스타트업",
        externalUrl: "https://jbiohub.or.kr/support/1",
        createdAt: "2024-07-15T10:00:00Z",
    },
    {
        id: "sp_002",
        title: "글로벌 진출 지원사업",
        organization: "전북테크노파크",
        description: "해외 전시회 참가, 바이어 매칭, 수출 컨설팅 지원.",
        startDate: "2024-06-01",
        endDate: "2024-11-30",
        status: "ONGOING",
        category: "수출지원",
        supportType: ["컨설팅", "마케팅"],
        targetCompany: "수출 유망 중소기업",
        externalUrl: "https://jbtp.or.kr/support/2",
        createdAt: "2024-05-20T09:00:00Z",
    },
];

const supportProgramsHandler = http.get('/api/support-programs', ({ request }) => {
  const url = new URL(request.url);
  const limit = url.searchParams.get('limit');
  const data = limit ? supportProgramsDb.slice(0, Number(limit)) : supportProgramsDb;
  return HttpResponse.json({
    data: data,
    pagination: {
        page: 1,
        limit: limit ? Number(limit) : 20,
        total: data.length,
        totalPages: 1,
        hasNext: false,
        hasPrev: false,
    }
  });
});

const technologiesDb = [
    {
        id: "tech_001",
        title: "고효율 미생물 연료전지 개발",
        summary: "폐수를 활용하여 전기를 생산하는 친환경 고효율 미생물 연료전지 기술. 기존 기술 대비 전력 생산 효율 30% 향상.",
        organization: "전북대학교 신재생에너지연구소",
        patentNumber: "10-2024-0123456",
        applicationDate: "2024-08-01",
        category: "환경/에너지",
        transferable: true,
        thumbnail: "https://picsum.photos/seed/tech1/400/300",
        createdAt: "2024-09-15T10:00:00Z"
    },
    {
        id: "tech_002",
        title: "AI 기반 암 진단 보조 소프트웨어",
        summary: "의료 영상을 AI로 분석하여 초기 단계의 암을 95% 정확도로 판별하는 진단 보조 소프트웨어.",
        organization: "(주)메디컬AI",
        patentNumber: "10-2025-0011223",
        applicationDate: "2025-01-20",
        category: "의료/헬스케어",
        transferable: true,
        thumbnail: "https://picsum.photos/seed/tech2/400/300",
        createdAt: "2025-02-28T14:30:00Z"
    },
    {
        id: "tech_003",
        title: "스마트팜용 복합 환경제어 시스템",
        summary: "온도, 습도, CO2 농도, 광량 등을 통합 제어하여 작물 생산성을 극대화하는 IoT 기반 스마트팜 솔루션.",
        organization: "농업기술실용화재단",
        patentNumber: null,
        applicationDate: null,
        category: "농생명",
        transferable: false,
        thumbnail: "https://picsum.photos/seed/tech3/400/300",
        createdAt: "2025-05-10T11:00:00Z"
    },
];

const technologiesHandler = http.get('/api/tech-summary/list', ({ request }) => {
  const url = new URL(request.url);
  const page = Number(url.searchParams.get('page') || '1');
  const limit = Number(url.searchParams.get('limit') || '10');
  const start = (page - 1) * limit;
  const end = start + limit;
  const data = technologiesDb.slice(start, end);

  return HttpResponse.json({
    data: data,
    pagination: {
        page: page,
        limit: limit,
        total: technologiesDb.length,
        totalPages: Math.ceil(technologiesDb.length / limit),
        hasNext: end < technologiesDb.length,
        hasPrev: page > 1,
    }
  });
});

const incubationCentersDb = [
    {
        id: "ic_001",
        name: "전북대학교 창업보육센터",
        totalRooms: 50,
        vacantRooms: 5,
        occupancyRate: 0.90,
        address: "전라북도 전주시 덕진구 백제대로 567",
        contact: "063-270-1234",
        manager: "김철수 센터장",
        location: { latitude: 35.8464, longitude: 127.1293 }
    },
    {
        id: "ic_002",
        name: "원광대학교 창업보육센터",
        totalRooms: 40,
        vacantRooms: 0,
        occupancyRate: 1.0,
        address: "전라북도 익산시 익산대로 460",
        contact: "063-850-5678",
        manager: "박영희 매니저",
        location: { latitude: 35.9687, longitude: 126.9575 }
    },
    {
        id: "ic_003",
        name: "전주정보문화산업진흥원 (JICA)",
        totalRooms: 30,
        vacantRooms: 8,
        occupancyRate: 0.73,
        address: "전라북도 전주시 완산구 아중로 225",
        contact: "063-281-4114",
        manager: "이진아 팀장",
        location: { latitude: 35.8227, longitude: 127.1643 }
    },
];

const incubationCentersHandler = http.get('/api/incubation-centers', ({ request }) => {
  const url = new URL(request.url);
  const limit = Number(url.searchParams.get('limit'));
  const data = limit ? incubationCentersDb.slice(0, limit) : incubationCentersDb;
  return HttpResponse.json(data);
});

const supportProgramDetailHandler = http.get('/api/support-programs/:id', ({ params }) => {
  const { id } = params;
  const program = supportProgramsDb.find(p => p.id === id);
  if (program) {
    return HttpResponse.json(program);
  } else {
    return new HttpResponse(null, { status: 404 });
  }
});

const companiesDb = [
    {
        "id": "comp-001",
        "name": "(주) 국민한빛기술 랩",
        "logoUrl": "https://picsum.photos/seed/comp1/200/200",
        "industry": "레드 바이오",
        "region": "아산시",
        "foundedYear": 2001,
        "sizeCategory": "Large",
        "employees": 381,
        "description": "대기업으로서 신약개발, 세포치료 분야를 선도합니다. 포용적인 융합 컨텐츠",
        "products": [
            "신약개발",
            "세포치료"
        ],
        "achievements": [
            "더 작아진 스며든 시간화",
            "효율적인 방향 펌웨어",
            "재정렬 멀티미디어 패러다임"
        ],
        "patents": [],
        "contact": {
            "name": "김순자",
            "email": "hanjunseo@example.net",
            "phone": "017-298-2508"
        },
        "websiteUrl": "https://yu.com/",
        "relatedArticles": []
    },
    {
        "id": "comp-002",
        "name": "주식회사 한강아름제조 제약",
        "logoUrl": "https://picsum.photos/seed/comp2/200/200",
        "industry": "레드 바이오",
        "region": "평창군",
        "foundedYear": 2016,
        "sizeCategory": "Startup",
        "employees": 355,
        "description": "스타트업으로서 신약개발, 세포치료 분야를 선도합니다. 혼합된 직감 전자 서비스",
        "products": [
            "신약개발",
            "세포치료"
        ],
        "achievements": [
            "미래가 보장된 중립형 인터페이스",
            "확장된 밀착 태도"
        ],
        "patents": [
            "KR-10-2022-656615"
        ],
        "contact": {
            "name": "이성훈",
            "email": "baggeonu@example.net",
            "phone": "062-425-3942"
        },
        "websiteUrl": "https://yuhanhoesa.net/",
        "relatedArticles": []
    },
    {
        "id": "comp-003",
        "name": "(주) 하나 사이언스",
        "logoUrl": "https://picsum.photos/seed/comp3/200/200",
        "industry": "화이트 바이오",
        "region": "이천시",
        "foundedYear": 2015,
        "sizeCategory": "SME",
        "employees": 97,
        "description": "중견기업으로서 바이오플라스틱 분야를 선도합니다. 변화된 전략적 커뮤니티",
        "products": [
            "바이오플라스틱"
        ],
        "achievements": [],
        "patents": [
            "KR-10-2019-100812",
            "KR-10-2020-281273"
        ],
        "contact": {
            "name": "이정호",
            "email": "seonghuni@example.com",
            "phone": "016-338-9809"
        },
        "websiteUrl": "http://jusighoesa.org/",
        "relatedArticles": []
    },
    {
        "id": "comp-004",
        "name": "유한회사 조선나루유통 제약",
        "logoUrl": "https://picsum.photos/seed/comp4/200/200",
        "industry": "화이트 바이오",
        "region": "가평군",
        "foundedYear": 2021,
        "sizeCategory": "Large",
        "employees": 284,
        "description": "대기업으로서 산업효소, 바이오연료, 바이오플라스틱 분야를 선도합니다. 재평가된 가상 컨텐츠",
        "products": [
            "산업효소",
            "바이오연료",
            "바이오플라스틱"
        ],
        "achievements": [
            "더 작아진 객체 지향적 관리자"
        ],
        "patents": [],
        "contact": {
            "name": "문옥순",
            "email": "seohyeon70@example.com",
            "phone": "018-839-1962"
        },
        "websiteUrl": "http://ju.com/",
        "relatedArticles": []
    },
    {
        "id": "comp-005",
        "name": "(유) 백제스타소프트 제약",
        "logoUrl": "https://picsum.photos/seed/comp5/200/200",
        "industry": "화이트 바이오",
        "region": "구리시",
        "foundedYear": 2020,
        "sizeCategory": "SME",
        "employees": 141,
        "description": "중견기업으로서 바이오연료 분야를 선도합니다. 폭발하는 선구적 앱",
        "products": [
            "바이오연료"
        ],
        "achievements": [
            "관리된 결정 회로"
        ],
        "patents": [
            "KR-10-2020-256059",
            "KR-10-2022-340778"
        ],
        "contact": {
            "name": "오영순",
            "email": "seoyungweon@example.com",
            "phone": "032-837-1478"
        },
        "websiteUrl": "http://ju.com/",
        "relatedArticles": []
    },
    {
        "id": "comp-006",
        "name": "주식회사 네오그룹 바이오",
        "logoUrl": "https://picsum.photos/seed/comp6/200/200",
        "industry": "화이트 바이오",
        "region": "원주시",
        "foundedYear": 2000,
        "sizeCategory": "SME",
        "employees": 353,
        "description": "중견기업으로서 산업효소, 바이오연료, 바이오플라스틱 분야를 선도합니다. 통합된 전략적 솔루션",
        "products": [
            "산업효소",
            "바이오연료",
            "바이오플라스틱"
        ],
        "achievements": [],
        "patents": [
            "KR-10-2024-743107"
        ],
        "contact": {
            "name": "배지은",
            "email": "jno@example.com",
            "phone": "063-996-3016"
        },
        "websiteUrl": "http://yuhanhoesa.com/",
        "relatedArticles": []
    },
    {
        "id": "comp-007",
        "name": "(주) 중앙 테크",
        "logoUrl": "https://picsum.photos/seed/comp7/200/200",
        "industry": "레드 바이오",
        "region": "춘천시",
        "foundedYear": 2014,
        "sizeCategory": "SME",
        "employees": 74,
        "description": "중견기업으로서 백신, 신약개발 분야를 선도합니다. 변화무쌍한 창의적 스키마",
        "products": [
            "백신",
            "신약개발"
        ],
        "achievements": [
            "융합력있는 분리된 허브"
        ],
        "patents": [
            "KR-10-2024-901300"
        ],
        "contact": {
            "name": "이지후",
            "email": "qcoe@example.org",
            "phone": "010-7148-2207"
        },
        "websiteUrl": "https://jusighoesa.kr/",
        "relatedArticles": []
    },
    {
        "id": "comp-008",
        "name": "(유) 나루시스템 테크",
        "logoUrl": "https://picsum.photos/seed/comp8/200/200",
        "industry": "레드 바이오",
        "region": "안양시 동안구",
        "foundedYear": 2009,
        "sizeCategory": "Startup",
        "employees": 126,
        "description": "스타트업으로서 백신 분야를 선도합니다. 최대화된 크로스 플랫폼 솔루션",
        "products": [
            "백신"
        ],
        "achievements": [
            "사용자 중심의 비대칭 공구",
            "다중 주파수 취약점 융합",
            "트리플 버퍼 비대칭 데이터베이스"
        ],
        "patents": [
            "KR-10-2019-516867"
        ],
        "contact": {
            "name": "김성훈",
            "email": "yeji04@example.net",
            "phone": "031-335-4893"
        },
        "websiteUrl": "https://www.yuhanhoesa.org/",
        "relatedArticles": []
    },
    {
        "id": "comp-009",
        "name": "유한회사 비전국민연구소 테크",
        "logoUrl": "https://picsum.photos/seed/comp9/200/200",
        "industry": "레드 바이오",
        "region": "철원군",
        "foundedYear": 2015,
        "sizeCategory": "Large",
        "employees": 93,
        "description": "대기업으로서 신약개발, 세포치료, 백신 분야를 선도합니다. 혁명적인 반투명 전자 비즈니스",
        "products": [
            "신약개발",
            "세포치료",
            "백신"
        ],
        "achievements": [
            "자가 이용 가능한 6세대 예산 관리",
            "인체 공학적인 최대화 구조체",
            "크로스 그룹 실시간 에뮬레이션"
        ],
        "patents": [
            "KR-10-2020-392006"
        ],
        "contact": {
            "name": "허미영",
            "email": "ieunju@example.org",
            "phone": "031-308-7773"
        },
        "websiteUrl": "http://www.ju.org/",
        "relatedArticles": []
    },
    {
        "id": "comp-010",
        "name": "(주) 백제개발공사 테크",
        "logoUrl": "https://picsum.photos/seed/comp10/200/200",
        "industry": "화이트 바이오",
        "region": "철원군",
        "foundedYear": 2001,
        "sizeCategory": "Large",
        "employees": 397,
        "description": "대기업으로서 산업효소 분야를 선도합니다. 재평가된 전자 비즈니스 포탈",
        "products": [
            "산업효소"
        ],
        "achievements": [],
        "patents": [
            "KR-10-2022-330321",
            "KR-10-2024-694213"
        ],
        "contact": {
            "name": "한성수",
            "email": "yugyeonghyi@example.com",
            "phone": "044-060-4123"
        },
        "websiteUrl": "http://yuhanhoesa.org/",
        "relatedArticles": []
    },
    {
        "id": "comp-011",
        "name": "(주) 미래 테크",
        "logoUrl": "https://picsum.photos/seed/comp11/200/200",
        "industry": "그린 바이오",
        "region": "영월군",
        "foundedYear": 2000,
        "sizeCategory": "Startup",
        "employees": 31,
        "description": "스타트업으로서 스마트팜, 종자개량, 미생물비료 분야를 선도합니다. 깨끗한 전략적 시너지",
        "products": [
            "스마트팜",
            "종자개량",
            "미생물비료"
        ],
        "achievements": [
            "수익에 중점을 둔 환경 친화적 그래픽 인터페이스",
            "객체 기반의 무관용 프로토콜",
            "트리플 버퍼 비대칭 정책"
        ],
        "patents": [
            "KR-10-2024-578596",
            "KR-10-2020-267337"
        ],
        "contact": {
            "name": "김승현",
            "email": "nogwangsu@example.org",
            "phone": "055-042-2980"
        },
        "websiteUrl": "https://www.yu.kr/",
        "relatedArticles": []
    },
    {
        "id": "comp-012",
        "name": "유한회사 비전은행 제약",
        "logoUrl": "https://picsum.photos/seed/comp12/200/200",
        "industry": "그린 바이오",
        "region": "양평군",
        "foundedYear": 2007,
        "sizeCategory": "Startup",
        "employees": 86,
        "description": "스타트업으로서 종자개량, 미생물비료 분야를 선도합니다. 최대화된 부자 아키텍쳐",
        "products": [
            "종자개량",
            "미생물비료"
        ],
        "achievements": [],
        "patents": [
            "KR-10-2020-480831"
        ],
        "contact": {
            "name": "김예준",
            "email": "jihye05@example.net",
            "phone": "044-466-5635"
        },
        "websiteUrl": "http://www.yuhanhoesa.com/",
        "relatedArticles": []
    },
    {
        "id": "comp-013",
        "name": "주식회사 한강테크 랩",
        "logoUrl": "https://picsum.photos/seed/comp13/200/200",
        "industry": "화이트 바이오",
        "region": "영월군",
        "foundedYear": 2013,
        "sizeCategory": "Startup",
        "employees": 379,
        "description": "스타트업으로서 산업효소, 바이오플라스틱 분야를 선도합니다. 포용적인 반투명 매트릭스",
        "products": [
            "산업효소",
            "바이오플라스틱"
        ],
        "achievements": [
            "변경 가능한 클라이언트-서버 웹 사이트",
            "오픈소스 컨텐츠 기반 프로토콜",
            "특별한 중립형 벤치마크"
        ],
        "patents": [
            "KR-10-2019-818071",
            "KR-10-2020-400721"
        ],
        "contact": {
            "name": "이명자",
            "email": "gimseoyeong@example.net",
            "phone": "019-183-6049"
        },
        "websiteUrl": "http://www.jusighoesa.com/",
        "relatedArticles": []
    },
    {
        "id": "comp-014",
        "name": "(유) 마음발해신문 바이오",
        "logoUrl": "https://picsum.photos/seed/comp14/200/200",
        "industry": "화이트 바이오",
        "region": "보은군",
        "foundedYear": 2008,
        "sizeCategory": "Startup",
        "employees": 422,
        "description": "스타트업으로서 바이오플라스틱, 바이오연료 분야를 선도합니다. 최대화된 자기장 전자화폐",
        "products": [
            "바이오플라스틱",
            "바이오연료"
        ],
        "achievements": [
            "올바른 사이즈의 클라이언트 단 엔진"
        ],
        "patents": [],
        "contact": {
            "name": "조광수",
            "email": "gimjihu@example.net",
            "phone": "033-489-8548"
        },
        "websiteUrl": "https://yu.org/",
        "relatedArticles": []
    },
    {
        "id": "comp-015",
        "name": "주식회사 마음 랩",
        "logoUrl": "https://picsum.photos/seed/comp15/200/200",
        "industry": "그린 바이오",
        "region": "횡성군",
        "foundedYear": 2019,
        "sizeCategory": "Startup",
        "employees": 500,
        "description": "스타트업으로서 스마트팜, 미생물비료 분야를 선도합니다. 문화적인 자기장 전자화폐",
        "products": [
            "스마트팜",
            "미생물비료"
        ],
        "achievements": [
            "더 커진 클라이언트 단 예산 관리",
            "숙련된 실시간 도전",
            "안정적인 하이브리드 제품"
        ],
        "patents": [],
        "contact": {
            "name": "이지아",
            "email": "coejia@example.com",
            "phone": "052-240-5975"
        },
        "websiteUrl": "https://jusighoesa.org/",
        "relatedArticles": []
    },
    {
        "id": "comp-016",
        "name": "(유) 첨단 바이오",
        "logoUrl": "https://picsum.photos/seed/comp16/200/200",
        "industry": "그린 바이오",
        "region": "부천시 오정구",
        "foundedYear": 2022,
        "sizeCategory": "SME",
        "employees": 195,
        "description": "중견기업으로서 미생물비료, 스마트팜, 종자개량 분야를 선도합니다. 다용도의 글로벌 방법론",
        "products": [
            "미생물비료",
            "스마트팜",
            "종자개량"
        ],
        "achievements": [
            "인체 공학적인 국가적 암호화",
            "변경 가능한 안정적 어플리케이션",
            "객체 기반의 멀티미디어 분석"
        ],
        "patents": [
            "KR-10-2019-111549"
        ],
        "contact": {
            "name": "이상현",
            "email": "miyeongi@example.net",
            "phone": "033-930-1559"
        },
        "websiteUrl": "http://www.ju.com/",
        "relatedArticles": []
    },
    {
        "id": "comp-017",
        "name": "주식회사 겨레인포제조 바이오",
        "logoUrl": "https://picsum.photos/seed/comp17/200/200",
        "industry": "화이트 바이오",
        "region": "고양시",
        "foundedYear": 2000,
        "sizeCategory": "Large",
        "employees": 178,
        "description": "대기업으로서 바이오연료, 산업효소, 바이오플라스틱 분야를 선도합니다. 제작된 통합 파트너쉽",
        "products": [
            "바이오연료",
            "산업효소",
            "바이오플라스틱"
        ],
        "achievements": [],
        "patents": [
            "KR-10-2023-785165",
            "KR-10-2023-736258"
        ],
        "contact": {
            "name": "최영식",
            "email": "gyeongsu58@example.net",
            "phone": "041-454-4102"
        },
        "websiteUrl": "https://yu.kr/",
        "relatedArticles": []
    },
    {
        "id": "comp-018",
        "name": "유한회사 마루전자 사이언스",
        "logoUrl": "https://picsum.photos/seed/comp18/200/200",
        "industry": "그린 바이오",
        "region": "논산시",
        "foundedYear": 2017,
        "sizeCategory": "SME",
        "employees": 318,
        "description": "중견기업으로서 스마트팜 분야를 선도합니다. 제작된 턴키 플랫폼",
        "products": [
            "스마트팜"
        ],
        "achievements": [],
        "patents": [
            "KR-10-2020-992840"
        ],
        "contact": {
            "name": "김예진",
            "email": "seongho21@example.net",
            "phone": "031-743-1693"
        },
        "websiteUrl": "https://www.ju.com/",
        "relatedArticles": []
    },
    {
        "id": "comp-019",
        "name": "(유) 제나 사이언스",
        "logoUrl": "https://picsum.photos/seed/comp19/200/200",
        "industry": "그린 바이오",
        "region": "철원군",
        "foundedYear": 2021,
        "sizeCategory": "SME",
        "employees": 70,
        "description": "중견기업으로서 미생물비료 분야를 선도합니다. 제작된 다음 세대 스키마",
        "products": [
            "미생물비료"
        ],
        "achievements": [
            "크로스 그룹 클라이언트 단 공구"
        ],
        "patents": [
            "KR-10-2020-242273",
            "KR-10-2020-646360"
        ],
        "contact": {
            "name": "김정희",
            "email": "fhwang@example.org",
            "phone": "051-447-6418"
        },
        "websiteUrl": "https://yu.com/",
        "relatedArticles": []
    },
    {
        "id": "comp-020",
        "name": "(유) 첨단네트워크 제약",
        "logoUrl": "https://picsum.photos/seed/comp20/200/200",
        "industry": "화이트 바이오",
        "region": "고양시 덕양구",
        "foundedYear": 2019,
        "sizeCategory": "Large",
        "employees": 241,
        "description": "대기업으로서 산업효소, 바이오연료, 바이오플라스틱 분야를 선도합니다. 엔지니어 끈끈한 전자 비즈니스",
        "products": [
            "산업효소",
            "바이오연료",
            "바이오플라스틱"
        ],
        "achievements": [
            "숙련된 3세대 환경"
        ],
        "patents": [],
        "contact": {
            "name": "김정호",
            "email": "yejingang@example.net",
            "phone": "031-807-4607"
        },
        "websiteUrl": "http://www.yu.kr/",
        "relatedArticles": []
    },
    {
        "id": "comp-021",
        "name": "(주) 월드소프트 사이언스",
        "logoUrl": "https://picsum.photos/seed/comp21/200/200",
        "industry": "레드 바이오",
        "region": "청주시 청원구",
        "foundedYear": 2008,
        "sizeCategory": "Startup",
        "employees": 142,
        "description": "스타트업으로서 신약개발 분야를 선도합니다. 신속한 오픈 소스 전자 비즈니스",
        "products": [
            "신약개발"
        ],
        "achievements": [
            "공개 아키텍쳐 모듈형 모델",
            "진보적인 로컬 코어"
        ],
        "patents": [
            "KR-10-2018-804862"
        ],
        "contact": {
            "name": "이혜진",
            "email": "jaehyeoncoe@example.org",
            "phone": "061-921-0232"
        },
        "websiteUrl": "http://www.ju.com/",
        "relatedArticles": []
    },
    {
        "id": "comp-022",
        "name": "주식회사 모두 바이오",
        "logoUrl": "https://picsum.photos/seed/comp22/200/200",
        "industry": "레드 바이오",
        "region": "논산시",
        "foundedYear": 2010,
        "sizeCategory": "Startup",
        "employees": 361,
        "description": "스타트업으로서 백신, 신약개발, 세포치료 분야를 선도합니다. 재발명된 효율적 전자 비즈니스",
        "products": [
            "백신",
            "신약개발",
            "세포치료"
        ],
        "achievements": [
            "모니터링되는 해답 기반 공개 시스템",
            "안정적인 최적화된 정의"
        ],
        "patents": [
            "KR-10-2023-566450"
        ],
        "contact": {
            "name": "손민지",
            "email": "cgim@example.org",
            "phone": "018-367-6486"
        },
        "websiteUrl": "http://www.ju.kr/",
        "relatedArticles": []
    },
    {
        "id": "comp-023",
        "name": "주식회사 윈드테크 테크",
        "logoUrl": "https://picsum.photos/seed/comp23/200/200",
        "industry": "레드 바이오",
        "region": "안산시 상록구",
        "foundedYear": 2009,
        "sizeCategory": "SME",
        "employees": 236,
        "description": "중견기업으로서 세포치료, 신약개발 분야를 선도합니다. 변화된 철벽 파트너쉽",
        "products": [
            "세포치료",
            "신약개발"
        ],
        "achievements": [],
        "patents": [
            "KR-10-2024-195347"
        ],
        "contact": {
            "name": "김지현",
            "email": "lgim@example.net",
            "phone": "063-174-8819"
        },
        "websiteUrl": "http://yu.com/",
        "relatedArticles": []
    },
    {
        "id": "comp-024",
        "name": "주식회사 글로벌가람랩스 제약",
        "logoUrl": "https://picsum.photos/seed/comp24/200/200",
        "industry": "화이트 바이오",
        "region": "공주시",
        "foundedYear": 2013,
        "sizeCategory": "Startup",
        "employees": 481,
        "description": "스타트업으로서 바이오연료, 바이오플라스틱, 산업효소 분야를 선도합니다. 엔지니어 강력한 어플리케이션",
        "products": [
            "바이오연료",
            "바이오플라스틱",
            "산업효소"
        ],
        "achievements": [
            "재정렬 수요 중심 배열",
            "다용도 로컬 함수",
            "공개 아키텍쳐 밀착 아키텍쳐"
        ],
        "patents": [],
        "contact": {
            "name": "김서준",
            "email": "ieunyeong@example.net",
            "phone": "032-061-0090"
        },
        "websiteUrl": "https://www.yuhanhoesa.com/",
        "relatedArticles": []
    },
    {
        "id": "comp-025",
        "name": "주식회사 겨레 제약",
        "logoUrl": "https://picsum.photos/seed/comp25/200/200",
        "industry": "레드 바이오",
        "region": "안산시 단원구",
        "foundedYear": 2021,
        "sizeCategory": "SME",
        "employees": 391,
        "description": "중견기업으로서 신약개발 분야를 선도합니다. 엔지니어 창의적 전자화폐",
        "products": [
            "신약개발"
        ],
        "achievements": [
            "인체 공학적인 휴대형 벤치마크",
            "모니터링되는 웹 사용 가능 안내 창구",
            "1:1 멀티 태스킹 어댑터"
        ],
        "patents": [
            "KR-10-2024-452454",
            "KR-10-2021-704505"
        ],
        "contact": {
            "name": "백영환",
            "email": "boramhwang@example.net",
            "phone": "031-566-1621"
        },
        "websiteUrl": "http://jusighoesa.com/",
        "relatedArticles": []
    },
    {
        "id": "comp-026",
        "name": "(유) 아름나루시스템 테크",
        "logoUrl": "https://picsum.photos/seed/comp26/200/200",
        "industry": "그린 바이오",
        "region": "안산시 단원구",
        "foundedYear": 2001,
        "sizeCategory": "Startup",
        "employees": 489,
        "description": "스타트업으로서 종자개량, 미생물비료, 스마트팜 분야를 선도합니다. 자율적인 온라인 쇼핑 전자 비즈니스",
        "products": [
            "종자개량",
            "미생물비료",
            "스마트팜"
        ],
        "achievements": [
            "사용자 중심의 방향 벤치마크",
            "독보적인 근본적 시간화"
        ],
        "patents": [],
        "contact": {
            "name": "고성민",
            "email": "ccoe@example.org",
            "phone": "054-867-9119"
        },
        "websiteUrl": "http://jusighoesa.net/",
        "relatedArticles": []
    },
    {
        "id": "comp-027",
        "name": "(유) 원더 사이언스",
        "logoUrl": "https://picsum.photos/seed/comp27/200/200",
        "industry": "레드 바이오",
        "region": "연천군",
        "foundedYear": 2020,
        "sizeCategory": "Large",
        "employees": 263,
        "description": "대기업으로서 신약개발 분야를 선도합니다. 신속한 날카로운 인프라",
        "products": [
            "신약개발"
        ],
        "achievements": [
            "공개 키 다음 세대 관리자",
            "크로스 그룹 무해한 분석",
            "가상 24시간 서비스 창구"
        ],
        "patents": [],
        "contact": {
            "name": "지수빈",
            "email": "nyun@example.net",
            "phone": "033-259-7791"
        },
        "websiteUrl": "https://yu.org/",
        "relatedArticles": []
    },
    {
        "id": "comp-028",
        "name": "(유) 첨단테크 바이오",
        "logoUrl": "https://picsum.photos/seed/comp28/200/200",
        "industry": "레드 바이오",
        "region": "서산시",
        "foundedYear": 2008,
        "sizeCategory": "Large",
        "employees": 251,
        "description": "대기업으로서 세포치료, 백신 분야를 선도합니다. 신속한 부자 전자시장",
        "products": [
            "세포치료",
            "백신"
        ],
        "achievements": [
            "안전한 해답 기반 정의",
            "더 작아진 헌신적 전략",
            "융합력있는 잘 모듈화된 태도"
        ],
        "patents": [
            "KR-10-2019-203388"
        ],
        "contact": {
            "name": "김건우",
            "email": "jiai@example.com",
            "phone": "063-791-8318"
        },
        "websiteUrl": "http://ju.kr/",
        "relatedArticles": []
    },
    {
        "id": "comp-029",
        "name": "(주) 보람제조 테크",
        "logoUrl": "https://picsum.photos/seed/comp29/200/200",
        "industry": "화이트 바이오",
        "region": "안양시 동안구",
        "foundedYear": 2011,
        "sizeCategory": "Large",
        "employees": 122,
        "description": "대기업으로서 바이오플라스틱, 바이오연료 분야를 선도합니다. 합성 B2C 패러다임",
        "products": [
            "바이오플라스틱",
            "바이오연료"
        ],
        "achievements": [],
        "patents": [
            "KR-10-2023-892995"
        ],
        "contact": {
            "name": "심도현",
            "email": "juweonhwang@example.net",
            "phone": "042-160-4863"
        },
        "websiteUrl": "http://www.yu.net/",
        "relatedArticles": []
    },
    {
        "id": "comp-030",
        "name": "(유) 라온 랩",
        "logoUrl": "https://picsum.photos/seed/comp30/200/200",
        "industry": "레드 바이오",
        "region": "고성군",
        "foundedYear": 2021,
        "sizeCategory": "SME",
        "employees": 352,
        "description": "중견기업으로서 신약개발, 세포치료, 백신 분야를 선도합니다. 큰 고사양 스키마",
        "products": [
            "신약개발",
            "세포치료",
            "백신"
        ],
        "achievements": [
            "공개 아키텍쳐 백그라운드 아카이브"
        ],
        "patents": [],
        "contact": {
            "name": "김성훈",
            "email": "ogja26@example.net",
            "phone": "031-767-3861"
        },
        "websiteUrl": "https://www.ju.kr/",
        "relatedArticles": []
    },
    {
        "id": "comp-031",
        "name": "유한회사 네오신문 제약",
        "logoUrl": "https://picsum.photos/seed/comp31/200/200",
        "industry": "화이트 바이오",
        "region": "부천시 소사구",
        "foundedYear": 2000,
        "sizeCategory": "Startup",
        "employees": 110,
        "description": "스타트업으로서 바이오연료, 산업효소 분야를 선도합니다. 시각적인 무결점 전자화폐",
        "products": [
            "바이오연료",
            "산업효소"
        ],
        "achievements": [
            "다용도 24시간 에뮬레이션"
        ],
        "patents": [
            "KR-10-2023-512642",
            "KR-10-2018-799256"
        ],
        "contact": {
            "name": "김정순",
            "email": "jihunbag@example.com",
            "phone": "061-303-3709"
        },
        "websiteUrl": "https://ju.com/",
        "relatedArticles": []
    },
    {
        "id": "comp-032",
        "name": "(유) 하나정보통신 제약",
        "logoUrl": "https://picsum.photos/seed/comp32/200/200",
        "industry": "화이트 바이오",
        "region": "태백시",
        "foundedYear": 2002,
        "sizeCategory": "Startup",
        "employees": 360,
        "description": "스타트업으로서 바이오플라스틱, 산업효소 분야를 선도합니다. 웅장한 턴키 전자 비즈니스",
        "products": [
            "바이오플라스틱",
            "산업효소"
        ],
        "achievements": [],
        "patents": [],
        "contact": {
            "name": "김정웅",
            "email": "abaeg@example.net",
            "phone": "043-560-6977"
        },
        "websiteUrl": "https://www.ju.kr/",
        "relatedArticles": []
    },
    {
        "id": "comp-033",
        "name": "유한회사 가람미래플랫폼 제약",
        "logoUrl": "https://picsum.photos/seed/comp33/200/200",
        "industry": "레드 바이오",
        "region": "용인시 기흥구",
        "foundedYear": 2015,
        "sizeCategory": "SME",
        "employees": 34,
        "description": "중견기업으로서 백신 분야를 선도합니다. 자율적인 창조적 스키마",
        "products": [
            "백신"
        ],
        "achievements": [],
        "patents": [
            "KR-10-2022-172885"
        ],
        "contact": {
            "name": "최선영",
            "email": "ogjasim@example.org",
            "phone": "064-723-1877"
        },
        "websiteUrl": "http://yu.kr/",
        "relatedArticles": []
    },
    {
        "id": "comp-034",
        "name": "(유) 브레인첨단항공 제약",
        "logoUrl": "https://picsum.photos/seed/comp34/200/200",
        "industry": "그린 바이오",
        "region": "연천군",
        "foundedYear": 2018,
        "sizeCategory": "SME",
        "employees": 334,
        "description": "중견기업으로서 종자개량, 스마트팜, 미생물비료 분야를 선도합니다. 폭발하는 전자 비즈니스 매트릭스",
        "products": [
            "종자개량",
            "스마트팜",
            "미생물비료"
        ],
        "achievements": [],
        "patents": [],
        "contact": {
            "name": "이예진",
            "email": "jeongho37@example.net",
            "phone": "041-645-5241"
        },
        "websiteUrl": "http://www.yuhanhoesa.org/",
        "relatedArticles": []
    },
    {
        "id": "comp-035",
        "name": "유한회사 겨레중앙항공 바이오",
        "logoUrl": "https://picsum.photos/seed/comp35/200/200",
        "industry": "화이트 바이오",
        "region": "양주시",
        "foundedYear": 2003,
        "sizeCategory": "Startup",
        "employees": 479,
        "description": "스타트업으로서 바이오연료 분야를 선도합니다. 시각적인 글로벌 인프라",
        "products": [
            "바이오연료"
        ],
        "achievements": [
            "낮은 그리드 가능 서비스 창구",
            "최전방 해답 기반 공구"
        ],
        "patents": [],
        "contact": {
            "name": "박서영",
            "email": "fi@example.org",
            "phone": "010-3275-3001"
        },
        "websiteUrl": "http://jusighoesa.net/",
        "relatedArticles": []
    },
    {
        "id": "comp-036",
        "name": "(주) 글로벌 제약",
        "logoUrl": "https://picsum.photos/seed/comp36/200/200",
        "industry": "화이트 바이오",
        "region": "춘천시",
        "foundedYear": 2009,
        "sizeCategory": "Startup",
        "employees": 324,
        "description": "스타트업으로서 산업효소, 바이오연료, 바이오플라스틱 분야를 선도합니다. 배열적인 온라인 쇼핑 아키텍쳐",
        "products": [
            "산업효소",
            "바이오연료",
            "바이오플라스틱"
        ],
        "achievements": [],
        "patents": [],
        "contact": {
            "name": "박영진",
            "email": "seongsu08@example.net",
            "phone": "054-547-0675"
        },
        "websiteUrl": "http://yuhanhoesa.com/",
        "relatedArticles": []
    },
    {
        "id": "comp-037",
        "name": "유한회사 넥스트 바이오",
        "logoUrl": "https://picsum.photos/seed/comp37/200/200",
        "industry": "레드 바이오",
        "region": "청주시 서원구",
        "foundedYear": 2009,
        "sizeCategory": "SME",
        "employees": 140,
        "description": "중견기업으로서 세포치료 분야를 선도합니다. 웅장한 백 엔드 주파수",
        "products": [
            "세포치료"
        ],
        "achievements": [
            "최적화된 3세대 미들웨어",
            "크로스 플랫폼 가치추가 엔진",
            "동기화 웹 사용 가능 프로토콜"
        ],
        "patents": [
            "KR-10-2022-473155"
        ],
        "contact": {
            "name": "박정남",
            "email": "songyeongjin@example.org",
            "phone": "017-247-4328"
        },
        "websiteUrl": "http://www.jusighoesa.net/",
        "relatedArticles": []
    },
    {
        "id": "comp-038",
        "name": "주식회사 고려국민에너지 제약",
        "logoUrl": "https://picsum.photos/seed/comp38/200/200",
        "industry": "화이트 바이오",
        "region": "구리시",
        "foundedYear": 2006,
        "sizeCategory": "SME",
        "employees": 466,
        "description": "중견기업으로서 산업효소, 바이오연료 분야를 선도합니다. 선구적인 가상 사용자들",
        "products": [
            "산업효소",
            "바이오연료"
        ],
        "achievements": [
            "조절 가능한 멀티 태스킹 접근",
            "중심이 멀티 태스킹 LAN"
        ],
        "patents": [
            "KR-10-2021-626331",
            "KR-10-2022-110314"
        ],
        "contact": {
            "name": "김준혁",
            "email": "hyeonji76@example.org",
            "phone": "043-511-7597"
        },
        "websiteUrl": "http://www.yuhanhoesa.com/",
        "relatedArticles": []
    },
    {
        "id": "comp-039",
        "name": "(주) 마루네트워크 제약",
        "logoUrl": "https://picsum.photos/seed/comp39/200/200",
        "industry": "그린 바이오",
        "region": "천안시 서북구",
        "foundedYear": 2012,
        "sizeCategory": "Startup",
        "employees": 463,
        "description": "스타트업으로서 스마트팜, 미생물비료, 종자개량 분야를 선도합니다. 장려하는 24/365 사용자들",
        "products": [
            "스마트팜",
            "미생물비료",
            "종자개량"
        ],
        "achievements": [
            "크로스 그룹 스며든 예산 관리",
            "원활한 잘 모듈화된 펌웨어"
        ],
        "patents": [
            "KR-10-2021-215832"
        ],
        "contact": {
            "name": "박성진",
            "email": "kgim@example.org",
            "phone": "016-868-9171"
        },
        "websiteUrl": "https://www.jusighoesa.kr/",
        "relatedArticles": []
    },
    {
        "id": "comp-040",
        "name": "(주) 우리 바이오",
        "logoUrl": "https://picsum.photos/seed/comp40/200/200",
        "industry": "그린 바이오",
        "region": "원주시",
        "foundedYear": 2012,
        "sizeCategory": "Large",
        "employees": 416,
        "description": "대기업으로서 스마트팜, 미생물비료 분야를 선도합니다. 변화된 플러그 앤 플레이 아키텍쳐",
        "products": [
            "스마트팜",
            "미생물비료"
        ],
        "achievements": [
            "원활한 최적화된 시너지"
        ],
        "patents": [
            "KR-10-2024-500416",
            "KR-10-2022-362351"
        ],
        "contact": {
            "name": "최영진",
            "email": "gimjia@example.org",
            "phone": "043-155-5809"
        },
        "websiteUrl": "http://yuhanhoesa.kr/",
        "relatedArticles": []
    },
    {
        "id": "comp-041",
        "name": "(주) 원더 바이오",
        "logoUrl": "https://picsum.photos/seed/comp41/200/200",
        "industry": "레드 바이오",
        "region": "횡성군",
        "foundedYear": 2019,
        "sizeCategory": "SME",
        "employees": 452,
        "description": "중견기업으로서 신약개발 분야를 선도합니다. 전략적인 날카로운 전자 비즈니스",
        "products": [
            "신약개발"
        ],
        "achievements": [
            "크로스 플랫폼 4세대 펌웨어",
            "더 작아진 가치추가 아카이브",
            "출판된 근본적 모델"
        ],
        "patents": [],
        "contact": {
            "name": "황상호",
            "email": "ryucunja@example.net",
            "phone": "041-869-2660"
        },
        "websiteUrl": "https://ju.kr/",
        "relatedArticles": []
    },
    {
        "id": "comp-042",
        "name": "주식회사 코리아 바이오",
        "logoUrl": "https://picsum.photos/seed/comp42/200/200",
        "industry": "레드 바이오",
        "region": "고양시 일산서구",
        "foundedYear": 2004,
        "sizeCategory": "Startup",
        "employees": 239,
        "description": "스타트업으로서 세포치료, 백신, 신약개발 분야를 선도합니다. 확장된 프론트 엔드 생산라인",
        "products": [
            "세포치료",
            "백신",
            "신약개발"
        ],
        "achievements": [
            "멀티 채널 모듈형 공개 시스템",
            "독보적인 근본적 엑스트라넷"
        ],
        "patents": [
            "KR-10-2022-214044"
        ],
        "contact": {
            "name": "고민준",
            "email": "juweon57@example.com",
            "phone": "052-530-8501"
        },
        "websiteUrl": "http://yuhanhoesa.com/",
        "relatedArticles": []
    },
    {
        "id": "comp-043",
        "name": "유한회사 월드그룹 사이언스",
        "logoUrl": "https://picsum.photos/seed/comp43/200/200",
        "industry": "레드 바이오",
        "region": "연천군",
        "foundedYear": 2015,
        "sizeCategory": "Large",
        "employees": 361,
        "description": "대기업으로서 백신 분야를 선도합니다. 신속한 자기장 방법론",
        "products": [
            "백신"
        ],
        "achievements": [],
        "patents": [
            "KR-10-2020-868576",
            "KR-10-2018-192472"
        ],
        "contact": {
            "name": "김시우",
            "email": "doyunyun@example.com",
            "phone": "043-419-1466"
        },
        "websiteUrl": "http://www.yuhanhoesa.com/",
        "relatedArticles": []
    },
    {
        "id": "comp-044",
        "name": "(주) 신라연구소 바이오",
        "logoUrl": "https://picsum.photos/seed/comp44/200/200",
        "industry": "그린 바이오",
        "region": "보령시",
        "foundedYear": 2006,
        "sizeCategory": "SME",
        "employees": 97,
        "description": "중견기업으로서 종자개량, 미생물비료, 스마트팜 분야를 선도합니다. 구조적인 플러그 앤 플레이 어플리케이션",
        "products": [
            "종자개량",
            "미생물비료",
            "스마트팜"
        ],
        "achievements": [
            "오픈소스 고도 기반 GUI"
        ],
        "patents": [],
        "contact": {
            "name": "오상현",
            "email": "wsong@example.com",
            "phone": "032-106-6447"
        },
        "websiteUrl": "https://www.yuhanhoesa.com/",
        "relatedArticles": []
    },
    {
        "id": "comp-045",
        "name": "(유) 가온에너지 사이언스",
        "logoUrl": "https://picsum.photos/seed/comp45/200/200",
        "industry": "화이트 바이오",
        "region": "연천군",
        "foundedYear": 2005,
        "sizeCategory": "Large",
        "employees": 139,
        "description": "대기업으로서 산업효소, 바이오플라스틱 분야를 선도합니다. 변화무쌍한 섹시 전자화폐",
        "products": [
            "산업효소",
            "바이오플라스틱"
        ],
        "achievements": [
            "특별한 문맥 기반 시간화",
            "줄어든 확장 지원"
        ],
        "patents": [
            "KR-10-2024-722887"
        ],
        "contact": {
            "name": "김성훈",
            "email": "jongsu69@example.org",
            "phone": "070-1358-3313"
        },
        "websiteUrl": "http://www.yuhanhoesa.kr/",
        "relatedArticles": []
    },
    {
        "id": "comp-046",
        "name": "주식회사 백제글로벌자동차 제약",
        "logoUrl": "https://picsum.photos/seed/comp46/200/200",
        "industry": "레드 바이오",
        "region": "김포시",
        "foundedYear": 2015,
        "sizeCategory": "Startup",
        "employees": 499,
        "description": "스타트업으로서 세포치료 분야를 선도합니다. 사용 가능한 자기장 시너지",
        "products": [
            "세포치료"
        ],
        "achievements": [],
        "patents": [
            "KR-10-2023-198214"
        ],
        "contact": {
            "name": "박성진",
            "email": "zu@example.org",
            "phone": "044-808-7886"
        },
        "websiteUrl": "http://yuhanhoesa.org/",
        "relatedArticles": []
    },
    {
        "id": "comp-047",
        "name": "(유) 인포 바이오",
        "logoUrl": "https://picsum.photos/seed/comp47/200/200",
        "industry": "그린 바이오",
        "region": "하남시",
        "foundedYear": 2000,
        "sizeCategory": "Large",
        "employees": 474,
        "description": "대기업으로서 종자개량 분야를 선도합니다. 전략적인 24/365 포탈",
        "products": [
            "종자개량"
        ],
        "achievements": [],
        "patents": [
            "KR-10-2023-105629"
        ],
        "contact": {
            "name": "박예진",
            "email": "bagminseog@example.net",
            "phone": "019-879-6489"
        },
        "websiteUrl": "http://www.jusighoesa.com/",
        "relatedArticles": []
    },
    {
        "id": "comp-048",
        "name": "(유) 중앙코어바이오 사이언스",
        "logoUrl": "https://picsum.photos/seed/comp48/200/200",
        "industry": "그린 바이오",
        "region": "수원시 팔달구",
        "foundedYear": 2001,
        "sizeCategory": "Startup",
        "employees": 224,
        "description": "스타트업으로서 종자개량, 미생물비료, 스마트팜 분야를 선도합니다. 자율적인 자기장 인프라",
        "products": [
            "종자개량",
            "미생물비료",
            "스마트팜"
        ],
        "achievements": [
            "단체 기반의 요약 환경",
            "선택적 필수 데이터베이스",
            "오픈소스 3세대 서비스 창구"
        ],
        "patents": [
            "KR-10-2022-892868"
        ],
        "contact": {
            "name": "권지민",
            "email": "jieun23@example.net",
            "phone": "063-409-4521"
        },
        "websiteUrl": "https://jusighoesa.kr/",
        "relatedArticles": []
    },
    {
        "id": "comp-049",
        "name": "(주) 비전 바이오",
        "logoUrl": "https://picsum.photos/seed/comp49/200/200",
        "industry": "화이트 바이오",
        "region": "부천시 원미구",
        "foundedYear": 2014,
        "sizeCategory": "Large",
        "employees": 25,
        "description": "대기업으로서 바이오연료 분야를 선도합니다. 간소화된 글로벌 전자 서비스",
        "products": [
            "바이오연료"
        ],
        "achievements": [
            "미래가 보장된 최대화 시너지",
            "확장된 주파수 탐지 가능 소프트웨어"
        ],
        "patents": [
            "KR-10-2019-817629"
        ],
        "contact": {
            "name": "이채원",
            "email": "mi@example.net",
            "phone": "044-668-5215"
        },
        "websiteUrl": "https://yu.kr/",
        "relatedArticles": []
    },
    {
        "id": "comp-050",
        "name": "(주) 중앙백제항공 사이언스",
        "logoUrl": "https://picsum.photos/seed/comp50/200/200",
        "industry": "레드 바이오",
        "region": "제천시",
        "foundedYear": 2016,
        "sizeCategory": "Large",
        "employees": 322,
        "description": "대기업으로서 세포치료, 백신 분야를 선도합니다. 혼합된 통합 스키마",
        "products": [
            "세포치료",
            "백신"
        ],
        "achievements": [],
        "patents": [
            "KR-10-2022-122047",
            "KR-10-2021-755238"
        ],
        "contact": {
            "name": "손준영",
            "email": "gimjeongsu@example.org",
            "phone": "010-9950-2530"
        },
        "websiteUrl": "https://www.yuhanhoesa.kr/",
        "relatedArticles": []
    },
    {
        "id": "comp-051",
        "name": "(유) 제나발해솔루션 제약",
        "logoUrl": "https://picsum.photos/seed/comp51/200/200",
        "industry": "레드 바이오",
        "region": "김포시",
        "foundedYear": 2018,
        "sizeCategory": "Large",
        "employees": 49,
        "description": "대기업으로서 세포치료, 신약개발 분야를 선도합니다. 변화된 반투명 아키텍쳐",
        "products": [
            "세포치료",
            "신약개발"
        ],
        "achievements": [
            "조직화된 가치추가 고객 만족",
            "숙련된 모듈형 하드웨어"
        ],
        "patents": [],
        "contact": {
            "name": "이우진",
            "email": "sanghunryu@example.org",
            "phone": "010-0422-0877"
        },
        "websiteUrl": "https://yu.com/",
        "relatedArticles": []
    },
    {
        "id": "comp-052",
        "name": "(주) 글로벌이노네트워크 바이오",
        "logoUrl": "https://picsum.photos/seed/comp52/200/200",
        "industry": "레드 바이오",
        "region": "용인시 기흥구",
        "foundedYear": 2004,
        "sizeCategory": "Large",
        "employees": 46,
        "description": "대기업으로서 세포치료, 백신, 신약개발 분야를 선도합니다. 장려하는 크로스 미디어 생산라인",
        "products": [
            "세포치료",
            "백신",
            "신약개발"
        ],
        "achievements": [],
        "patents": [],
        "contact": {
            "name": "우지후",
            "email": "iyeonghyi@example.net",
            "phone": "010-9150-0021"
        },
        "websiteUrl": "https://www.yuhanhoesa.org/",
        "relatedArticles": []
    },
    {
        "id": "comp-053",
        "name": "주식회사 원더 제약",
        "logoUrl": "https://picsum.photos/seed/comp53/200/200",
        "industry": "레드 바이오",
        "region": "용인시 처인구",
        "foundedYear": 2014,
        "sizeCategory": "SME",
        "employees": 204,
        "description": "중견기업으로서 세포치료 분야를 선도합니다. 강화된 확장 주파수",
        "products": [
            "세포치료"
        ],
        "achievements": [],
        "patents": [
            "KR-10-2024-734802"
        ],
        "contact": {
            "name": "강은주",
            "email": "jeonghun77@example.org",
            "phone": "033-579-8349"
        },
        "websiteUrl": "http://jusighoesa.com/",
        "relatedArticles": []
    },
    {
        "id": "comp-054",
        "name": "(주) 윈드 제약",
        "logoUrl": "https://picsum.photos/seed/comp54/200/200",
        "industry": "화이트 바이오",
        "region": "안산시",
        "foundedYear": 2012,
        "sizeCategory": "Startup",
        "employees": 172,
        "description": "스타트업으로서 산업효소 분야를 선도합니다. 엔지니어 확장 채널",
        "products": [
            "산업효소"
        ],
        "achievements": [
            "인체 공학적인 다중 상태 태도",
            "비즈니스 중점적 국가적 아키텍쳐",
            "유저 친화적 필수 솔루션"
        ],
        "patents": [
            "KR-10-2024-879453"
        ],
        "contact": {
            "name": "박미정",
            "email": "wgim@example.net",
            "phone": "063-998-8458"
        },
        "websiteUrl": "http://www.yuhanhoesa.com/",
        "relatedArticles": []
    },
    {
        "id": "comp-055",
        "name": "유한회사 겨레바이오 테크",
        "logoUrl": "https://picsum.photos/seed/comp55/200/200",
        "industry": "레드 바이오",
        "region": "춘천시",
        "foundedYear": 2022,
        "sizeCategory": "Large",
        "employees": 175,
        "description": "대기업으로서 세포치료 분야를 선도합니다. 사용 가능한 무선 파트너쉽",
        "products": [
            "세포치료"
        ],
        "achievements": [
            "트리플 버퍼 컨텐츠 기반 구조체",
            "출판된 해답 기반 에뮬레이션",
            "오픈소스 다음 세대 축적"
        ],
        "patents": [
            "KR-10-2024-662849",
            "KR-10-2019-371888"
        ],
        "contact": {
            "name": "박영진",
            "email": "jeongung37@example.org",
            "phone": "052-741-2248"
        },
        "websiteUrl": "http://www.jusighoesa.com/",
        "relatedArticles": []
    },
    {
        "id": "comp-056",
        "name": "주식회사 가야고려플랫폼 제약",
        "logoUrl": "https://picsum.photos/seed/comp56/200/200",
        "industry": "화이트 바이오",
        "region": "정선군",
        "foundedYear": 2007,
        "sizeCategory": "SME",
        "employees": 20,
        "description": "중견기업으로서 산업효소, 바이오플라스틱 분야를 선도합니다. 확장된 유비쿼터스 웹서비스",
        "products": [
            "산업효소",
            "바이오플라스틱"
        ],
        "achievements": [],
        "patents": [
            "KR-10-2020-194599"
        ],
        "contact": {
            "name": "최지은",
            "email": "yeongilgim@example.com",
            "phone": "018-805-3992"
        },
        "websiteUrl": "http://www.yu.com/",
        "relatedArticles": []
    },
    {
        "id": "comp-057",
        "name": "(주) 푸른한강센터 사이언스",
        "logoUrl": "https://picsum.photos/seed/comp57/200/200",
        "industry": "레드 바이오",
        "region": "고양시 덕양구",
        "foundedYear": 2003,
        "sizeCategory": "Large",
        "employees": 427,
        "description": "대기업으로서 백신 분야를 선도합니다. 강화된 24/7 아키텍쳐",
        "products": [
            "백신"
        ],
        "achievements": [
            "사용자 중심의 가치추가 분석"
        ],
        "patents": [
            "KR-10-2024-801573"
        ],
        "contact": {
            "name": "오보람",
            "email": "seongmin25@example.org",
            "phone": "063-660-1549"
        },
        "websiteUrl": "https://www.yuhanhoesa.kr/",
        "relatedArticles": []
    },
    {
        "id": "comp-058",
        "name": "(주) 발해개발 바이오",
        "logoUrl": "https://picsum.photos/seed/comp58/200/200",
        "industry": "화이트 바이오",
        "region": "부여군",
        "foundedYear": 2001,
        "sizeCategory": "Large",
        "employees": 412,
        "description": "대기업으로서 바이오플라스틱 분야를 선도합니다. 배송 고운 어플리케이션",
        "products": [
            "바이오플라스틱"
        ],
        "achievements": [
            "변경 가능한 가치추가 프레임워크"
        ],
        "patents": [
            "KR-10-2019-298900",
            "KR-10-2024-921076"
        ],
        "contact": {
            "name": "오민수",
            "email": "subin23@example.net",
            "phone": "053-090-8919"
        },
        "websiteUrl": "https://jusighoesa.com/",
        "relatedArticles": []
    },
    {
        "id": "comp-059",
        "name": "(주) 네오 랩",
        "logoUrl": "https://picsum.photos/seed/comp59/200/200",
        "industry": "화이트 바이오",
        "region": "공주시",
        "foundedYear": 2016,
        "sizeCategory": "SME",
        "employees": 165,
        "description": "중견기업으로서 바이오플라스틱 분야를 선도합니다. 장려하는 크로스 미디어 사용자들",
        "products": [
            "바이오플라스틱"
        ],
        "achievements": [
            "공개 키 비대칭 환경",
            "융합력있는 최적화된 환경",
            "비즈니스 중점적 다중 상태 성공"
        ],
        "patents": [
            "KR-10-2022-833408",
            "KR-10-2024-274134"
        ],
        "contact": {
            "name": "이지혜",
            "email": "joboram@example.net",
            "phone": "041-511-7262"
        },
        "websiteUrl": "https://yuhanhoesa.kr/",
        "relatedArticles": []
    },
    {
        "id": "comp-060",
        "name": "(유) 글로벌백제출판 바이오",
        "logoUrl": "https://picsum.photos/seed/comp60/200/200",
        "industry": "화이트 바이오",
        "region": "용인시 수지구",
        "foundedYear": 2016,
        "sizeCategory": "SME",
        "employees": 223,
        "description": "중견기업으로서 바이오연료, 바이오플라스틱 분야를 선도합니다. 혁명적인 실시간 전자시장",
        "products": [
            "바이오연료",
            "바이오플라스틱"
        ],
        "achievements": [
            "멀티 채널 보조 펌웨어"
        ],
        "patents": [
            "KR-10-2019-456728"
        ],
        "contact": {
            "name": "이영호",
            "email": "hyeonjun33@example.net",
            "phone": "016-210-2329"
        },
        "websiteUrl": "https://ju.org/",
        "relatedArticles": []
    },
    {
        "id": "comp-061",
        "name": "(주) 미래상사 사이언스",
        "logoUrl": "https://picsum.photos/seed/comp61/200/200",
        "industry": "레드 바이오",
        "region": "광주시",
        "foundedYear": 2000,
        "sizeCategory": "SME",
        "employees": 28,
        "description": "중견기업으로서 신약개발, 백신, 세포치료 분야를 선도합니다. 취약점의 선구적 주파수",
        "products": [
            "신약개발",
            "백신",
            "세포치료"
        ],
        "achievements": [],
        "patents": [
            "KR-10-2024-444867"
        ],
        "contact": {
            "name": "김정남",
            "email": "ogjabag@example.com",
            "phone": "061-677-8656"
        },
        "websiteUrl": "https://www.jusighoesa.kr/",
        "relatedArticles": []
    },
    {
        "id": "comp-062",
        "name": "주식회사 브레인미래랩스 바이오",
        "logoUrl": "https://picsum.photos/seed/comp62/200/200",
        "industry": "화이트 바이오",
        "region": "파주시",
        "foundedYear": 2000,
        "sizeCategory": "Startup",
        "employees": 53,
        "description": "스타트업으로서 바이오플라스틱 분야를 선도합니다. 사용 가능한 킬러 플랫폼",
        "products": [
            "바이오플라스틱"
        ],
        "achievements": [
            "모니터링되는 결정 하드웨어",
            "독보적인 최적화된 환경"
        ],
        "patents": [
            "KR-10-2022-700983"
        ],
        "contact": {
            "name": "김현숙",
            "email": "yeongjai@example.org",
            "phone": "042-567-9957"
        },
        "websiteUrl": "http://jusighoesa.org/",
        "relatedArticles": []
    },
    {
        "id": "comp-063",
        "name": "주식회사 이노플랫폼 사이언스",
        "logoUrl": "https://picsum.photos/seed/comp63/200/200",
        "industry": "레드 바이오",
        "region": "오산시",
        "foundedYear": 2022,
        "sizeCategory": "Large",
        "employees": 311,
        "description": "대기업으로서 신약개발, 세포치료, 백신 분야를 선도합니다. 사용 가능한 1:1 채널",
        "products": [
            "신약개발",
            "세포치료",
            "백신"
        ],
        "achievements": [
            "트리플 버퍼 고단계 정의",
            "융합력있는 24시간 접근",
            "멀티 레이어 멀티 태스킹 성공"
        ],
        "patents": [],
        "contact": {
            "name": "김명숙",
            "email": "hyeonu00@example.com",
            "phone": "010-9195-6174"
        },
        "websiteUrl": "https://yuhanhoesa.kr/",
        "relatedArticles": []
    },
    {
        "id": "comp-064",
        "name": "(주) 신라네트웍스 사이언스",
        "logoUrl": "https://picsum.photos/seed/comp64/200/200",
        "industry": "화이트 바이오",
        "region": "용인시 처인구",
        "foundedYear": 2020,
        "sizeCategory": "Large",
        "employees": 41,
        "description": "대기업으로서 산업효소, 바이오연료 분야를 선도합니다. 배열적인 크로스 미디어 시스템",
        "products": [
            "산업효소",
            "바이오연료"
        ],
        "achievements": [
            "중심이 정적 포탈",
            "자동화된 정적 연합",
            "강력한 요약 계층"
        ],
        "patents": [
            "KR-10-2024-446682"
        ],
        "contact": {
            "name": "이지혜",
            "email": "hyeonjun28@example.net",
            "phone": "041-417-9147"
        },
        "websiteUrl": "https://yuhanhoesa.net/",
        "relatedArticles": []
    },
    {
        "id": "comp-065",
        "name": "주식회사 한빛연구소 사이언스",
        "logoUrl": "https://picsum.photos/seed/comp65/200/200",
        "industry": "레드 바이오",
        "region": "부천시 원미구",
        "foundedYear": 2023,
        "sizeCategory": "Large",
        "employees": 320,
        "description": "대기업으로서 세포치료, 신약개발, 백신 분야를 선도합니다. 사용 가능한 강렬한 사용자들",
        "products": [
            "세포치료",
            "신약개발",
            "백신"
        ],
        "achievements": [
            "유저 친화적 해답 기반 설치과정",
            "변경 가능한 국가적 GUI"
        ],
        "patents": [
            "KR-10-2023-254788"
        ],
        "contact": {
            "name": "고순자",
            "email": "yeji22@example.com",
            "phone": "055-131-8013"
        },
        "websiteUrl": "https://ju.kr/",
        "relatedArticles": []
    },
    {
        "id": "comp-066",
        "name": "유한회사 하나고려기술 제약",
        "logoUrl": "https://picsum.photos/seed/comp66/200/200",
        "industry": "화이트 바이오",
        "region": "포천시",
        "foundedYear": 2019,
        "sizeCategory": "SME",
        "employees": 115,
        "description": "중견기업으로서 산업효소 분야를 선도합니다. 시각적인 융합 사용자들",
        "products": [
            "산업효소"
        ],
        "achievements": [],
        "patents": [
            "KR-10-2019-511537"
        ],
        "contact": {
            "name": "고순옥",
            "email": "ehan@example.org",
            "phone": "064-700-0419"
        },
        "websiteUrl": "http://www.yuhanhoesa.com/",
        "relatedArticles": []
    },
    {
        "id": "comp-067",
        "name": "주식회사 네오코리아센터 사이언스",
        "logoUrl": "https://picsum.photos/seed/comp67/200/200",
        "industry": "그린 바이오",
        "region": "용인시 기흥구",
        "foundedYear": 2016,
        "sizeCategory": "Startup",
        "employees": 265,
        "description": "스타트업으로서 종자개량 분야를 선도합니다. 발전하는 크로스 미디어 방법론",
        "products": [
            "종자개량"
        ],
        "achievements": [
            "강력한 다음 세대 시너지",
            "올바른 사이즈의 요약 패러다임",
            "적응된 분석중인 공구"
        ],
        "patents": [
            "KR-10-2024-597919"
        ],
        "contact": {
            "name": "나영자",
            "email": "minjungweon@example.net",
            "phone": "054-148-7304"
        },
        "websiteUrl": "https://www.yu.org/",
        "relatedArticles": []
    },
    {
        "id": "comp-068",
        "name": "(유) 마음전자 랩",
        "logoUrl": "https://picsum.photos/seed/comp68/200/200",
        "industry": "레드 바이오",
        "region": "동해시",
        "foundedYear": 2017,
        "sizeCategory": "SME",
        "employees": 185,
        "description": "중견기업으로서 백신 분야를 선도합니다. 강화된 닷컴 사용자들",
        "products": [
            "백신"
        ],
        "achievements": [
            "비전 있는 5세대 어플리케이션",
            "안전한 교훈적 엑스트라넷"
        ],
        "patents": [
            "KR-10-2023-491076"
        ],
        "contact": {
            "name": "차서준",
            "email": "gimjaehyeon@example.com",
            "phone": "032-567-8030"
        },
        "websiteUrl": "http://ju.kr/",
        "relatedArticles": []
    },
    {
        "id": "comp-069",
        "name": "주식회사 겨레스타플랫폼 제약",
        "logoUrl": "https://picsum.photos/seed/comp69/200/200",
        "industry": "그린 바이오",
        "region": "원주시",
        "foundedYear": 2002,
        "sizeCategory": "Large",
        "employees": 170,
        "description": "대기업으로서 스마트팜 분야를 선도합니다. 간소화된 무결점 전자시장",
        "products": [
            "스마트팜"
        ],
        "achievements": [
            "낮은 최적화된 도전",
            "자가 이용 가능한 하이브리드 어댑터",
            "함수 기반의 다중 상태 하드웨어"
        ],
        "patents": [],
        "contact": {
            "name": "이진우",
            "email": "sanghunjeong@example.org",
            "phone": "010-0338-5194"
        },
        "websiteUrl": "https://www.yuhanhoesa.net/",
        "relatedArticles": []
    },
    {
        "id": "comp-070",
        "name": "주식회사 월드 제약",
        "logoUrl": "https://picsum.photos/seed/comp70/200/200",
        "industry": "화이트 바이오",
        "region": "삼척시",
        "foundedYear": 2012,
        "sizeCategory": "SME",
        "employees": 465,
        "description": "중견기업으로서 바이오연료, 산업효소, 바이오플라스틱 분야를 선도합니다. 변화무쌍한 혁명적 웹서비스",
        "products": [
            "바이오연료",
            "산업효소",
            "바이오플라스틱"
        ],
        "achievements": [
            "트리플 버퍼 그리드 가능 시너지",
            "트리플 버퍼 상황에 맞는 그래픽 인터페이스"
        ],
        "patents": [],
        "contact": {
            "name": "고서준",
            "email": "simeunju@example.org",
            "phone": "070-7112-5368"
        },
        "websiteUrl": "http://jusighoesa.com/",
        "relatedArticles": []
    },
    {
        "id": "comp-071",
        "name": "유한회사 월드개발 바이오",
        "logoUrl": "https://picsum.photos/seed/comp71/200/200",
        "industry": "화이트 바이오",
        "region": "부천시 소사구",
        "foundedYear": 2016,
        "sizeCategory": "Startup",
        "employees": 268,
        "description": "스타트업으로서 바이오연료, 바이오플라스틱 분야를 선도합니다. 재평가된 날카로운 채널",
        "products": [
            "바이오연료",
            "바이오플라스틱"
        ],
        "achievements": [
            "강화된 무관용 어댑터",
            "완벽히 설정된 잘 모듈화된 시너지",
            "공개 키 3세대 하드웨어"
        ],
        "patents": [
            "KR-10-2021-621030",
            "KR-10-2019-607951"
        ],
        "contact": {
            "name": "장지현",
            "email": "junyeongeom@example.net",
            "phone": "010-8842-0315"
        },
        "websiteUrl": "http://ju.com/",
        "relatedArticles": []
    },
    {
        "id": "comp-072",
        "name": "주식회사 글로벌시너지에이아이 사이언스",
        "logoUrl": "https://picsum.photos/seed/comp72/200/200",
        "industry": "레드 바이오",
        "region": "진천군",
        "foundedYear": 2004,
        "sizeCategory": "Startup",
        "employees": 198,
        "description": "스타트업으로서 세포치료 분야를 선도합니다. 재평가된 융합 네트웍스",
        "products": [
            "세포치료"
        ],
        "achievements": [
            "강화된 24시간 컨셉",
            "효율적인 모듈형 프로젝트"
        ],
        "patents": [
            "KR-10-2021-326959",
            "KR-10-2020-423905"
        ],
        "contact": {
            "name": "서도현",
            "email": "nmin@example.net",
            "phone": "054-256-3378"
        },
        "websiteUrl": "https://www.yuhanhoesa.kr/",
        "relatedArticles": []
    },
    {
        "id": "comp-073",
        "name": "(유) 인포비전개발 사이언스",
        "logoUrl": "https://picsum.photos/seed/comp73/200/200",
        "industry": "화이트 바이오",
        "region": "안양시 동안구",
        "foundedYear": 2016,
        "sizeCategory": "Large",
        "employees": 308,
        "description": "대기업으로서 산업효소 분야를 선도합니다. 벤치마킹된 프론트 엔드 플랫폼",
        "products": [
            "산업효소"
        ],
        "achievements": [
            "1:1 국가적 알고리즘",
            "최전방 4세대 프로젝트"
        ],
        "patents": [
            "KR-10-2022-783278"
        ],
        "contact": {
            "name": "최성수",
            "email": "lcoe@example.net",
            "phone": "017-725-2648"
        },
        "websiteUrl": "http://yu.com/",
        "relatedArticles": []
    },
    {
        "id": "comp-074",
        "name": "유한회사 미래종합네트웍스 랩",
        "logoUrl": "https://picsum.photos/seed/comp74/200/200",
        "industry": "화이트 바이오",
        "region": "원주시",
        "foundedYear": 2016,
        "sizeCategory": "SME",
        "employees": 500,
        "description": "중견기업으로서 바이오연료 분야를 선도합니다. 최적화된 직감 플랫폼",
        "products": [
            "바이오연료"
        ],
        "achievements": [
            "진보적인 분석중인 관리자",
            "줄어든 결정 프레임워크"
        ],
        "patents": [
            "KR-10-2020-920439",
            "KR-10-2023-137921"
        ],
        "contact": {
            "name": "민예준",
            "email": "seoyungim@example.net",
            "phone": "061-908-4521"
        },
        "websiteUrl": "https://jusighoesa.kr/",
        "relatedArticles": []
    },
    {
        "id": "comp-075",
        "name": "(주) 네오유통 랩",
        "logoUrl": "https://picsum.photos/seed/comp75/200/200",
        "industry": "화이트 바이오",
        "region": "철원군",
        "foundedYear": 2013,
        "sizeCategory": "Large",
        "employees": 424,
        "description": "대기업으로서 바이오플라스틱 분야를 선도합니다. 변화된 확장 인터페이스",
        "products": [
            "바이오플라스틱"
        ],
        "achievements": [
            "품질 중심의 클라이언트 단 배열",
            "더 작아진 휴리스틱 그래픽 인터페이스",
            "올바른 사이즈의 무해한 공구"
        ],
        "patents": [
            "KR-10-2024-870761"
        ],
        "contact": {
            "name": "이광수",
            "email": "jinuan@example.com",
            "phone": "010-1213-4979"
        },
        "websiteUrl": "http://www.jusighoesa.com/",
        "relatedArticles": []
    },
    {
        "id": "comp-076",
        "name": "(주) 가람 테크",
        "logoUrl": "https://picsum.photos/seed/comp76/200/200",
        "industry": "그린 바이오",
        "region": "양구군",
        "foundedYear": 2010,
        "sizeCategory": "SME",
        "employees": 323,
        "description": "중견기업으로서 스마트팜, 종자개량, 미생물비료 분야를 선도합니다. 장려하는 선구적 사용자들",
        "products": [
            "스마트팜",
            "종자개량",
            "미생물비료"
        ],
        "achievements": [
            "복제된 가치추가 고객 만족"
        ],
        "patents": [],
        "contact": {
            "name": "양민석",
            "email": "munhyeonji@example.com",
            "phone": "052-153-1473"
        },
        "websiteUrl": "https://yuhanhoesa.org/",
        "relatedArticles": []
    },
    {
        "id": "comp-077",
        "name": "(주) 시너지고려네트워크 랩",
        "logoUrl": "https://picsum.photos/seed/comp77/200/200",
        "industry": "화이트 바이오",
        "region": "고양시 덕양구",
        "foundedYear": 2010,
        "sizeCategory": "Startup",
        "employees": 133,
        "description": "스타트업으로서 바이오플라스틱, 산업효소 분야를 선도합니다. 깨끗한 창의적 매트릭스",
        "products": [
            "바이오플라스틱",
            "산업효소"
        ],
        "achievements": [],
        "patents": [
            "KR-10-2024-791943"
        ],
        "contact": {
            "name": "이정훈",
            "email": "yeeungang@example.net",
            "phone": "017-615-3934"
        },
        "websiteUrl": "https://www.jusighoesa.com/",
        "relatedArticles": []
    },
    {
        "id": "comp-078",
        "name": "(유) 이노시스템즈 사이언스",
        "logoUrl": "https://picsum.photos/seed/comp78/200/200",
        "industry": "화이트 바이오",
        "region": "고양시 일산서구",
        "foundedYear": 2023,
        "sizeCategory": "Startup",
        "employees": 383,
        "description": "스타트업으로서 바이오플라스틱, 바이오연료 분야를 선도합니다. 다용도의 투명 모델",
        "products": [
            "바이오플라스틱",
            "바이오연료"
        ],
        "achievements": [
            "멀티 채널 실시간 도전"
        ],
        "patents": [
            "KR-10-2018-177473"
        ],
        "contact": {
            "name": "나서현",
            "email": "gweonjihye@example.com",
            "phone": "053-843-4952"
        },
        "websiteUrl": "https://www.jusighoesa.org/",
        "relatedArticles": []
    },
    {
        "id": "comp-079",
        "name": "유한회사 인포 사이언스",
        "logoUrl": "https://picsum.photos/seed/comp79/200/200",
        "industry": "그린 바이오",
        "region": "제천시",
        "foundedYear": 2015,
        "sizeCategory": "Large",
        "employees": 285,
        "description": "대기업으로서 종자개량 분야를 선도합니다. 폭발하는 온라인 쇼핑 방법론",
        "products": [
            "종자개량"
        ],
        "achievements": [
            "1:1 다중 상태 서비스 창구",
            "가상 주파수 탐지 가능 접근"
        ],
        "patents": [
            "KR-10-2020-918747",
            "KR-10-2023-451972"
        ],
        "contact": {
            "name": "이서연",
            "email": "ajo@example.com",
            "phone": "063-945-4878"
        },
        "websiteUrl": "https://www.yuhanhoesa.com/",
        "relatedArticles": []
    },
    {
        "id": "comp-080",
        "name": "(주) 스타 바이오",
        "logoUrl": "https://picsum.photos/seed/comp80/200/200",
        "industry": "레드 바이오",
        "region": "군포시",
        "foundedYear": 2007,
        "sizeCategory": "Startup",
        "employees": 102,
        "description": "스타트업으로서 세포치료 분야를 선도합니다. 혼합된 백 엔드 스키마",
        "products": [
            "세포치료"
        ],
        "achievements": [],
        "patents": [],
        "contact": {
            "name": "박경숙",
            "email": "ui@example.com",
            "phone": "032-739-4643"
        },
        "websiteUrl": "http://www.yuhanhoesa.com/",
        "relatedArticles": []
    },
    {
        "id": "comp-081",
        "name": "(주) 보람제조 랩",
        "logoUrl": "https://picsum.photos/seed/comp81/200/200",
        "industry": "레드 바이오",
        "region": "하남시",
        "foundedYear": 2003,
        "sizeCategory": "SME",
        "employees": 234,
        "description": "중견기업으로서 신약개발 분야를 선도합니다. 발전하는 실시간 패러다임",
        "products": [
            "신약개발"
        ],
        "achievements": [],
        "patents": [],
        "contact": {
            "name": "심준서",
            "email": "jangsunog@example.net",
            "phone": "070-5540-4289"
        },
        "websiteUrl": "https://www.yu.org/",
        "relatedArticles": []
    },
    {
        "id": "comp-082",
        "name": "주식회사 종합 테크",
        "logoUrl": "https://picsum.photos/seed/comp82/200/200",
        "industry": "레드 바이오",
        "region": "진천군",
        "foundedYear": 2017,
        "sizeCategory": "Large",
        "employees": 229,
        "description": "대기업으로서 신약개발, 백신, 세포치료 분야를 선도합니다. 간소화된 통합 시너지",
        "products": [
            "신약개발",
            "백신",
            "세포치료"
        ],
        "achievements": [
            "완벽히 설정된 분리형 미디어 정보",
            "크로스 그룹 해답 기반 전략",
            "더 커진 근본적 벤치마크"
        ],
        "patents": [
            "KR-10-2021-585565",
            "KR-10-2023-825687"
        ],
        "contact": {
            "name": "우서준",
            "email": "lsong@example.org",
            "phone": "041-241-8585"
        },
        "websiteUrl": "http://yuhanhoesa.kr/",
        "relatedArticles": []
    },
    {
        "id": "comp-083",
        "name": "유한회사 보람네트워크 제약",
        "logoUrl": "https://picsum.photos/seed/comp83/200/200",
        "industry": "레드 바이오",
        "region": "청주시 흥덕구",
        "foundedYear": 2011,
        "sizeCategory": "SME",
        "employees": 295,
        "description": "중견기업으로서 백신, 신약개발, 세포치료 분야를 선도합니다. 통합된 B2B 생산라인",
        "products": [
            "백신",
            "신약개발",
            "세포치료"
        ],
        "achievements": [
            "자동화된 작동 정책",
            "미래가 보장된 멀티미디어 태도"
        ],
        "patents": [],
        "contact": {
            "name": "문정남",
            "email": "gyeongjai@example.org",
            "phone": "043-185-7511"
        },
        "websiteUrl": "https://www.ju.com/",
        "relatedArticles": []
    },
    {
        "id": "comp-084",
        "name": "(주) 인포에너지 랩",
        "logoUrl": "https://picsum.photos/seed/comp84/200/200",
        "industry": "레드 바이오",
        "region": "안산시",
        "foundedYear": 2017,
        "sizeCategory": "Startup",
        "employees": 430,
        "description": "스타트업으로서 세포치료 분야를 선도합니다. 문화적인 유비쿼터스 경험",
        "products": [
            "세포치료"
        ],
        "achievements": [
            "유저 친화적 클라이언트-서버 생산 능력",
            "다양한 다음 세대 아카이브"
        ],
        "patents": [
            "KR-10-2019-833417"
        ],
        "contact": {
            "name": "황미영",
            "email": "eunseogim@example.org",
            "phone": "043-921-7939"
        },
        "websiteUrl": "http://jusighoesa.org/",
        "relatedArticles": []
    },
    {
        "id": "comp-085",
        "name": "유한회사 국민넥스트에너지 테크",
        "logoUrl": "https://picsum.photos/seed/comp85/200/200",
        "industry": "레드 바이오",
        "region": "제천시",
        "foundedYear": 2007,
        "sizeCategory": "Large",
        "employees": 58,
        "description": "대기업으로서 세포치료 분야를 선도합니다. 진화된 강렬한 전자 서비스",
        "products": [
            "세포치료"
        ],
        "achievements": [],
        "patents": [
            "KR-10-2019-502902",
            "KR-10-2024-558540"
        ],
        "contact": {
            "name": "송보람",
            "email": "hwangyejin@example.com",
            "phone": "055-511-9715"
        },
        "websiteUrl": "https://yu.kr/",
        "relatedArticles": []
    },
    {
        "id": "comp-086",
        "name": "주식회사 원더소프트 바이오",
        "logoUrl": "https://picsum.photos/seed/comp86/200/200",
        "industry": "그린 바이오",
        "region": "평창군",
        "foundedYear": 2016,
        "sizeCategory": "Large",
        "employees": 465,
        "description": "대기업으로서 종자개량, 미생물비료, 스마트팜 분야를 선도합니다. 시각적인 다음 세대 커뮤니티",
        "products": [
            "종자개량",
            "미생물비료",
            "스마트팜"
        ],
        "achievements": [
            "재정렬 역수 인공지능",
            "효율적인 잘 모듈화된 프로젝트"
        ],
        "patents": [],
        "contact": {
            "name": "권상훈",
            "email": "gyeongsugnam@example.net",
            "phone": "064-798-4318"
        },
        "websiteUrl": "https://www.yu.kr/",
        "relatedArticles": []
    },
    {
        "id": "comp-087",
        "name": "(유) 모두 사이언스",
        "logoUrl": "https://picsum.photos/seed/comp87/200/200",
        "industry": "그린 바이오",
        "region": "포천시",
        "foundedYear": 2010,
        "sizeCategory": "Startup",
        "employees": 279,
        "description": "스타트업으로서 미생물비료, 스마트팜 분야를 선도합니다. 진화된 투명 방법론",
        "products": [
            "미생물비료",
            "스마트팜"
        ],
        "achievements": [],
        "patents": [
            "KR-10-2021-474314"
        ],
        "contact": {
            "name": "이정자",
            "email": "gimareum@example.com",
            "phone": "011-086-5791"
        },
        "websiteUrl": "http://jusighoesa.kr/",
        "relatedArticles": []
    },
    {
        "id": "comp-088",
        "name": "(주) 제나플랫폼 랩",
        "logoUrl": "https://picsum.photos/seed/comp88/200/200",
        "industry": "화이트 바이오",
        "region": "단양군",
        "foundedYear": 2015,
        "sizeCategory": "Large",
        "employees": 470,
        "description": "대기업으로서 바이오연료 분야를 선도합니다. 합성 직감 채널",
        "products": [
            "바이오연료"
        ],
        "achievements": [
            "최전방 결합된 모델",
            "공개 키 휴리스틱 예보"
        ],
        "patents": [],
        "contact": {
            "name": "이성훈",
            "email": "iseoyeong@example.org",
            "phone": "070-7454-8338"
        },
        "websiteUrl": "https://www.yu.org/",
        "relatedArticles": []
    },
    {
        "id": "comp-089",
        "name": "유한회사 제나국민은행 테크",
        "logoUrl": "https://picsum.photos/seed/comp89/200/200",
        "industry": "그린 바이오",
        "region": "삼척시",
        "foundedYear": 2016,
        "sizeCategory": "Large",
        "employees": 229,
        "description": "대기업으로서 미생물비료, 스마트팜 분야를 선도합니다. 변화무쌍한 고사양 웹서비스",
        "products": [
            "미생물비료",
            "스마트팜"
        ],
        "achievements": [
            "선택적 근본적 미디어 정보",
            "효율적인 글로벌 모델",
            "사용자 중심의 스며든 그룹웨어"
        ],
        "patents": [
            "KR-10-2020-265681"
        ],
        "contact": {
            "name": "안민서",
            "email": "qgo@example.net",
            "phone": "042-549-4178"
        },
        "websiteUrl": "https://www.yuhanhoesa.com/",
        "relatedArticles": []
    },
    {
        "id": "comp-090",
        "name": "(주) 모두에이아이 바이오",
        "logoUrl": "https://picsum.photos/seed/comp90/200/200",
        "industry": "그린 바이오",
        "region": "청양군",
        "foundedYear": 2017,
        "sizeCategory": "Large",
        "employees": 408,
        "description": "대기업으로서 종자개량, 스마트팜, 미생물비료 분야를 선도합니다. 진화된 가변 주파수",
        "products": [
            "종자개량",
            "스마트팜",
            "미생물비료"
        ],
        "achievements": [
            "더 커진 클라이언트 단 정책"
        ],
        "patents": [],
        "contact": {
            "name": "김민재",
            "email": "gangjunho@example.net",
            "phone": "010-3159-5922"
        },
        "websiteUrl": "https://yuhanhoesa.net/",
        "relatedArticles": []
    },
    {
        "id": "comp-091",
        "name": "유한회사 아름비전연구소 제약",
        "logoUrl": "https://picsum.photos/seed/comp91/200/200",
        "industry": "레드 바이오",
        "region": "수원시 장안구",
        "foundedYear": 2021,
        "sizeCategory": "Large",
        "employees": 309,
        "description": "대기업으로서 백신 분야를 선도합니다. 최대화된 통합 전자화폐",
        "products": [
            "백신"
        ],
        "achievements": [],
        "patents": [
            "KR-10-2020-385857"
        ],
        "contact": {
            "name": "최정순",
            "email": "yeongho43@example.com",
            "phone": "031-470-1960"
        },
        "websiteUrl": "http://jusighoesa.kr/",
        "relatedArticles": []
    },
    {
        "id": "comp-092",
        "name": "유한회사 한강출판 사이언스",
        "logoUrl": "https://picsum.photos/seed/comp92/200/200",
        "industry": "레드 바이오",
        "region": "화천군",
        "foundedYear": 2015,
        "sizeCategory": "SME",
        "employees": 258,
        "description": "중견기업으로서 백신, 신약개발, 세포치료 분야를 선도합니다. 진화된 온라인 쇼핑 웹서비스",
        "products": [
            "백신",
            "신약개발",
            "세포치료"
        ],
        "achievements": [
            "유기농 하이브리드 고객 만족"
        ],
        "patents": [
            "KR-10-2021-873576"
        ],
        "contact": {
            "name": "하순옥",
            "email": "seoyeongbaeg@example.net",
            "phone": "031-651-8167"
        },
        "websiteUrl": "http://jusighoesa.com/",
        "relatedArticles": []
    },
    {
        "id": "comp-093",
        "name": "(주) 국민은행 바이오",
        "logoUrl": "https://picsum.photos/seed/comp93/200/200",
        "industry": "화이트 바이오",
        "region": "하남시",
        "foundedYear": 2009,
        "sizeCategory": "SME",
        "employees": 468,
        "description": "중견기업으로서 바이오플라스틱, 바이오연료, 산업효소 분야를 선도합니다. 시각적인 확장 전자화폐",
        "products": [
            "바이오플라스틱",
            "바이오연료",
            "산업효소"
        ],
        "achievements": [],
        "patents": [],
        "contact": {
            "name": "최정희",
            "email": "jaeho36@example.com",
            "phone": "064-704-4716"
        },
        "websiteUrl": "http://www.yu.com/",
        "relatedArticles": []
    },
    {
        "id": "comp-094",
        "name": "(주) 다올아름출판 테크",
        "logoUrl": "https://picsum.photos/seed/comp94/200/200",
        "industry": "화이트 바이오",
        "region": "부천시 소사구",
        "foundedYear": 2016,
        "sizeCategory": "SME",
        "employees": 315,
        "description": "중견기업으로서 바이오연료, 산업효소 분야를 선도합니다. 구조적인 확장 인프라",
        "products": [
            "바이오연료",
            "산업효소"
        ],
        "achievements": [
            "특별한 고단계 시너지"
        ],
        "patents": [
            "KR-10-2019-839339"
        ],
        "contact": {
            "name": "송병철",
            "email": "jiugim@example.org",
            "phone": "031-670-3401"
        },
        "websiteUrl": "http://ju.com/",
        "relatedArticles": []
    },
    {
        "id": "comp-095",
        "name": "유한회사 다올종합신문 랩",
        "logoUrl": "https://picsum.photos/seed/comp95/200/200",
        "industry": "화이트 바이오",
        "region": "천안시 동남구",
        "foundedYear": 2018,
        "sizeCategory": "Large",
        "employees": 260,
        "description": "대기업으로서 바이오플라스틱 분야를 선도합니다. 화폐화된 유비쿼터스 모델",
        "products": [
            "바이오플라스틱"
        ],
        "achievements": [
            "유기농 밀착 시너지"
        ],
        "patents": [
            "KR-10-2023-650635"
        ],
        "contact": {
            "name": "황영길",
            "email": "munjaeho@example.net",
            "phone": "044-236-2181"
        },
        "websiteUrl": "http://jusighoesa.org/",
        "relatedArticles": []
    },
    {
        "id": "comp-096",
        "name": "(유) 씨앤씨겨레테크 사이언스",
        "logoUrl": "https://picsum.photos/seed/comp96/200/200",
        "industry": "레드 바이오",
        "region": "성남시",
        "foundedYear": 2017,
        "sizeCategory": "Startup",
        "employees": 393,
        "description": "스타트업으로서 백신, 세포치료 분야를 선도합니다. 배열적인 24/365 시스템",
        "products": [
            "백신",
            "세포치료"
        ],
        "achievements": [
            "최전방 지역적 생산 능력",
            "확장된 분리형 인터페이스"
        ],
        "patents": [],
        "contact": {
            "name": "강순옥",
            "email": "heosunog@example.net",
            "phone": "064-785-6455"
        },
        "websiteUrl": "http://yuhanhoesa.com/",
        "relatedArticles": []
    },
    {
        "id": "comp-097",
        "name": "유한회사 중앙유통 랩",
        "logoUrl": "https://picsum.photos/seed/comp97/200/200",
        "industry": "레드 바이오",
        "region": "서천군",
        "foundedYear": 2000,
        "sizeCategory": "Large",
        "employees": 301,
        "description": "대기업으로서 신약개발, 백신 분야를 선도합니다. 확장된 혁명적 파트너쉽",
        "products": [
            "신약개발",
            "백신"
        ],
        "achievements": [
            "진보적인 방향 암호화"
        ],
        "patents": [
            "KR-10-2018-360133"
        ],
        "contact": {
            "name": "최준영",
            "email": "sugja98@example.com",
            "phone": "018-014-2010"
        },
        "websiteUrl": "http://www.yuhanhoesa.net/",
        "relatedArticles": []
    },
    {
        "id": "comp-098",
        "name": "유한회사 하나시스템즈 제약",
        "logoUrl": "https://picsum.photos/seed/comp98/200/200",
        "industry": "그린 바이오",
        "region": "천안시 동남구",
        "foundedYear": 2009,
        "sizeCategory": "Startup",
        "employees": 463,
        "description": "스타트업으로서 스마트팜, 미생물비료, 종자개량 분야를 선도합니다. 배송 섹시 앱",
        "products": [
            "스마트팜",
            "미생물비료",
            "종자개량"
        ],
        "achievements": [
            "자가 이용 가능한 방향 연합",
            "함수 기반의 클라이언트 단 지식 기반",
            "무결점의 범국가적 설치과정"
        ],
        "patents": [],
        "contact": {
            "name": "남상훈",
            "email": "anjeongsu@example.org",
            "phone": "063-181-5307"
        },
        "websiteUrl": "https://www.yuhanhoesa.kr/",
        "relatedArticles": []
    },
    {
        "id": "comp-099",
        "name": "(유) 에코테크 테크",
        "logoUrl": "https://picsum.photos/seed/comp99/200/200",
        "industry": "화이트 바이오",
        "region": "아산시",
        "foundedYear": 2005,
        "sizeCategory": "Startup",
        "employees": 106,
        "description": "스타트업으로서 바이오연료 분야를 선도합니다. 선구적인 고사양 전자 비즈니스",
        "products": [
            "바이오연료"
        ],
        "achievements": [
            "비전 있는 방향 태도"
        ],
        "patents": [
            "KR-10-2020-409276"
        ],
        "contact": {
            "name": "이지영",
            "email": "subingim@example.com",
            "phone": "062-976-5045"
        },
        "websiteUrl": "http://ju.com/",
        "relatedArticles": []
    },
    {
        "id": "comp-100",
        "name": "유한회사 윈드 테크",
        "logoUrl": "https://picsum.photos/seed/comp100/200/200",
        "industry": "그린 바이오",
        "region": "태안군",
        "foundedYear": 2009,
        "sizeCategory": "Startup",
        "employees": 322,
        "description": "스타트업으로서 미생물비료 분야를 선도합니다. 큰 반투명 경험",
        "products": [
            "미생물비료"
        ],
        "achievements": [
            "1:1 실행 어플리케이션",
            "동기화 보조 모니터링",
            "융합력있는 근본적 인트라넷"
        ],
        "patents": [],
        "contact": {
            "name": "김정자",
            "email": "yeweon81@example.com",
            "phone": "042-983-8517"
        },
        "websiteUrl": "https://www.ju.kr/",
        "relatedArticles": []
    }
]

const companiesHandler = http.get('/api/companies', ({ request }) => {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get('page') || '1');
    const limit = Number(url.searchParams.get('limit') || '10');
    // Basic filtering for mock
    const keyword = url.searchParams.get('keyword')?.toLowerCase();
    let filteredData = companiesDb;
    if (keyword) {
        filteredData = companiesDb.filter(c => c.name.toLowerCase().includes(keyword) || c.description.toLowerCase().includes(keyword));
    }
    const start = (page - 1) * limit;
    const end = start + limit;
    const data = filteredData.slice(start, end);

    return HttpResponse.json({
        data: data,
        pagination: {
            page: page,
            limit: limit,
            total: filteredData.length,
            totalPages: Math.ceil(filteredData.length / limit),
            hasNext: end < filteredData.length,
            hasPrev: page > 1,
        }
    });
});

const companyDetailHandler = http.get('/api/companies/:id', ({ params }) => {
  const { id } = params;
  const company = companiesDb.find(p => p.id === id);
  if (company) {
    return HttpResponse.json(company);
  } else {
    return new HttpResponse(null, { status: 404 });
  }
});

export const handlers = [
  dashboardHandler,
  organizationsHandler,
  organizationDetailHandler,
  newsHandler,
  eventsHandler,
  supportProgramsHandler,
  technologiesHandler,
  incubationCentersHandler,
  supportProgramDetailHandler,
  companiesHandler,
  companyDetailHandler,
];
