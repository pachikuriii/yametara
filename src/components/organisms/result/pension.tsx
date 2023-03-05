import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import dayjs from '../../../day-js';
import { retirementDateState } from '../../../session-stroage';
import TodoPlate from '../../atoms/todo-plate';
import TodoDetail from 'src/components/atoms/todo-detail';

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
      <TodoDetail
        what='国民年金への加入手続き'
        where='住所地の市区役所/町村役場の窓口やマイナポータルなどで'
        when={`退職日翌日の${DayAfterRetirementDate}から${pensionApplyDeadline}までに`}
        prepare={'これ'}
      ></TodoDetail>
    </div>
  );
}
