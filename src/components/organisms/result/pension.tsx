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
      <div>
        <h4 className='text-lg border-b-4 border-dotted w-fit'>
          国民年金への加入手続き
        </h4>
        <p>どこで？：住所地の市区役所/町村役場の窓口やマイナポータルなどで</p>

        <p>
          いつまでに？退職日の翌日{DayAfterRetirementDate}から
          {pensionApplyDeadline}までに
        </p>
        <p>持ち物</p>
      </div>
    </div>
  );
}

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
