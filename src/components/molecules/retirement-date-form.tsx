import { Controller, Control, FieldErrorsImpl } from 'react-hook-form';
import { NumberFormatBase } from 'react-number-format';
import dayjs from '../../day-js';
import Error from '../atoms/error';
import { useRetirementDateInputHelper } from 'src/hooks/use-retirement-date-input-helper';
import { formInput } from 'src/types/type';
interface Props {
  props: any;
  storedRetirementDate: string;
  control: Control<formInput>;
  errors: Partial<FieldErrorsImpl<formInput>>;
}
const RetirementDateForm = ({ props, control, errors }: Props) => {
  const formattedValue = useRetirementDateInputHelper(props);
  return (
    <div>
      <Controller
        control={control}
        rules={{
          required: '入力してください',
          pattern: {
            value: /^(20[0-9]{2})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])+$/,
            message: '有効な日付を入力してください',
          },
        }}
        name='retirementDate'
        render={({ field: { onChange, ref, ...rest } }) => (
          <NumberFormatBase
            id='retirement-date-form'
            className='border-2 border-primary input input-bordered input-lg w-full text-center'
            onChange={onChange}
            placeholder={dayjs().format('YYYY-MM-DD')}
            format={formattedValue}
            {...rest}
            {...props}
            inputMode='numeric'
          />
        )}
      />
      {errors.retirementDate && <Error>{errors.retirementDate.message}</Error>}
    </div>
  );
};

export default RetirementDateForm;
