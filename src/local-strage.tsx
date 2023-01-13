const STORAGE_KEY = 'yametara';
const obj = {
  started: false,
  retirement_date: 2022 - 12 - 31,
  retirement_reason: 1,
  re_employment: false,
  age: 1,
  post_code: 1234567,
  family: false,
  emp_ins_last_two_years: 3,
  emp_ins_total: 2,
  health_ins_last_two_month: true,
  health_ins_after_retirement: 2,
  tax: 2,
  question: 'q10',
};

if (typeof window !== 'undefined') {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(obj));
}

const LocalStorage = {
  fetch: function (): any {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  },
  //   save: function (state) {
  //     localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  //   },
};

export default LocalStorage;
