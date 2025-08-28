import React from 'react';
import useClusterFiltersStore from '../../../stores/useClusterFiltersStore';
import Grid from '../../atoms/Grid';

const regionOptions = ['전체', '전주', '익산', '정읍', '군산', '김제'];
const fieldOptions = ['전체', '의약', '진단', '기기', '푸드', '화장품'];
const orgTypeOptions = ['전체', '대학', '병원', '연구소', '지원기관', '기업'];

const GlobalFilters = () => {
  const { region, field, orgType, keyword, setRegion, setField, setOrgType, setKeyword } = useClusterFiltersStore();

  return (
    <div className="global-filters">
      <Grid cols={4} tabletCols={2} mobileCols={1} gap="1.5rem">
        <div className="global-filters__group">
          <label htmlFor="region-filter" className="global-filters__label">지역</label>
          <select id="region-filter" value={region || '전체'} onChange={(e) => setRegion(e.target.value === '전체' ? null : e.target.value)} className="global-filters__select">
            {regionOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
          </select>
        </div>
        <div className="global-filters__group">
          <label htmlFor="field-filter" className="global-filters__label">분야</label>
          <select id="field-filter" value={field || '전체'} onChange={(e) => setField(e.target.value === '전체' ? null : e.target.value)} className="global-filters__select">
            {fieldOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
          </select>
        </div>
        <div className="global-filters__group">
          <label htmlFor="orgType-filter" className="global-filters__label">기관유형</label>
          <select id="orgType-filter" value={orgType || '전체'} onChange={(e) => setOrgType(e.target.value === '전체' ? null : e.target.value)} className="global-filters__select">
            {orgTypeOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
          </select>
        </div>
        <div className="global-filters__group">
          <label htmlFor="keyword-filter" className="global-filters__label">키워드 검색</label>
          <input id="keyword-filter" type="text" placeholder="기관, 정책, 서비스명 등" value={keyword} onChange={(e) => setKeyword(e.target.value)} className="global-filters__input" />
        </div>
      </Grid>
    </div>
  );
};

export default GlobalFilters;
