import { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { IconContext } from 'react-icons';
import { RiMoneyCnyCircleFill } from 'react-icons/ri';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  healthInsAfterRetirementState,
  familyState,
  healthInsLastTwoMonthState,
} from '../../../session-stroage';
import { formInput } from '../../../types/type';
import AnswerSelectButton from 'src/components/atoms/answer-button';
import PagerButtons from 'src/components/molecules/pager-buttons';

const Q7 = () => {
  const [tab, setTab] = useState(1);
  const [storedHealthInsAfterRetirement, setStoredHealthInsAfterRetirement] =
    useRecoilState(healthInsAfterRetirementState);
  const storedFamilyState = useRecoilValue(familyState);
  const storedHealthInsLastTwoMonthState = useRecoilValue(
    healthInsLastTwoMonthState,
  );
  const [healthInsLastTwoMonth, setHealthInsLastTwoMonth] = useState(0);
  const [family, setFamily] = useState(0);
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
  const submitContent: SubmitHandler<formInput> = (data) => {
    setStoredHealthInsAfterRetirement(Number(data.health_ins_after_retirement));
  };

  useEffect(() => {
    setHealthInsLastTwoMonth(storedHealthInsLastTwoMonthState);
    setFamily(storedFamilyState);
    if (storedHealthInsAfterRetirement) {
      setTab(storedHealthInsAfterRetirement);
    }
  }, [
    storedHealthInsLastTwoMonthState,
    storedFamilyState,
    storedHealthInsAfterRetirement,
  ]);

  return (
    <div className='flex flex-wrap justify-center bg-white'>
      <h2 className='card-title'>退職後に加入したい健康保険</h2>
      <form>
        <div className='flex space-x-4 justify-center' id='answer-options'>
          {['国民健康保険', '任意継続', '家族の健康保険'].map(
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
                    {(index === 1 ||
                      (index === 2 && healthInsLastTwoMonth === 1) ||
                      (index === 3 && family === 1)) && (
                      <AnswerSelectButton
                        id={`health-ins-after-retirement-form${index}`}
                        onClick={() => setTab(index)}
                      >
                        {value}
                      </AnswerSelectButton>
                    )}
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
            {tab === 1 && (
              <div>
                <IconContext.Provider
                  value={{
                    className: 'global-class-name',
                    style: {
                      display: 'inline',
                    },
                    size: '1.3em',
                  }}
                >
                  <h3 className='text-md font-extrabold'>
                    <RiMoneyCnyCircleFill /> 国民健康保険の特徴
                  </h3>
                </IconContext.Provider>
                <p className='text-xs pt-2'>
                  会社員や公務員以外の全ての住民を対象とした保険
                </p>
                <div className='flex justify-center'>
                  <ul className='text-xs text-left py-2 list-disc'>
                    <li>前年の所得や世帯人員数に応じて保険料が決まる</li>
                    <li>保険料の減免制度が受けられる場合がある</li>
                    <li>居住している市区町村により保険料額が異なる</li>
                  </ul>
                </div>
              </div>
            )}
            {tab === 2 && (
              <div>
                <IconContext.Provider
                  value={{
                    className: 'global-class-name',
                    style: {
                      display: 'inline',
                    },
                    size: '1.3em',
                  }}
                >
                  <h3 className='text-md font-extrabold'>
                    <RiMoneyCnyCircleFill />
                    任意継続制度の特徴
                  </h3>
                </IconContext.Provider>
                <p className='text-xs pt-2 text-left'>
                  一定条件のもとで個人の希望により、それまで加入していた健康保険に個人でさらに最長2年間継続して加入できる制度
                </p>
                <div className='flex justify-center'>
                  <ul className='text-xs text-left py-2 list-disc'>
                    <li>
                      在職時は事業主と折半していた保険料を全額自己負担する形となるため原則、退職時の給与から天引きされる保険料の倍額（
                      ≒
                      退職時の標準報酬月額×継続しようとする健康保険が定める料率）が保険料
                    </li>
                    <li>扶養家族の保険料はかからない</li>
                    <li>継続期間中に保険料は原則変わらない</li>
                  </ul>
                </div>
              </div>
            )}
            {tab === 3 && (
              <div>
                <IconContext.Provider
                  value={{
                    className: 'global-class-name',
                    style: {
                      display: 'inline',
                    },
                    size: '1.3em',
                  }}
                >
                  <h3 className='text-md font-extrabold'>
                    <RiMoneyCnyCircleFill />
                    家族の健康保険の特徴
                  </h3>
                </IconContext.Provider>
                <p className='text-xs pt-2 text-left'>
                  被保険者である家族が加入している健康保険へ被扶養者として加入することで同一の保険制度を利用できる制度
                </p>
                <div className='flex justify-center'>
                  <ul className='text-xs text-left py-2 list-disc'>
                    <li>
                      被扶養者として認定されるためには、家族の範囲と収入について一定の条件を満たしている必要がある
                    </li>
                    <li>被扶養者の保険料の負担はなし</li>
                  </ul>
                </div>
              </div>
            )}

            <PagerButtons
              handleSubmit={handleSubmit(submitContent)}
              isValid={isValid}
            ></PagerButtons>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Q7;
