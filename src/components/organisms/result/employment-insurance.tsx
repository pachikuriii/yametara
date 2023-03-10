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
import Card from 'src/components/atoms/card';
import TodoDetailTemplate from 'src/components/template/todo-detail-template';
import { useEmpInsQualification } from 'src/hooks/use-employment-insurance-condition';
import { useEmpInsPaymentPeriod } from 'src/hooks/use-employment-insurance-payment-period';
type helloWorkName = string[];

export default function EmploymentInsurance() {
  const [storedPostcode] = useRecoilState(postcodeState);
  const [storedRetirementReason] = useRecoilState(retirementReasonState);
  const [storedAge] = useRecoilState(ageState);
  const [storedEmpInsTotal] = useRecoilState(empInsTotalState);
  const [helloWork, setHelloWork] = useState<helloWorkName>([]);
  const [empInsQualification] = useEmpInsQualification();
  const [empInsPaymentDays] = useEmpInsPaymentPeriod();
  useEffect(() => {
    const helloWork = HelloWork.byZipCode(storedPostcode.replace(/-/g, ''));
    setHelloWork(
      helloWork.name.map((name) => {
        return `ハローワーク${name}`;
      }),
    );
  }, [storedAge, storedEmpInsTotal, storedPostcode, storedRetirementReason]);

  return (
    <div>
      {empInsQualification && (
        <div id='employment-insurance'>
          <TodoPlate>雇用保険</TodoPlate>
          <p className='text-center'>
            あなたには{empInsPaymentDays}
            日分の失業給付（基本手当）の受給資格があります。
          </p>
          <TodoDetailTemplate
            what='雇用保険の失業給付の受給手続き'
            where={
              <>
                <p>以下のハローワークで手続きが可能です。</p>
                <div>
                  <ul>
                    {helloWork.map((value, index) => {
                      return <li key={index}>{value}</li>;
                    })}
                  </ul>
                </div>
              </>
            }
            when='なるべく早いうちに'
            prepare={
              <div className='flex justify-center'>
                <Card>
                  <ol className='list-decimal text-left list-inside'>
                    <li>
                      本人確認書類
                      <p className='text-xs'>※写真つきのもの</p>
                    </li>
                    <li>雇用保険被保険者離職票（-1、-2）</li>
                    <li>写真2枚</li>
                    <p className='text-xs'>
                      （最近の写真で本人と確認できるもの、縦3.0cm×横2.4cm）
                    </p>
                    <li>本人名義の預金通帳又はキャッシュカード</li>
                    <li>マイナンバーが確認できる書類</li>
                  </ol>
                  <p className='text-right'>など</p>
                </Card>
              </div>
            }
          ></TodoDetailTemplate>
        </div>
      )}
    </div>
  );
}
