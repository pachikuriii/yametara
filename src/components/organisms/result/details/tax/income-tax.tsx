import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { retirementDateState } from '../../../../../session-stroage';
import Card from 'src/components/atoms/card';
import TodoDetailTemplate from 'src/components/template/todo-detail-template';

export default function IncomeTaxDetail() {
  const [storedRetirementDate] = useRecoilState(retirementDateState);
  const [taxReturnYear, setTaxReturnYear] = useState('');

  useEffect(() => {
    setTaxReturnYear(dayjs(storedRetirementDate).add(1, 'year').format('YYYY'));
  }, [storedRetirementDate]);

  return (
    <div>
      <TodoDetailTemplate
        what='所得税の還付申請'
        where='住所地を管轄する税務署やe-Taxなどで'
        when={`${taxReturnYear}年2月16日から3月15日までに`}
        prepare={
          <div className='flex justify-center'>
            <Card>
              <ol className='list-decimal text-left list-inside'>
                <li>確定申告書</li>
                <li>マイナンバーおよび身元が確認できる書類</li>
                <li>源泉徴収票</li>
                <li>
                  その他添付書類
                  <p className='text-xs'>添付書類は国税庁HPを参照の上確認</p>
                  <p className='text-right'>など</p>
                </li>
              </ol>
            </Card>
          </div>
        }
        id='income-tax'
      ></TodoDetailTemplate>
      <p>
        年の途中で退職し、年内に再就職しない場合は年末調整を受けられません。そのため所得税を納め過ぎになる場合があります。この納め過ぎの所得税は、翌年になってから確定申告をすることで還付を受けられます。
      </p>
    </div>
  );
}
