import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import dayjs from '../../../day-js';
import {
  retirementDateState,
  healthInsAfterRetirementState,
} from '../../../session-stroage';
import CheckedTodoPlate from '../../molecules/checked-todo-plate';

export default function HealthlInsurance() {
  const [storedRetirementDate] = useRecoilState(retirementDateState);
  const [storedHealthInsAfterRetirement] = useRecoilState(
    healthInsAfterRetirementState,
  );
  const [DayAfterRetirementDate, setDayAfterRetirementDate] = useState('');
  const [nationalInsApplyDeadline, setNationalInsApplyDeadline] = useState('');
  const [optionalInsApplyDeadline, setOptionalInsApplyDeadline] = useState('');
  const [dependentInsApplyDeadline, setdependentInsApplyDeadline] =
    useState('');
  const [healthInsAfterRetirement, sethealthInsAfterRetirement] = useState(0);

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
    sethealthInsAfterRetirement(storedHealthInsAfterRetirement);
  }, [storedRetirementDate, storedHealthInsAfterRetirement]);

  return (
    <div>
      <CheckedTodoPlate>健康保険</CheckedTodoPlate>
      <div className={healthInsAfterRetirement === 1 ? '' : ' hidden'}>
        <h4 className='text-lg border-b-4 border-dotted w-fit'>
          国民健康保険への加入手続き
        </h4>
        <p>どこで？：住所地の市区役所/町村役場の窓口で</p>

        <p>
          いつまでに？退職日の翌日{DayAfterRetirementDate}から
          {nationalInsApplyDeadline}までに
        </p>
        <p>持ち物</p>
      </div>
      <div className={healthInsAfterRetirement === 2 ? '' : ' hidden'}>
        <h4 className='text-lg border-b-4 border-dotted w-fit'>
          任意継続被保険者になるための手続き
        </h4>
        <p>どこで？：</p>
        <p>
          協会けんぽの保険証を持っている場合 住所地を管轄するの協会けんぽ支部
        </p>
        <p>
          各健康保険組合(健保組合)発行の保険証を持っている場合 各健康保険組合
        </p>
        <p>
          いつまでに？退職日の翌日{DayAfterRetirementDate}から
          {optionalInsApplyDeadline}までに
        </p>
        <p>持ち物</p>
      </div>
      <div className={healthInsAfterRetirement === 3 ? '' : ' hidden'}>
        <h4 className='text-lg border-b-4 border-dotted w-fit'>
          被扶養者となるための手続き
        </h4>
        <p>どこで？：家族である被保険者が勤務先で</p>
        <p>
          いつまでに？退職日の翌日{DayAfterRetirementDate}から
          {dependentInsApplyDeadline}までに
        </p>
        <p>持ち物</p>
      </div>
    </div>
  );
}
