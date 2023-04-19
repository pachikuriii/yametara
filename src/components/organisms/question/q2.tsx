import { useForm, SubmitHandler } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { reEmploymentState } from '../../../storage/session-stroage';
import { formInput } from '../../../types/type';
import QuestionTitle from 'src/components/atoms/question-title';
import AnswerSelectButtons from 'src/components/molecules/answer-select-buttons';
import PagerButtons from 'src/components/molecules/pager-buttons';
export default function Q2() {
  const [storedReEmployment, setStoredReEmployment] =
    useRecoilState(reEmploymentState);
  const {
    handleSubmit,
    formState: { errors, isValid },
    register,
  } = useForm<formInput>({
    defaultValues: {
      re_employment: String(storedReEmployment),
    },
    mode: 'onChange',
    criteriaMode: 'all',
  });
  const submitContent: SubmitHandler<formInput> = (data) => {
    setStoredReEmployment(Number(data.re_employment));
  };

  return (
    <div>
      <form className='pb-4'>
        <QuestionTitle>
          <label htmlFor='re_employment'>年内の再就職の予定</label>
        </QuestionTitle>
        <AnswerSelectButtons
          choices={['あり', 'なし', '未定']}
          name='re_employment'
          register={register}
          errors={errors.re_employment}
          idPrefix={'re-employment-form'}
        ></AnswerSelectButtons>
      </form>

      <PagerButtons
        handleSubmit={handleSubmit(submitContent)}
        isValid={isValid}
      ></PagerButtons>
    </div>
  );
}
