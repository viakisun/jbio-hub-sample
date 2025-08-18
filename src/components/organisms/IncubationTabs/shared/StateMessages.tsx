import styled from 'styled-components';

export const LoadingMessage = styled.p`
  text-align: center;
  padding: 4rem 2rem;
  font-size: 1.125rem;
  color: #4b5563;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ErrorMessage = styled(LoadingMessage)`
  color: #ef4444;
  font-weight: 500;
`;
