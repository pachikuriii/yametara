import { useState, useEffect } from 'react';
import LocalStorage from '../../local-stroage';
import Button from '../atoms/button';
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
        <div className='w-full tabs tabs-boxed'>
          <Tabs openTab={openTab} setOpenTab={setOpenTab}></Tabs>

          <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded'>
            <div className='px-4 py-5 flex-auto'>
              <div className='tab-content tab-space'>
                <div className={openTab === 1 ? 'block' : 'hidden'}>
                  <p className='text-black'>健康保険</p>
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
