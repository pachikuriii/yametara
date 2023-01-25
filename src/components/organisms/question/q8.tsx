import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import LocalStorage from '../../../local-stroage';
import Button from '../../atoms/button';

interface formInput {
  tax: number;
}

export default function Q8() {
  const {
    handleSubmit,
    setValue,
    formState: { errors },
    register,
  } = useForm<formInput>({});

  const [tax, setTax] = useState(0);

  function reflectDataToLocalStrage() {
    const localStrage = LocalStorage.fetch();
    localStrage.tax = tax;
    LocalStorage.save(localStrage);
  }

  const submitForm: SubmitHandler<formInput> = (data) => {
    setTax(data.tax);
    router.push('/result');
  };

  useEffect(() => {
    reflectDataToLocalStrage();
  });
  const router = useRouter();

  return (
    <div>
      <form>
        <input
          {...register('tax', { required: '選択してください' })}
          type='hidden'
        />

        <div>
          {[
            '退職時に給与/退職金から会社に翌年5月分まで天引きしてもらう（一括徴収）',
            '送付される納税通知書に基づいて自分で分割で納める（普通徴収）',
            '今年度の住民税の支払いはなし',
          ].map((value, index) => {
            index += 1;
            return (
              <button
                type='button'
                key={index}
                onClick={() => setValue('tax', index)}
                className={
                  'btn btn-outline text-accent bg-primary  border-secondary no-animation hover:bg-secondary-focus shadow-md'
                }
              >
                {value}
              </button>
            );
          })}
        </div>
        {errors.tax && <p>{errors.tax.message}</p>}
        <Link href='/questions/7'>
          <Button>戻る</Button>
        </Link>
        <Button onClick={handleSubmit(submitForm)}>次へ</Button>
      </form>
    </div>
  );
}
