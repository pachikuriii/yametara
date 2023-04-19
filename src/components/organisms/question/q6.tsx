import { useForm, SubmitHandler } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { healthInsLastTwoMonthState } from '../../../storage/session-stroage';
import { formInput } from '../../../types/type';
import QuestionTitle from 'src/components/atoms/question-title';
import AnswerSelectButtons from 'src/components/molecules/answer-select-buttons';
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
        <AnswerSelectButtons
          choices={['2ヵ月以上', '2ヵ月以下']}
          name='health_ins_last_two_month'
          register={register}
          errors={errors.health_ins_last_two_month}
          idPrefix={'health-ins-last-two-month-form'}
        ></AnswerSelectButtons>
      </form>

      <PagerButtons
        handleSubmit={handleSubmit(submitContent)}
        isValid={isValid}
      ></PagerButtons>
    </div>
  );
}
