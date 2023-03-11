import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import dayjs from '../../../day-js';
import { useDisplayGivenOption } from '../../../hooks/use-display-given-option';
import * as storage from '../../../storage/session-stroage';

export default function DataInput() {
  const [retirementReason] = useRecoilState(storage.retirementReasonState);
  const [reEmployment] = useRecoilState(storage.reEmploymentState);
  const [age] = useRecoilState(storage.ageState);
  const [family] = useRecoilState(storage.familyState);
  const [empInsLastTwoYears] = useRecoilState(storage.empInsLastTwoYearsState);
  const [empInsTotal] = useRecoilState(storage.empInsTotalState);
  const [healthInsLastTwoMonth] = useRecoilState(
    storage.healthInsLastTwoMonthState,
  );
  const [healthInsAfterRetirement] = useRecoilState(
    storage.healthInsAfterRetirementState,
  );
  const [tax] = useRecoilState(storage.taxState);
  const [retirementDate] = useRecoilState(storage.retirementDateState);
  const [postcode] = useRecoilState(storage.postcodeState);

  const [displayedRetirementDate, setDisplayedRetirementDate] = useState('');
  const [displayedPostcode, setDisplayedPostcode] = useState('');

  useEffect(() => {
    setDisplayedRetirementDate(dayjs(retirementDate).format('YYYY年M月D日'));
    setDisplayedPostcode(postcode);
  }, [retirementDate, postcode]);

  return (
    <div className='text-gray-800' id='input-content'>
      <div className='w-full bg-primary'>
        <h5 className='text-white text-xl text-center py-2 font-extrabold'>
          あなたの入力内容
        </h5>
      </div>

      <div className='px-6 py-6'>
        <div className='flex'>
          <p className='text-accent pr-2'>Q1</p>
          <div>
            <p id='retirement-date'>退職予定日：{displayedRetirementDate}</p>
            <p id='retirement-reason'>
              退職事由：
              {useDisplayGivenOption(retirementReason, [
                '自己都合',
                '会社都合',
                'その他',
              ])}
            </p>
          </div>
        </div>
        <div className='flex'>
          <p className='text-accent pr-2'>Q2</p>
          <div>
            <p id='re-employment'>
              再就職：
              {useDisplayGivenOption(reEmployment, [
                '年内の予定あり',
                '年内の予定なし',
                '年内の予定は未定',
              ])}
            </p>
          </div>
        </div>
        <div className='flex'>
          <p className='text-accent pr-2'>Q3</p>
          <div>
            <p id='age'>
              年齢：
              {useDisplayGivenOption(age, [
                '30歳未満',
                '30歳以上35歳未満',
                '35歳以上45歳未満',
                '45歳以上60歳未満',
                '60歳以上65歳未満',
              ])}
            </p>
            <p id='postcode'>郵便番号：{displayedPostcode}</p>
          </div>
        </div>
        <div className='flex'>
          <p className='text-accent pr-2'>Q4</p>
          <div>
            <p id='family'>
              家族：
              {useDisplayGivenOption(family, [
                '被保険者の家族がいる',
                '被保険者の家族はいない',
              ])}
            </p>
          </div>
        </div>
        <div className='flex'>
          <p className='text-accent pr-2'>Q5</p>
          <div>
            <p>雇用保険</p>
            <p id='emp-ins-last-two-years'>
              過去2年：
              {useDisplayGivenOption(empInsLastTwoYears, [
                '6ヶ月未満の加入',
                '6ヶ月以上1年未満の加入',
                '1年以上の加入',
              ])}
            </p>
            <p id='emp-ins-total'>
              通算：
              {useDisplayGivenOption(empInsTotal, [
                '1年未満の加入',
                '1年以上5年未満の加入',
                '5年以上10年未満の加入',
                '10年以上20年未満の加入',
                '20年以上の加入',
              ])}
            </p>
          </div>
        </div>
        <div className='flex'>
          <p className='text-accent pr-2'>Q6</p>
          <div>
            <p id='health-ins-last-two-month'>
              健康保険：
              {useDisplayGivenOption(healthInsLastTwoMonth, [
                '退職予定日時点で2ヶ月未満の加入',
                '退職予定日時点で2ヶ月以上の加入',
              ])}
            </p>
          </div>
        </div>
        <div className='flex'>
          <p className='text-accent pr-2'>Q7</p>
          <div>
            <p id='health-ins-after-retirement'>
              退職後に加入を検討したい健康保険：
              {useDisplayGivenOption(healthInsAfterRetirement, [
                '国民健康保険',
                '任意継続被保険者になる',
                '家族の健康保険',
              ])}
            </p>
          </div>
        </div>
        <div className='flex'>
          <p className='text-accent pr-2'>Q8</p>
          <div>
            <p id='tax-after-retirement'>
              退職後の住民税の支払い方法：
              {useDisplayGivenOption(tax, [
                '一括徴収',
                '普通徴収',
                '今年度の住民税の支払いはなし',
              ])}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
