import React from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import MainLayout from '../../templates/MainLayout';
import Icon from '../../atoms/Icon';

// --- MOCK DATA ---
const mockNewsDetail = {
  id: 'news-1',
  title: '혁신적인 암 치료법, CAR-T 세포 치료의 최신 동향',
  publishedAt: '2024-08-14',
  sourceName: '바이오타임즈',
  sourceUrl: '#',
  viewCount: 1234,
  tags: ['CAR-T', '세포치료', '항암치료', '면역항암제'],
  descriptionHTML: `
    <p>CAR-T(Chimeric Antigen Receptor T-cell) 세포 치료가 혈액암을 넘어 고형암 정복에 나서고 있어 귀추가 주목된다. CAR-T는 환자의 T세포를 체외에서 조작하여 암세포를 보다 효과적으로 공격하도록 만드는 혁신적인 개인 맞춤형 치료법이다.</p>
    <br/>
    <img src="https://via.placeholder.com/800x450.png?text=CAR-T+Cell+Therapy" alt="CAR-T 세포 치료 이미지" style="max-width: 100%; border-radius: 8px; margin-bottom: 1rem;" />
    <h2>글로벌 연구 동향</h2>
    <p>최근 미국 FDA는 두 번째 고형암 대상 CAR-T 치료제를 승인하며 시장의 기대를 한 몸에 받고 있다. 국내에서도 다수의 바이오 기업들이 CAR-T 기술 개발에 박차를 가하고 있으며, 일부는 임상 1상에 진입하는 등 가시적인 성과를 내고 있다.</p>
    <br/>
    <h3>주요 과제</h3>
    <p>그러나 높은 치료 비용과 사이토카인 방출 증후군(CRS)과 같은 부작용은 여전히 해결해야 할 과제로 남아있다. 전문가들은 기술 발전을 통해 이러한 문제들이 점차 개선될 것으로 전망하고 있다.</p>
  `,
  relatedNews: [
    { id: 'news-2', title: 'AI 신약 개발, 딥마인드의 알파폴드2가 가져온 혁명' },
    { id: 'news-3', title: '유전자 가위 기술, 크리스퍼-카스9의 안전성 논란과 미래' },
    { id: 'news-4', title: '마이크로바이옴, 제2의 게놈 프로젝트로 부상' },
  ],
  prevNews: { id: 'news-5', title: '디지털 치료제(DTx), 미래 의료의 핵심으로' },
  nextNews: { id: 'news-2', title: 'AI 신약 개발, 딥마인드의 알파폴드2가 가져온 혁명' },
};

// --- STYLED COMPONENTS ---

const PageWrapper = styled.div`
  max-width: 800px;
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
  gap: 1.5rem;
  font-size: 0.875rem;
  color: #6b7280;
`;

const ArticleBody = styled.div`
  line-height: 1.7;
  font-size: 1rem;
  color: #374151;

  h2 { font-size: 1.75rem; font-weight: 600; margin: 2rem 0 1rem; }
  h3 { font-size: 1.25rem; font-weight: 600; margin: 1.5rem 0 1rem; }
  p { margin-bottom: 1rem; }
  a { color: #4f46e5; }
`;

const TagContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin: 2rem 0;
`;

const Tag = styled(Link)`
  background-color: #eef2ff;
  color: #4338ca;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  &:hover { background-color: #e0e7ff; }
`;

const ShareContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 2rem 0;
  border-top: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
`;

const ShareButton = styled.button`
  background: none;
  border: 1px solid #d1d5db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #4b5563;
  &:hover { background-color: #f3f4f6; }
`;

const NavContainer = styled.nav`
  padding: 2rem 0;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
  &:not(:last-child) { border-bottom: 1px solid #f3f4f6; }
`;

const NavLabel = styled.span`
  font-weight: 600;
  color: #4f46e5;
  min-width: 60px;
`;

const NavLink = styled(Link)`
  font-weight: 500;
  color: #374151;
  text-decoration: none;
  &:hover { text-decoration: underline; }
`;


// --- COMPONENT ---

const NewsDetailPage = () => {
  const { newsId } = useParams();

  return (
    <MainLayout>
      <PageWrapper>
        <ArticleHeader>
          <Title>{mockNewsDetail.title}</Title>
          <Metadata>
            <span>게시일: {mockNewsDetail.publishedAt}</span>
            <span>출처: <a href={mockNewsDetail.sourceUrl} target="_blank" rel="noopener noreferrer">{mockNewsDetail.sourceName}</a></span>
            <span>조회수: {mockNewsDetail.viewCount.toLocaleString()}</span>
          </Metadata>
        </ArticleHeader>

        <ArticleBody dangerouslySetInnerHTML={{ __html: mockNewsDetail.descriptionHTML }} />

        <TagContainer>
          {mockNewsDetail.tags.map(tag => <Tag key={tag} to={`/news/latest?tag=${tag}`}>#{tag}</Tag>)}
        </TagContainer>

        <ShareContainer>
          <ShareButton title="Share on Twitter"><Icon name="twitter" size={20} /></ShareButton>
          <ShareButton title="Share on Facebook"><Icon name="facebook" size={20} /></ShareButton>
          <ShareButton title="Copy Link"><Icon name="link" size={20} /></ShareButton>
        </ShareContainer>

        <NavContainer>
          {mockNewsDetail.nextNews && (
            <NavItem>
              <NavLabel>다음글</NavLabel>
              <NavLink to={`/news/latest/${mockNewsDetail.nextNews.id}`}>{mockNewsDetail.nextNews.title}</NavLink>
            </NavItem>
          )}
          {mockNewsDetail.prevNews && (
            <NavItem>
              <NavLabel>이전글</NavLabel>
              <NavLink to={`/news/latest/${mockNewsDetail.prevNews.id}`}>{mockNewsDetail.prevNews.title}</NavLink>
            </NavItem>
          )}
        </NavContainer>

      </PageWrapper>
    </MainLayout>
  );
};

export default NewsDetailPage;
