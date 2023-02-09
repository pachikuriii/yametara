import { motion } from 'framer-motion';
import { ReactNode, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import {
  isNextButtonClicked,
  isBackButtonClicked,
  nextMotionState,
  backMotionState,
} from 'src/motion-controller';

interface Props {
  children: ReactNode;
}

const Motion = ({ children }: Props) => {
  const [storedNextButtonClicked] = useRecoilState(isNextButtonClicked);
  const [storedBackButtonClicked] = useRecoilState(isBackButtonClicked);
  const [storedInitialMotion, setStoredInitialMotion] =
    useRecoilState(nextMotionState);
  const [storedExitMotion, setStoredExitMotion] =
    useRecoilState(backMotionState);

  useEffect(() => {
    if (storedNextButtonClicked && !storedBackButtonClicked) {
      setStoredInitialMotion('100%');
      setStoredExitMotion('-100%');
    } else if (!storedNextButtonClicked && storedBackButtonClicked) {
      setStoredInitialMotion('-100%');
      setStoredExitMotion('100%');
    } else {
      setStoredInitialMotion('0%');
      setStoredExitMotion('0%');
    }
  }, [
    storedNextButtonClicked,
    storedBackButtonClicked,
    setStoredInitialMotion,
    setStoredExitMotion,
  ]);

  return (
    <motion.div
      initial={{ x: `${storedInitialMotion}` }}
      animate={{ x: 0 }}
      exit={{ x: `${storedExitMotion}` }}
      transition={{ duration: 0.3 }}
      className='flex justify-center mt-10 w-11/12 mx-auto'
    >
      {children}
    </motion.div>
  );
};

export default Motion;
