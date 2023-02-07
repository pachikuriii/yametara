import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { healthInsLastTwoMonthState } from '../../../session-stroage';
import { formInput } from '../../../types/type';
import AnswerSelectButton from 'src/components/atoms/answer-button';
import PagerButtons from 'src/components/molecules/buttons-pager';
import { useNextPage, usePrevPage } from 'src/hooks/use-get-page';
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

  const nextPage = useNextPage();
  const prevPage = usePrevPage();
  const router = useRouter();

  const goNextPage: SubmitHandler<formInput> = (data) => {
    setStoredHealthInsLastTwoMonth(data.health_ins_last_two_month);
    router.push(nextPage);
  };

  const goPrevPage = () => {
    router.push(prevPage);
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

        <div className='flex justify-center space-x-4'>
          {['2ヵ月以上', '2ヵ月以下'].map((value, index) => {
            return (
              <AnswerSelectButton
                type='button'
                key={index}
                onClick={() =>
                  setValue(
                    'health_ins_last_two_month',
                    value === 'はい' ? 1 : 2,
                  )
                }
              >
                {value}
              </AnswerSelectButton>
            );
          })}
        </div>
        {errors.health_ins_last_two_month && (
          <p>{errors.health_ins_last_two_month.message}</p>
        )}
        <PagerButtons
          handleSubmit={handleSubmit(goNextPage)}
          goBackPage={goPrevPage}
        ></PagerButtons>
      </form>
    </div>
  );
}
