import ProgressBar from '@ramonak/react-progress-bar';
import { useRouter } from 'next/router';
import { useState, useMemo } from 'react';

const AnswerProgressBar = () => {
  const router = useRouter();
  const id = router.query.id;
  const [state, setState] = useState(Number(id));

  useMemo(() => {
    if (state < 8) {
      setState(Number(id));
    }
  }, [id, state]);

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
