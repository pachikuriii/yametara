import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  healthInsAfterRetirementState,
  familyState,
  healthInsLastTwoMonthState,
} from '../../../session-stroage';
import { formInput } from '../../../types/type';
import AnswerSelectButton from 'src/components/atoms/answer-button';
import PagerButtons from 'src/components/molecules/buttons-pager';
import { useNextPage } from 'src/hooks/use-get-page';

const Q7 = () => {
  const [tab, setTab] = useState(1);
  const [storedHealthInsAfterRetirement, setStoredHealthInsAfterRetirement] =
    useRecoilState(healthInsAfterRetirementState);
  const storedFamilyState = useRecoilValue(familyState);
  const storedHealthInsLastTwoMonthState = useRecoilValue(
    healthInsLastTwoMonthState,
  );
  const [healthInsAfterRetirement, setHealthInsAfterRetirement] = useState(0);
  const [family, setFamily] = useState(0);

  const displaySwitcher = (index: number) => {
    if (
      (index === 2 && healthInsAfterRetirement === 2) ||
      (index === 3 && family === 2)
    ) {
      return 'hidden';
    } else {
      return '';
    }
  };

  const {
    handleSubmit,
    formState: { errors, isValid },
    register,
  } = useForm<formInput>({
    defaultValues: {
      health_ins_after_retirement: String(storedHealthInsAfterRetirement),
    },
    mode: 'onChange',
    criteriaMode: 'all',
  });

  const router = useRouter();
  const nextPage = useNextPage();
  const submitContent: SubmitHandler<formInput> = (data) => {
    setStoredHealthInsAfterRetirement(Number(data.health_ins_after_retirement));
    router.push(nextPage);
  };

  useEffect(() => {
    setHealthInsAfterRetirement(storedHealthInsLastTwoMonthState);
    setFamily(storedFamilyState);
  }, [storedHealthInsLastTwoMonthState, storedFamilyState]);

  return (
    <>
      <div className='flex flex-wrap'>
        <h2 className='card-title'>加入を検討したい退職後の健康保険</h2>
        <p>国民皆保険制度により退職後も健康保険への加入が必須です。</p>
        <div className=' bg-white'>
          <form>
            <div className='flex space-x-4 justify-center'>
              {['国民健康保険', '任意継続保険', '家族の健康保険'].map(
                (value, index) => {
                  index += 1;
                  return (
                    <div key={index}>
                      <label htmlFor={`${index}`}>
                        <input
                          {...register('health_ins_after_retirement', {
                            required: '選択してください',
                          })}
                          type='radio'
                          value={index}
                          className='form-check-input hidden peer'
                          id={`${index}`}
                        />
                        <AnswerSelectButton
                          id={`health-ins-after-retirement-form${index}`}
                          onClick={() => setTab(index)}
                          display={displaySwitcher(index)}
                        >
                          {value}
                        </AnswerSelectButton>
                      </label>
                    </div>
                  );
                },
              )}
            </div>

            {errors.health_ins_after_retirement && (
              <p>{errors.health_ins_after_retirement.message}</p>
            )}
          </form>

          <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded'>
            <div className='px-4 py-5 flex-auto'>
              <div className='tab-content tab-space'>
                <div className={tab === 1 ? 'block' : 'hidden'}>
                  <div>
                    <p className='border-b-4 border-dotted w-fit'>
                      国民健康保険への加入
                    </p>
                  </div>
                  <p>
                    国民健康保険へ加入する場合、●月●日から●月●日の間に住所地の市区役所/町村役場の窓口で手続きが必要です。
                  </p>
                </div>
                <div className={tab === 2 ? 'block' : 'hidden'}>
                  <div>
                    <p className='border-b-4 border-dotted w-fit'>年金</p>
                  </div>
                  <p>
                    国民健康保険へ加入する場合、●月●日から●月●日の間に住所地の市区役所/町村役場の窓口で手続きが必要です。
                  </p>
                </div>
                <div className={tab === 3 ? 'block' : 'hidden'}>
                  <p className='border-b-4 border-dotted w-fit'>雇用保険</p>
                </div>
                <PagerButtons
                  handleSubmit={handleSubmit(submitContent)}
                  isValid={isValid}
                ></PagerButtons>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Q7;
