import React from 'react';
import { DESIGN_SYSTEM } from '../../../styles/tokens';

const FilterBar = () => {
  return (
    <div style={{
      padding: DESIGN_SYSTEM.spacing[4],
      backgroundColor: DESIGN_SYSTEM.colors.gray[100],
      borderRadius: '12px',
      marginBottom: DESIGN_SYSTEM.spacing[6]
    }}>
      <p>Filter and sort controls will go here.</p>
    </div>
  );
};

export default FilterBar;
