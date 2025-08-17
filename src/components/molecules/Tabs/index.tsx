import React from 'react';
import styled from 'styled-components';
import { DESIGN_SYSTEM } from '../../../styles/tokens';

// --- STYLED COMPONENTS ---

const TabsWrapper = styled.div`
  border-bottom: 1px solid #d1d5db; /* gray-300 */
  margin-bottom: 2rem;
  overflow-x: auto;

  /* Hide scrollbar for cleaner look but keep functionality */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
`;

const TabList = styled.div`
  display: flex;
  gap: 1rem;
`;

const TabButton = styled.button<{ isActive: boolean }>`
  padding: 0.75rem 0.25rem;
  margin: 0 0.75rem;
  white-space: nowrap; /* Prevent text wrapping */
  font-size: 1rem;
  font-weight: 600;
  border: none;
  background: none;
  cursor: pointer;
  color: ${props => (props.isActive ? '#111827' : '#6b7280')};
  border-bottom: 3px solid ${props => (props.isActive ? '#4f46e5' : 'transparent')};
  margin-bottom: -2px;
  transition: color 0.3s ease, border-color 0.3s ease;

  &:hover {
    color: #111827;
  }
`;

// --- COMPONENT ---

interface Tab {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabClick: (tabId: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onTabClick }) => {
  return (
    <TabsWrapper>
      <TabList>
        {tabs.map(tab => (
          <TabButton
            key={tab.id}
            isActive={tab.id === activeTab}
            onClick={() => onTabClick(tab.id)}
          >
            {tab.label}
          </TabButton>
        ))}
      </TabList>
    </TabsWrapper>
  );
};

export default Tabs;
