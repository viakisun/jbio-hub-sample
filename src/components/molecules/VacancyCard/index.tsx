import React from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Button';

// --- STYLED COMPONENTS ---

const CardWrapper = styled.div`
  background-color: white;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
`;

const StatusBadge = styled.span<{ status: 'available' | 'reserved' | 'occupied' }>`
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${props => {
    if (props.status === 'available') return '#dcfce7'; // green-100
    if (props.status === 'reserved') return '#fef3c7'; // yellow-100
    return '#f3f4f6'; // gray-100
  }};
  color: ${props => {
    if (props.status === 'available') return '#166534'; // green-800
    if (props.status === 'reserved') return '#92400e'; // yellow-800
    return '#4b5563'; // gray-600
  }};
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const InfoItem = styled.div``;

const InfoLabel = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 0.25rem;
`;

const InfoValue = styled.div`
  font-size: 1rem;
  font-weight: 500;
  color: #111827;
`;

const ApplyButton = styled(Button)`
  background-color: #4f46e5;
  color: white;
  width: 100%;
  padding: 0.75rem;
  font-weight: 600;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  margin-top: auto;

  &:hover {
    background-color: #4338ca;
  }
`;

// --- COMPONENT ---

export interface VacancyCardData {
  id: string;
  unitCode: string;
  areaM2: number;
  type: 'office' | 'lab' | 'mixed';
  rentPerMonth: number;
  deposit: number;
  availabilityStatus: 'available' | 'reserved' | 'occupied';
}

interface VacancyCardProps {
  vacancy: VacancyCardData;
}

const VacancyCard: React.FC<VacancyCardProps> = ({ vacancy }) => {
  const areaPy = (vacancy.areaM2 / 3.305785).toFixed(1);

  return (
    <CardWrapper>
      <Header>
        <Title>{vacancy.unitCode}</Title>
        <StatusBadge status={vacancy.availabilityStatus}>{vacancy.availabilityStatus}</StatusBadge>
      </Header>
      <InfoGrid>
        <InfoItem>
          <InfoLabel>면적</InfoLabel>
          <InfoValue>{vacancy.areaM2}㎡ ({areaPy}평)</InfoValue>
        </InfoItem>
        <InfoItem>
          <InfoLabel>유형</InfoLabel>
          <InfoValue>{vacancy.type}</InfoValue>
        </InfoItem>
        <InfoItem>
          <InfoLabel>월 임대료</InfoLabel>
          <InfoValue>{vacancy.rentPerMonth.toLocaleString()}원</InfoValue>
        </InfoItem>
        <InfoItem>
          <InfoLabel>보증금</InfoLabel>
          <InfoValue>{vacancy.deposit.toLocaleString()}원</InfoValue>
        </InfoItem>
      </InfoGrid>
      <ApplyButton>신청/문의</ApplyButton>
    </CardWrapper>
  );
};

export default VacancyCard;
