import React from 'react';
import styled from 'styled-components';
import { DESIGN_SYSTEM } from '../../../styles/tokens';
import Grid from '../../atoms/Grid';
import SearchBar from '../../molecules/SearchBar';
import FilterBar from '../../molecules/FilterBar';
import Pagination from '../../molecules/Pagination';
import TenantCard, { TenantCardData } from '../../molecules/TenantCard';

// --- MOCK DATA ---
const mockTenants: TenantCardData[] = [
  { id: 'tenant-1', name: '바이오젠 테라퓨틱스', logoUrl: 'https://picsum.photos/seed/logo1/48', centerName: '전북바이오융합원 본원', fieldTags: ['신약개발', '항체'] },
  { id: 'tenant-2', name: '메디퓨처', logoUrl: 'https://picsum.photos/seed/logo2/48', centerName: '전북바이오융합원 본원', fieldTags: ['의료기기', '진단'] },
  { id: 'tenant-3', name: '그린사이언스', logoUrl: 'https://picsum.photos/seed/logo3/48', centerName: '익산 BI 센터', fieldTags: ['건강기능식품', '천연물'] },
  { id: 'tenant-4', name: '뉴로링크 AI', logoUrl: 'https://picsum.photos/seed/logo4/48', centerName: '정읍 BI 센터', fieldTags: ['AI', '뇌과학'] },
  { id: 'tenant-5', name: '셀큐어', logoUrl: 'https://picsum.photos/seed/logo5/48', centerName: '전북바이오융합원 본원', fieldTags: ['세포치료제'] },
  { id: 'tenant-6', name: '팜캐드', logoUrl: 'https://picsum.photos/seed/logo6/48', centerName: '익산 BI 센터', fieldTags: ['AI', '신약개발'] },
];

// --- STYLED COMPONENTS ---

const ControlsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;

  @media ${DESIGN_SYSTEM.mediaQueries.mobile} {
    flex-direction: column;
    align-items: stretch;
  }
`;

// --- COMPONENT ---

const TenantsView = () => {
  return (
    <div>
      <ControlsWrapper>
        <FilterBar />
        <SearchBar />
      </ControlsWrapper>
      <Grid $cols={3} $tabletCols={2} $mobileCols={1} $gap="1.5rem">
        {mockTenants.map(tenant => (
          <TenantCard key={tenant.id} tenant={tenant} />
        ))}
      </Grid>
      <Pagination currentPage={1} totalPages={3} />
    </div>
  );
};

export default TenantsView;
