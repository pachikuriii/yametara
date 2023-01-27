import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { reEmploymentState } from '../../../local-stroage';
import Button from '../../atoms/button';

interface formInput {
  re_employment: number;
}

export default function Q2() {
  const {
    handleSubmit,
    setValue,
    formState: { errors },
    register,
  } = useForm<formInput>({});

  const [reEmployment, setReEmployment] = useRecoilState(reEmploymentState);

  const submitForm: SubmitHandler<formInput> = (data) => {
    setReEmployment(data.re_employment);
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
          {['はい', 'いいえ'].map((value, index) => {
            return (
              <button
                type='button'
                key={index}
                onClick={() =>
                  setValue('re_employment', value === 'はい' ? 1 : 2)
                }
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