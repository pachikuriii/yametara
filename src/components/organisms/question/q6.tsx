import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { healthInsLastTwoMonthState } from '../../../session-stroage';
import { formInput } from '../../../types/type';
import Button from '../../atoms/button';

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

  const submitForm: SubmitHandler<formInput> = (data) => {
    setStoredHealthInsLastTwoMonth(data.health_ins_last_two_month);
    router.push('/questions/7');
  };

  const router = useRouter();

  return (
    <div>
      <form>
        <label htmlFor='health_ins_last_two_mont'>
          退職予定日までの健康保険の被保険者期間
        </label>

        <input
          {...register('health_ins_last_two_month', {
            required: '選択してください',
          })}
          type='hidden'
        />

        <div>
          {['継続して2ヵ月以上', '継続して2ヵ月以下'].map((value, index) => {
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
