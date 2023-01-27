import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import dayjs from '../../../day-js';
import { retirementDateState } from '../../../local-stroage';
import CheckedTodoPlate from '../../molecules/checked-todo-plate';

export default function HealthlInsurance() {
  const [storedRetirementDate] = useRecoilState(retirementDateState);
  const [DayAfterRetirementDate, setDayAfterRetirementDate] = useState('');
  const [nationalInsApplyDeadline, setNationalInsApplyDeadline] = useState('');
  const [optionalInsApplyDeadline, setOptionalInsApplyDeadline] = useState('');
  const [dependentInsApplyDeadline, setdependentInsApplyDeadline] =
    useState('');

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
  }, [storedRetirementDate]);

  return (
    <div>
      <CheckedTodoPlate>健康保険</CheckedTodoPlate>
      <div>
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
      <div>
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
      <div>
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

//         <div>
//           <CheckedTodoPlate>年金</CheckedTodoPlate>
//           <p className='text-lg border-b-4 border-dotted w-fit'>
//             国民年金への加入
//           </p>
//           <p>
//             退職により厚生年金の資格を喪失した場合に加入が必要です。国民年金へ加入するには●月●日〜●月●日までの間に
//             住所地の市区役所/町村役場の
//             窓口やマイナポータルなどで手続きが必要です。
//           </p>
//         </div>
//         <div>
//           <CheckedTodoPlate>雇用保険</CheckedTodoPlate>
//           <p className='text-lg border-b-4 border-dotted w-fit'>
//             雇用保険の失業給付の受給手続き
//           </p>
//           <p>
//             あなたは●日分のの失業給付（基本手当）の受給資格があります。基本手当の受給のためにハローワーク●●で手続きが必要です。
//           </p>
//         </div>

//         <div>
//           <CheckedTodoPlate>税金</CheckedTodoPlate>
//           <div>
//             <p className='text-lg border-b-4 border-dotted w-fit'>住民税</p>
//             <p>
//               職時に一括徴収しない場合は自治体から送られてくる納付書で支払いが必要です。
//               退職時に一括徴収しているため今年度の支払いはありません。
//             </p>
//           </div>
//           <div>
//             <p className='text-lg border-b-4 border-dotted w-fit'>所得税</p>
//             <p>
//               年の途中で退職し、年内に再就職しない場合は年末調整を受けられません。そのため所得税を納め過ぎになる場合があります。この納め過ぎの所得税は、翌年になってから確定申告をすることで還付を受けられます。
//               確定申告するには●月●日〜●月●日までの間に管轄の税務署で手続きが必要です。
//             </p>
//           </div>
//         </div>
//       </div>
