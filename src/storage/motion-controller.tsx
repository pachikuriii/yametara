import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
export const { persistAtom } = recoilPersist({
  key: 'motionController',
  storage: typeof window === 'undefined' ? undefined : window.sessionStorage,
});

export const isNextButtonClicked = atom<boolean>({
  key: 'next',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const isBackButtonClicked = atom<boolean>({
  key: 'back',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const nextMotionState = atom<string>({
  key: 'initial',
  default: '100%',
  effects_UNSTABLE: [persistAtom],
});

export const backMotionState = atom<string>({
  key: 'exit',
  default: '-100%',
  effects_UNSTABLE: [persistAtom],
});
