import { FieldError } from 'react-hook-form';
import Error from '../atoms/error';
interface Props {
  options: string[];
  register: any;
  name: string;
  errors: FieldError | undefined;
}
const AnswerSelectBox = ({ options, register, name, errors }: Props) => {
  return (
    <div>
      <div className='relative'>
        <select
          className='block appearance-none w-full text-center border-2 border-primary input input-bordered input-lg focus:outline-none focus:border-gray-500'
          {...register(name, {
            required: '選択してください',
          })}
        >
          <option value='0' disabled>
            選択してください
          </option>
          {options.map((value, index) => {
            index += 1;
            return (
              <option key={index} value={index}>
                {value}
              </option>
            );
          })}
        </select>
        <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2'>
          <svg
            className='fill-current h-4 w-4'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
          >
            <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
          </svg>
        </div>
      </div>
      {errors && <Error>{errors.message}</Error>}
    </div>
  );
};

export default AnswerSelectBox;
