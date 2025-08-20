import React from 'react';
import styled from 'styled-components';

const FilterBarWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  padding: 1rem;
  background-color: #f9fafb;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  align-items: center;
`;

const FilterGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const FilterLabel = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
`;

const FilterSelect = styled.select`
  padding: 0.5rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  background-color: white;
  font-size: 0.875rem;
  &:focus {
    outline: 2px solid #3b82f6;
    border-color: #3b82f6;
  }
`;

export interface FilterOption {
  value: string;
  label: string;
}

export interface Filter {
  name: string;
  label: string;
  options: FilterOption[];
}

interface FilterBarProps {
  filters: Filter[];
  onFilterChange: (filterName: string, value: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ filters, onFilterChange }) => {
  return (
    <FilterBarWrapper>
      {filters.map((filter) => (
        <FilterGroup key={filter.name}>
          <FilterLabel htmlFor={filter.name}>{filter.label}:</FilterLabel>
          <FilterSelect
            id={filter.name}
            name={filter.name}
            onChange={(e) => onFilterChange(filter.name, e.target.value)}
          >
            {filter.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </FilterSelect>
        </FilterGroup>
      ))}
    </FilterBarWrapper>
  );
};

export default FilterBar;
