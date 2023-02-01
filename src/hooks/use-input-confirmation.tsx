import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import dayjs from '../day-js';
import {
  retirementDateState,
  retirementReasonState,
  reEmploymentState,
  ageState,
  familyState,
  empInsLastTwoYearsState,
  empInsTotalState,
  healthInsLastTwoMonthState,
  healthInsAfterRetirementState,
  taxState,
} from '../local-stroage';

export const useDisplayRetirementDate = () => {
  const [storedRetirementDate] = useRecoilState(retirementDateState);
  const [formattedRetirementDate, setFormattedRetirementDate] = useState('');

  useEffect(() => {
    setFormattedRetirementDate(
      dayjs(storedRetirementDate).format('YYYY年M月D日'),
    );
  }, [storedRetirementDate]);

  return [formattedRetirementDate];
};

export const useDisplayRetirementReason = () => {
  const [storedRetirementReason] = useRecoilState(retirementReasonState);
  const [displayRetirementReason, setDisplayRetirementReason] = useState('');

  useEffect(() => {
    const reason = [
      { retirementReason: 1, display: '自己都合' },
      { retirementReason: 2, display: '会社都合' },
      { retirementReason: 3, display: 'その他' },
    ].find((reason) => reason.retirementReason === storedRetirementReason);

    if (reason === undefined) {
      throw Error;
    }
    setDisplayRetirementReason(reason.display);
  }, [storedRetirementReason]);

  return [displayRetirementReason];
};

export const useDisplayReEmployment = () => {
  const [storedReEmployment] = useRecoilState(reEmploymentState);
  const [displayReEmployment, setDisplayReEmployment] = useState('');

  useEffect(() => {
    const plan = [
      { reEmployment: 1, display: '年内の再就職の予定あり' },
      { reEmployment: 2, display: '年内の再就職の予定なし' },
      { reEmployment: 3, display: '年内の再就職の予定は未定' },
    ].find((plan) => plan.reEmployment === storedReEmployment);

    if (plan === undefined) {
      throw Error;
    }
    setDisplayReEmployment(plan.display);
  }, [storedReEmployment]);

  return [displayReEmployment];
};

export const useDisplayAge = () => {
  const [storedAge] = useRecoilState(ageState);
  const [displayAge, setDisplayAge] = useState('');

  useEffect(() => {
    const givenChoice = [
      { age: 1, display: '30歳未満' },
      { age: 2, display: '30歳以上35歳未満' },
      { age: 3, display: '35歳以上45歳未満' },
      { age: 4, display: '45歳以上60歳未満' },
      { age: 5, display: '60歳以上65歳未満' },
    ].find((choice) => choice.age === storedAge);

    if (givenChoice === undefined) {
      throw Error;
    }
    setDisplayAge(givenChoice.display);
  }, [storedAge]);

  return [displayAge];
};

export const useDisplayFamily = () => {
  const [storedFamily] = useRecoilState(familyState);
  const [displayFamily, setDisplayFamily] = useState('');

  useEffect(() => {
    const givenChoice = [
      { age: 1, display: '社会保険の被保険者の家族がいる' },
      {
        age: 2,
        display: '社会保険の被保険者の家族はいない',
      },
    ].find((choice) => choice.age === storedFamily);

    if (givenChoice === undefined) {
      throw Error;
    }
    setDisplayFamily(givenChoice.display);
  }, [storedFamily]);

  return [displayFamily];
};

export const useDisplayEmpInsLastTwoYears = () => {
  const [storedEmpInsLastTwoYearsState] = useRecoilState(
    empInsLastTwoYearsState,
  );
  const [displayEmpInsLastTwoYears, setDisplayEmpInsLastTwoYears] =
    useState('');

  useEffect(() => {
    const givenChoice = [
      { empInsLastTwoYears: 1, display: '6ヶ月未満の加入実績あり' },
      {
        empInsLastTwoYears: 2,
        display: '6ヶ月以上1年未満の加入実績あり',
      },
      {
        empInsLastTwoYears: 3,
        display: '1年以上の加入実績あり',
      },
    ].find(
      (choice) => choice.empInsLastTwoYears === storedEmpInsLastTwoYearsState,
    );

    if (givenChoice === undefined) {
      throw Error;
    }
    setDisplayEmpInsLastTwoYears(givenChoice.display);
  }, [storedEmpInsLastTwoYearsState]);

  return [displayEmpInsLastTwoYears];
};

export const useDisplayEmpInsTotal = () => {
  const [storedEmpInsTotal] = useRecoilState(empInsTotalState);
  const [displayEmpInsTotal, setDisplayEmpInsTotal] = useState('');

  useEffect(() => {
    const givenChoice = [
      { empInsTotal: 1, display: '1年未満の加入実績あり' },
      {
        empInsTotal: 2,
        display: '1年以上5年未満の加入実績あり',
      },
      {
        empInsTotal: 3,
        display: '5年以上10年未満の加入実績あり',
      },
      {
        empInsTotal: 3,
        display: '10年以上20年未満の加入実績あり',
      },
      {
        empInsTotal: 3,
        display: '20年以上の加入実績あり',
      },
    ].find((choice) => choice.empInsTotal === storedEmpInsTotal);

    if (givenChoice === undefined) {
      throw Error;
    }
    setDisplayEmpInsTotal(givenChoice.display);
  }, [storedEmpInsTotal]);

  return [displayEmpInsTotal];
};

export const useDisplayHealthInsLastTwoMonth = () => {
  const [storedHealthInsLastTwoMonth] = useRecoilState(
    healthInsLastTwoMonthState,
  );
  const [displayHealthInsLastTwoMonth, setDisplayHealthInsLastTwoMonth] =
    useState('');

  useEffect(() => {
    const givenChoice = [
      { healthInsLastTwoMonth: 1, display: '2ヶ月未満の加入実績あり' },
      {
        healthInsLastTwoMonth: 2,
        display: '2ヶ月以上の加入実績あり',
      },
    ].find(
      (choice) => choice.healthInsLastTwoMonth === storedHealthInsLastTwoMonth,
    );

    if (givenChoice === undefined) {
      throw Error;
    }
    setDisplayHealthInsLastTwoMonth(givenChoice.display);
  }, [storedHealthInsLastTwoMonth]);

  return [displayHealthInsLastTwoMonth];
};

export const useDisplayHealthAfterRetirement = () => {
  const [storedHealthInsAfterRetirement] = useRecoilState(
    healthInsAfterRetirementState,
  );
  const [displayHealthInsAfterRetirement, setDisplayHealthInsAfterRetirement] =
    useState('');

  useEffect(() => {
    const givenChoice = [
      { healthInsAfterRetirement: 1, display: '国民健康保険' },
      {
        healthInsAfterRetirement: 2,
        display: '任意継続被保険者になる',
      },
      {
        healthInsAfterRetirement: 3,
        display: '家族の扶養に入る',
      },
    ].find(
      (choice) =>
        choice.healthInsAfterRetirement === storedHealthInsAfterRetirement,
    );

    if (givenChoice === undefined) {
      throw Error;
    }
    setDisplayHealthInsAfterRetirement(givenChoice.display);
  }, [storedHealthInsAfterRetirement]);

  return [displayHealthInsAfterRetirement];
};

export const useDisplayTax = () => {
  const [storedTax] = useRecoilState(taxState);
  const [displayTax, setDisplayTax] = useState('');

  useEffect(() => {
    const givenChoice = [
      { tax: 1, display: '一括徴収' },
      {
        tax: 2,
        display: '普通徴収',
      },
      {
        tax: 3,
        display: '今年度の住民税の支払いはなし',
      },
    ].find((choice) => choice.tax === storedTax);

    if (givenChoice === undefined) {
      throw Error;
    }
    setDisplayTax(givenChoice.display);
  }, [storedTax]);

  return [displayTax];
};
