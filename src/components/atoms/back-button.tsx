import { ButtonHTMLAttributes, ReactNode } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick?: () => void;
  children: ReactNode;
};

const BackButton = ({ children, onClick, ...props }: Props) => {
  return (
    <button
      className='btn border-2 border-primary-focus text-secondary rounded-xl bg-transparent hover:bg-primary hover:text-white hover:border-primary font-extrabold'
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default BackButton;
