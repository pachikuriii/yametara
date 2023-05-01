import { ButtonHTMLAttributes, ReactNode } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick?: () => void;
  children: ReactNode;
};

const Button = ({ children, onClick, ...props }: Props) => {
  return (
    <button
      className='btn btn-outline text-white bg-accent rounded-full  hover:bg-accent-focus  hover:border-primary-focus font-extrabold'
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
