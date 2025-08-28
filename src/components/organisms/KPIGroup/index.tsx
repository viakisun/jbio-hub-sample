import React from 'react';
import Grid from '../../atoms/Grid';
import KPICard from '../../molecules/KPICard';

interface KPIData {
  label: string;
  value: string | number;
}

interface KPIGroupProps {
  kpis: KPIData[];
}

const KPIGroup: React.FC<KPIGroupProps> = ({ kpis }) => {
  return (
    <Grid cols={4} tabletCols={2} mobileCols={2} gap="1.5rem">
      {kpis.map((kpi, index) => (
        <KPICard key={index} label={kpi.label} value={kpi.value} />
      ))}
    </Grid>
  );
};

export default KPIGroup;
