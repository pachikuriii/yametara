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
        <div className='w-full tabs tabs-boxed'>
          <Tabs openTab={openTab} setOpenTab={setOpenTab}></Tabs>

          <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded'>
            <div className='px-4 py-5 flex-auto'>
              <div className='tab-content tab-space'>
                <div className={openTab === 1 ? 'block' : 'hidden'}>
                  <p>任意継続保険ららららららら</p>
                  <Button onClick={() => setSelectedTab(1)}>
                    この保険への加入を検討する
                  </Button>
                </div>
                <div className={openTab === 2 ? 'block' : 'hidden'}>
                  <p>
                    他のどの健康保険にも加入していないすべての住民を対象とした健康保険
                    保険料の特徴
                    前年の所得や保険へ加入する世帯人員数などに応じて保険料が決まる
                    保険料の減免制度が受けられる場合がある
                    居住している市区町村により保険料額が異なる
                  </p>
                  <Button onClick={() => setSelectedTab(2)}>
                    この保険への加入を検討する
                  </Button>
                </div>
                <div className={openTab === 3 ? 'block' : 'hidden'}>
                  <p>家族の健康保険</p>
                  <Button onClick={() => setSelectedTab(3)}>
                    この保険への加入を検討する
                  </Button>
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
