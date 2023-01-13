import { motion } from 'framer-motion';
import { ReactNode } from 'react';
interface Props {
  onClick?: () => void;
  children: ReactNode;
}

const AnswerSelectButton = ({ onClick, children }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <button
        className='btn btn-outline text-accent bg-primary  border-secondary no-animation hover:bg-secondary-focus shadow-md'
        onClick={onClick}
      >
        {children}
      </button>
    </motion.div>
  );
};

export default AnswerSelectButton;
