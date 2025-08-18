import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AnnouncementListItem from '../../molecules/AnnouncementListItem';
import { SupportProgram } from '../../../hooks/useSupportPrograms'; // Import the correct type

// --- DATA MODELS ---
interface AnnouncementListProps {
  programs: SupportProgram[]; // Use the new type and name
  style?: React.CSSProperties;
}

// --- STYLED COMPONENTS ---
const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ItemLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

// --- COMPONENT ---

const AnnouncementList: React.FC<AnnouncementListProps> = ({ programs, style }) => {
  if (!programs || programs.length === 0) {
    return <p>표시할 지원사업 공고가 없습니다.</p>;
  }

  return (
    <ListWrapper style={style}>
      {programs.map((program) => (
        <ItemLink key={program.id} to={`/support-programs/${program.id}`}>
          <AnnouncementListItem program={program} />
        </ItemLink>
      ))}
    </ListWrapper>
  );
};

export default AnnouncementList;
