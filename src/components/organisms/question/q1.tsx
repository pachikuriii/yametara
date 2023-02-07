import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { NumberFormatBase } from 'react-number-format';
import { useRecoilState } from 'recoil';
import dayjs from '../../../day-js';
import { useRetirementDateInputHelper } from '../../../hooks/use-retirement-date-input-helper';
import {
  retirementDateState,
  retirementReasonState,
} from '../../../session-stroage';
import { formInput } from '../../../types/type';
import Alert from '../../atoms/alert';
import Modal from '../../atoms/modal';
import AnswerSelectButtons from 'src/components/molecules/answer-buttons';
import PagerButtons from 'src/components/molecules/buttons-pager';

export default function Q1(props: any) {
  const [storedRetirementDate, setStoredRetirementDate] =
    useRecoilState(retirementDateState);
  const [storedRetirementReason, setStoredRetirementReason] = useRecoilState(
    retirementReasonState,
  );
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
    register,
  } = useForm<formInput>({
    defaultValues: {
      retirementDate: storedRetirementDate,
      retirementReason: storedRetirementReason,
    },
  });

  const submitContent: SubmitHandler<formInput> = (data) => {
    setStoredRetirementDate(data.retirementDate);
    setStoredRetirementReason(data.retirementReason);
  };

  const formattedValue = useRetirementDateInputHelper(props);

  return (
    <div>
      <form>
        <label htmlFor='retirementDate'>退職予定日</label>
        <Controller
          control={control}
          rules={{
            required: '退職予定日を入力してください',
            pattern: {
              value: /^(20[0-9]{2})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])+$/,
              message: '有効な日付を入力してください',
            },
          }}
          name='retirementDate'
          render={({ field: { onChange, ref, ...rest } }) => (
            <NumberFormatBase
              className='border-2  border-primary input input-bordered input-lg w-full '
              onChange={onChange}
              placeholder={dayjs().format('YYYY-MM-DD')}
              format={formattedValue}
              {...rest}
              {...props}
            />
          )}
        />
        {errors.retirementDate && <p>{errors.retirementDate.message}</p>}

        <label htmlFor='retirementReason'>退職事由</label>
        <input
          {...register('retirementReason', { required: '選択してください' })}
          type='hidden'
        />

        <AnswerSelectButtons
          labels={['自己都合', '会社都合', 'その他']}
          setValue={setValue}
          property='retirementReason'
        ></AnswerSelectButtons>

        {errors.retirementReason && <p>{errors.retirementReason.message}</p>}
        <div className='py-2'>
          <Modal label={<Alert>退職事由について</Alert>} id='retirement-reason'>
            モーダルの内容
          </Modal>
        </div>

        <PagerButtons handleSubmit={handleSubmit(submitContent)}></PagerButtons>
      </form>
    </div>
  );
}
