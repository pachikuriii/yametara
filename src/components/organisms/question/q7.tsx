import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { healthInsAfterRetirementState } from '../../../local-stroage';
import Button from '../../atoms/button';

interface formInput {
  health_ins_after_retirement: number;
}

const Q7 = () => {
  const [tab, setTab] = useState(1);
  const [healthInsAfterRetirement, setHealthInsAfterRetirement] =
    useRecoilState(healthInsAfterRetirementState);
  const {
    handleSubmit,
    setValue,
    formState: { errors },
    register,
  } = useForm<formInput>({});

  const submitForm: SubmitHandler<formInput> = (data) => {
    setHealthInsAfterRetirement(data.health_ins_after_retirement);
    router.push('/questions/8');
  };

  const router = useRouter();
  return (
    <>
      <div className='flex flex-wrap'>
        <div className='tabs tabs-boxed bg-primary'>
          <div>
            {[
              '国民健康保険',
              '任意継続健康保険',
              '家族の健康保険（被扶養者）',
            ].map((value, index) => {
              index += 1;
              return (
                <a
                  key={index}
                  className={
                    'tab ' +
                    (tab === index ? 'bg-accent rounded-full text-primary' : '')
                  }
                  onClick={(event) => {
                    event.preventDefault();
                    setTab(index);
                  }}
                >
                  {value}
                </a>
              );
            })}
          </div>

          <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded'>
            <div className='px-4 py-5 flex-auto'>
              <div className='tab-content tab-space'>
                <form>
                  <input
                    {...register('health_ins_after_retirement', {
                      required: '選択してください',
                    })}
                    type='hidden'
                  />

                  <div className={tab === 1 ? 'block' : 'hidden'}>
                    <div>
                      <p className='border-b-4 border-dotted w-fit'>
                        国民健康保険への加入
                      </p>
                    </div>
                    <p>
                      国民健康保険へ加入する場合、●月●日から●月●日の間に住所地の市区役所/町村役場の窓口で手続きが必要です。
                    </p>
                    <button
                      type='button'
                      onClick={() => setValue('health_ins_after_retirement', 1)}
                      className={
                        'btn btn-outline text-accent bg-primary  border-secondary no-animation hover:bg-secondary-focus shadow-md'
                      }
                    >
                      この保険への加入を検討する
                    </button>
                  </div>
                  <div className={tab === 2 ? 'block' : 'hidden'}>
                    <p>年金</p>
                    <button
                      type='button'
                      onClick={() => setValue('health_ins_after_retirement', 2)}
                      className={
                        'btn btn-outline text-accent bg-primary  border-secondary no-animation hover:bg-secondary-focus shadow-md'
                      }
                    >
                      この保険への加入を検討する
                    </button>
                  </div>
                  <div className={tab === 3 ? 'block' : 'hidden'}>
                    <p>雇用保険</p>
                    <button
                      type='button'
                      onClick={() => setValue('health_ins_after_retirement', 3)}
                      className={
                        'btn btn-outline text-accent bg-primary  border-secondary no-animation hover:bg-secondary-focus shadow-md'
                      }
                    >
                      この保険への加入を検討する
                    </button>
                  </div>

                  {errors.health_ins_after_retirement && (
                    <p>{errors.health_ins_after_retirement.message}</p>
                  )}
                  <Link href='/questions/6'>
                    <Button>戻る</Button>
                  </Link>
                  <Button onClick={handleSubmit(submitForm)}>次へ</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Q7;
