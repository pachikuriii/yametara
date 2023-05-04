import { ButtonHTMLAttributes, ReactNode } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick?: () => void;
  children: ReactNode;
  id?: string;
};

const AnswerSelectButton = ({ children, onClick, id }: Props) => {
  return (
    <div
      id={id}
      onClick={onClick}
      className={
        'text-lg btn btn-outline w-full text-left focus:outline-none rounded-lg border-2 border-primary-focus hover:bg-primary-focus  hover:border-primary-focus font-extrabold focus:border-neutral-focus peer-checked:bg-primary-focus peer-checked:text-white'
      }
    >
      {children}
    </div>
  );
};

export default AnswerSelectButton;
