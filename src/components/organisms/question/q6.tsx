import { useForm, SubmitHandler } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { healthInsLastTwoMonthState } from '../../../session-stroage';
import { formInput } from '../../../types/type';
import AnswerSelectButtons from 'src/components/molecules/answer-buttons';
import PagerButtons from 'src/components/molecules/buttons-pager';

export default function Q6() {
  const [storedHealthInsLastTwoMonth, setStoredHealthInsLastTwoMonth] =
    useRecoilState(healthInsLastTwoMonthState);

  const {
    handleSubmit,
    setValue,
    formState: { errors },
    register,
  } = useForm<formInput>({
    defaultValues: {
      health_ins_last_two_month: storedHealthInsLastTwoMonth,
    },
  });

  const submitContent: SubmitHandler<formInput> = (data) => {
    setStoredHealthInsLastTwoMonth(data.health_ins_last_two_month);
  };

  return (
    <div>
      <form>
        <label htmlFor='health_ins_last_two_mont'>
          退職予定日までの健康保険の被保険者期間 継続して…
        </label>

        <input
          {...register('health_ins_last_two_month', {
            required: '選択してください',
          })}
          type='hidden'
        />

        <AnswerSelectButtons
          labels={['2ヵ月以上', '2ヵ月以下']}
          setValue={setValue}
          property='health_ins_last_two_month'
        ></AnswerSelectButtons>

        {errors.health_ins_last_two_month && (
          <p>{errors.health_ins_last_two_month.message}</p>
        )}
        <PagerButtons handleSubmit={handleSubmit(submitContent)}></PagerButtons>
      </form>
    </div>
  );
}
