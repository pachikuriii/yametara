import { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRecoilValue, useRecoilState } from 'recoil';
import dayjs from '../../../day-js';
import {
  taxState,
  retirementDateState,
} from '../../../storage/session-stroage';
import { formInput } from '../../../types/type';
import AtOnceTaxCollection from './tabs/tax/at-once-tax-collection';
import OrdinallyTaxCollection from './tabs/tax/ordinally-tax-collection';
import AnswerSelectButton from 'src/components/atoms/answer-button';
import Error from 'src/components/atoms/error';
import QuestionTitle from 'src/components/atoms/question-title';
import PagerButtons from 'src/components/molecules/pager-buttons';
import TabTemplate from 'src/components/template/tab-template';
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
      <form className='pb-6'>
        <QuestionTitle>今年度の残りの住民税の支払い方法</QuestionTitle>
        <div className='flex space-x-2 justify-center pb-2' id='answer-options'>
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
        {errors.tax && <Error>{errors.tax.message}</Error>}
      </form>

      <div className='pb-4'>
        <TabTemplate>
          {tab === 1 && <AtOnceTaxCollection />}
          {tab === 2 && <OrdinallyTaxCollection />}
        </TabTemplate>
      </div>

      <PagerButtons
        handleSubmit={handleSubmit(submitContent)}
        isValid={isValid}
      ></PagerButtons>
    </div>
  );
}
