import { HelloWork } from 'jp-hello-work';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { postcodeState } from '../../../local-stroage';
import CheckedTodoPlate from '../../molecules/checked-todo-plate';

type helloWorkName = string[];

export default function EmploymentInsurance() {
  const [storedPostcode] = useRecoilState(postcodeState);

  const [helloWork, setHelloWork] = useState<helloWorkName>([]);

  useEffect(() => {
    const helloWork = HelloWork.byZipCode(storedPostcode.replace(/-/g, ''));
    setHelloWork(
      helloWork.name.map((name) => {
        return `ハローワーク${name}`;
      }),
    );
  }, [storedPostcode]);

  return (
    <div>
      <CheckedTodoPlate>雇用保険</CheckedTodoPlate>
      <div>
        <h4 className='text-lg border-b-4 border-dotted w-fit'>
          雇用保険の失業給付の受給手続き
        </h4>

        <p>
          あなたは●日分のの失業給付（基本手当）の受給資格があります。基本手当の受給のためには手続きが必要です。
        </p>
        <p>どこで？</p>
        <p>以下のハローワークで手続きが可能です。</p>
        <div>
          {helloWork.map((value, index) => {
            return (
              <ul key={index}>
                <li>{value}</li>
              </ul>
            );
          })}
        </div>
        <p>いつまでに？なるべく早いうちに</p>
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
