import React from 'react';
import styled from 'styled-components';
import Grid from '../../atoms/Grid';
import SearchBar from '../../molecules/SearchBar';
import FilterBar from '../../molecules/FilterBar';
import Pagination from '../../molecules/Pagination';
import VacancyCard, { VacancyCardData } from '../../molecules/VacancyCard';

// --- DATA MODELS ---
interface CenterVacancyData {
  centerId: string;
  centerName: string;
  vacancies: VacancyCardData[];
}

// --- MOCK DATA ---
const mockVacancyData: CenterVacancyData[] = [
  {
    centerId: 'center-1',
    centerName: '전북바이오융합원 본원',
    vacancies: [
      { id: 'v-101', unitCode: '본관 101호', areaM2: 50, type: 'lab', rentPerMonth: 500000, deposit: 5000000, availabilityStatus: 'available' },
      { id: 'v-102', unitCode: '본관 102호', areaM2: 75, type: 'mixed', rentPerMonth: 750000, deposit: 7500000, availabilityStatus: 'available' },
      { id: 'v-201', unitCode: '본관 201호', areaM2: 50, type: 'lab', rentPerMonth: 500000, deposit: 5000000, availabilityStatus: 'reserved' },
    ]
  },
  {
    centerId: 'center-2',
    centerName: '익산 BI 센터',
    vacancies: [
      { id: 'v-301', unitCode: 'A동 301호', areaM2: 100, type: 'office', rentPerMonth: 800000, deposit: 8000000, availabilityStatus: 'available' },
    ]
  },
  {
    centerId: 'center-3',
    centerName: '정읍 BI 센터',
    vacancies: [
      { id: 'v-401', unitCode: '연구동 110호', areaM2: 120, type: 'lab', rentPerMonth: 1200000, deposit: 12000000, availabilityStatus: 'occupied' },
      { id: 'v-402', unitCode: '연구동 112호', areaM2: 120, type: 'lab', rentPerMonth: 1200000, deposit: 12000000, availabilityStatus: 'available' },
    ]
  }
];

// --- STYLED COMPONENTS ---

const ControlsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const CenterSection = styled.section`
  margin-bottom: 3rem;
`;

const CenterTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e5e7eb;
`;

// --- COMPONENT ---

const VacancyView = () => {
  return (
    <div>
      <ControlsWrapper>
        <FilterBar />
        <SearchBar />
      </ControlsWrapper>

      {mockVacancyData.map(center => (
        <CenterSection key={center.centerId}>
          <CenterTitle>{center.centerName}</CenterTitle>
          <Grid $cols={3} $tabletCols={2} $mobileCols={1} $gap="1.5rem">
            {center.vacancies.map(vacancy => (
              <VacancyCard key={vacancy.id} vacancy={vacancy} />
            ))}
          </Grid>
        </CenterSection>
      ))}

      {/* Note: Pagination might need to be by center or by total vacancies, depending on final spec */}
      <Pagination currentPage={1} totalPages={1} />
    </div>
  );
};

export default VacancyView;
