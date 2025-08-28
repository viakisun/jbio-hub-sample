import React from 'react';

const centers = [
    { name: '전주 (본원)', top: '40%', left: '30%' },
    { name: '익산 BI 센터', top: '25%', left: '60%' },
    { name: '정읍 BI 센터', top: '70%', left: '50%' },
];

const ClusterMap = () => {
  return (
    <div className="cluster-map">
        <h2 className="cluster-map__label">(지도 시각화 영역)</h2>
        {centers.map(center => (
            <div key={center.name} className="cluster-map__pin" style={{ top: center.top, left: center.left }}>
                <div className="pin-dot" />
                <div className="pin-label">{center.name}</div>
            </div>
        ))}
    </div>
  );
};

export default ClusterMap;
