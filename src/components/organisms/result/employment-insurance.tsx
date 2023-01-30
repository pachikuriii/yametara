import { HelloWork } from 'jp-hello-work';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { postcodeState } from '../../../local-stroage';
import CheckedTodoPlate from '../../molecules/checked-todo-plate';

type helloWorkName = string[];

export default function EmploymentInsurance() {
  const [storedPostcode] = useRecoilState(postcodeState);

  const [helloWork, setHelloWork] = useState<helloWorkName>([]);

  useEffect(() => {
    const helloWork = HelloWork.byZipCode(storedPostcode.replace(/-/g, ''));
    setHelloWork(
      helloWork.name.map((name) => {
        return `ハローワーク${name}`;
      }),
    );
  }, [storedPostcode]);

  return (
    <div>
      <CheckedTodoPlate>雇用保険</CheckedTodoPlate>
      <div>
        <h4 className='text-lg border-b-4 border-dotted w-fit'>
          雇用保険の失業給付の受給手続き
        </h4>

        <p>
          あなたは●日分のの失業給付（基本手当）の受給資格があります。基本手当の受給のためには手続きが必要です。
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
