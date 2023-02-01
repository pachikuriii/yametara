import { useEffect, useState } from 'react';
import {
  useFormattedFullRetirementDate,
  useDisplayRetirementReason,
  useDisplayReEmployment,
} from '../../../hooks/useLocalStorageData';

export default function DataInput() {
  const [formattedRetirementDate] = useFormattedFullRetirementDate();
  const [displayedRetirementReason] = useDisplayRetirementReason();
  const [displayreEmployment] = useDisplayReEmployment();

  // const [storedAgeState] = useRecoilState(ageState);
  // const [storedPostcodeState] = useRecoilState(postcodeState);
  // const [storedFamilyState] = useRecoilState(familyState);
  // const [storedEmpInsTotalState] = useRecoilState(empInsTotalState);
  // const [storedHealthInsLastTwoMonthState] = useRecoilState(
  //   healthInsLastTwoMonthState,
  // );

  return (
    <div className='text-black'>
      <p>あなたの入力内容</p>
      <p>Q1</p>
      <p>退職予定日:{formattedRetirementDate}</p>
      <p>退職事由:{displayedRetirementReason}</p>

      <p>Q2</p>
      <p>再就職の予定:{displayreEmployment}</p>

      <p>Q3</p>
      <p>年齢:</p>
      <p>郵便番号:</p>

      <p>Q4</p>
      <p>家族：</p>

      <p>Q5</p>
      <p>雇用保険</p>
      <p>過去2年:</p>
      <p>これまで:</p>

      <p>Q6</p>
      <p>健康保険:</p>

      <p>Q7</p>
      <p>退職後に加入を検討したい健康保険:</p>

      <p>Q8</p>
      <p>退職後の住民税の支払い方</p>
    </div>
  );
}
