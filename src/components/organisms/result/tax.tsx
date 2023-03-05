import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import {
  retirementDateState,
  taxState,
  reEmploymentState,
} from '../../../session-stroage';
import TodoPlate from '../../atoms/todo-plate';
import TodoDetail from 'src/components/atoms/todo-detail';

export default function Tax() {
  const [storedRetirementDate] = useRecoilState(retirementDateState);
  const [storedTax] = useRecoilState(taxState);
  const [storedReEmployment] = useRecoilState(reEmploymentState);
  const [taxReturnYear, setTaxReturnYear] = useState('');
  const [retirementMonth, setRetirementMonth] = useState(0);
  const [tax, setTax] = useState(0);
  const [reEmployment, setReEmployment] = useState(0);

  useEffect(() => {
    setTaxReturnYear(dayjs(storedRetirementDate).add(1, 'year').format('YYYY'));
    setRetirementMonth(dayjs(storedRetirementDate).month() + 1);
    setTax(storedTax);
    setReEmployment(storedReEmployment);
  }, [storedRetirementDate, storedTax, storedReEmployment, retirementMonth]);

  return (
    <div id='tax'>
      <TodoPlate>税金</TodoPlate>
      {tax === 2 && (
        <TodoDetail
          what='住民税の支払い'
          where='退職時に一括徴収しない場合は自治体から送られてくる納付書を使って口座振替（銀行、ゆうちょなど）、コンビニなどで'
          when='納付書に記載の期日までに'
          prepare={'これ'}
        ></TodoDetail>
      )}
      {reEmployment !== 1 && (
        <>
          <TodoDetail
            what='所得税の還付申請'
            where='住所地を管轄する税務署やe-Taxなどで'
            when={`${taxReturnYear}年2月16日から3月15日までに`}
            prepare={'これ'}
          ></TodoDetail>
          <p>
            年の途中で退職し、年内に再就職しない場合は年末調整を受けられません。そのため所得税を納め過ぎになる場合があります。この納め過ぎの所得税は、翌年になってから確定申告をすることで還付を受けられます。
          </p>
        </>
      )}
    </div>
  );
}
