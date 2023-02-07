import { useForm, SubmitHandler } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { reEmploymentState } from '../../../session-stroage';
import { formInput } from '../../../types/type';
import AnswerSelectButtons from 'src/components/molecules/answer-buttons';
import PagerButtons from 'src/components/molecules/buttons-pager';

export default function Q2() {
  const [storedReEmployment, setStoredReEmployment] =
    useRecoilState(reEmploymentState);

  const {
    handleSubmit,
    setValue,
    formState: { errors },
    register,
  } = useForm<formInput>({
    defaultValues: {
      re_employment: storedReEmployment,
    },
  });

  const submitContent: SubmitHandler<formInput> = (data) => {
    setStoredReEmployment(data.re_employment);
  };

  return (
    <div>
      <form>
        <label htmlFor='re_employment'>年内の再就職の予定</label>
        <input
          {...register('re_employment', { required: '選択してください' })}
          type='hidden'
        />
        <AnswerSelectButtons
          labels={['あり', 'なし', '未定']}
          setValue={setValue}
          property='re_employment'
        ></AnswerSelectButtons>

        {errors.re_employment && <p>{errors.re_employment.message}</p>}
        <PagerButtons handleSubmit={handleSubmit(submitContent)}></PagerButtons>
      </form>
    </div>
  );
}
