import React from 'react';

interface FormProps {
  children: React.ReactNode;
}

export const FormTemplate: React.FC<FormProps> = ({ children }) => {
  return (
    <form className="t-form">
      {children}
    </form>
  );
};