import { useState, useEffect } from 'react';
import { Storage } from '../../local-stroage';
import CheckedTodoPlate from '../molecules/result/checked-todo-plate';

interface Props {
  sethealthInsuranceAfterRetirement: (number: number) => void;
  storage: Storage;
}
const ResultMain = (props: Props) => {
  const [openTab, setOpenTab] = useState(1);
  const [selectedTab, setSelectedTab] = useState(1);
  useEffect(() => {
    props.sethealthInsuranceAfterRetirement(selectedTab);
  });
  return (
    <>
      <div className='bg-primary'>
        <div className={openTab === 1 ? 'block' : 'hidden'}>
          <div>
            <CheckedTodoPlate>健康保険</CheckedTodoPlate>

            <p className='text-lg border-b-4 border-dotted w-fit'>
              国民健康保険への加入
            </p>
          </div>
          <p>
            国民健康保険へ加入する場合、●月●日から●月●日の間に住所地の市区役所/町村役場の窓口で手続きが必要です。
          </p>
        </div>
        <div>
          <CheckedTodoPlate>年金</CheckedTodoPlate>
          <p className='text-lg border-b-4 border-dotted w-fit'>
            国民年金への加入
          </p>
          <p>
            退職により厚生年金の資格を喪失した場合に加入が必要です。国民年金へ加入するには●月●日〜●月●日までの間に
            住所地の市区役所/町村役場の
            窓口やマイナポータルなどで手続きが必要です。
          </p>
        </div>
        <div>
          <CheckedTodoPlate>雇用保険</CheckedTodoPlate>
          <p className='text-lg border-b-4 border-dotted w-fit'>
            雇用保険の失業給付の受給手続き
          </p>
          <p>
            あなたは●日分のの失業給付（基本手当）の受給資格があります。基本手当の受給のためにハローワーク●●で手続きが必要です。
          </p>
        </div>

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

        {/* <div className={openTab === 4 ? 'block' : 'hidden'}>
                  <p className='text-black'>税金</p>
                </div> */}
      </div>
    </>
  );
};

export default ResultMain;
