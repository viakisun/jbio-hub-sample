import React from 'react';
import AnnouncementListItem from '../../molecules/AnnouncementListItem';
import { DESIGN_SYSTEM } from '../../../styles/tokens';

// TODO: Define this interface in a shared types file
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

const AnnouncementList: React.FC<AnnouncementListProps> = ({ announcements, style }) => {
  return (
    <div style={style}>
      {announcements.map((announcement, index) => (
        <AnnouncementListItem
          key={announcement.id}
          announcement={announcement}
          style={{ marginBottom: index < announcements.length - 1 ? DESIGN_SYSTEM.spacing[4] : 0 }}
        />
      ))}
    </div>
  );
};

export default AnnouncementList;
