import { useEffect, useState } from 'react';
import {
  useFormattedFullRetirementDate,
  useDisplayRetirementReason,
  useDisplayReEmployment,
  useDisplayAge,
  useFetchPostcode,
  useDisplayFamily,
  useDisplayEmpInsLastTwoYears,
  useDisplayEmpInsTotal,
} from '../../../hooks/useLocalStorageData';

export default function DataInput() {
  const [formattedRetirementDate] = useFormattedFullRetirementDate();
  const [displayRetirementReason] = useDisplayRetirementReason();
  const [displayReEmployment] = useDisplayReEmployment();
  const [displayAge] = useDisplayAge();
  const [postcode] = useFetchPostcode();
  const [family] = useDisplayFamily();
  const [displayEmpInsLastTwoYears] = useDisplayEmpInsLastTwoYears();
  const [displayEmpInsTotal] = useDisplayEmpInsTotal();

  // const [storedEmpInsTotalState] = useRecoilState(empInsTotalState);
  // const [storedHealthInsLastTwoMonthState] = useRecoilState(
  //   healthInsLastTwoMonthState,
  // );

  return (
    <div className='text-black'>
      <p>あなたの入力内容</p>
      <p>Q1</p>
      <p>退職予定日:{formattedRetirementDate}</p>
      <p>退職事由:{displayRetirementReason}</p>

      <p>Q2</p>
      <p>再就職の予定:{displayReEmployment}</p>

      <p>Q3</p>
      <p>年齢:{displayAge}</p>
      <p>郵便番号:{postcode}</p>

      <p>Q4</p>
      <p>家族：{family}</p>

      <p>Q5</p>
      <p>雇用保険</p>
      <p>過去2年:{displayEmpInsLastTwoYears}</p>
      <p>これまで:{displayEmpInsTotal}</p>

      <p>Q6</p>
      <p>健康保険:</p>

      <p>Q7</p>
      <p>退職後に加入を検討したい健康保険:</p>

      <p>Q8</p>
      <p>退職後の住民税の支払い方</p>
    </div>
  );
}
