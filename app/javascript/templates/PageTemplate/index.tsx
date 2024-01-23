import React from 'react';
import { Link } from 'react-router-dom';

interface PageProps {
  children: React.ReactNode;
}

export const PageTemplate: React.FC<PageProps> = ({ children }) => {
  return (
    <div className="t-page">
      {children}
    </div>
  );
};
