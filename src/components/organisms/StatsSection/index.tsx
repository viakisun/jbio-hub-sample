import React from 'react';
import { DESIGN_SYSTEM } from '../../../styles/tokens';
import StatCard from '../../molecules/StatCard';

const StatsSection = () => {
  return (
    <section style={{
      marginBottom: DESIGN_SYSTEM.spacing[16]
    } as React.CSSProperties}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: DESIGN_SYSTEM.spacing[6]
      } as React.CSSProperties}>
        {[
          { label: '등록 기업수', value: '1,247', change: '+5.2%', icon: 'building', color: DESIGN_SYSTEM.colors.primary[500] },
          { label: '진행중 공고', value: '89', change: '+12', icon: 'target', color: DESIGN_SYSTEM.colors.success[500] },
          { label: '기술 보유수', value: '3,456', change: '+8.1%', icon: 'flask', color: DESIGN_SYSTEM.colors.purple[500] },
          { label: '이달 뉴스', value: '145', change: '+23', icon: 'trendingUp', color: DESIGN_SYSTEM.colors.orange[500] }
        ].map((stat, index) => (
          <StatCard key={index} stat={stat} />
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
