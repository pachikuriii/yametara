import { useState } from 'react';

interface Props {
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormPostCode = (props: Props) => {
  return (
    <input
      type='number'
      value={props.value}
      onChange={(event) => props.onChange(event)}
      className='input w-full max-w-xs border-accent'
      placeholder='郵便番号を入力してください'
    />
  );
};

export default FormPostCode;
