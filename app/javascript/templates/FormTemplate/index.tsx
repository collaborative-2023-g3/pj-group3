import React from 'react';

interface FormProps {
  children: React.ReactNode;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}

export const FormTemplate: React.FC<FormProps> = ({ children, onSubmit }) => {
  return (
    <form className="t-form" onSubmit={onSubmit}>
      {children}
    </form>
  );
};