import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
const { persistAtom } = recoilPersist({
  key: 'yametara',
  storage: typeof window === 'undefined' ? undefined : window.localStorage,
});

export const startedState = atom<boolean>({
  key: 'started',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const retirementDateState = atom<string>({
  key: 'retirement_date',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const retirementReasonState = atom<number>({
  key: 'retirement_reason',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const reEmploymentState = atom<number>({
  key: 're_employment',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const ageState = atom<number>({
  key: 'age',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const postcodeState = atom<string>({
  key: 'post_code',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const familyState = atom<number>({
  key: 'family',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const empInsLastTwoYearsState = atom<number>({
  key: 'emp_ins_last_two_years',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const empInsTotalState = atom<number>({
  key: 'emp_ins_total',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const healthInsLastTwoMonthState = atom<number>({
  key: 'health_ins_last_two_month',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const healthInsAfterRetirementState = atom<number>({
  key: 'health_ins_after_retirement',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const taxState = atom<number>({
  key: 'tax',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});
