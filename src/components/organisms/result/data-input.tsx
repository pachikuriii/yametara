import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import dayjs from '../../../day-js';
import { useDisplayGivenOption } from '../../../hooks/use-display-given-option';
import * as storage from '../../../session-stroage';

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
    <div className='text-black'>
      <p>あなたの入力内容</p>
      <p>Q1</p>
      <p>退職予定日:{displayedRetirementDate}</p>
      <p>
        退職事由:
        {useDisplayGivenOption(retirementReason, [
          '自己都合',
          '会社都合',
          'その他',
        ])}
      </p>
      <p>Q2</p>
      <p>
        再就職の予定:
        {useDisplayGivenOption(reEmployment, [
          '年内の再就職の予定あり',
          '年内の再就職の予定なし',
          '年内の再就職の予定は未定',
        ])}
      </p>

      <p>Q3</p>
      <p>
        年齢:
        {useDisplayGivenOption(age, [
          '30歳未満',
          '30歳以上35歳未満',
          '35歳以上45歳未満',
          '45歳以上60歳未満',
          '60歳以上65歳未満',
        ])}
      </p>
      <p>郵便番号:{displayedPostcode}</p>
      <p>Q4</p>
      <p>
        家族：
        {useDisplayGivenOption(family, [
          '社会保険の被保険者の家族がいる',
          '社会保険の被保険者の家族はいない',
        ])}
      </p>
      <p>Q5</p>
      <p>雇用保険</p>
      <p>
        過去2年:
        {useDisplayGivenOption(empInsLastTwoYears, [
          '6ヶ月未満の加入実績あり',
          '6ヶ月以上1年未満の加入実績あり',
          '1年以上の加入実績あり',
        ])}
      </p>
      <p>
        これまで:
        {useDisplayGivenOption(empInsTotal, [
          '1年未満の加入実績あり',
          '1年以上5年未満の加入実績あり',
          '5年以上10年未満の加入実績あり',
          '10年以上20年未満の加入実績あり',
          '20年以上の加入実績あり',
        ])}
      </p>
      <p>Q6</p>
      <p>
        健康保険:
        {useDisplayGivenOption(healthInsLastTwoMonth, [
          '2ヶ月未満の加入実績あり',
          '2ヶ月以上の加入実績あり',
        ])}
      </p>
      <p>Q7</p>
      <p>
        退職後に加入を検討したい健康保険:
        {useDisplayGivenOption(healthInsAfterRetirement, [
          '国民健康保険',
          '任意継続被保険者になる',
          '家族の扶養に入る',
        ])}
      </p>
      <p>Q8</p>
      <p>
        退職後の住民税の支払い方:
        {useDisplayGivenOption(tax, [
          '一括徴収',
          '普通徴収',
          '今年度の住民税の支払いはなし',
        ])}
      </p>
    </div>
  );
}
