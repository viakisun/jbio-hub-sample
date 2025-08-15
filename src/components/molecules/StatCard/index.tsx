import React from 'react';
import { DESIGN_SYSTEM } from '../../../styles/tokens';
import Icon from '../../atoms/Icon';

interface Stat {
  label: string;
  value: string;
  change: string;
  icon: string;
  color: string;
}

interface StatCardProps {
  stat: Stat;
}

const StatCard: React.FC<StatCardProps> = ({ stat }) => {
  return (
    <div
      style={{
        background: DESIGN_SYSTEM.gradients.card,
        borderRadius: '20px',
        padding: DESIGN_SYSTEM.spacing[8],
        boxShadow: DESIGN_SYSTEM.shadows.lg,
        border: `1px solid ${DESIGN_SYSTEM.colors.gray[100]}`,
        position: 'relative',
        overflow: 'hidden'
      } as React.CSSProperties}
    >
      {/* 배경 그라데이션 */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '80px',
        height: '80px',
        background: `${stat.color}10`,
        borderRadius: '50%',
        transform: 'translate(25%, -25%)'
      } as React.CSSProperties} />

      <div style={{ position: 'relative', zIndex: 1 } as React.CSSProperties}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: DESIGN_SYSTEM.spacing[4]
        } as React.CSSProperties}>
          <div style={{
            padding: DESIGN_SYSTEM.spacing[3],
            backgroundColor: `${stat.color}15`,
            borderRadius: '12px'
          } as React.CSSProperties}>
            <Icon name={stat.icon} size={24} color={stat.color} />
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: DESIGN_SYSTEM.spacing[1],
            fontSize: DESIGN_SYSTEM.typography.fontSize.sm[0],
            fontWeight: DESIGN_SYSTEM.typography.fontWeight.semibold,
            color: DESIGN_SYSTEM.colors.success[600]
          } as React.CSSProperties}>
            <Icon name="trendingUp" size={14} />
            {stat.change}
          </div>
        </div>

        <div style={{
          fontSize: DESIGN_SYSTEM.typography.fontSize['4xl'][0],
          fontWeight: DESIGN_SYSTEM.typography.fontWeight.black,
          color: DESIGN_SYSTEM.colors.gray[900],
          marginBottom: DESIGN_SYSTEM.spacing[2],
          fontFamily: DESIGN_SYSTEM.typography.fontFamily.mono,
          lineHeight: '1'
        } as React.CSSProperties}>
          {stat.value}
        </div>

        <div style={{
          fontSize: DESIGN_SYSTEM.typography.fontSize.sm[0],
          color: DESIGN_SYSTEM.colors.gray[600],
          fontWeight: DESIGN_SYSTEM.typography.fontWeight.medium
        } as React.CSSProperties}>
          {stat.label}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
