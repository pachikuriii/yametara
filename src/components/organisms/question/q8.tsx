import dayjs from 'dayjs';
import { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { IconContext } from 'react-icons';
import { RiMoneyCnyCircleFill } from 'react-icons/ri';
import { useRecoilValue, useRecoilState } from 'recoil';
import { taxState, retirementDateState } from '../../../session-stroage';
import { formInput } from '../../../types/type';
import AnswerSelectButton from 'src/components/atoms/answer-button';
import PagerButtons from 'src/components/molecules/pager-buttons';

export default function Q8() {
  const [tab, setTab] = useState(1);
  const storedRetirementDate = useRecoilValue(retirementDateState);
  const [storedTax, setStoredTax] = useRecoilState(taxState);
  const [retiredOnBetweenJanAndMay, setretiredOnBetweenJanAndMay] =
    useState(false);

  useEffect(() => {
    const retirementMonth = dayjs(storedRetirementDate).month() + 1;
    if ([...Array(5)].map((_, i) => i + 1).includes(retirementMonth)) {
      setretiredOnBetweenJanAndMay(true);
    }
    if (storedTax) {
      setTab(storedTax);
    }
  }, [storedRetirementDate, retiredOnBetweenJanAndMay, storedTax]);

  const {
    handleSubmit,
    formState: { errors, isValid },
    register,
  } = useForm<formInput>({
    defaultValues: {
      tax: String(storedTax),
    },
    mode: 'onChange',
    criteriaMode: 'all',
  });

  const submitContent: SubmitHandler<formInput> = (data) => {
    setStoredTax(Number(data.tax));
  };

  return (
    <div>
      <h2 className='card-title'>今年度の残りの住民税の支払い方法</h2>
      <form>
        <div className='flex space-x-4 justify-center' id='answer-options'>
          {['一括徴収', '普通徴収', '今年度の住民税の支払いはない'].map(
            (value, index) => {
              index += 1;
              return (
                <div key={index}>
                  <label htmlFor={`${index}`}>
                    <input
                      {...register('tax', {
                        required: '選択してください',
                      })}
                      type='radio'
                      value={index}
                      className='form-check-input hidden peer'
                      id={`${index}`}
                    />
                    {!(index === 2 && retiredOnBetweenJanAndMay) && (
                      <AnswerSelectButton
                        id={`tax-form${index}`}
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
        {errors.tax && <p>{errors.tax.message}</p>}

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
                      <RiMoneyCnyCircleFill /> 一括徴収
                    </h3>
                  </IconContext.Provider>
                  <p className='text-xs pt-2'>未納分を一括で支払う方式</p>
                  <div className='flex justify-center'>
                    <ul className='text-xs text-left py-2 list-disc'>
                      <li>
                        会社が退職時の給与/退職金から翌年5月分まで住民税を天引きする
                      </li>
                      {retiredOnBetweenJanAndMay && (
                        <li>
                          1月から5月に退職する場合は退職時に最後の給与/退職金から未納分の住民税が一括で天引きされることが一般的
                        </li>
                      )}
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
                      普通徴収
                    </h3>
                  </IconContext.Provider>
                  <p className='text-xs pt-2 text-left'>
                    納税通知書で納税者自ら納税する方式
                  </p>
                  <div className='flex justify-center'>
                    <ul className='text-xs text-left py-2 list-disc'>
                      <li>
                        自治体より送付される納税通知書（納付書）によって自分自身で年1回（一括）または年4回（分割）で納税する
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <PagerButtons
          handleSubmit={handleSubmit(submitContent)}
          isValid={isValid}
        ></PagerButtons>
      </form>
    </div>
  );
}
