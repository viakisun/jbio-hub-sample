import React from 'react';
import { Link } from 'react-router-dom';
import Badge from '../../atoms/Badge';

export interface TransferCardData {
  id: string;
  title: string;
  summary: string;
  ownerOrg: string;
  status: 'open' | 'closing-soon' | 'closed';
  deadline?: string;
}

interface TransferCardProps {
  transfer: TransferCardData;
}

const getStatusBadge = (status: TransferCardData['status']) => {
    switch(status) {
        case 'open':
            return <Badge variant="success">모집중</Badge>;
        case 'closing-soon':
            return <Badge variant="warning">마감임박</Badge>;
        case 'closed':
            return <Badge variant="secondary">마감</Badge>;
        default:
            return null;
    }
}

const TransferCard: React.FC<TransferCardProps> = ({ transfer }) => {
  const dDay = transfer.deadline ? Math.ceil((new Date(transfer.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)) : null;

  return (
    <Link to={`/tech/transfer/${transfer.id}`} className="transfer-card">
      <div className="transfer-card__wrapper">
        <div className="transfer-card__header">
            <h3 className="transfer-card__title">{transfer.title}</h3>
            {getStatusBadge(transfer.status)}
        </div>
        <p className="transfer-card__summary">{transfer.summary}</p>
        <div className="transfer-card__footer">
          <span>{transfer.ownerOrg}</span>
          {dDay !== null && dDay >= 0 && <strong>D-{dDay}</strong>}
        </div>
      </div>
    </Link>
  );
};

export default TransferCard;
