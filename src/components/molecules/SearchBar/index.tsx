import React, { useState } from 'react';
import Icon from '../../atoms/Icon';

interface SearchBarProps {
  onSearch?: (query: string) => void;
  initialValue?: string;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  initialValue = '',
  placeholder = '키워드를 입력하세요'
}) => {
  const [query, setQuery] = useState(initialValue);

  const handleSearchClick = () => {
    onSearch?.(query);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch?.(query);
    }
  };

  return (
    <div className="search-bar">
      <input
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyPress}
        className="search-bar__input"
      />
      <button onClick={handleSearchClick} className="search-bar__button">
        <Icon name="search" size={20} color="white" />
      </button>
    </div>
  );
};

export default SearchBar;
