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
        title: "2025년 중소기업 기술혁신 개발사업",
        organization: "중소벤처기업부",
        description: "중소기업의 기술 경쟁력 강화를 위한 R&D 자금 지원.",
        startDate: "2025-03-01",
        endDate: "2025-09-30",
        status: "ONGOING",
        category: "R&D",
        supportType: ["자금지원", "기술개발"],
        targetCompany: "창업 7년 이하, 매출 20억 미만 중소기업",
        externalUrl: "https://example.com/support/program1",
        createdAt: "2025-02-01T09:00:00Z"
    },
    {
        id: "sp_002",
        title: "바이오 분야 창업기업 육성 프로그램",
        organization: "한국생명공학연구원",
        description: "예비 창업자 및 초기 창업기업 대상 맞춤형 보육 및 멘토링 제공.",
        startDate: "2025-04-15",
        endDate: "2025-10-15",
        status: "ONGOING",
        category: "창업지원",
        supportType: ["멘토링", "공간지원", "네트워킹"],
        targetCompany: "예비 창업자 또는 3년 미만 창업기업",
        externalUrl: "https://example.com/support/program2",
        createdAt: "2025-03-10T10:00:00Z"
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
];
