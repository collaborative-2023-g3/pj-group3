import React from 'react';

interface H3HeaderProps {
  children: React.ReactNode;
}

export const H3Header: React.FC<H3HeaderProps> = ({ children }) => {
  return (
    <h3 className="p-h3">
      {children}
    </h3>
  );
};
