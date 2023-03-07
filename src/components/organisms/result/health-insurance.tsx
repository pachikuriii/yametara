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
import Card from 'src/components/atoms/card';
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
        <div>
          <TodoDetail
            what='国民健康保険への加入手続き'
            where={
              <div>
                <p>住所地の市区役所/町村役場の窓口で</p>
                <p className='text-xs'>
                  ※住所地の市区役所/町村役場によっては郵送やマイナポータルから手続きできる場合があります。
                </p>
              </div>
            }
            when={`退職日翌日の${DayAfterRetirementDate}から
             ${nationalInsApplyDeadline}までに`}
            prepare={
              <div className='flex justify-center'>
                <Card>
                  <ol className='list-decimal'>
                    <li>本人確認書類（運転免許証など写真つきのもの）</li>
                    <li>健康保険資格喪失証明書</li>
                    <li>マイナンバーがわかるもの</li>
                    <p></p>
                  </ol>
                </Card>
              </div>
            }
          ></TodoDetail>
        </div>
      )}
      {healthInsLastTwoMonth === 1 && healthInsAfterRetirement === 2 && (
        <TodoDetail
          what='任意継続被保険者になる手続き'
          where='協会けんぽ支部や各健康保険組合で'
          when={`退職日翌日の${DayAfterRetirementDate}から${optionalInsApplyDeadline}までに`}
          prepare={
            <div className='flex justify-center'>
              <Card>
                <ol className='list-decimal'>
                  <li>健康保険任意継続被保険者資格取得申請書</li>
                  <li>組合健保/協会けんぽが独自に定める添付書類</li>
                  <p>
                    ※具体的な添付書類、提出方法は継続を希望する協会けんぽ/組合健保へ確認
                  </p>
                </ol>
              </Card>
            </div>
          }
        ></TodoDetail>
      )}
      {family === 1 && healthInsAfterRetirement === 3 && (
        <TodoDetail
          what='被扶養者になる手続き'
          where='家族である被保険者が勤務先で'
          when={`退職日翌日の${DayAfterRetirementDate}から${dependentInsApplyDeadline}までに`}
          prepare={
            <div className='flex justify-center'>
              <Card>
                <ol className='list-decimal'>
                  <li>健康保険被扶養者届</li>
                  <li>
                    被保険者である家族との続柄、収入などが確認できる添付書類
                  </li>
                  <p>
                    ※具体的な添付書類、提出方法は被保険者である家族の勤務先の事業所を通じて確認
                  </p>
                </ol>
              </Card>
            </div>
          }
        ></TodoDetail>
      )}
    </div>
  );
}
