import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AnnouncementListItem from '../../molecules/AnnouncementListItem';

// --- DATA MODELS ---
interface Announcement {
  id: number;
  title: string;
  organization: string;
  deadline: string;
  budget: string;
  status: 'active' | 'urgent';
  daysLeft: number;
}

interface AnnouncementListProps {
  announcements: Announcement[];
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

const AnnouncementList: React.FC<AnnouncementListProps> = ({ announcements, style }) => {
  return (
    <ListWrapper style={style}>
      {announcements.map((announcement) => (
        <ItemLink key={announcement.id} to={`/support/announcements/${announcement.id}`}>
          <AnnouncementListItem announcement={announcement} />
        </ItemLink>
      ))}
    </ListWrapper>
  );
};

export default AnnouncementList;
