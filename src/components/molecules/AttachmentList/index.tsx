import React from 'react';
import Icon from '../../atoms/Icon';

interface Attachment {
  fileName: string;
  fileUrl: string;
  fileSize: string;
}

interface AttachmentListProps {
  title: string;
  attachments: Attachment[];
}

const AttachmentList: React.FC<AttachmentListProps> = ({ title, attachments }) => {
  return (
    <section className="attachment-list">
      <h3 className="attachment-list__title">{title}</h3>
      <div className="attachment-list__container">
        {attachments.map((file, index) => (
          <a key={index} href={file.fileUrl} download className="attachment-list__item">
            <div className="attachment-list__file-info">
              <Icon name="file" size={20} />
              <span className="attachment-list__file-name">{file.fileName}</span>
              <span className="attachment-list__file-size">({file.fileSize})</span>
            </div>
            <Icon name="download" size={20} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default AttachmentList;
