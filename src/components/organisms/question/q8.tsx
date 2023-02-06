import dayjs from 'dayjs';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRecoilValue, useRecoilState } from 'recoil';
import { taxState, retirementDateState } from '../../../session-stroage';
import { formInput } from '../../../types/type';
import Alert from '../../atoms/alert';
import Button from '../../atoms/button';

export default function Q8() {
  const storedRetirementDate = useRecoilValue(retirementDateState);
  const [storedTax, setStoredTax] = useRecoilState(taxState);
  const [retiredOnBetweenJanAndJun, setretiredOnBetweenJanAndJun] =
    useState(false);
  const [taxPaymentTypes, settaxPaymentTypes] = useState(['']);
  const [retirementMonth, setRetirementMonth] = useState(0);

  useEffect(() => {
    setRetirementMonth(dayjs(storedRetirementDate).month() + 1);
    const JanToJun = [...Array(5)].map((_, i) => i + 1);
    for (let month of JanToJun) {
      if (month === retirementMonth) {
        setretiredOnBetweenJanAndJun(true);
      }
    }
    const newtaxPaymentTypes = [
      '退職時に給与/退職金から会社に翌年5月分まで天引きしてもらう（一括徴収）',
    ];
    if (!retiredOnBetweenJanAndJun) {
      newtaxPaymentTypes.push(
        '送付される納税通知書に基づいて自分で分割で納める（普通徴収）',
      );
    }
    newtaxPaymentTypes.push(
      '昨年度の収入がないため、今年度は住民税の支払いをしていない',
    );

    settaxPaymentTypes(newtaxPaymentTypes);
  }, [storedRetirementDate, retirementMonth, retiredOnBetweenJanAndJun]);

  const {
    handleSubmit,
    setValue,
    formState: { errors },
    register,
  } = useForm<formInput>({
    defaultValues: {
      tax: storedTax,
    },
  });

  const submitForm: SubmitHandler<formInput> = (data) => {
    setStoredTax(data.tax);
    router.push('/result');
  };

  const router = useRouter();

  return (
    <div>
      <p>{retiredOnBetweenJanAndJun}</p>
      <div className={retiredOnBetweenJanAndJun === true ? '' : ' hidden'}>
        <Alert>
          1月から5月に退職する場合は基本的に会社を退職する際に、最後の給与または退職金から一括で残りの住民税を天引きしてもらうこととなります。
        </Alert>
      </div>

      <form>
        <label htmlFor='tax'>今年度の残りの住民税の支払い方法</label>
        <input
          {...register('tax', { required: '選択してください' })}
          type='hidden'
        />

        <div>
          {taxPaymentTypes.map((value, index) => {
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
