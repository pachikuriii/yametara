import { ButtonHTMLAttributes, ReactNode } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick?: () => void;
  children: ReactNode;
};

const NextButton = ({ children, onClick, ...props }: Props) => {
  return (
    <button
      className='btn text-white bg-primary rounded-full  border-none hover:bg-primary-focus  font-extrabold'
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default NextButton;
