import { useForm, SubmitHandler } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { healthInsLastTwoMonthState } from '../../../storage/session-stroage';
import { formInput } from '../../../types/type';
import AnswerSelectButton from 'src/components/atoms/answer-button';
import Error from 'src/components/atoms/error';
import QuestionTitle from 'src/components/atoms/question-title';
import PagerButtons from 'src/components/molecules/pager-buttons';

export default function Q6() {
  const [storedHealthInsLastTwoMonth, setStoredHealthInsLastTwoMonth] =
    useRecoilState(healthInsLastTwoMonthState);
  const {
    handleSubmit,
    formState: { errors, isValid },
    register,
  } = useForm<formInput>({
    defaultValues: {
      health_ins_last_two_month: String(storedHealthInsLastTwoMonth),
    },
    mode: 'onChange',
    criteriaMode: 'all',
  });
  const submitContent: SubmitHandler<formInput> = (data) => {
    setStoredHealthInsLastTwoMonth(Number(data.health_ins_last_two_month));
  };

  return (
    <div className='flex flex-col justify-center'>
      <form className='pb-4'>
        <QuestionTitle>退職予定日における被保険者期間</QuestionTitle>
        <label className='pb-1' htmlFor='health_ins_last_two_month'>
          継続して…
        </label>
        <div className='flex space-x-2 justify-center pb-2'>
          {['2ヵ月以上', '2ヵ月以下'].map((value, index) => {
            index += 1;
            return (
              <div key={index}>
                <label htmlFor={`${index}`}>
                  <input
                    {...register('health_ins_last_two_month', {
                      required: '選択してください',
                    })}
                    type='radio'
                    value={`${index}`}
                    className='form-check-input hidden peer'
                    id={`${index}`}
                  />
                  <AnswerSelectButton
                    id={`health-ins-last-two-month-form${index}`}
                  >
                    {value}
                  </AnswerSelectButton>
                </label>
              </div>
            );
          })}
        </div>
        {errors.health_ins_last_two_month && (
          <Error>{errors.health_ins_last_two_month.message}</Error>
        )}
      </form>

      <PagerButtons
        handleSubmit={handleSubmit(submitContent)}
        isValid={isValid}
      ></PagerButtons>
    </div>
  );
}
