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
    { fileName: '기술소개자료.pptx', fileUrl: '#', fileSize: '10.2MB' },
  ],
  descriptionHTML: `
    <h2>연구 개요</h2>
    <p>본 연구는 차세대 태양전지로 각광받는 페로브스카이트(Perovskite) 태양전지의 상용화를 가로막는 가장 큰 문제점인 안정성 저하 문제를 해결하는 데 중점을 두었습니다. 새로운 유기-무기 하이브리드 소재를 개발하고, 박막 증착 공정을 최적화하여 수분과 열에 대한 저항성을 획기적으로 향상시켰습니다.</p>
    <img src="https://picsum.photos/seed/tech1/800/450" alt="페로브스카이트 태양전지" style="max-width: 100%; border-radius: 8px; margin-bottom: 1rem;" />
    <h2>기대 효과</h2>
    <p>본 기술을 통해 페로브스카이트 태양전지의 수명을 2배 이상 늘리고, 생산 단가를 30% 절감할 수 있을 것으로 기대됩니다. 이는 국내 태양광 산업의 글로벌 경쟁력 강화에 크게 기여할 것입니다.</p>
  `,
  relatedItems: [
    { id: 'transfer-1', title: '고효율 태양전지용 투명 전극 기술 이전', url: '/tech/transfer/transfer-1' },
    { id: 'patent-1', title: '페로브스카이트 안정화 첨가제 관련 특허', url: '/tech/patents/patent-1' },
  ]
};

const mockTransferDetail = {
    id: 'transfer-1',
    title: '고효율 태양전지용 투명 전극 기술',
    ownerOrg: '한국화학연구원',
    status: 'open',
    deadline: '2024-10-31',
    fields: ['에너지', '디스플레이', '소재'],
    method: '실시권',
    cost: '정액 기술료(5,000만원) + 경상 기술료(매출액의 2%)',
    contactName: '박기술',
    contactEmail: 'tech@krict.re.kr',
    descriptionHTML: `
        <h2>기술 개요</h2>
        <p>본 기술은 ITO를 대체할 수 있는 유연 투명 전극 소재 기술로, 높은 광투과도와 전기 전도성을 동시에 만족시킵니다. 롤투롤 공정이 가능하여 대량생산에 유리합니다.</p>
        <h2>적용 분야</h2>
        <p>플렉서블 디스플레이, 스마트 윈도우, 박막형 태양전지 등 다양한 분야에 적용 가능합니다.</p>
    `,
    attachments: [
        { fileName: '기술소개서(TLO).pdf', fileUrl: '#', fileSize: '2.1MB' },
    ],
    relatedItems: [
        { id: 'outcome-1', title: '고효율 페로브스카이트 태양전지 안정성 향상 기술', url: '/tech/outcomes/outcome-1' },
    ]
};

// --- STYLED COMPONENTS ---

const PageWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
`;

const ArticleHeader = styled.header`
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #e5e7eb;
`;

const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 1rem;
`;

const Metadata = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 2rem;
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 1rem;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const ArticleBody = styled.div`
  line-height: 1.7;
  font-size: 1rem;
  color: #374151;
  margin: 2rem 0;

  h2 { font-size: 1.75rem; font-weight: 600; margin: 2rem 0 1rem; }
  p { margin-bottom: 1rem; }
`;

const Section = styled.section`
  margin-top: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e5e7eb;
`;


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


// --- MAIN COMPONENT ---

const TechDetailPage = () => {
  const { type, id } = useParams();

  const renderContent = () => {
    switch (type) {
      case 'outcomes':
        return renderOutcomeDetail();
      case 'transfer':
        return renderTransferDetail();
      // TODO: Add cases for 'patents', 'collaboration'
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
