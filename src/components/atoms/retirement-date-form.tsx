import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { usePatternFormat, NumberFormatBase } from 'react-number-format';

interface formInput {
  retirementDate: string;
}

export default function RetirementDateForm(props: any) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<formInput>({});

  const submitForm: SubmitHandler<formInput> = (data) => console.log(data);

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
      <form onSubmit={handleSubmit(submitForm)}>
        <Controller
          control={control}
          rules={{
            required: '退職予定日を入力してください',
            pattern: {
              value: /^[0-9]{4}\/(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])+$/,
              message: '有効な値を入力してください',
            },
          }}
          name='retirementDate'
          render={({ field: { ref, ...rest } }) => (
            <NumberFormatBase
              placeholder='2022-02-22'
              format={_format}
              {...rest}
              {...props}
            />
          )}
        />
        {errors.retirementDate && <p>{errors.retirementDate.message}</p>}

        <input type='submit' />
      </form>
    </div>
  );
}
