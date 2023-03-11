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
import AnswerSelectButton from 'src/components/atoms/answer-button';
import QuestionTitle from 'src/components/atoms/question-title';
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
    <div className='flex flex-col justify-center'>
      <QuestionTitle>退職後に加入したい健康保険</QuestionTitle>
      <form className='pb-4'>
        <div className='flex space-x-2 justify-center h-28' id='answer-options'>
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
      <div className='pb-4'>
        <TabTemplate>
          {tab === 1 && <NationalInsurance />}
          {tab === 2 && <OptionalInsurance />}
          {tab === 3 && <DependentInsurance />}
        </TabTemplate>
      </div>

      <PagerButtons
        handleSubmit={handleSubmit(submitContent)}
        isValid={isValid}
      ></PagerButtons>
    </div>
  );
};

export default Q7;
