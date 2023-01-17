import { useState } from 'react';

interface Props {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RetirementDateForm = (props: Props) => {
  return (
    <input
      type='number'
      value={props.value}
      onChange={(event) => props.onChange(event)}
      className='input w-full max-w-xs border-accent'
      placeholder='予定日を入力してください'
    />
  );
};

export default RetirementDateForm;
