import { ButtonHTMLAttributes, ReactNode } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick?: () => void;
  children: ReactNode;
};

const Button = ({ children, onClick, ...props }: Props) => {
  return (
    <button
      className='btn btn-outline text-accent bg-white rounded-full border-2  border-primary no-animation hover:bg-primary-focus  hover:border-primary-focus  peer-checked:bg-primary-focus peer-checked:text-white shadow-select'
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
