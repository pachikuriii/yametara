const STORAGE_KEY = 'yametara';

export interface Storage {
  started: boolean;
  retirement_date: string;
  retirement_reason: number;
  re_employment: number;
  age: number;
  post_code: number;
  family: number;
  emp_ins_last_two_years: number;
  emp_ins_total: number;
  health_ins_last_two_month: number;
  health_ins_after_retirement: number;
  tax: number;
  question: number;
}

export const initialStorageData: Storage = {
  started: false,
  retirement_date: '',
  retirement_reason: 0,
  re_employment: 0,
  age: 0,
  post_code: 0,
  family: 0,
  emp_ins_last_two_years: 0,
  emp_ins_total: 0,
  health_ins_last_two_month: 0,
  health_ins_after_retirement: 0,
  tax: 0,
  question: 0,
};

if (typeof window !== 'undefined') {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(initialStorageData));
}

const LocalStorage = {
  fetch: function (): Storage {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  },
  save: function (storage: Storage) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(storage));
  },
};

export default LocalStorage;
