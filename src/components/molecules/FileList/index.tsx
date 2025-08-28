import React from 'react';
import Icon from '../../atoms/Icon';

export interface FileData {
  fileName: string;
  fileUrl: string;
  fileSize?: string;
}

interface FileListProps {
  files: FileData[];
}

const FileList: React.FC<FileListProps> = ({ files }) => {
  return (
    <div className="file-list">
      {files.map((file, index) => (
        <a key={index} href={file.fileUrl} download className="file-list__item">
          <div className="file-list__info">
            <Icon name="file" size={20} />
            <span className="file-list__file-name">{file.fileName}</span>
            {file.fileSize && <span className="file-list__file-size">({file.fileSize})</span>}
          </div>
          <Icon name="download" size={20} />
        </a>
      ))}
    </div>
  );
};

export default FileList;
