import React from 'react';

export const LoadingMessage: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="loading-message">{children}</p>
);

export const ErrorMessage: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="error-message">{children}</p>
);
