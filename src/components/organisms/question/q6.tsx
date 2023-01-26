import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { healthInsLastTwoMonthState } from '../../../local-stroage';
import Button from '../../atoms/button';
interface formInput {
  health_ins_last_two_month: number;
}

export default function Q6() {
  const {
    handleSubmit,
    setValue,
    formState: { errors },
    register,
  } = useForm<formInput>({});

  const [healthInsLastTwoMonth, setHealthInsLastTwoMonth] = useRecoilState(
    healthInsLastTwoMonthState,
  );

  const submitForm: SubmitHandler<formInput> = (data) => {
    setHealthInsLastTwoMonth(data.health_ins_last_two_month);
    router.push('/questions/7');
  };

  const router = useRouter();

  return (
    <div>
      <form>
        <input
          {...register('health_ins_last_two_month', {
            required: '選択してください',
          })}
          type='hidden'
        />

        <div>
          {['はい', 'いいえ'].map((value, index) => {
            return (
              <button
                type='button'
                key={index}
                onClick={() =>
                  setValue(
                    'health_ins_last_two_month',
                    value === 'はい' ? 1 : 2,
                  )
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
        {errors.health_ins_last_two_month && (
          <p>{errors.health_ins_last_two_month.message}</p>
        )}
        <Link href='/questions/5'>
          <Button>戻る</Button>
        </Link>
        <Button onClick={handleSubmit(submitForm)}>次へ</Button>
      </form>
    </div>
  );
}
