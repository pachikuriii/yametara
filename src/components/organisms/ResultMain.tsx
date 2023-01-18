import { useState, useEffect } from 'react';
import Check from '../atoms/check';
import Tabs from '../molecules/result/tabs';
interface Props {
  sethealthInsuranceAfterRetirement: (number: number) => void;
}
const ResultMain = (props: Props) => {
  const [openTab, setOpenTab] = useState(1);
  const [selectedTab, setSelectedTab] = useState(1);
  useEffect(() => {
    props.sethealthInsuranceAfterRetirement(selectedTab);
  });
  return (
    <>
      <div className='flex flex-wrap'>
        <div className=' tabs tabs-boxed bg-primary shadow-md'>
          <Tabs openTab={openTab} setOpenTab={setOpenTab}></Tabs>

          <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded'>
            <div className='px-4 py-5 flex-auto'>
              <div className='tab-content tab-space'>
                <div className={openTab === 1 ? 'block' : 'hidden'}>
                  <div>
                    <Check />
                    <p className='border-b-4 border-dotted w-fit'>
                      国民健康保険への加入
                    </p>
                  </div>
                  <p>
                    国民健康保険へ加入する場合、●月●日から●月●日の間に住所地の市区役所/町村役場の窓口で手続きが必要です。
                  </p>
                </div>
                <div className={openTab === 2 ? 'block' : 'hidden'}>
                  <p className='text-black'>年金</p>
                </div>
                <div className={openTab === 3 ? 'block' : 'hidden'}>
                  <p className='text-black'>雇用保険</p>
                </div>

                <div className={openTab === 4 ? 'block' : 'hidden'}>
                  <p className='text-black'>税金</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultMain;
