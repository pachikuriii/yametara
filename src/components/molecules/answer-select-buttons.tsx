import { Dispatch, SetStateAction } from 'react';
import { FieldError } from 'react-hook-form';
import AnswerSelectButton from '../atoms/answer-button';
import Error from '../atoms/error';
interface Props {
  options: string[];
  register: any;
  name: string;
  errors: FieldError | undefined;
  idPrefix: string;
  setTab?: Dispatch<SetStateAction<number>>;
}
const AnswerSelectButtons = ({
  options,
  register,
  name,
  errors,
  idPrefix,
  setTab,
}: Props) => {
  return (
    <div>
      <div
        className='flex space-y-2 flex-col justify-center pb-2'
        id='answer-options'
      >
        {options.map((value, index) => {
          index += 1;
          return (
            <div key={index}>
              <label htmlFor={`${index}`}>
                <input
                  {...register(name, {
                    required: '選択してください',
                  })}
                  type='radio'
                  value={index}
                  className='form-check-input peer radio mt-3 ml-6 absolute z-10 '
                  id={`${index}`}
                />
                <AnswerSelectButton
                  id={`${idPrefix}${index}`}
                  onClick={() => setTab?.(index)}
                >
                  {value}
                </AnswerSelectButton>
              </label>
            </div>
          );
        })}
      </div>
      {errors && <Error>{errors.message}</Error>}
    </div>
  );
};

export default AnswerSelectButtons;
