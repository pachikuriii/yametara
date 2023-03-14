import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
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
  const [storedInitialMotion] = useRecoilState(nextMotionState);
  const [storedExitMotion] = useRecoilState(backMotionState);
  const router = useRouter();
  const currentPage = Number(router.asPath.replace('/questions/', ''));

  return (
    <motion.div
      initial={
        (currentPage === 8 && storedBackButtonClicked) ||
        (currentPage === 1 && storedNextButtonClicked)
          ? { x: '0%' }
          : { x: `${storedInitialMotion}` }
      }
      animate={{ x: 0 }}
      exit={
        (router.asPath === '/result' &&
          !storedBackButtonClicked &&
          storedNextButtonClicked) ||
        (router.asPath === '/' &&
          storedBackButtonClicked &&
          !storedNextButtonClicked)
          ? { x: '0%' }
          : { x: `${storedExitMotion}` }
      }
      transition={{ duration: 0.15 }}
    >
      {children}
    </motion.div>
  );
};

export default Motion;
