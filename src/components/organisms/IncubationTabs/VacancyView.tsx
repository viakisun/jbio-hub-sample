import React from 'react';
import Grid from '../../atoms/Grid';
import SearchBar from '../../molecules/SearchBar';
import FilterBar from '../../molecules/FilterBar';
import Pagination from '../../molecules/Pagination';
import VacancyCard, { VacancyCardData } from '../../molecules/VacancyCard';

interface CenterVacancyData {
  centerId: string;
  centerName: string;
  vacancies: VacancyCardData[];
}

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

const VacancyView = () => {
  return (
    <div className="incubation-tab-view vacancy-view">
      <div className="tenants-view__controls">
        <FilterBar />
        <SearchBar />
      </div>

      {mockVacancyData.map(center => (
        <section key={center.centerId} className="center-section">
          <h2 className="center-title">{center.centerName}</h2>
          <Grid cols={3} tabletCols={2} mobileCols={1} gap="1.5rem">
            {center.vacancies.map(vacancy => (
              <VacancyCard key={vacancy.id} vacancy={vacancy} />
            ))}
          </Grid>
        </section>
      ))}

      {/* Note: Pagination might need to be by center or by total vacancies, depending on final spec */}
      <Pagination currentPage={1} totalPages={1} />
    </div>
  );
};

export default VacancyView;
