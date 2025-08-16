import React from 'react';
import styled, { keyframes } from 'styled-components';

// --- ANIMATIONS ---
const slideIn = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// --- STYLED COMPONENTS ---
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  animation: ${fadeIn} 0.3s ease-out;
`;

const DrawerContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 40%;
  max-width: 500px;
  height: 100%;
  background-color: white;
  box-shadow: -2px 0 8px rgba(0,0,0,0.15);
  z-index: 1001;
  display: flex;
  flex-direction: column;
  animation: ${slideIn} 0.3s ease-out;
`;

const DrawerHeader = styled.header`
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  justify-content: flex-end;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const DrawerContent = styled.div`
  padding: 1.5rem;
  overflow-y: auto;
  flex-grow: 1;
`;

// --- COMPONENT ---
interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      <Overlay onClick={onClose} />
      <DrawerContainer>
        <DrawerHeader>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </DrawerHeader>
        <DrawerContent>
          {children}
        </DrawerContent>
      </DrawerContainer>
    </>
  );
};

export default Drawer;
