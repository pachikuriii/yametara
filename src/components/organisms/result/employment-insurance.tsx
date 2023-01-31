import { HelloWork } from 'jp-hello-work';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import {
  postcodeState,
  ageState,
  empInsTotalState,
  retirementReasonState,
} from '../../../local-stroage';
import CheckedTodoPlate from '../../molecules/checked-todo-plate';

type helloWorkName = string[];

export default function EmploymentInsurance() {
  const [storedPostcode] = useRecoilState(postcodeState);
  const [storedRetirementReason] = useRecoilState(retirementReasonState);
  const [storedAge] = useRecoilState(ageState);
  const [storedEmpInsTotal] = useRecoilState(empInsTotalState);
  const [helloWork, setHelloWork] = useState<helloWorkName>([]);
  const [empInsTotal, setEmpInsTotal] = useState(0);
  const [retirementReason, setRetirementReason] = useState(0);
  const [empInspaidDays, setEmpInsPaidDays] = useState(0);

  const [age, setAge] = useState(0);

  useEffect(() => {
    setEmpInsTotal(storedEmpInsTotal);
    setRetirementReason(storedRetirementReason);
    setAge(storedAge);
    const helloWork = HelloWork.byZipCode(storedPostcode.replace(/-/g, ''));
    setHelloWork(
      helloWork.name.map((name) => {
        return `ハローワーク${name}`;
      }),
    );

    if (storedRetirementReason === 1) {
      const empInsPeriodAndDay = [
        { empInsTotal: 1, days: 0 },
        { empInsTotal: 2, days: 90 },
        { empInsTotal: 3, days: 90 },
        { empInsTotal: 4, days: 120 },
        { empInsTotal: 5, days: 150 },
      ].find(
        (empInsPeriodAndDay) =>
          empInsPeriodAndDay.empInsTotal === storedEmpInsTotal,
      );

      if (empInsPeriodAndDay === undefined) {
        throw Error;
      }
      setEmpInsPaidDays(empInsPeriodAndDay.days);
    } else if (storedRetirementReason !== 1) {
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
          empInsPeriodAndDay.empInsTotal === storedEmpInsTotal &&
          empInsPeriodAndDay.age === storedAge,
      );
      if (empInsPeriodAndDay === undefined) {
        throw Error;
      }
      setEmpInsPaidDays(empInsPeriodAndDay.days);
    }
  }, [
    storedPostcode,
    storedRetirementReason,
    storedEmpInsTotal,
    age,
    empInsTotal,
    storedAge,
    retirementReason,
  ]);

  return (
    <div>
      <CheckedTodoPlate>雇用保険</CheckedTodoPlate>
      <div>
        <h4 className='text-lg border-b-4 border-dotted w-fit'>
          雇用保険の失業給付の受給手続き
        </h4>

        <p>
          あなたは{empInspaidDays}
          日分の失業給付（基本手当）の受給資格があります。基本手当の受給のためには手続きが必要です。
        </p>
        <p>どこで？</p>
        <p>以下のハローワークで手続きが可能です。</p>
        <div>
          {helloWork.map((value, index) => {
            return (
              <ul key={index}>
                <li>{value}</li>
              </ul>
            );
          })}
        </div>
        <p>いつまでに？なるべく早いうちに</p>
        <p>持ち物</p>
      </div>
    </div>
  );
}
