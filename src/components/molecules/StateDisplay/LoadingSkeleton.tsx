import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

const Skeleton = styled.div<{ width?: string; height?: string; borderRadius?: string }>`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '1rem'};
  border-radius: ${props => props.borderRadius || '4px'};
  background: #f3f4f6; /* gray-100 */
  background-image: linear-gradient(to right, #f3f4f6 0%, #e5e7eb 20%, #f3f4f6 40%, #f3f4f6 100%);
  background-repeat: no-repeat;
  background-size: 2000px 104px;
  animation: ${shimmer} 2s linear infinite;
`;

export default Skeleton;
