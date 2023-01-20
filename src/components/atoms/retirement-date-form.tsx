import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { usePatternFormat, NumberFormatBase } from 'react-number-format';
import LocalStorage from '../../local-stroage';
import Button from './button';

interface formInput {
  retirementDate: string;
}

export default function RetirementDateForm(props: any) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<formInput>({});

  const [retirementDate, setRetirementDate] = useState('');
  function reflectDataToLocalStrage() {
    const localStrage = LocalStorage.fetch();
    localStrage.retirement_date = retirementDate;
    LocalStorage.save(localStrage);
  }

  const submitForm: SubmitHandler<formInput> = (data) => {
    setRetirementDate(data.retirementDate);
    router.push('/questions/2');
  };

  useEffect(() => {
    reflectDataToLocalStrage();
  });
  const router = useRouter();

  const { format } = usePatternFormat({
    ...props,
    format: '####/##/##',
  });

  const _format = (value: string) => {
    let year = value.substring(0, 4);
    let month = value.substring(4, 6);
    const day = value.substring(6, 8);

    if (month.length === 1 && Number(month[0]) > 1) {
      month = `0${month[0]}`;
    } else if (month.length === 2) {
      if (Number(month) === 0) {
        month = `01`;
      } else if (Number(month) > 12) {
        month = '12';
      }
    }

    return format(`${year}${month}${day}`);
  };

  return (
    <div>
      <label htmlFor='retirementDate'>退職予定日</label>
      <form>
        <Controller
          control={control}
          rules={{
            required: '退職予定日を入力してください',
            pattern: {
              value:
                /^(20[0-9]{2})\/(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])+$/,
              message: '有効な値を入力してください',
            },
          }}
          name='retirementDate'
          render={({ field: { onChange, ref, ...rest } }) => (
            <NumberFormatBase
              onChange={onChange}
              placeholder='2022-02-22'
              format={_format}
              {...rest}
              {...props}
            />
          )}
        />
        {errors.retirementDate && <p>{errors.retirementDate.message}</p>}
        <Button onClick={handleSubmit(submitForm)}>次へ</Button>
      </form>
    </div>
  );
}
