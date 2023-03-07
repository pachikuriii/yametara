import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import {
  retirementDateState,
  taxState,
  reEmploymentState,
} from '../../../session-stroage';
import TodoPlate from '../../atoms/todo-plate';
import Card from 'src/components/atoms/card';
import TodoDetail from 'src/components/atoms/todo-detail';

export default function Tax() {
  const [storedRetirementDate] = useRecoilState(retirementDateState);
  const [storedTax] = useRecoilState(taxState);
  const [storedReEmployment] = useRecoilState(reEmploymentState);
  const [taxReturnYear, setTaxReturnYear] = useState('');
  const [retirementMonth, setRetirementMonth] = useState(0);
  const [tax, setTax] = useState(0);
  const [reEmployment, setReEmployment] = useState(0);

  useEffect(() => {
    setTaxReturnYear(dayjs(storedRetirementDate).add(1, 'year').format('YYYY'));
    setRetirementMonth(dayjs(storedRetirementDate).month() + 1);
    setTax(storedTax);
    setReEmployment(storedReEmployment);
  }, [storedRetirementDate, storedTax, storedReEmployment, retirementMonth]);

  return (
    <div>
      {(reEmployment !== 1 || tax === 2) && (
        <div id='tax'>
          <TodoPlate>税金</TodoPlate>
          {tax === 2 && (
            <TodoDetail
              what='住民税の支払い'
              where='口座振替/コンビニなどで'
              when='納付書に記載の期日までに'
              prepare={
                <div className='flex justify-center'>
                  <Card>
                    <div className='text-center'>
                      <p>お住まいの自治体から送られてくる納付書</p>
                    </div>
                  </Card>
                </div>
              }
              id='resident-tax'
            ></TodoDetail>
          )}
          {reEmployment !== 1 && (
            <div>
              <TodoDetail
                what='所得税の還付申請'
                where='住所地を管轄する税務署やe-Taxなどで'
                when={`${taxReturnYear}年2月16日から3月15日までに`}
                prepare={
                  <div className='flex justify-center'>
                    <Card>
                      <ol className='list-decimal text-left list-inside'>
                        <li>確定申告書</li>
                        <li>マイナンバーおよび身元が確認できる書類</li>
                        <li>源泉徴収票</li>
                        <li>
                          その他添付書類
                          <p className='text-xs'>
                            添付書類は国税庁HPを参照の上確認
                          </p>
                          <p className='text-right'>など</p>
                        </li>
                      </ol>
                    </Card>
                  </div>
                }
                id='income-tax'
              ></TodoDetail>
              <p>
                年の途中で退職し、年内に再就職しない場合は年末調整を受けられません。そのため所得税を納め過ぎになる場合があります。この納め過ぎの所得税は、翌年になってから確定申告をすることで還付を受けられます。
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
