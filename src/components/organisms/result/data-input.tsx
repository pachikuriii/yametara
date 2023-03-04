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
  return (
    <div className='text-black'>
      <p>あなたの入力内容</p>
      <p>Q1</p>
      <p>退職予定日:{useDisplayRetirementDate()}</p>
      <p>退職事由:{useDisplayRetirementReason()}</p>

      <p>Q2</p>
      <p>再就職の予定:{useDisplayReEmployment()}</p>

      <p>Q3</p>
      <p>年齢:{useDisplayAge()}</p>
      <p>郵便番号:{useDisplayPostcode()}</p>

      <p>Q4</p>
      <p>家族：{useDisplayFamily()}</p>

      <p>Q5</p>
      <p>雇用保険</p>
      <p>過去2年:{useDisplayEmpInsLastTwoYears()}</p>
      <p>これまで:{useDisplayEmpInsTotal()}</p>

      <p>Q6</p>
      <p>健康保険:{useDisplayHealthInsLastTwoMonth()}</p>

      <p>Q7</p>
      <p>
        退職後に加入を検討したい健康保険:{useDisplayHealthAfterRetirement()}
      </p>

      <p>Q8</p>
      <p>退職後の住民税の支払い方:{useDisplayTax()}</p>
    </div>
  );
}
