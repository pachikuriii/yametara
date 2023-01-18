import { useState, useEffect } from 'react';
import Button from '../../atoms/button';
import Tabs from '../../molecules/question/q7/tabs';
interface Props {
  sethealthInsuranceAfterRetirement: (number: number) => void;
}
const Main = (props: Props) => {
  const [openTab, setOpenTab] = useState(1);
  const [selectedTab, setSelectedTab] = useState(1);
  useEffect(() => {
    props.sethealthInsuranceAfterRetirement(selectedTab);
  });
  return (
    <>
      <div className='flex flex-wrap'>
        <div className=' tabs tabs-boxed bg-primary'>
          <Tabs openTab={openTab} setOpenTab={setOpenTab}></Tabs>

          <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded'>
            <div className='px-4 py-5 flex-auto'>
              <div className='tab-content tab-space'>
                <div className={openTab === 1 ? 'block' : 'hidden'}>
                  <div>
                    <p className='border-b-4 border-dotted w-fit'>
                      国民健康保険への加入
                    </p>
                  </div>

                  <p>
                    国民健康保険へ加入する場合、●月●日から●月●日の間に住所地の市区役所/町村役場の窓口で手続きが必要です。
                  </p>
                  <Button onClick={() => setSelectedTab(1)}>
                    この保険への加入を検討する
                  </Button>
                </div>
                <div className={openTab === 2 ? 'block' : 'hidden'}>
                  <p className='text-black'>年金</p>
                  <Button onClick={() => setSelectedTab(2)}>
                    この保険への加入を検討する
                  </Button>
                </div>
                <div className={openTab === 3 ? 'block' : 'hidden'}>
                  <p className='text-black'>雇用保険</p>
                  <Button onClick={() => setSelectedTab(3)}>
                    この保険への加入を検討する
                  </Button>
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

export default Main;
