import {
  useDisplayRetirementDate,
  useDisplayRetirementReason,
  useDisplayReEmployment,
  useDisplayAge,
  useDisplayPostcode,
  useDisplayFamily,
  useDisplayEmpInsLastTwoYears,
  useDisplayEmpInsTotal,
  useDisplayHealthInsLastTwoMonth,
  useDisplayHealthAfterRetirement,
  useDisplayTax,
} from '../../../hooks/use-input-confirmation';

export default function DataInput() {
  const [retirementDate] = useDisplayRetirementDate();
  const [retirementReason] = useDisplayRetirementReason();
  const [reEmployment] = useDisplayReEmployment();
  const [age] = useDisplayAge();
  const [postcode] = useDisplayPostcode();
  const [family] = useDisplayFamily();
  const [empInsLastTwoYears] = useDisplayEmpInsLastTwoYears();
  const [empInsTotal] = useDisplayEmpInsTotal();
  const [healthInsLastTwoMonth] = useDisplayHealthInsLastTwoMonth();
  const [healthInsAfterRetirement] = useDisplayHealthAfterRetirement();
  const [tax] = useDisplayTax();

  return (
    <div className='text-black'>
      <p>あなたの入力内容</p>
      <p>Q1</p>
      <p>退職予定日:{retirementDate}</p>
      <p>退職事由:{retirementReason}</p>

      <p>Q2</p>
      <p>再就職の予定:{reEmployment}</p>

      <p>Q3</p>
      <p>年齢:{age}</p>
      <p>郵便番号:{postcode}</p>

      <p>Q4</p>
      <p>家族：{family}</p>

      <p>Q5</p>
      <p>雇用保険</p>
      <p>過去2年:{empInsLastTwoYears}</p>
      <p>これまで:{empInsTotal}</p>

      <p>Q6</p>
      <p>健康保険:{healthInsLastTwoMonth}</p>

      <p>Q7</p>
      <p>退職後に加入を検討したい健康保険:{healthInsAfterRetirement}</p>

      <p>Q8</p>
      <p>退職後の住民税の支払い方:{tax}</p>
    </div>
  );
}
