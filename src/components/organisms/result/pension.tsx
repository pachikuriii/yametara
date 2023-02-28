import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import dayjs from '../../../day-js';
import { retirementDateState } from '../../../session-stroage';
import CheckedTodoPlate from '../../molecules/checked-todo-plate';

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
    <div>
      <CheckedTodoPlate>年金</CheckedTodoPlate>
      <div className='text-center'>
        <p className='text-xs border-b-4 border-accent border-dotted w-fit'>
          なにを？
        </p>
        <p className='text-xl font-extrabold'> 国民年金への加入手続き</p>
        <p className='text-xs border-b-4 border-accent border-dotted w-fit'>
          どこで？
        </p>
        <p>住所地の市区役所/町村役場の窓口やマイナポータルなどで</p>

        <p className='text-xs border-b-4 border-accent border-dotted w-fit'>
          いつまでに？
        </p>
        <p>
          退職日翌日の{DayAfterRetirementDate}から
          {pensionApplyDeadline}までに
        </p>
        <p className='text-xs border-b-4 border-accent border-dotted w-fit'>
          用意するもの
        </p>
      </div>
    </div>
  );
}
