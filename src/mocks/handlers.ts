import { http, HttpResponse } from 'msw';

const dashboardHandler = http.get('/api/cluster/dashboard', () => {
  return HttpResponse.json({
    kpis: [
      { title: '클러스터 내 기관', value: '132', change: '+2' },
      { title: '보유 인프라', value: '45', change: '+5' },
      { title: '활성 지원정책', value: '28', change: '-1' },
      { title: '이번 달 신규 기관', value: '6', change: '' },
    ],
    latestOrgs: [
      { id: 'org-1', name: '메디퓨처', date: '2024-08-15', status: 'NEW' },
      { id: 'org-2', name: '그린사이언스', date: '2024-08-14', status: 'NEW' },
      { id: 'org-3', name: '한국화학연구원', date: '2024-08-12', status: 'UPDATED' },
      { id: 'org-4', name: '바이오톡스텍', date: '2024-08-11', status: 'NEW' },
      { id: 'org-5', name: '셀트리온', date: '2024-08-10', status: 'UPDATED' },
      { id: 'org-6', name: '삼성바이오로직스', date: '2024-08-09', status: 'NEW' },
    ],
    latestPolicies: [
      { id: 'pol-1', name: '2024년 바이오 스타트업 지원사업', date: '2024-08-10', status: 'NEW' },
      { id: 'pol-2', name: '연구장비 공동활용 지원', date: '2024-08-09', status: 'UPDATED' },
      { id: 'pol-3', name: '기술이전 R&BD 사업화 지원', date: '2024-08-05', status: 'UPDATED' },
      { id: 'pol-4', name: '바이오 분야 전문인력 양성사업', date: '2024-08-02', status: 'NEW' },
      { id: 'pol-5', name: '임상시험 연계 지원 프로그램', date: '2024-07-28', status: 'UPDATED' },
      { id: 'pol-6', name: '해외 바이오 클러스터 교류 지원', date: '2024-07-25', status: 'NEW' },
    ],
  });
});

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

const organizationsHandler = http.get('/api/cluster/organizations', ({ request }) => {
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


const organizationDetailHandler = http.get('/api/cluster/organizations/:id', ({ params }) => {
  const { id } = params;
  const organization = organizations.find(org => org.id === id);

  if (organization) {
    // In a real API, you'd return much more detail here
    return HttpResponse.json(organization);
  } else {
    return new HttpResponse(null, { status: 404, statusText: 'Not Found' });
  }
});

export const handlers = [
  dashboardHandler,
  organizationsHandler,
  organizationDetailHandler,
];
