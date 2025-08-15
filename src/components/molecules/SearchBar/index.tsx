import React, { useState } from 'react';
import { DESIGN_SYSTEM } from '../../../styles/tokens';
import Icon from '../../atoms/Icon';
import Button from '../../atoms/Button';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div style={{
      maxWidth: '600px',
      margin: '0 auto'
    } as React.CSSProperties}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: DESIGN_SYSTEM.colors.white,
        borderRadius: '16px',
        boxShadow: DESIGN_SYSTEM.shadows['2xl'],
        overflow: 'hidden',
        border: `2px solid ${DESIGN_SYSTEM.colors.primary[100]}`
      } as React.CSSProperties}>
        <div style={{
          padding: `0 ${DESIGN_SYSTEM.spacing[5]}`,
          color: DESIGN_SYSTEM.colors.gray[400]
        } as React.CSSProperties}>
          <Icon name="search" size={20} />
        </div>
        <input
          type="text"
          placeholder="공고, 기업, 기술정보를 검색하세요"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          style={{
            flex: 1,
            padding: `${DESIGN_SYSTEM.spacing[5]} 0`,
            border: 'none',
            outline: 'none',
            fontSize: DESIGN_SYSTEM.typography.fontSize.base[0],
            fontFamily: DESIGN_SYSTEM.typography.fontFamily.sans,
            backgroundColor: 'transparent',
            color: DESIGN_SYSTEM.colors.gray[900]
          } as React.CSSProperties}
        />
        <Button style={{
          background: DESIGN_SYSTEM.gradients.primary,
          color: 'white',
          border: 'none',
          padding: `${DESIGN_SYSTEM.spacing[4]} ${DESIGN_SYSTEM.spacing[8]}`,
          margin: DESIGN_SYSTEM.spacing[1],
          borderRadius: '12px',
          fontSize: DESIGN_SYSTEM.typography.fontSize.base[0],
          fontWeight: DESIGN_SYSTEM.typography.fontWeight.semibold,
          cursor: 'pointer',
          minWidth: '100px'
        } as React.CSSProperties}>
          검색
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
