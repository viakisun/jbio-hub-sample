import React from 'react';
import styled from 'styled-components';

// --- STYLED COMPONENTS ---

const MapWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 2rem auto;
  padding-top: 50%; /* Aspect Ratio */
  background-color: #f3f4f6;
  border-radius: 16px;
  border: 1px solid #e5e7eb;
`;

const MapLabel = styled.h2`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #9ca3af;
    font-size: 2rem;
    font-weight: 700;
`;

const CenterPin = styled.div<{ top: string; left: string; }>`
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  transform: translate(-50%, -50%);

  .pin-dot {
    width: 20px;
    height: 20px;
    background-color: #4f46e5;
    border-radius: 50%;
    border: 3px solid white;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  }

  .pin-label {
    position: absolute;
    top: 25px;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    background-color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 6px;
    font-size: 0.875rem;
    font-weight: 600;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  }
`;


// --- MOCK DATA ---
const centers = [
    { name: '전주 (본원)', top: '40%', left: '30%' },
    { name: '익산 BI 센터', top: '25%', left: '60%' },
    { name: '정읍 BI 센터', top: '70%', left: '50%' },
];

// --- COMPONENT ---

const ClusterMap = () => {
  return (
    <MapWrapper>
        <MapLabel>(지도 시각화 영역)</MapLabel>
        {centers.map(center => (
            <CenterPin key={center.name} top={center.top} left={center.left}>
                <div className="pin-dot" />
                <div className="pin-label">{center.name}</div>
            </CenterPin>
        ))}
    </MapWrapper>
  );
};

export default ClusterMap;
