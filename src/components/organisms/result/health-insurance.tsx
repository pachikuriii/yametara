import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import dayjs from '../../../day-js';
import {
  retirementDateState,
  healthInsAfterRetirementState,
  familyState,
  healthInsLastTwoMonthState,
} from '../../../session-stroage';
import TodoPlate from '../../atoms/todo-plate';
import TodoDetail from 'src/components/atoms/todo-detail';

export default function HealthlInsurance() {
  const [storedRetirementDate] = useRecoilState(retirementDateState);
  const [storedHealthInsAfterRetirement] = useRecoilState(
    healthInsAfterRetirementState,
  );
  const [storedFamily] = useRecoilState(familyState);
  const [storedHealthInsLastTwoMonthState] = useRecoilState(
    healthInsLastTwoMonthState,
  );
  const [DayAfterRetirementDate, setDayAfterRetirementDate] = useState('');
  const [nationalInsApplyDeadline, setNationalInsApplyDeadline] = useState('');
  const [optionalInsApplyDeadline, setOptionalInsApplyDeadline] = useState('');
  const [dependentInsApplyDeadline, setdependentInsApplyDeadline] =
    useState('');
  const [healthInsAfterRetirement, setHealthInsAfterRetirement] = useState(0);
  const [healthInsLastTwoMonth, setHealthInsLastTwoMonthState] = useState(0);
  const [family, setFamily] = useState(0);

  useEffect(() => {
    setDayAfterRetirementDate(
      dayjs(storedRetirementDate).add(1, 'day').format('M月D日'),
    );
    setNationalInsApplyDeadline(
      dayjs(storedRetirementDate).add(15, 'day').format('M月D日'),
    );
    setOptionalInsApplyDeadline(
      dayjs(storedRetirementDate).add(21, 'day').format('M月D日'),
    );
    setdependentInsApplyDeadline(
      dayjs(storedRetirementDate).add(6, 'day').format('M月D日'),
    );
    setHealthInsAfterRetirement(storedHealthInsAfterRetirement);
    setFamily(storedFamily);
    setHealthInsLastTwoMonthState(storedHealthInsLastTwoMonthState);
  }, [
    storedRetirementDate,
    storedHealthInsAfterRetirement,
    storedFamily,
    storedHealthInsLastTwoMonthState,
  ]);

  return (
    <div id='health-insurance'>
      <TodoPlate>
        <h4>健康保険</h4>
      </TodoPlate>
      {healthInsAfterRetirement === 1 && (
        <TodoDetail
          what='国民健康保険への加入手続き'
          where='住所地の市区役所/町村役場の窓口で'
          when={`退職日翌日の${DayAfterRetirementDate}から
             ${nationalInsApplyDeadline}までに`}
          prepare={'これ'}
        ></TodoDetail>
      )}
      {healthInsLastTwoMonth === 1 && healthInsAfterRetirement === 2 && (
        <TodoDetail
          what='任意継続被保険者になる手続き'
          where='協会けんぽの保険証を持っている場合 住所地を管轄するの協会けんぽ支部
               各健康保険組合(健保組合)発行の保険証を持っている場合 各健康保険組合'
          when={`退職日翌日の${DayAfterRetirementDate}から${optionalInsApplyDeadline}までに`}
          prepare={'これ'}
        ></TodoDetail>
      )}
      {family === 1 && healthInsAfterRetirement === 3 && (
        <TodoDetail
          what='被扶養者になる手続き'
          where='家族である被保険者が勤務先で'
          when={`退職日翌日の${DayAfterRetirementDate}から${dependentInsApplyDeadline}までに`}
          prepare={'これ'}
        ></TodoDetail>
      )}
    </div>
  );
}
