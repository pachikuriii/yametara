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
import NoTax from './tabs/tax/no-tax';
import OrdinallyTaxCollection from './tabs/tax/ordinally-tax-collection';
import QuestionTitle from 'src/components/atoms/question-title';
import AnswerSelectButtons from 'src/components/molecules/answer-select-buttons';
import PagerButtons from 'src/components/molecules/pager-buttons';
import TabTemplate from 'src/components/template/tab-template';
export default function Q8() {
  const [tab, setTab] = useState(1);
  const storedRetirementDate = useRecoilValue(retirementDateState);
  const [storedTax, setStoredTax] = useRecoilState(taxState);
  const [validOptions, setValidOptions] = useState([1]);

  useEffect(() => {
    const retirementMonth = dayjs(storedRetirementDate).month() + 1;
    const validOptions = [1];
    if (![...Array(5)].map((_, i) => i + 1).includes(retirementMonth)) {
      validOptions.push(2, 3);
    } else {
      validOptions.push(3);
    }
    setValidOptions(validOptions);
    if (storedTax) {
      setTab(storedTax);
    }
  }, [storedRetirementDate, storedTax]);
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
        <AnswerSelectButtons
          options={['一括徴収', '普通徴収', '今年度は支払いなし']}
          name='tax'
          register={register}
          errors={errors.tax}
          idPrefix={'tax-form'}
          setTab={setTab}
          validOptions={validOptions}
        />
      </form>

      <div className='pb-4'>
        <TabTemplate>
          {tab === 1 && <AtOnceTaxCollection />}
          {tab === 2 && validOptions[1] === 2 && <OrdinallyTaxCollection />}
          {tab === 3 && validOptions[2] === 3 && <NoTax />}
          {tab === 3 && validOptions[1] === 3 && <NoTax />}
        </TabTemplate>
      </div>

      <PagerButtons
        handleSubmit={handleSubmit(submitContent)}
        isValid={isValid}
      />
    </div>
  );
}
