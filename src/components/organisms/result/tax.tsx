import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import {
  retirementDateState,
  taxState,
  reEmploymentState,
} from '../../../session-stroage';
import TodoPlate from '../../atoms/todo-plate';

export default function Tax() {
  const [storedRetirementDate] = useRecoilState(retirementDateState);
  const [storedTax] = useRecoilState(taxState);
  const [storedReEmployment] = useRecoilState(reEmploymentState);
  const [taxReturnYear, setTaxReturnYear] = useState('');
  const [retirementMonth, setRetirementMonth] = useState(0);
  const [tax, setTax] = useState(0);
  const [reEmployment, setReEmployment] = useState(0);

  useEffect(() => {
    setTaxReturnYear(
      dayjs(storedRetirementDate).add(1, 'year').format('YYYY年'),
    );
    setRetirementMonth(dayjs(storedRetirementDate).month() + 1);
    setTax(storedTax);
    setReEmployment(storedReEmployment);
  }, [storedRetirementDate, storedTax, storedReEmployment, retirementMonth]);

  return (
    <div id='tax'>
      <TodoPlate>税金</TodoPlate>
      <div className={tax === 2 ? '' : ' hidden'}>
        <div className='text-center'>
          <p className='text-xs border-b-4 border-accent border-dotted w-fit'>
            なにを？
          </p>
          <p className='text-xl font-extrabold'>住民税の支払い</p>
          <p className='text-xs border-b-4 border-accent border-dotted w-fit'>
            どうやって？
          </p>
          <p>
            退職時に一括徴収しない場合は自治体から送られてくる納付書で支払い
          </p>

          <p className='text-xs border-b-4 border-accent border-dotted w-fit'>
            いつまでに？
          </p>
          <p>納付書に記載の期日までに</p>
          <p className='text-xs border-b-4 border-accent border-dotted w-fit'>
            用意するもの
          </p>
        </div>
      </div>
      <div className={reEmployment !== 1 ? '' : ' hidden'}>
        <div className='text-center'>
          <p className='text-xs border-b-4 border-accent border-dotted w-fit'>
            なにを？
          </p>
          <p className='text-xl font-extrabold'>所得税の還付申請</p>
          <p>
            年の途中で退職し、年内に再就職しない場合は年末調整を受けられません。そのため所得税を納め過ぎになる場合があります。この納め過ぎの所得税は、翌年になってから確定申告をすることで還付を受けられます。
          </p>
          <p className='text-xs border-b-4 border-accent border-dotted w-fit'>
            どこで？
          </p>
          <p>住所地を管轄する税務署</p>

          <p className='text-xs border-b-4 border-accent border-dotted w-fit'>
            いつまでに？
          </p>
          <p>
            {taxReturnYear}
            2月16日から3月15日までに
          </p>
          <p className='text-xs border-b-4 border-accent border-dotted w-fit'>
            用意するもの
          </p>
        </div>
      </div>
    </div>
  );
}
