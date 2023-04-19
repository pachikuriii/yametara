import { useForm, SubmitHandler } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { familyState } from '../../../storage/session-stroage';
import { formInput } from '../../../types/type';
import QuestionTitle from 'src/components/atoms/question-title';
import AnswerSelectButtons from 'src/components/molecules/answer-select-buttons';
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
      <form className='pb-4'>
        <QuestionTitle>
          <label htmlFor='family'>生活を共にする被保険者である家族</label>
        </QuestionTitle>
        <AnswerSelectButtons
          choices={['いる', 'いない']}
          name='family'
          register={register}
          errors={errors.family}
          idPrefix={'family-form'}
        ></AnswerSelectButtons>
      </form>

      <PagerButtons
        handleSubmit={handleSubmit(submitContent)}
        isValid={isValid}
      ></PagerButtons>
    </div>
  );
}
