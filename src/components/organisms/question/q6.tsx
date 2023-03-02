import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { healthInsLastTwoMonthState } from '../../../session-stroage';
import { formInput } from '../../../types/type';
import AnswerSelectButton from 'src/components/atoms/answer-button';
import PagerButtons from 'src/components/molecules/buttons-pager';
import { useNextPage } from 'src/hooks/use-get-page';

export default function Q6() {
  const [storedHealthInsLastTwoMonth, setStoredHealthInsLastTwoMonth] =
    useRecoilState(healthInsLastTwoMonthState);

  const {
    handleSubmit,
    formState: { errors, isValid },
    register,
  } = useForm<formInput>({
    defaultValues: {
      health_ins_last_two_month: storedHealthInsLastTwoMonth,
    },
    mode: 'onChange',
    criteriaMode: 'all',
  });

  const router = useRouter();
  const nextPage = useNextPage();
  const submitContent: SubmitHandler<formInput> = (data) => {
    setStoredHealthInsLastTwoMonth(data.health_ins_last_two_month);
    router.push(nextPage);
  };

  return (
    <div>
      <form>
        <div>
          <label htmlFor='health_ins_last_two_month'>
            退職予定日までの健康保険の被保険者期間 継続して…
          </label>
          <div className='flex space-x-4 justify-center'>
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
                    <AnswerSelectButton>{value}</AnswerSelectButton>
                  </label>
                </div>
              );
            })}
          </div>
        </div>
        {errors.health_ins_last_two_month && (
          <p>{errors.health_ins_last_two_month.message}</p>
        )}
        <PagerButtons
          handleSubmit={handleSubmit(submitContent)}
          isValid={isValid}
        ></PagerButtons>
      </form>
    </div>
  );
}
