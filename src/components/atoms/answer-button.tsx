import { ButtonHTMLAttributes, ReactNode } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick?: () => void;
  children: ReactNode;
};

const AnswerSelectButton = ({ children, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className='h-24 w-24 btn btn-outline text-accent bg-white rounded-2xl border-2  border-primary no-animation hover:bg-primary-focus  hover:border-primary-focus font-extrabold shadow-select peer-checked:bg-primary-focus peer-checked:text-white'
    >
      {children}
    </div>
  );
};

export default AnswerSelectButton;
