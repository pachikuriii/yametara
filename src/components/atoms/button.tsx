import React from 'react';

interface Props {
  onClick?: () => void;
  children: React.ReactNode;
}
const Button: React.FC<Props> = ({ children, onClick }) => {
  return (
    <button
      className='btn btn-outline text-accent bg-primary rounded-full border-secondary no-animation hover:bg-secondary-focus shadow-md'
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
