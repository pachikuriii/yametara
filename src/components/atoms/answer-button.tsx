import { ButtonHTMLAttributes, ReactNode } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick?: () => void;
  children: ReactNode;
  originalStyling?: string;
};

const AnswerSelectButton = ({
  children,
  onClick,
  originalStyling,
  ...props
}: Props) => {
  return (
    <button
      className={originalStyling ? originalStyling : 'h-24 w-24 btn btn-outline text-accent bg-white rounded-2xl border-2  border-primary no-animation hover:bg-primary-focus  hover:border-primary-focus font-extrabold shadow-select'}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default AnswerSelectButton;
