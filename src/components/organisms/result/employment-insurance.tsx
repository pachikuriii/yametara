import { HelloWork } from 'jp-hello-work';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import {
  postcodeState,
  ageState,
  empInsTotalState,
  retirementReasonState,
} from '../../../session-stroage';
import TodoPlate from '../../atoms/todo-plate';
import { useEmpInsQualification } from 'src/hooks/use-employment-insurance-condition';

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
  const [employmentInsranceQualification] = useEmpInsQualification();

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
    <div className={employmentInsranceQualification ? '' : ' hidden'}>
      <TodoPlate>雇用保険</TodoPlate>
      <div>
        <div className='text-center'>
          <p className='text-xs border-b-4 border-accent border-dotted w-fit'>
            なにを？
          </p>
          <p className='text-xl font-extrabold'>
            雇用保険の失業給付の受給手続き
          </p>
          <p className='text-xs border-b-4 border-accent border-dotted w-fit'>
            どこで？
          </p>
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

          <p className='text-xs border-b-4 border-accent border-dotted w-fit'>
            いつまでに？
          </p>
          <p>なるべく早いうちに</p>
          <p className='text-xs border-b-4 border-accent border-dotted w-fit'>
            用意するもの
          </p>
        </div>
      </div>
    </div>
  );
}
