import Router from 'next/router';
import { useEffect } from 'react';

export const useIsStarted = () => {
  useEffect(() => {
    if (
      sessionStorage.yametara === undefined ||
      sessionStorage.motionController === undefined
    ) {
      Router.push('/');
    }
  });
};
