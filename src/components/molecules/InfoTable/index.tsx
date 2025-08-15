import React from 'react';
import styled from 'styled-components';

// --- STYLED COMPONENTS ---

const TableContainer = styled.div`
  overflow-x: auto;
  border: 1px solid #e5e7eb; /* gray-200 */
  border-radius: 12px;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.875rem; /* text-sm */
`;

const THead = styled.thead``;

const TBody = styled.tbody``;

const Tr = styled.tr`
  &:not(:last-child) {
    border-bottom: 1px solid #e5e7eb; /* gray-200 */
  }
`;

const Th = styled.th`
  background-color: #f9fafb; /* gray-50 */
  padding: 0.75rem 1.5rem;
  text-align: left;
  font-weight: 600; /* semibold */
  color: #374151; /* gray-700 */
  width: 180px; /* Fixed width for headers */
`;

const Td = styled.td`
  padding: 0.75rem 1.5rem;
  color: #111827; /* gray-900 */

  &.emphasized {
    color: #E53935;
    font-weight: 500;
  }
`;

// --- COMPONENT ---

interface InfoTableProps {
  title: string;
  data: { [key: string]: string | React.ReactNode };
}

const InfoTable: React.FC<InfoTableProps> = ({ title, data }) => {
  return (
    <section>
      <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>{title}</h3>
      <TableContainer>
        <StyledTable>
          <TBody>
            {Object.entries(data).map(([key, value]) => (
              <Tr key={key}>
                <Th>{key}</Th>
                <Td className={key === '신청기간' ? 'emphasized' : ''}>{value}</Td>
              </Tr>
            ))}
          </TBody>
        </StyledTable>
      </TableContainer>
    </section>
  );
};

export default InfoTable;
