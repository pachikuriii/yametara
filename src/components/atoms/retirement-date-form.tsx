import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { usePatternFormat, NumberFormatBase } from 'react-number-format';
import LocalStorage from '../../local-stroage';
import Button from './button';

interface formInput {
  retirementDate: string;
  retirementReason: number;
}

export default function RetirementDateForm(props: any) {
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
    register,
  } = useForm<formInput>({});

  const [retirementDate, setRetirementDate] = useState('');
  const [retirementReason, setRetirementReason] = useState(0);

  function reflectDataToLocalStrage() {
    const localStrage = LocalStorage.fetch();
    localStrage.retirement_date = retirementDate;
    localStrage.retirement_reason = retirementReason;
    LocalStorage.save(localStrage);
  }

  const submitForm: SubmitHandler<formInput> = (data) => {
    setRetirementDate(data.retirementDate);
    setRetirementReason(data.retirementReason);
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
    const year = value.substring(0, 4);
    let month = value.substring(4, 6);
    let day = value.substring(6, 8);

    if (month.length === 1 && Number(month[0]) > 1) {
      month = `0${month[0]}`;
    } else if (month.length === 2) {
      if (Number(month) === 0) {
        month = `01`;
      } else if (Number(month) > 12) {
        month = '12';
      }
    }

    if (day.length === 1 && Number(day[0]) > 3) {
      day = `0${day[0]}`;
    } else if (day.length === 2) {
      if (Number(day) === 0) {
        day = `01`;
      } else if (Number(day) > 31) {
        day = '31';
      }
    }

    return format(`${year}${month}${day}`);
  };

  return (
    <div>
      <form>
        <label htmlFor='retirementDate'>退職予定日</label>
        <Controller
          control={control}
          rules={{
            required: '退職予定日を入力してください',
            pattern: {
              value:
                /^(20[0-9]{2})\/(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])+$/,
              message: '有効な日付を入力してください',
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

        <label htmlFor='retirementReason'>退職事由</label>

        <input
          {...register('retirementReason', { required: '選択してください' })}
          type='hidden'
        />

        <div>
          {['自己都合', '会社都合', 'その他'].map((value, index) => {
            return (
              <button
                type='button'
                key={index}
                onClick={() => setValue('retirementReason', index)}
                className={
                  'btn btn-outline text-accent bg-primary  border-secondary no-animation hover:bg-secondary-focus shadow-md'
                }
              >
                {value}
              </button>
            );
          })}
        </div>
        {errors.retirementReason && <p>{errors.retirementReason.message}</p>}

        <Button onClick={handleSubmit(submitForm)}>次へ</Button>
      </form>
    </div>
  );
}
