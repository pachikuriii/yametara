import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import dayjs from '../../../../../day-js';
import { retirementDateState } from '../../../../../session-stroage';
import Card from 'src/components/atoms/card';
import TodoDetailTemplate from 'src/components/template/todo-detail-template';

export default function OptionalInsuranceDetail() {
  const [storedRetirementDate] = useRecoilState(retirementDateState);
  const [DayAfterRetirementDate, setDayAfterRetirementDate] = useState('');
  const [optionalInsApplyDeadline, setOptionalInsApplyDeadline] = useState('');
  useEffect(() => {
    setDayAfterRetirementDate(
      dayjs(storedRetirementDate).add(1, 'day').format('M月D日'),
    );
    setOptionalInsApplyDeadline(
      dayjs(storedRetirementDate).add(21, 'day').format('M月D日'),
    );
  }, [storedRetirementDate]);

  return (
    <TodoDetailTemplate
      what='任意継続被保険者になる手続き'
      where='協会けんぽ支部や各健康保険組合で'
      when={`退職日翌日の${DayAfterRetirementDate}から${optionalInsApplyDeadline}までに`}
      prepare={
        <div className='flex justify-center'>
          <Card>
            <ol className='list-decimal text-left list-inside'>
              <li>健康保険任意継続被保険者資格取得申請書</li>
              <li>
                組合健保/協会けんぽが独自に定める添付書類
                <p className='text-xs'>
                  ※具体的な添付書類、提出方法は継続を希望する協会けんぽ/組合健保へ確認
                </p>
              </li>
              <p className='text-right'>など</p>
            </ol>
          </Card>
        </div>
      }
    ></TodoDetailTemplate>
  );
}
