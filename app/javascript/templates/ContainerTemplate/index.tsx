import React from 'react';

interface ContainerTemplateProps {
  children: React.ReactNode;
}

export const ContainerTemplate: React.FC<ContainerTemplateProps> = ({ children }) => {
  return (
    <div className="l-container">
      {children}
    </div>
  );
};
