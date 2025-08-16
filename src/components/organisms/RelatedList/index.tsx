import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// --- STYLED COMPONENTS ---

const Section = styled.section`
  margin-top: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e5e7eb;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  &:not(:last-child) {
    border-bottom: 1px solid #f3f4f6;
  }
`;

const ItemLink = styled(Link)`
  display: block;
  padding: 1rem 0.5rem;
  text-decoration: none;
  color: #374151;
  font-weight: 500;
  transition: background-color 0.2s;
  border-radius: 8px;

  &:hover {
    background-color: #f9fafb;
    color: #111827;
  }
`;

// --- DATA MODELS ---

export interface RelatedItem {
  id: string;
  title: string;
  url: string;
}

interface RelatedListProps {
  title: string;
  items: RelatedItem[];
}

// --- COMPONENT ---

const RelatedList: React.FC<RelatedListProps> = ({ title, items }) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <Section>
      <SectionTitle>{title}</SectionTitle>
      <List>
        {items.map(item => (
          <ListItem key={item.id}>
            <ItemLink to={item.url}>
              {item.title}
            </ItemLink>
          </ListItem>
        ))}
      </List>
    </Section>
  );
};

export default RelatedList;
