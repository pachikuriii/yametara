import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { reEmploymentState } from '../../../local-stroage';
import { formInput } from '../../../types/type';
import Button from '../../atoms/button';
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

  const submitForm: SubmitHandler<formInput> = (data) => {
    setStoredReEmployment(data.re_employment);
    router.push('/questions/3');
  };

  const router = useRouter();

  return (
    <div>
      <form>
        <input
          {...register('re_employment', { required: '選択してください' })}
          type='hidden'
        />

        <div>
          {['はい', 'いいえ', '未定'].map((value, index) => {
            index += 1;
            return (
              <button
                type='button'
                key={index}
                onClick={() => setValue('re_employment', index)}
                className={
                  'btn btn-outline text-accent bg-primary  border-secondary no-animation hover:bg-secondary-focus shadow-md'
                }
              >
                {value}
              </button>
            );
          })}
        </div>
        {errors.re_employment && <p>{errors.re_employment.message}</p>}
        <Link href='/questions/1'>
          <Button>戻る</Button>
        </Link>
        <Button onClick={handleSubmit(submitForm)}>次へ</Button>
      </form>
    </div>
  );
}
