import { ButtonHTMLAttributes, ReactNode } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick?: () => void;
  children: ReactNode;
};

const BackButton = ({ children, onClick, ...props }: Props) => {
  return (
    <button
      className='btn btn-active border-2 text-white bg-gray-400 rounded-full border-none  hover:bg-primary-focus font-extrabold'
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default BackButton;
