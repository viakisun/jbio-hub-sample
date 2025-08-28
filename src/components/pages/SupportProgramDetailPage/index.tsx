import React from 'react';
import { useParams } from 'react-router-dom';
import useSupportProgram from '../../../hooks/useSupportProgram';
import MainLayout from '../../templates/MainLayout';
import { LoadingSkeleton } from '../../molecules/StateDisplay/LoadingSkeleton';
import ErrorState from '../../molecules/StateDisplay/ErrorState';
import Badge from '../../atoms/Badge';

const SupportProgramDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: program, loading, error } = useSupportProgram(id || null);

  if (loading) return <MainLayout><div className="support-program-detail-page__wrapper"><LoadingSkeleton count={10} /></div></MainLayout>;
  if (error) return <MainLayout><div className="support-program-detail-page__wrapper"><ErrorState message={error.message} /></div></MainLayout>;
  if (!program) return <MainLayout><div className="support-program-detail-page__wrapper"><ErrorState message="지원 프로그램을 찾을 수 없습니다." /></div></MainLayout>;

  return (
    <MainLayout>
      <div className="support-program-detail-page__wrapper">
        <header className="support-program-detail-page__header">
          <h1 className="support-program-detail-page__title">{program.title}</h1>
          <div className="support-program-detail-page__meta-info">
            <span>주관: {program.organization}</span>
            <Badge variant={program.status === 'ONGOING' ? 'success' : 'secondary'}>{program.status}</Badge>
          </div>
        </header>

        <div className="support-program-detail-page__content-body">
          <p>{program.description}</p>
        </div>

        <div className="support-program-detail-page__info-table">
          <div className="support-program-detail-page__info-row">
            <div className="support-program-detail-page__info-label">지원 분야</div>
            <div className="support-program-detail-page__info-value">{program.category}</div>
          </div>
          <div className="support-program-detail-page__info-row">
            <div className="support-program-detail-page__info-label">신청 기간</div>
            <div className="support-program-detail-page__info-value">{program.startDate} ~ {program.endDate}</div>
          </div>
          <div className="support-program-detail-page__info-row">
            <div className="support-program-detail-page__info-label">지원 대상</div>
            <div className="support-program-detail-page__info-value">{program.targetCompany}</div>
          </div>
          <div className="support-program-detail-page__info-row">
            <div className="support-program-detail-page__info-label">지원 유형</div>
            <div className="support-program-detail-page__info-value">
              <div className="flex gap-2">
                {program.supportType.map(type => <Badge key={type}>{type}</Badge>)}
              </div>
            </div>
          </div>
        </div>

        <div className="support-program-detail-page__external-link-container">
            <a href={program.externalUrl} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                공고 원문 보러가기
            </a>
        </div>
      </div>
    </MainLayout>
  );
};

export default SupportProgramDetailPage;
