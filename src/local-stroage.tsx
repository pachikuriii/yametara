import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
const { persistAtom } = recoilPersist({
  key: 'yametara',
  storage: typeof window === 'undefined' ? undefined : window.localStorage,
});

export const startedState = atom({
  key: 'started',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const retirementDateState = atom({
  key: 'retirement_date',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const retirementReasonState = atom({
  key: 'retirement_reason',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const reEmploymentState = atom({
  key: 're_employment',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const ageState = atom({
  key: 'age',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const postcodeState = atom({
  key: 'post_code',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const familyState = atom({
  key: 'family',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const empInsLastTwoYearsState = atom({
  key: 'emp_ins_last_two_years',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const empInsTotalState = atom({
  key: 'emp_ins_total',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const healthInsLastTwoMonthState = atom({
  key: 'health_ins_last_two_month',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const healthInsAfterRetirementState = atom({
  key: 'health_ins_after_retirement',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const taxState = atom({
  key: 'tax',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});
