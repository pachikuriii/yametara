import { ButtonHTMLAttributes, ReactNode } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick?: () => void;
  children: ReactNode;
  isValid: boolean;
};

const NextButton = ({ children, onClick, isValid, ...props }: Props) => {
  return (
    <button
      id='next-page-button'
      className={
        isValid
          ? 'btn text-white bg-primary rounded-full  border-none hover:bg-primary-focus  font-extrabold'
          : 'btn bg-gray-400  text-white rounded-full  border-none font-extrabold hover:bg-neutral-focus'
      }
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default NextButton;
