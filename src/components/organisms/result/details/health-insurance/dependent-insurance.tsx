import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import dayjs from '../../../../../day-js';
import { retirementDateState } from '../../../../../storage/session-stroage';
import Card from 'src/components/atoms/card';
import TodoDetailTemplate from 'src/components/template/todo-detail-template';

export default function DependentInsuranceDetail() {
  const [storedRetirementDate] = useRecoilState(retirementDateState);
  const [DayAfterRetirementDate, setDayAfterRetirementDate] = useState('');
  const [dependentInsApplyDeadline, setdependentInsApplyDeadline] =
    useState('');
  useEffect(() => {
    setDayAfterRetirementDate(
      dayjs(storedRetirementDate).add(1, 'day').format('M月D日'),
    );
    setdependentInsApplyDeadline(
      dayjs(storedRetirementDate).add(6, 'day').format('M月D日'),
    );
  }, [storedRetirementDate]);

  return (
    <TodoDetailTemplate
      what='被扶養者になる手続き'
      where='家族である被保険者が勤務先で'
      when={`退職日翌日の${DayAfterRetirementDate}から${dependentInsApplyDeadline}までに`}
      prepare={
        <div className='flex justify-center'>
          <Card>
            <ol className='list-decimal text-left x-2 list-inside'>
              <li>健康保険被扶養者届</li>
              <li>家族との続柄、収入などが確認できる添付書類</li>
              <p className='text-xs'>
                ※具体的な添付書類、提出方法は被保険者である家族の勤務先の事業所を通じて確認
              </p>
              <p className='text-right'>など</p>
            </ol>
          </Card>
        </div>
      }
    ></TodoDetailTemplate>
  );
}
