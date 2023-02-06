import { useRouter } from 'next/router';
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
import AnswerSelectButton from 'src/components/atoms/answer-button';
import PagerButtons from 'src/components/molecules/buttons-pager';
import { useNextPage, usePrevPage } from 'src/hooks/use-get-page';

export default function Q1(props: any) {
  const [storedRetirementDate, setStoredRetirementDate] =
    useRecoilState(retirementDateState);
  const [storedRetirementReason, setStoredRetirementReason] = useRecoilState(
    retirementReasonState,
  );
  const nextPage = useNextPage();
  const prevPage = usePrevPage();
  const router = useRouter();

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

  const goNextPage: SubmitHandler<formInput> = (data) => {
    setStoredRetirementDate(data.retirementDate);
    setStoredRetirementReason(data.retirementReason);
    router.push(nextPage);
  };

  const goPrevPage = () => {
    router.push(prevPage);
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

        <div className='space-x-4'>
          {['自己都合', '会社都合', 'その他'].map((value, index) => {
            index += 1;
            return (
              <AnswerSelectButton
                type='button'
                key={index}
                onClick={() => setValue('retirementReason', index)}
              >
                {value}
              </AnswerSelectButton>
            );
          })}
        </div>
        {errors.retirementReason && <p>{errors.retirementReason.message}</p>}
        <div className='py-2'>
          <Modal label={<Alert>退職事由について</Alert>} id='retirement-reason'>
            モーダルの内容
          </Modal>
        </div>

        <PagerButtons
          handleSubmit={handleSubmit(goNextPage)}
          goBackPage={goPrevPage}
        ></PagerButtons>
      </form>
    </div>
  );
}
