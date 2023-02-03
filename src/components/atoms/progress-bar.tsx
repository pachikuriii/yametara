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
      bgColor='#eec0c8'
      height='1.5rem'
      labelColor='#e80909'
      labelSize=''
      transitionDuration='0.2s'
      transitionTimingFunction='ease-out'
      maxCompleted={8}
      customLabel={`Q${state}`}
    />
  );
};

export default AnswerProgressBar;