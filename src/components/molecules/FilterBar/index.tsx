import React from 'react';

export interface FilterOption {
  value: string;
  label: string;
}

export interface Filter {
  name: string;
  label: string;
  options: FilterOption[];
  disabled?: boolean;
}

interface FilterBarProps {
  filters?: Filter[];
  onFilterChange?: (filterName: string, value: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ filters, onFilterChange }) => {
  if (!filters || filters.length === 0 || !onFilterChange) {
    return (
      <div className="filter-bar">
        <div className="filter-bar__placeholder">Filter controls will be displayed here.</div>
      </div>
    );
  }

  return (
    <div className="filter-bar">
      {filters.map((filter) => (
        <div key={filter.name} className="filter-bar__group">
          <label htmlFor={filter.name} className="filter-bar__label">{filter.label}:</label>
          <select
            id={filter.name}
            name={filter.name}
            onChange={(e) => onFilterChange(filter.name, e.target.value)}
            disabled={filter.disabled}
            className="filter-bar__select"
          >
            {filter.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};

export default FilterBar;
