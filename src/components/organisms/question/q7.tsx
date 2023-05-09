import { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  healthInsAfterRetirementState,
  familyState,
  healthInsLastTwoMonthState,
} from '../../../storage/session-stroage';
import { formInput } from '../../../types/type';
import DependentInsurance from './tabs/health-insurance-after-retirement/dependent-insurance';
import NationalInsurance from './tabs/health-insurance-after-retirement/national-insurance';
import OptionalInsurance from './tabs/health-insurance-after-retirement/optional-insurance';
import QuestionTitle from 'src/components/atoms/question-title';
import AnswerSelectButtons from 'src/components/molecules/answer-select-buttons';
import PagerButtons from 'src/components/molecules/pager-buttons';
import TabTemplate from 'src/components/template/tab-template';

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
  const [validOptions, setValidOptions] = useState([1]);
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

    const validOptions = [1];
    if (healthInsLastTwoMonth === 1) {
      validOptions.push(2);
      setValidOptions(validOptions);
    }
    if (family === 1) {
      validOptions.push(3);
      setValidOptions(validOptions);
    }
  }, [
    storedHealthInsLastTwoMonthState,
    storedFamilyState,
    storedHealthInsAfterRetirement,
    healthInsLastTwoMonth,
    family,
  ]);

  return (
    <div className='flex flex-col justify-center'>
      <QuestionTitle>退職後に加入したい健康保険</QuestionTitle>
      <form className='pb-4'>
        <AnswerSelectButtons
          options={['国民健康保険', '任意継続', '家族の健康保険']}
          name='health_ins_after_retirement'
          register={register}
          errors={errors.health_ins_after_retirement}
          idPrefix={'health-ins-after-retirement-form'}
          setTab={setTab}
          validOptions={validOptions}
        />
      </form>

      <div className='pb-4'>
        <TabTemplate>
          {tab === 1 && <NationalInsurance />}
          {tab === 2 && validOptions[1] === 2 && <OptionalInsurance />}
          {tab === 2 && validOptions[1] === 3 && <DependentInsurance />}
          {tab === 3 && <DependentInsurance />}
        </TabTemplate>
      </div>

      <PagerButtons
        handleSubmit={handleSubmit(submitContent)}
        isValid={isValid}
      />
    </div>
  );
};

export default Q7;
