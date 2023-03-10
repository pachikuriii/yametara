import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import dayjs from '../../../../../day-js';
import { retirementDateState } from '../../../../../session-stroage';
import Card from 'src/components/atoms/card';
import TodoDetailTemplate from 'src/components/template/todo-detail-template';

export default function NationalInsuranceDetail() {
  const [storedRetirementDate] = useRecoilState(retirementDateState);
  const [DayAfterRetirementDate, setDayAfterRetirementDate] = useState('');
  const [nationalInsApplyDeadline, setNationalInsApplyDeadline] = useState('');
  useEffect(() => {
    setDayAfterRetirementDate(
      dayjs(storedRetirementDate).add(1, 'day').format('M月D日'),
    );
    setNationalInsApplyDeadline(
      dayjs(storedRetirementDate).add(15, 'day').format('M月D日'),
    );
  }, [storedRetirementDate]);

  return (
    <TodoDetailTemplate
      what='国民健康保険への加入手続き'
      where={
        <div>
          <p>住所地の市区役所/町村役場の窓口で</p>
          <p className='text-xs'>
            ※住所地の市区役所/町村役場によっては郵送やマイナポータルから手続きできる場合があります。
          </p>
        </div>
      }
      when={`退職日翌日の${DayAfterRetirementDate}から${nationalInsApplyDeadline}までに`}
      prepare={
        <div className='flex justify-center'>
          <Card>
            <ol className='list-decimal text-left list-inside'>
              <li>
                本人確認書類
                <p className='text-xs'>※写真つきのもの</p>
              </li>
              <li>健康保険資格喪失証明書</li>
              <li>マイナンバーが確認できる書類</li>
              <p className='text-right'>など</p>
            </ol>
          </Card>
        </div>
      }
    ></TodoDetailTemplate>
  );
}
