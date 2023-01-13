const STORAGE_KEY = 'yametara';

interface Storage {
  started: Boolean;
  retirement_date: String;
  retirement_reason: Number;
  re_employment: Boolean;
  age: Number;
  post_code: Number;
  family: Boolean;
  emp_ins_last_two_years: Number;
  emp_ins_total: Number;
  health_ins_last_two_month: Boolean;
  health_ins_after_retirement: Number;
  tax: Number;
  question: Number;
}

const initialStorageData: Storage = {
  started: false,
  retirement_date: '',
  retirement_reason: 0,
  re_employment: false,
  age: 0,
  post_code: 0,
  family: false,
  emp_ins_last_two_years: 0,
  emp_ins_total: 0,
  health_ins_last_two_month: false,
  health_ins_after_retirement: 0,
  tax: 0,
  question: 0,
};

if (typeof window !== 'undefined') {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(initialStorageData));
}

const LocalStorage = {
  fetch: function (): any {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  },
  save: function (storage: Storage) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(storage));
  },
};

export default LocalStorage;
