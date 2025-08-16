import React from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import MainLayout from '../../templates/MainLayout';
import FileList, { FileData } from '../../molecules/FileList';
import RelatedList, { RelatedItem } from '../../organisms/RelatedList';
import Badge from '../../atoms/Badge';
import InfoTable from '../../molecules/InfoTable';

// --- MOCK DATA ---
const mockOutcomeDetail = {
  id: 'outcome-1',
  title: '고효율 페로브스카이트 태양전지 안정성 향상 기술',
  orgName: '한국화학연구원',
  publishedAt: '2024-08-10',
  viewCount: 2580,
  fields: ['에너지', '소재', '페로브스카이트'],
  attachments: [
    { fileName: '연구성과 보고서.pdf', fileUrl: '#', fileSize: '3.5MB' },
  ],
  descriptionHTML: `
    <p>본 연구는 차세대 태양전지로 각광받는 페로브스카이트(Perovskite) 태양전지의 상용화를 가로막는 가장 큰 문제점인 안정성 저하 문제를 해결하는 데 중점을 두었습니다.</p>
    <img src="https://picsum.photos/seed/tech1/800/450" alt="페로브스카이트 태양전지" style="max-width: 100%; border-radius: 8px; margin-bottom: 1rem;" />
  `,
  relatedItems: [
    { id: 'transfer-1', title: '고효율 태양전지용 투명 전극 기술 이전', url: '/tech/transfer/transfer-1' },
  ]
};

const mockTransferDetail = {
    id: 'transfer-1',
    title: '고효율 태양전지용 투명 전극 기술',
    ownerOrg: '한국화학연구원',
    deadline: '2024-10-31',
    fields: ['에너지', '디스플레이'],
    method: '실시권',
    cost: '정액 기술료(5,000만원) + 경상 기술료(매출액의 2%)',
    contactName: '박기술',
    contactEmail: 'tech@krict.re.kr',
    descriptionHTML: `
        <h2>기술 개요</h2>
        <p>본 기술은 ITO를 대체할 수 있는 유연 투명 전극 소재 기술로, 높은 광투과도와 전기 전도성을 동시에 만족시킵니다.</p>
    `,
    attachments: [ { fileName: '기술소개서(TLO).pdf', fileUrl: '#', fileSize: '2.1MB' } ],
    relatedItems: [ { id: 'outcome-1', title: '고효율 페로브스카이트 태양전지 안정성 향상 기술', url: '/tech/outcomes/outcome-1' } ]
};

const mockPatentDetail = {
    id: 'patent-1',
    title: '페로브스카이트 안정화 첨가제',
    number: '10-2023-0012345',
    status: 'granted',
    applicant: '한국화학연구원',
    filedAt: '2023-01-15',
    grantedAt: '2024-06-20',
    ipcCodes: ['H01L 51/52', 'C07F 15/00'],
    abstractHTML: '<p>본 발명은 페로브스카이트 태양전지의 안정성을 향상시키는 신규 유기 첨가제에 관한 것이다.</p>',
    figureUrl: 'https://picsum.photos/seed/patent1/600/400',
    sourceUrl: '#',
};

const mockCollaborationDetail = {
    id: 'collab-1',
    title: '산학협력: AI 기반 암 진단 솔루션 개발',
    partners: [ { name: '전북대학교' }, { name: '바이오젠 테라퓨틱스' } ],
    year: 2023,
    fields: ['AI', '진단', '산학협력'],
    descriptionHTML: `
        <h2>성과</h2>
        <p>딥러닝 모델을 개발하여 위암 조직 슬라이드 이미지 판독 정확도를 98.5%까지 달성하였으며, 이는 전문의 평균 정확도를 상회하는 수치이다.</p>
    `,
    relatedItems: [ { id: 'tenant-1', title: '바이오젠 테라퓨틱스 입주 정보', url: '/incubation/tenants/tenant-1' } ]
};

// --- STYLED COMPONENTS ---

const PageWrapper = styled.div` max-width: 900px; margin: 0 auto; padding: 2rem; `;
const ArticleHeader = styled.header` margin-bottom: 2rem; padding-bottom: 2rem; border-bottom: 1px solid #e5e7eb; `;
const Title = styled.h1` font-size: 2.25rem; font-weight: 700; line-height: 1.3; margin-bottom: 1rem; `;
const Metadata = styled.div` display: flex; flex-wrap: wrap; gap: 1rem 2rem; font-size: 0.875rem; color: #6b7280; margin-bottom: 1rem; `;
const TagContainer = styled.div` display: flex; flex-wrap: wrap; gap: 0.5rem; `;
const ArticleBody = styled.div` line-height: 1.7; font-size: 1rem; color: #374151; margin: 2rem 0; h2 { font-size: 1.75rem; font-weight: 600; margin: 2rem 0 1rem; } p { margin-bottom: 1rem; } `;
const Section = styled.section` margin-top: 3rem; `;
const SectionTitle = styled.h2` font-size: 1.5rem; font-weight: 600; margin-bottom: 1.5rem; padding-bottom: 1rem; border-bottom: 1px solid #e5e7eb; `;

// --- RENDER FUNCTIONS ---

const renderOutcomeDetail = () => (
  <>
    <ArticleHeader>
      <Title>{mockOutcomeDetail.title}</Title>
      <Metadata>
        <span>기관: {mockOutcomeDetail.orgName}</span>
        <span>공개일: {mockOutcomeDetail.publishedAt}</span>
        <span>조회수: {mockOutcomeDetail.viewCount.toLocaleString()}</span>
      </Metadata>
      <TagContainer>
        {mockOutcomeDetail.fields.map(tag => <Badge key={tag}>{tag}</Badge>)}
      </TagContainer>
    </ArticleHeader>
    <ArticleBody dangerouslySetInnerHTML={{ __html: mockOutcomeDetail.descriptionHTML }} />
    {mockOutcomeDetail.attachments && (
      <Section>
        <SectionTitle>첨부파일</SectionTitle>
        <FileList files={mockOutcomeDetail.attachments as FileData[]} />
      </Section>
    )}
    <RelatedList title="관련 항목" items={mockOutcomeDetail.relatedItems as RelatedItem[]} />
  </>
);

const renderTransferDetail = () => {
    const transferInfo = {
        '보유기관': mockTransferDetail.ownerOrg,
        '이전 형태': mockTransferDetail.method,
        '기술료': mockTransferDetail.cost,
        '담당자': `${mockTransferDetail.contactName} (${mockTransferDetail.contactEmail})`,
        '모집 마감': new Date(mockTransferDetail.deadline).toLocaleDateString(),
    };
    return (
        <>
            <ArticleHeader>
                <Title>{mockTransferDetail.title}</Title>
                <TagContainer>
                    {mockTransferDetail.fields.map(tag => <Badge key={tag}>{tag}</Badge>)}
                </TagContainer>
            </ArticleHeader>
            <Section>
                <SectionTitle>기술 이전 조건</SectionTitle>
                <InfoTable title="" data={transferInfo} />
            </Section>
            <Section>
                <SectionTitle>기술 상세</SectionTitle>
                <ArticleBody dangerouslySetInnerHTML={{ __html: mockTransferDetail.descriptionHTML }} />
            </Section>
            {mockTransferDetail.attachments && (
                <Section>
                    <SectionTitle>첨부파일</SectionTitle>
                    <FileList files={mockTransferDetail.attachments as FileData[]} />
                </Section>
            )}
            <RelatedList title="관련 항목" items={mockTransferDetail.relatedItems as RelatedItem[]} />
        </>
    );
};

const renderPatentDetail = () => {
    const patentInfo = {
        '출원/등록번호': mockPatentDetail.number,
        '상태': <Badge>{mockPatentDetail.status}</Badge>,
        '출원인': mockPatentDetail.applicant,
        '출원일': mockPatentDetail.filedAt,
        '등록일': mockPatentDetail.grantedAt,
        'IPC 분류': mockPatentDetail.ipcCodes.join(', '),
    };
    return (
        <>
            <ArticleHeader>
                <Title>{mockPatentDetail.title}</Title>
                <a href={mockPatentDetail.sourceUrl} target="_blank" rel="noopener noreferrer">원문 보기</a>
            </ArticleHeader>
            <Section>
                <SectionTitle>특허 정보</SectionTitle>
                <InfoTable title="" data={patentInfo} />
            </Section>
            <Section>
                <SectionTitle>초록</SectionTitle>
                <ArticleBody dangerouslySetInnerHTML={{ __html: mockPatentDetail.abstractHTML }} />
                {mockPatentDetail.figureUrl && <img src={mockPatentDetail.figureUrl} alt="대표도면" style={{maxWidth: '100%', borderRadius: '8px'}} />}
            </Section>
        </>
    );
};

const renderCollaborationDetail = () => {
    const collabInfo = {
        '참여기관': mockCollaborationDetail.partners.map(p => p.name).join(' + '),
        '수행연도': mockCollaborationDetail.year,
        '핵심분야': mockCollaborationDetail.fields.join(', '),
    };
    return (
        <>
            <ArticleHeader>
                <Title>{mockCollaborationDetail.title}</Title>
            </ArticleHeader>
            <Section>
                <SectionTitle>협력 개요</SectionTitle>
                <InfoTable title="" data={collabInfo} />
            </Section>
            <Section>
                <SectionTitle>상세 내용</SectionTitle>
                <ArticleBody dangerouslySetInnerHTML={{ __html: mockCollaborationDetail.descriptionHTML }} />
            </Section>
            <RelatedList title="관련 항목" items={mockCollaborationDetail.relatedItems as RelatedItem[]} />
        </>
    );
};


// --- MAIN COMPONENT ---

const TechDetailPage = () => {
  const { type, id } = useParams();

  const renderContent = () => {
    switch (type) {
      case 'outcomes':
        return renderOutcomeDetail();
      case 'transfer':
        return renderTransferDetail();
      case 'patents':
        return renderPatentDetail();
      case 'collaboration':
        return renderCollaborationDetail();
      default:
        return <p>Unknown type: {type}</p>;
    }
  };

  return (
    <MainLayout>
      <PageWrapper>
        {renderContent()}
      </PageWrapper>
    </MainLayout>
  );
};

export default TechDetailPage;
