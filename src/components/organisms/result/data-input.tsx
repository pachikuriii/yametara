import { HelloWork } from 'jp-hello-work';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import {
  postcodeState,
  ageState,
  empInsTotalState,
  retirementReasonState,
} from '../../../local-stroage';
import CheckedTodoPlate from '../../molecules/checked-todo-plate';

type helloWorkName = string[];

export default function DataInput() {
  useEffect(() => {}, []);

  return (
    <div className='text-black'>
      <p>あなたの入力内容</p>
      <p>Q1</p>
      <p>退職予定日:</p>
      <p>退職事由:</p>

      <p>Q2</p>
      <p>再就職の予定:</p>

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
