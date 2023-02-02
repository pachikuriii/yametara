import { useRouter } from 'next/router';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { NumberFormatBase } from 'react-number-format';
import { useRecoilState } from 'recoil';
import { useRetirementDateInputHelper } from '../../../hooks/use-retirement-date-input-helper';
import {
  retirementDateState,
  retirementReasonState,
} from '../../../session-stroage';
import { formInput } from '../../../types/type';
import Alert from '../../atoms/alert';
import Button from '../../atoms/button';
import Modal from '../../atoms/modal';

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

  const submitForm: SubmitHandler<formInput> = (data) => {
    setStoredRetirementDate(data.retirementDate);
    setStoredRetirementReason(data.retirementReason);
    router.push('/questions/2');
  };

  const formattedValue = useRetirementDateInputHelper(props);
  const router = useRouter();

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
              onChange={onChange}
              placeholder='2022-02-22'
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

        <div>
          {['自己都合', '会社都合', 'その他'].map((value, index) => {
            index += 1;
            return (
              <button
                type='button'
                key={index}
                onClick={() => setValue('retirementReason', index)}
                className={
                  'btn btn-outline text-accent bg-primary  border-secondary no-animation hover:bg-secondary-focus shadow-md'
                }
              >
                {value}
              </button>
            );
          })}
        </div>
        {errors.retirementReason && <p>{errors.retirementReason.message}</p>}
        <div>
          <Modal label={<Alert>退職事由について</Alert>} id='retirement-reason'>
            モーダルの内容
          </Modal>
        </div>
        <Button onClick={handleSubmit(submitForm)}>次へ</Button>
      </form>
    </div>
  );
}
