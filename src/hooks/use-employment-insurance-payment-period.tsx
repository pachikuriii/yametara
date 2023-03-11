import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import {
  ageState,
  empInsTotalState,
  retirementReasonState,
} from '../storage/session-stroage';

export const useEmpInsPaymentPeriod = () => {
  const [storedRetirementReason] = useRecoilState(retirementReasonState);
  const [storedAge] = useRecoilState(ageState);
  const [storedEmpInsTotal] = useRecoilState(empInsTotalState);
  const [empInsTotal, setEmpInsTotal] = useState(0);
  const [retirementReason, setRetirementReason] = useState(0);
  const [empInsPaymentDays, setEmpInsPaymentDays] = useState(0);
  const [age, setAge] = useState(0);
  useEffect(() => {
    setEmpInsTotal(storedEmpInsTotal);
    setRetirementReason(storedRetirementReason);
    setAge(storedAge);
    if (retirementReason === 1) {
      const empInsPeriodAndDay = [
        { empInsTotal: 1, days: 0 },
        { empInsTotal: 2, days: 90 },
        { empInsTotal: 3, days: 90 },
        { empInsTotal: 4, days: 120 },
        { empInsTotal: 5, days: 150 },
      ].find(
        (empInsPeriodAndDay) => empInsPeriodAndDay.empInsTotal === empInsTotal,
      );
      if (empInsPeriodAndDay !== undefined) {
        setEmpInsPaymentDays(empInsPeriodAndDay.days);
      }
    } else if (retirementReason !== 1) {
      const empInsPeriodAndDay = [
        { empInsTotal: 1, days: 90, age: 1 },
        { empInsTotal: 1, days: 90, age: 2 },
        { empInsTotal: 1, days: 90, age: 3 },
        { empInsTotal: 1, days: 90, age: 4 },
        { empInsTotal: 1, days: 90, age: 5 },
        { empInsTotal: 2, days: 90, age: 1 },
        { empInsTotal: 2, days: 120, age: 2 },
        { empInsTotal: 2, days: 150, age: 3 },
        { empInsTotal: 2, days: 180, age: 4 },
        { empInsTotal: 2, days: 150, age: 5 },
        { empInsTotal: 3, days: 120, age: 1 },
        { empInsTotal: 3, days: 180, age: 2 },
        { empInsTotal: 3, days: 180, age: 3 },
        { empInsTotal: 3, days: 240, age: 4 },
        { empInsTotal: 3, days: 180, age: 5 },
        { empInsTotal: 4, days: 180, age: 1 },
        { empInsTotal: 4, days: 210, age: 2 },
        { empInsTotal: 4, days: 240, age: 3 },
        { empInsTotal: 4, days: 270, age: 4 },
        { empInsTotal: 4, days: 210, age: 5 },
        { empInsTotal: 5, days: 240, age: 2 },
        { empInsTotal: 5, days: 270, age: 3 },
        { empInsTotal: 5, days: 330, age: 4 },
        { empInsTotal: 5, days: 240, age: 5 },
      ].find(
        (empInsPeriodAndDay) =>
          empInsPeriodAndDay.empInsTotal === empInsTotal &&
          empInsPeriodAndDay.age === age,
      );
      if (empInsPeriodAndDay !== undefined) {
        setEmpInsPaymentDays(empInsPeriodAndDay.days);
      }
    }
  }, [
    storedAge,
    storedEmpInsTotal,
    storedRetirementReason,
    age,
    empInsTotal,
    retirementReason,
  ]);
  return [empInsPaymentDays];
};
