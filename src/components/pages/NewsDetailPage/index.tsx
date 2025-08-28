import React from 'react';
import { useParams, Link } from 'react-router-dom';
import MainLayout from '../../templates/MainLayout';
import Icon from '../../atoms/Icon';

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
    <img src="https://picsum.photos/seed/newsdetail/800/450" alt="CAR-T 세포 치료 이미지" style="max-width: 100%; border-radius: 8px; margin-bottom: 1rem;" />
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

const NewsDetailPage = () => {
  const { newsId } = useParams();

  return (
    <MainLayout>
      <div className="news-detail-page__wrapper">
        <header className="news-detail-page__header">
          <h1 className="news-detail-page__title">{mockNewsDetail.title}</h1>
          <div className="news-detail-page__metadata">
            <span>게시일: {mockNewsDetail.publishedAt}</span>
            <span>출처: <a href={mockNewsDetail.sourceUrl} target="_blank" rel="noopener noreferrer">{mockNewsDetail.sourceName}</a></span>
            <span>조회수: {mockNewsDetail.viewCount.toLocaleString()}</span>
          </div>
        </header>

        <div className="news-detail-page__body" dangerouslySetInnerHTML={{ __html: mockNewsDetail.descriptionHTML }} />

        <div className="news-detail-page__tag-container">
          {mockNewsDetail.tags.map(tag => <Link key={tag} to={`/news/latest?tag=${tag}`} className="news-detail-page__tag">#{tag}</Link>)}
        </div>

        <div className="news-detail-page__share-container">
          <button title="Share on Twitter" className="news-detail-page__share-button"><Icon name="twitter" size={20} /></button>
          <button title="Share on Facebook" className="news-detail-page__share-button"><Icon name="facebook" size={20} /></button>
          <button title="Copy Link" className="news-detail-page__share-button"><Icon name="link" size={20} /></button>
        </div>

        <nav className="news-detail-page__nav-container">
          {mockNewsDetail.nextNews && (
            <div className="news-detail-page__nav-item">
              <span className="news-detail-page__nav-label">다음글</span>
              <Link to={`/news/latest/${mockNewsDetail.nextNews.id}`} className="news-detail-page__nav-link">{mockNewsDetail.nextNews.title}</Link>
            </div>
          )}
          {mockNewsDetail.prevNews && (
            <div className="news-detail-page__nav-item">
              <span className="news-detail-page__nav-label">이전글</span>
              <Link to={`/news/latest/${mockNewsDetail.prevNews.id}`} className="news-detail-page__nav-link">{mockNewsDetail.prevNews.title}</Link>
            </div>
          )}
        </nav>

      </div>
    </MainLayout>
  );
};

export default NewsDetailPage;
