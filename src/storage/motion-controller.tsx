import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
export const { persistAtom } = recoilPersist({
  key: 'motionController',
  storage: typeof window === 'undefined' ? undefined : window.sessionStorage,
});

export const isNextButtonClicked = atom({
  key: 'next',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const isBackButtonClicked = atom({
  key: 'back',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const nextMotionState = atom({
  key: 'initial',
  default: '100%',
  effects_UNSTABLE: [persistAtom],
});

export const backMotionState = atom({
  key: 'exit',
  default: '-100%',
  effects_UNSTABLE: [persistAtom],
});
