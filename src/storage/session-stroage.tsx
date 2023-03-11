import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
const { persistAtom } = recoilPersist({
  key: 'yametara',
  storage: typeof window === 'undefined' ? undefined : window.sessionStorage,
});

export const STORAGE_KEYS = [
  'age',
  'emp_ins_last_two_years',
  'emp_ins_total',
  'family',
  'health_ins_after_retirement',
  'health_ins_last_two_month',
  'post_code',
  're_employment',
  'retirement_date',
  'retirement_reason',
  'started',
  'tax',
];

export const startedState = atom<boolean>({
  key: 'started',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const retirementDateState = atom<string>({
  key: 'retirement_date',
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});

export const retirementReasonState = atom<number>({
  key: 'retirement_reason',
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});

export const reEmploymentState = atom<number>({
  key: 're_employment',
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});

export const ageState = atom<number>({
  key: 'age',
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});

export const postcodeState = atom<string>({
  key: 'post_code',
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});

export const familyState = atom<number>({
  key: 'family',
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});

export const empInsLastTwoYearsState = atom<number>({
  key: 'emp_ins_last_two_years',
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});

export const empInsTotalState = atom<number>({
  key: 'emp_ins_total',
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});

export const healthInsLastTwoMonthState = atom<number>({
  key: 'health_ins_last_two_month',
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});

export const healthInsAfterRetirementState = atom<number>({
  key: 'health_ins_after_retirement',
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});

export const taxState = atom<number>({
  key: 'tax',
  default: undefined,
  effects_UNSTABLE: [persistAtom],
});
