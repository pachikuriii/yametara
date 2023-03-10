import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import dayjs from '../../../../../day-js';
import { retirementDateState } from '../../../../../session-stroage';
import Tab from 'src/components/atoms/tab';
export default function AtOnceTaxCollection() {
  const storedRetirementDate = useRecoilValue(retirementDateState);
  const [retiredOnBetweenJanAndMay, setretiredOnBetweenJanAndMay] =
    useState(false);
  useEffect(() => {
    const retirementMonth = dayjs(storedRetirementDate).month() + 1;
    if ([...Array(5)].map((_, i) => i + 1).includes(retirementMonth)) {
      setretiredOnBetweenJanAndMay(true);
    }
  }, [storedRetirementDate]);
  return (
    <Tab title='一括徴収の特徴' explanation='未納分を一括で支払う方式'>
      <ul className='text-xs text-left py-2 list-disc'>
        <li>会社が退職時の給与/退職金から翌年5月分まで住民税を天引きする</li>
        {retiredOnBetweenJanAndMay && (
          <li>
            1月から5月に退職する場合は退職時に最後の給与/退職金から未納分の住民税が一括で天引きされることが一般的
          </li>
        )}
      </ul>
    </Tab>
  );
}
