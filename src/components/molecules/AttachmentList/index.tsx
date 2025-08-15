import React from 'react';
import styled from 'styled-components';
import Icon from '../../atoms/Icon';

// --- STYLED COMPONENTS ---

const ListContainer = styled.div`
  border: 1px solid #e5e7eb; /* gray-200 */
  border-radius: 12px;
`;

const ListItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  text-decoration: none;
  color: inherit;
  transition: background-color 0.2s ease-in-out;

  &:not(:last-child) {
    border-bottom: 1px solid #e5e7eb; /* gray-200 */
  }

  &:hover {
    background-color: #f9fafb; /* gray-50 */

    .file-name-span {
      text-decoration: underline;
    }
  }
`;

const FileInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const FileName = styled.span.attrs({
  className: 'file-name-span'
})`
  font-weight: 500;
  color: #111827; /* gray-900 */
`;

const FileSize = styled.span`
  font-size: 0.875rem;
  color: #6b7280; /* gray-500 */
`;

// --- DATA MODELS ---

interface Attachment {
  fileName: string;
  fileUrl: string;
  fileSize: string;
}

interface AttachmentListProps {
  title: string;
  attachments: Attachment[];
}

// --- COMPONENT ---

const AttachmentList: React.FC<AttachmentListProps> = ({ title, attachments }) => {
  return (
    <section>
      <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>{title}</h3>
      <ListContainer>
        {attachments.map((file, index) => (
          <ListItem key={index} href={file.fileUrl} download>
            <FileInfo>
              <Icon name="file" size={20} color="#6b7280" />
              <FileName>{file.fileName}</FileName>
              <FileSize>({file.fileSize})</FileSize>
            </FileInfo>
            <Icon name="download" size={20} color="#6b7280" />
          </ListItem>
        ))}
      </ListContainer>
    </section>
  );
};

export default AttachmentList;
