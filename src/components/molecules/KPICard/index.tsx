import React from 'react';
import styled from 'styled-components';

// --- STYLED COMPONENTS ---

const CardWrapper = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  text-align: center;
`;

const Value = styled.div`
  font-size: 2.25rem;
  font-weight: 700;
  color: #4f46e5;
  margin-bottom: 0.5rem;
`;

const Label = styled.div`
  font-size: 1rem;
  font-weight: 500;
  color: #4b5563;
`;

// --- COMPONENT ---

interface KPICardProps {
  label: string;
  value: string | number;
}

const KPICard: React.FC<KPICardProps> = ({ label, value }) => {
  return (
    <CardWrapper>
      <Value>{value}</Value>
      <Label>{label}</Label>
    </CardWrapper>
  );
};

export default KPICard;
