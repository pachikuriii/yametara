import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { ReactNode, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import {
  isNextButtonClicked,
  isBackButtonClicked,
  nextMotionState,
  backMotionState,
} from 'src/storage/motion-controller';

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
  const router = useRouter();
  const currentPage = Number(router.asPath.replace('/questions/', ''));

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
      initial={
        (currentPage === 8 && storedBackButtonClicked) ||
        (currentPage === 1 && storedNextButtonClicked)
          ? {}
          : { x: `${storedInitialMotion}` }
      }
      animate={
        (currentPage === 8 && storedBackButtonClicked) ||
        (currentPage === 1 && storedNextButtonClicked)
          ? {}
          : { x: 0 }
      }
      exit={
        (router.asPath === '/result' &&
          !storedBackButtonClicked &&
          storedNextButtonClicked) ||
        (router.asPath === '/' &&
          storedBackButtonClicked &&
          !storedNextButtonClicked)
          ? {}
          : { x: `${storedExitMotion}` }
      }
      transition={{ duration: 0.15 }}
      className='flex justify-center mt-10 w-11/12 mx-auto'
    >
      {children}
    </motion.div>
  );
};

export default Motion;
