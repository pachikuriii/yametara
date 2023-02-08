import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const FadeMotion = ({ children }: Props) => {
  return (
    <motion.div
      style={{
        width: '100%',
        height: '100%',
      }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeMotion;
