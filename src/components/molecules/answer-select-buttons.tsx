import { FieldError } from 'react-hook-form';
import AnswerSelectButton from '../atoms/answer-button';
import Error from '../atoms/error';
interface Props {
  choices: string[];
  register: any;
  name: string;
  errors: FieldError | undefined;
  idPrefix: string;
  condition?: any;
}
const AnswerSelectButtons = ({
  choices,
  register,
  name,
  errors,
  idPrefix,
  condition,
}: Props) => {
  return (
    <div>
      <div className='flex space-x-2 justify-center pb-2'>
        {choices.map((value, index) => {
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
                  className='form-check-input hidden peer'
                  id={`${index}`}
                />
                <AnswerSelectButton id={`${idPrefix}${index}`}>
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
