import ProgressBar from '@ramonak/react-progress-bar';
import { useRouter } from 'next/router';
import { useState, useMemo } from 'react';

const AnswerProgressBar = () => {
  const router = useRouter();
  const [state, setState] = useState(0);

  useMemo(() => {
    if (state < 8) {
      setState(Number(router.pathname.replace(/^\/questions\//, '')));
    }
  }, [router.pathname, state]);

  return (
    <ProgressBar
      completed={state}
      bgColor='#CF597D'
      baseBgColor='#D4E3E1'
      height='0.6rem'
      isLabelVisible={false}
      transitionDuration='0.2s'
      transitionTimingFunction='ease-out'
      maxCompleted={8}
      className='w-full mx-auto pt-5 pb-1'
    />
  );
};

export default AnswerProgressBar;
