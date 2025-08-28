import React from 'react';

interface InfoTableProps {
  title: string;
  data: { [key: string]: string | React.ReactNode };
}

const InfoTable: React.FC<InfoTableProps> = ({ title, data }) => {
  return (
    <section className="info-table">
      <h3 className="info-table__title">{title}</h3>
      <div className="info-table__container">
        <table className="info-table__table">
          <tbody>
            {Object.entries(data).map(([key, value]) => (
              <tr key={key} className="info-table__row">
                <th className="info-table__header">{key}</th>
                <td className={`info-table__data ${key === '신청기간' ? 'info-table__data--emphasized' : ''}`}>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default InfoTable;
