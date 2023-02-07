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
import AnswerSelectButtons from 'src/components/molecules/answer-buttons';
import PagerButtons from 'src/components/molecules/buttons-pager';
import { useNextPage, usePrevPage } from 'src/hooks/use-get-page';

const Q7 = () => {
  const [tab, setTab] = useState(1);
  const [storedHealthInsAfterRetirement, setStoredHealthInsAfterRetirement] =
    useRecoilState(healthInsAfterRetirementState);
  const storedFamilyState = useRecoilValue(familyState);
  const storedHealthInsLastTwoMonthState = useRecoilValue(
    healthInsLastTwoMonthState,
  );
  const [insuranceTypes, setInsuranceTypes] = useState(['']);

  useEffect(() => {
    const newInsuranceTypes = ['国民健康保険'];
    if (storedHealthInsLastTwoMonthState == 1) {
      newInsuranceTypes.push('任意継続保険');
    }
    if (storedFamilyState === 1) {
      newInsuranceTypes.push('家族の健康保険');
    }
    setInsuranceTypes(newInsuranceTypes);
  }, [
    storedFamilyState,
    setStoredHealthInsAfterRetirement,
    storedHealthInsLastTwoMonthState,
  ]);

  const {
    handleSubmit,
    setValue,
    formState: { errors },
    register,
  } = useForm<formInput>({
    defaultValues: {
      health_ins_after_retirement: storedHealthInsAfterRetirement,
    },
  });

  const nextPage = useNextPage();
  const prevPage = usePrevPage();
  const router = useRouter();

  const goNextPage: SubmitHandler<formInput> = (data) => {
    setStoredHealthInsAfterRetirement(data.health_ins_after_retirement);
    router.push(nextPage);
  };

  const goPrevPage = () => {
    router.push(prevPage);
  };

  return (
    <>
      <div className='flex flex-wrap'>
        <h2 className='card-title'>加入を検討したい退職後の健康保険</h2>
        <p>国民皆保険制度により退職後も健康保険への加入が必須です。</p>
        <div className=' bg-white'>
          <AnswerSelectButtons
            labels={insuranceTypes}
            setValue={setValue}
            property='health_ins_after_retirement'
          ></AnswerSelectButtons>

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
                  </div>
                  <div className={tab === 2 ? 'block' : 'hidden'}>
                    <p>年金</p>
                  </div>
                  <div className={tab === 3 ? 'block' : 'hidden'}>
                    <p>雇用保険</p>
                  </div>

                  {errors.health_ins_after_retirement && (
                    <p>{errors.health_ins_after_retirement.message}</p>
                  )}
                  <PagerButtons
                    handleSubmit={handleSubmit(goNextPage)}
                    goBackPage={goPrevPage}
                  ></PagerButtons>
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
