import { HelloWork } from 'jp-hello-work';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { postcodeState } from '../../../local-stroage';
import CheckedTodoPlate from '../../molecules/checked-todo-plate';

type helloWorkName = string[];

export default function Tax() {
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
      <div>
        <CheckedTodoPlate>税金</CheckedTodoPlate>
        <div>
          <p className='text-lg border-b-4 border-dotted w-fit'>住民税</p>
          <p>
            職時に一括徴収しない場合は自治体から送られてくる納付書で支払いが必要です。
            退職時に一括徴収しているため今年度の支払いはありません。
          </p>
        </div>
        <div>
          <p className='text-lg border-b-4 border-dotted w-fit'>所得税</p>
          <p>
            年の途中で退職し、年内に再就職しない場合は年末調整を受けられません。そのため所得税を納め過ぎになる場合があります。この納め過ぎの所得税は、翌年になってから確定申告をすることで還付を受けられます。
            確定申告するには●月●日〜●月●日までの間に管轄の税務署で手続きが必要です。
          </p>
        </div>
      </div>
    </div>
  );
}
