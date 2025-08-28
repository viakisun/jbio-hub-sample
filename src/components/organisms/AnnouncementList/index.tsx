import React from 'react';
import { Link } from 'react-router-dom';
import AnnouncementListItem from '../../molecules/AnnouncementListItem';
import { SupportProgram } from '../../../hooks/useSupportPrograms';

interface AnnouncementListProps {
  programs: SupportProgram[];
  style?: React.CSSProperties;
}

const AnnouncementList: React.FC<AnnouncementListProps> = ({ programs, style }) => {
  if (!programs || programs.length === 0) {
    return <p>표시할 지원사업 공고가 없습니다.</p>;
  }

  return (
    <div className="announcement-list" style={style}>
      {programs.map((program) => (
        <Link key={program.id} to={`/support-programs/${program.id}`} className="announcement-list__item-link">
          <AnnouncementListItem program={program} />
        </Link>
      ))}
    </div>
  );
};

export default AnnouncementList;
