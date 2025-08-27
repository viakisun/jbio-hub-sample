import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import useSupportProgram from '../../../hooks/useSupportProgram';
import MainLayout from '../../templates/MainLayout';
import { LoadingSkeleton } from '../../molecules/StateDisplay/LoadingSkeleton';
import ErrorState from '../../molecules/StateDisplay/ErrorState';
import Badge from '../../atoms/Badge';

const PageWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.header`
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #e5e7eb;
`;

const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: 800;
  line-height: 1.3;
  margin-bottom: 1rem;
`;

const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #6b7280;
`;

const ContentBody = styled.div`
  line-height: 1.8;
  font-size: 1.1rem;
`;

const InfoTable = styled.div`
  margin-top: 3rem;
  background-color: #f9fafb;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  overflow: hidden;
`;

const InfoRow = styled.div`
  display: flex;
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;
  &:last-child {
    border-bottom: none;
  }
`;

const InfoLabel = styled.div`
  font-weight: 600;
  width: 120px;
  flex-shrink: 0;
`;

const InfoValue = styled.div`
  flex-grow: 1;
`;

const SupportProgramDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: program, loading, error } = useSupportProgram(id || null);

  if (loading) return <MainLayout><PageWrapper><LoadingSkeleton count={10} /></PageWrapper></MainLayout>;
  if (error) return <MainLayout><PageWrapper><ErrorState message={error.message} /></PageWrapper></MainLayout>;
  if (!program) return <MainLayout><PageWrapper><ErrorState message="지원 프로그램을 찾을 수 없습니다." /></PageWrapper></MainLayout>;

  return (
    <MainLayout>
      <PageWrapper>
        <Header>
          <Title>{program.title}</Title>
          <MetaInfo>
            <span>주관: {program.organization}</span>
            <Badge variant={program.status === 'ONGOING' ? 'success' : 'secondary'}>{program.status}</Badge>
          </MetaInfo>
        </Header>

        <ContentBody>
          <p>{program.description}</p>
        </ContentBody>

        <InfoTable>
          <InfoRow>
            <InfoLabel>지원 분야</InfoLabel>
            <InfoValue>{program.category}</InfoValue>
          </InfoRow>
          <InfoRow>
            <InfoLabel>신청 기간</InfoLabel>
            <InfoValue>{program.startDate} ~ {program.endDate}</InfoValue>
          </InfoRow>
          <InfoRow>
            <InfoLabel>지원 대상</InfoLabel>
            <InfoValue>{program.targetCompany}</InfoValue>
          </InfoRow>
          <InfoRow>
            <InfoLabel>지원 유형</InfoLabel>
            <InfoValue>
              <div className="flex gap-2">
                {program.supportType.map(type => <Badge key={type}>{type}</Badge>)}
              </div>
            </InfoValue>
          </InfoRow>
        </InfoTable>

        <div className="mt-12 text-center">
            <a href={program.externalUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-indigo-700 transition-colors">
                공고 원문 보러가기
            </a>
        </div>
      </PageWrapper>
    </MainLayout>
  );
};

export default SupportProgramDetailPage;
