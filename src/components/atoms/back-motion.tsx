import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const BackMotion = ({ children }: Props) => {
  return (
    <motion.div
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ duration: 0.3 }}
      className='flex justify-center mt-10 w-11/12 mx-auto'
    >
      {children}
    </motion.div>
  );
};

export default BackMotion;
