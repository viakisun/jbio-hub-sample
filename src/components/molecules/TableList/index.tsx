import React from 'react';

interface TableListProps {
  headers: string[];
  rows: (string | React.ReactNode)[][];
  onRowClick?: (rowIndex: number) => void;
}

const TableList: React.FC<TableListProps> = ({ headers, rows, onRowClick }) => {
  return (
    <div className="table-list">
      <div className="table-list__desktop">
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                {headers.map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  onClick={() => onRowClick && onRowClick(rowIndex)}
                  style={{ cursor: onRowClick ? 'pointer' : 'default' }}
                >
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="table-list__mobile">
        <div className="card-list">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="card-list-item" onClick={() => onRowClick && onRowClick(rowIndex)}>
              {row.map((cell, cellIndex) => (
                <div key={cellIndex} className="card-list-item__row">
                  <span className="card-list-item__label">{headers[cellIndex]}</span>
                  <span className="card-list-item__value">{cell}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TableList;
