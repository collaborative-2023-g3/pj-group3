import React from 'react';

interface H2HeaderProps {
  children: React.ReactNode;
}

export const H2Header: React.FC<H2HeaderProps> = ({ children }) => {
  return (
    <h2 className="p-h2">
      {children}
    </h2>
  );
};
