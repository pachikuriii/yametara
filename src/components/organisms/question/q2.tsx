import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { reEmploymentState } from '../../../session-stroage';
import { formInput } from '../../../types/type';
import AnswerSelectButton from 'src/components/atoms/answer-button';
import PagerButtons from 'src/components/molecules/buttons-pager';
import { useNextPage, usePrevPage } from 'src/hooks/use-get-page';
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

  const nextPage = useNextPage();
  const prevPage = usePrevPage();
  const router = useRouter();

  const goNextPage: SubmitHandler<formInput> = (data) => {
    setStoredReEmployment(data.re_employment);
    router.push(nextPage);
  };

  const goPrevPage = () => {
    router.push(prevPage);
  };

  return (
    <div>
      <form>
        <label htmlFor='re_employment'>年内の再就職の予定</label>
        <input
          {...register('re_employment', { required: '選択してください' })}
          type='hidden'
        />

        <div className='space-x-4'>
          {['あり', 'なし', '未定'].map((value, index) => {
            index += 1;
            return (
              <AnswerSelectButton
                type='button'
                key={index}
                onClick={() => setValue('re_employment', index)}
              >
                {value}
              </AnswerSelectButton>
            );
          })}
        </div>
        {errors.re_employment && <p>{errors.re_employment.message}</p>}
        <PagerButtons
          handleSubmit={handleSubmit(goNextPage)}
          goBackPage={goPrevPage}
        ></PagerButtons>
      </form>
    </div>
  );
}
