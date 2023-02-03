import { motion } from 'framer-motion';
import { ReactNode } from 'react';
interface Props {
  onClick?: () => void;
  children: ReactNode;
}

const Button = ({ onClick, children }: Props) => {
  return (
    <button
      className='btn btn-outline text-accent bg-primary rounded-full border-secondary no-animation hover:bg-secondary-focus shadow-md'
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
