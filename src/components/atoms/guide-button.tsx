import { ButtonHTMLAttributes, ReactNode } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick?: () => void;
  children: ReactNode;
};

const GuideButton = ({ children, onClick, ...props }: Props) => {
  return (
    <button
      className='btn btn-outline text-accent bg-white rounded-full border-primary  hover:bg-primary-focus  hover:border-primary-focus font-extrabold shadow-select'
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default GuideButton;
