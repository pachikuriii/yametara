import { KeyboardEvent } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import {
  retirementDateState,
  retirementReasonState,
} from '../../../storage/session-stroage';
import { formInput } from '../../../types/type';
import Alert from '../../atoms/alert';
import QuestionTitle from 'src/components/atoms/question-title';
import AnswerSelectButtons from 'src/components/molecules/answer-select-buttons';
import PagerButtons from 'src/components/molecules/pager-buttons';
import RetirementDateForm from 'src/components/molecules/retirement-date-form';

export default function Q1(props: any) {
  const [storedRetirementDate, setStoredRetirementDate] =
    useRecoilState(retirementDateState);
  const [storedRetirementReason, setStoredRetirementReason] = useRecoilState(
    retirementReasonState,
  );
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
    register,
  } = useForm<formInput>({
    defaultValues: {
      retirementDate: storedRetirementDate,
      retirementReason: String(storedRetirementReason),
    },
    mode: 'onChange',
    criteriaMode: 'all',
  });
  const submitContent: SubmitHandler<formInput> = (data) => {
    setStoredRetirementDate(data.retirementDate);
    setStoredRetirementReason(Number(data.retirementReason));
  };
  const checkKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter') event.preventDefault();
  };

  return (
    <div>
      <form onKeyDown={(event) => checkKeyDown(event)}>
        <div className='pb-4'>
          <QuestionTitle>
            <label htmlFor='retirementDate'>退職予定日はいつですか？</label>
          </QuestionTitle>
          <RetirementDateForm
            props={props}
            storedRetirementDate={storedRetirementDate}
            control={control}
            errors={errors}
          />
        </div>

        <div className='pb-4'>
          <QuestionTitle>
            <label htmlFor='retirementReason'>
              退職事由を一つ選択してください。
            </label>
          </QuestionTitle>
          <AnswerSelectButtons
            options={['自己都合', '会社都合', 'その他']}
            name='retirementReason'
            register={register}
            errors={errors.retirementReason}
            idPrefix={'retirement-reason-form'}
          />

          <div className='pt-2'>
            <label htmlFor='retirement-reason' className='link'>
              <Alert>退職事由について</Alert>
            </label>
          </div>
        </div>
      </form>

      <PagerButtons
        handleSubmit={handleSubmit(submitContent)}
        isValid={isValid}
      />
    </div>
  );
}
