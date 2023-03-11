import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { NumberFormatBase } from 'react-number-format';
import { useRecoilState } from 'recoil';
import dayjs from '../../../day-js';
import { useRetirementDateInputHelper } from '../../../hooks/use-retirement-date-input-helper';
import {
  retirementDateState,
  retirementReasonState,
} from '../../../storage/session-stroage';
import { formInput } from '../../../types/type';
import Alert from '../../atoms/alert';
import AnswerSelectButton from 'src/components/atoms/answer-button';
import Error from 'src/components/atoms/error';
import QuestionTitle from 'src/components/atoms/question-title';
import PagerButtons from 'src/components/molecules/pager-buttons';

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
  const formattedValue = useRetirementDateInputHelper(props);

  return (
    <div>
      <form>
        <div className='pb-4'>
          <QuestionTitle>
            <label htmlFor='retirementDate'>退職予定日</label>
          </QuestionTitle>
          <Controller
            control={control}
            rules={{
              required: '入力してください',
              pattern: {
                value:
                  /^(20[0-9]{2})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])+$/,
                message: '有効な日付を入力してください',
              },
            }}
            name='retirementDate'
            render={({ field: { onChange, ref, ...rest } }) => (
              <NumberFormatBase
                id='retirement-date-form'
                className='border-2 border-primary input input-bordered input-lg w-full text-center'
                onChange={onChange}
                placeholder={dayjs().format('YYYY-MM-DD')}
                format={formattedValue}
                {...rest}
                {...props}
              />
            )}
          />
          {errors.retirementDate && (
            <Error>{errors.retirementDate.message}</Error>
          )}
        </div>

        <div className='pb-4'>
          <h2 className='text-lg pb-1'>
            <label htmlFor='retirementReason'>退職事由</label>
          </h2>

          <div className='flex space-x-2 justify-center pb-2'>
            {['自己都合', '会社都合', 'その他'].map((value, index) => {
              index += 1;
              return (
                <div key={index}>
                  <label htmlFor={`${index}`}>
                    <input
                      {...register('retirementReason', {
                        required: '選択してください',
                      })}
                      type='radio'
                      value={index}
                      className='form-check-input hidden peer'
                      id={`${index}`}
                    />
                    <AnswerSelectButton id={`retirement-reason-form${index}`}>
                      {value}
                    </AnswerSelectButton>
                  </label>
                </div>
              );
            })}
          </div>
          {errors.retirementReason && (
            <Error>{errors.retirementReason.message}</Error>
          )}
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
      ></PagerButtons>
    </div>
  );
}
