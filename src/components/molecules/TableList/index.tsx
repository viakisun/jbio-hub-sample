import React from 'react';
import styled from 'styled-components';

// --- STYLED COMPONENTS ---

const TableContainer = styled.div`
  overflow-x: auto;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  background-color: white;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.875rem;
  white-space: nowrap;
`;

const THead = styled.thead`
  background-color: #f9fafb;
`;

const Tr = styled.tr`
  &:not(:last-child) {
    border-bottom: 1px solid #e5e7eb;
  }
`;

const Th = styled.th`
  padding: 0.75rem 1.5rem;
  text-align: left;
  font-weight: 600;
  color: #374151;
`;

const Td = styled.td`
  padding: 1rem 1.5rem;
  color: #111827;
`;

// --- COMPONENT ---

interface TableListProps {
  headers: string[];
  rows: (string | React.ReactNode)[][];
  onRowClick?: (rowIndex: number) => void;
}

const TableList: React.FC<TableListProps> = ({ headers, rows, onRowClick }) => {
  return (
    <TableContainer>
      <StyledTable>
        <THead>
          <Tr>
            {headers.map((header, index) => (
              <Th key={index}>{header}</Th>
            ))}
          </Tr>
        </THead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <Tr
              key={rowIndex}
              onClick={() => onRowClick && onRowClick(rowIndex)}
              style={{ cursor: onRowClick ? 'pointer' : 'default' }}
            >
              {row.map((cell, cellIndex) => (
                <Td key={cellIndex}>{cell}</Td>
              ))}
            </Tr>
          ))}
        </tbody>
      </StyledTable>
    </TableContainer>
  );
};

export default TableList;
