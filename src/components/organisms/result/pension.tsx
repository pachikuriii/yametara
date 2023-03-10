import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import dayjs from '../../../day-js';
import { retirementDateState } from '../../../session-stroage';
import TodoPlate from '../../atoms/todo-plate';
import Card from 'src/components/atoms/card';
import TodoDetailTemplate from 'src/components/template/todo-detail-template';

export default function Pension() {
  const [storedRetirementDate] = useRecoilState(retirementDateState);
  const [DayAfterRetirementDate, setDayAfterRetirementDate] = useState('');
  const [pensionApplyDeadline, setPensionApplyDeadline] = useState('');

  useEffect(() => {
    setDayAfterRetirementDate(
      dayjs(storedRetirementDate).add(1, 'day').format('M月D日'),
    );
    setPensionApplyDeadline(
      dayjs(storedRetirementDate).add(15, 'day').format('M月D日'),
    );
  }, [storedRetirementDate]);

  return (
    <div id='pension'>
      <TodoPlate>年金</TodoPlate>
      <TodoDetailTemplate
        what='国民年金への加入手続き'
        where={
          <div>
            <p>住所地の市区役所/町村役場の窓口で</p>
            <p className='text-xs'>
              ※住所地の市区役所/町村役場によっては郵送やマイナポータルから手続きできる場合があります。
            </p>
          </div>
        }
        when={`退職日翌日の${DayAfterRetirementDate}から${pensionApplyDeadline}までに`}
        prepare={
          <div className='flex justify-center'>
            <Card>
              <ol className='list-decimal text-left list-inside'>
                <li>
                  本人確認書類
                  <p className='text-xs'>※写真つきのもの</p>
                </li>
                <li>
                  基礎年金番号が確認できる書類
                  <p className='text-xs'>
                    ※基礎年金番号通知書または年金手帳など
                  </p>
                </li>
                <li>
                  健康/厚生年金保険の資格喪失日や離職日が記載されている書類
                  <p className='text-xs'>
                    ※健康保険・厚生年金保険資格喪失証明書、離職票など
                  </p>
                </li>
                <li>マイナンバーが確認できる書類</li>
              </ol>
              <p className='text-right'>など</p>
            </Card>
          </div>
        }
      ></TodoDetailTemplate>
    </div>
  );
}
