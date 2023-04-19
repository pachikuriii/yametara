import { HelloWork } from 'jp-hello-work';
import { Controller, Control } from 'react-hook-form';
import { PatternFormat } from 'react-number-format';
import Error from '../atoms/error';
import { formInput } from 'src/types/type';
interface Props {
  props: any;
  control: Control<formInput>;
  errors: any;
}
const PostcodeForm = ({ props, control, errors }: Props) => {
  return (
    <div>
      <Controller
        control={control}
        rules={{
          required: '入力してください',
          pattern: {
            value: /^[0-9]{3}-[0-9]{4}$/,
            message: '有効な郵便番号を入力してください',
          },
          validate: {
            positive: (value) => {
              try {
                if (HelloWork.byZipCode(value.replace(/-/g, ''))) {
                  return true;
                }
              } catch (error) {
                if (error instanceof TypeError) {
                  return '存在する郵便番号を入力してください';
                }
              }
            },
          },
        }}
        name='postcode'
        render={({ field: { onChange, ref, ...rest } }) => (
          <PatternFormat
            id='postcode-form'
            format='###-####'
            placeholder='154-0023'
            onChange={onChange}
            className='text-center border-2  border-primary input input-bordered input-lg w-full'
            {...rest}
            {...props}
          />
        )}
      />
      {errors && <Error>{errors.message}</Error>}
      {errors && errors.types && <Error>{errors.types.invalid_postcode}</Error>}
    </div>
  );
};

export default PostcodeForm;
