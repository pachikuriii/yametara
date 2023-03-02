import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { reEmploymentState } from '../../../session-stroage';
import { formInput } from '../../../types/type';
import AnswerSelectButton from 'src/components/atoms/answer-button';
import PagerButtons from 'src/components/molecules/buttons-pager';
import { useNextPage } from 'src/hooks/use-get-page';

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

  const router = useRouter();
  const nextPage = useNextPage();
  const submitContent: SubmitHandler<formInput> = (data) => {
    setStoredReEmployment(Number(data.re_employment));
    router.push(nextPage);
  };

  return (
    <div>
      <form>
        <label htmlFor='re_employment'>年内の再就職の予定</label>
        <div className='flex space-x-4 justify-center'>
          {['あり', 'なし', '未定'].map((value, index) => {
            index += 1;
            return (
              <div key={index}>
                <label htmlFor={`${index}`}>
                  <input
                    {...register('re_employment', {
                      required: '選択してください',
                    })}
                    type='radio'
                    value={index}
                    className='form-check-input hidden peer'
                    id={`${index}`}
                  />
                  <AnswerSelectButton>{value}</AnswerSelectButton>
                </label>
              </div>
            );
          })}
        </div>
        {errors.re_employment && <p>{errors.re_employment.message}</p>}
        <PagerButtons
          handleSubmit={handleSubmit(submitContent)}
          isValid={isValid}
        ></PagerButtons>
      </form>
    </div>
  );
}
