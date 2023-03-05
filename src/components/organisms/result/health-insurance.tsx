import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import dayjs from '../../../day-js';
import {
  retirementDateState,
  healthInsAfterRetirementState,
} from '../../../session-stroage';
import TodoPlate from '../../atoms/todo-plate';

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
    <div id='health-insurance'>
      <TodoPlate>
        <h4>健康保険</h4>
      </TodoPlate>
      <div className={healthInsAfterRetirement === 1 ? '' : ' hidden'}>
        <div className='text-center'>
          <p className='text-xs border-b-4 border-accent border-dotted w-fit'>
            なにを？
          </p>
          <p className='text-xl font-extrabold'>国民健康保険への加入手続き</p>
          <p className='text-xs border-b-4 border-accent border-dotted w-fit'>
            どこで？
          </p>
          <p>住所地の市区役所/町村役場の窓口で</p>

          <p className='text-xs border-b-4 border-accent border-dotted w-fit'>
            いつまでに？
          </p>
          <p>
            退職日翌日の{DayAfterRetirementDate}から
            {nationalInsApplyDeadline}までに
          </p>
          <p className='text-xs border-b-4 border-accent border-dotted w-fit'>
            用意するもの
          </p>
        </div>
      </div>
      <div className={healthInsAfterRetirement === 2 ? '' : ' hidden'}>
        <div className='text-center'>
          <p className='text-xs border-b-4 border-accent border-dotted w-fit'>
            なにを？
          </p>
          <p className='text-xl font-extrabold'>任意継続被保険者になる手続き</p>
          <p className='text-xs border-b-4 border-accent border-dotted w-fit'>
            どこで？
          </p>
          <p>
            協会けんぽの保険証を持っている場合 住所地を管轄するの協会けんぽ支部
            各健康保険組合(健保組合)発行の保険証を持っている場合 各健康保険組合
          </p>

          <p className='text-xs border-b-4 border-accent border-dotted w-fit'>
            いつまでに？
          </p>
          <p>
            退職日翌日の{DayAfterRetirementDate}から
            {optionalInsApplyDeadline}までに
          </p>
          <p className='text-xs border-b-4 border-accent border-dotted w-fit'>
            用意するもの
          </p>
        </div>
      </div>
      <div className={healthInsAfterRetirement === 3 ? '' : ' hidden'}>
        <div className='text-center'>
          <p className='text-xs border-b-4 border-accent border-dotted w-fit'>
            なにを？
          </p>
          <p className='text-xl font-extrabold'>被扶養者になる手続き</p>
          <p className='text-xs border-b-4 border-accent border-dotted w-fit'>
            どこで？
          </p>
          <p>家族である被保険者が勤務先で</p>

          <p className='text-xs border-b-4 border-accent border-dotted w-fit'>
            いつまでに？
          </p>
          <p>
            退職日翌日の{DayAfterRetirementDate}から
            {dependentInsApplyDeadline}までに
          </p>
          <p className='text-xs border-b-4 border-accent border-dotted w-fit'>
            用意するもの
          </p>
        </div>
      </div>
    </div>
  );
}
