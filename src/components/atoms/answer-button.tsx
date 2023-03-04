import { ButtonHTMLAttributes, ReactNode } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick?: () => void;
  children: ReactNode;
  id?: string;
  display?: string;
};

const AnswerSelectButton = ({ children, onClick, id, display }: Props) => {
  return (
    <div
      id={id}
      onClick={onClick}
      className={
        'h-24 w-24 btn btn-outline text-accent bg-white rounded-2xl border-2  border-primary no-animation hover:bg-primary-focus  hover:border-primary-focus font-extrabold shadow-select peer-checked:bg-primary-focus peer-checked:text-white ' +
        display
      }
    >
      {children}
    </div>
  );
};

export default AnswerSelectButton;
