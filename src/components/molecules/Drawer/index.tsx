import React from 'react';

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
      <div className="drawer-overlay" onClick={onClose} />
      <div className="drawer">
        <header className="drawer__header">
          <button className="drawer__close-button" onClick={onClose}>&times;</button>
        </header>
        <div className="drawer__content">
          {children}
        </div>
      </div>
    </>
  );
};

export default Drawer;
