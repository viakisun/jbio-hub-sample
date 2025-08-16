import React from 'react';
import styled from 'styled-components';
import useClusterFiltersStore from '../../../stores/useClusterFiltersStore';
import Grid from '../../atoms/Grid';

const FiltersWrapper = styled.div`
  padding: 2rem;
  background-color: #f9fafb; /* gray-50 */
  border-radius: 12px;
  border: 1px solid #e5e7eb; /* gray-200 */
`;

const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const FilterLabel = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #374151; /* gray-700 */
`;

const Select = styled.select`
  padding: 0.75rem;
  border: 1px solid #d1d5db; /* gray-300 */
  border-radius: 8px;
  background-color: white;
  &:focus {
    outline: 2px solid #3b82f6; /* blue-500 */
    border-color: transparent;
  }
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #d1d5db; /* gray-300 */
  border-radius: 8px;
  &:focus {
    outline: 2px solid #3b82f6; /* blue-500 */
    border-color: transparent;
  }
`;

// Mock options - in a real app, this would come from an API
const regionOptions = ['전체', '전주', '익산', '정읍', '군산', '김제'];
const fieldOptions = ['전체', '의약', '진단', '기기', '푸드', '화장품'];
const orgTypeOptions = ['전체', '대학', '병원', '연구소', '지원기관', '기업'];

const GlobalFilters = () => {
  const { region, field, orgType, keyword, setRegion, setField, setOrgType, setKeyword } = useClusterFiltersStore();

  return (
    <FiltersWrapper>
      <Grid $cols={4} $tabletCols={2} $mobileCols={1} $gap="1.5rem">
        <FilterGroup>
          <FilterLabel htmlFor="region-filter">지역</FilterLabel>
          <Select id="region-filter" value={region || '전체'} onChange={(e) => setRegion(e.target.value === '전체' ? null : e.target.value)}>
            {regionOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
          </Select>
        </FilterGroup>
        <FilterGroup>
          <FilterLabel htmlFor="field-filter">분야</FilterLabel>
          <Select id="field-filter" value={field || '전체'} onChange={(e) => setField(e.target.value === '전체' ? null : e.target.value)}>
            {fieldOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
          </Select>
        </FilterGroup>
        <FilterGroup>
          <FilterLabel htmlFor="orgType-filter">기관유형</FilterLabel>
          <Select id="orgType-filter" value={orgType || '전체'} onChange={(e) => setOrgType(e.target.value === '전체' ? null : e.target.value)}>
            {orgTypeOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
          </Select>
        </FilterGroup>
        <FilterGroup>
          <FilterLabel htmlFor="keyword-filter">키워드 검색</FilterLabel>
          <Input id="keyword-filter" type="text" placeholder="기관, 정책, 서비스명 등" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
        </FilterGroup>
      </Grid>
    </FiltersWrapper>
  );
};

export default GlobalFilters;
