import React from 'react';
import styled from 'styled-components';
import Icon from '../../atoms/Icon';
import Button from '../../atoms/Button';

// --- STYLED COMPONENTS ---

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
  border: 1px solid #d1d5db; /* gray-300 */
  border-radius: 8px;
  overflow: hidden;
  background-color: white;
`;

const SearchInput = styled.input`
  flex-grow: 1;
  border: none;
  padding: 0.65rem 1rem;
  font-size: 1rem;
  color: #111827; /* gray-900 */

  &:focus {
    outline: none;
    ring: 0;
  }
`;

const SearchButton = styled(Button)`
  background-color: #4f46e5; /* primary-600 */
  color: white;
  padding: 0.65rem;
  border: none;
  border-radius: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: background-color 0.2s;

  &:hover {
    background-color: #4338ca; /* primary-700 */
  }
`;

// --- COMPONENT ---

const SearchBar = () => {
  return (
    <SearchWrapper>
      <SearchInput placeholder="키워드를 입력하세요" />
      <SearchButton>
        <Icon name="search" size={20} color="white" />
      </SearchButton>
    </SearchWrapper>
  );
};

export default SearchBar;
