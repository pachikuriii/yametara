import { useForm, SubmitHandler } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { familyState } from '../../../session-stroage';
import { formInput } from '../../../types/type';
import AnswerSelectButton from 'src/components/atoms/answer-button';
import PagerButtons from 'src/components/molecules/pager-buttons';

export default function Q4() {
  const [storedFamily, setStoredFamily] = useRecoilState(familyState);
  const {
    handleSubmit,
    formState: { errors, isValid },
    register,
  } = useForm<formInput>({
    defaultValues: {
      family: String(storedFamily),
    },
    mode: 'onChange',
    criteriaMode: 'all',
  });
  const submitContent: SubmitHandler<formInput> = (data) => {
    setStoredFamily(Number(data.family));
  };

  return (
    <div>
      <form>
        <label htmlFor='family'>
          家計を共にしている社会保険の被保険者の家族
        </label>
        <div className='flex space-x-4 justify-center'>
          {['いる', 'いない'].map((value, index) => {
            index += 1;
            return (
              <div key={index}>
                <label htmlFor={`${index}`}>
                  <input
                    {...register('family', {
                      required: '選択してください',
                    })}
                    type='radio'
                    value={index}
                    className='form-check-input hidden peer'
                    id={`${index}`}
                  />
                  <AnswerSelectButton id={`family-form${index}`}>
                    {value}
                  </AnswerSelectButton>
                </label>
              </div>
            );
          })}
        </div>

        {errors.family && <p>{errors.family.message}</p>}
        <PagerButtons
          handleSubmit={handleSubmit(submitContent)}
          isValid={isValid}
        ></PagerButtons>
      </form>
    </div>
  );
}
