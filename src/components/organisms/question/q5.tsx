import { useForm, SubmitHandler } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import {
  empInsTotalState,
  empInsLastTwoYearsState,
} from '../../../storage/session-stroage';
import { formInput } from '../../../types/type';
import Alert from 'src/components/atoms/alert';
import QuestionTitle from 'src/components/atoms/question-title';
import AnswerSelectBox from 'src/components/molecules/answer-select-box';
import AnswerSelectButtons from 'src/components/molecules/answer-select-buttons';
import PagerButtons from 'src/components/molecules/pager-buttons';

export default function Q5() {
  const [storedEmpInsTotal, setStoredEmpInsTotal] =
    useRecoilState(empInsTotalState);
  const [storedEmpInsLastTwoYears, setStoredEmpInsLastTwoYears] =
    useRecoilState(empInsLastTwoYearsState);
  const {
    handleSubmit,
    formState: { errors, isValid },
    register,
  } = useForm<formInput>({
    defaultValues: {
      emp_ins_total: storedEmpInsTotal ? String(storedEmpInsTotal) : '',
      emp_ins_last_two_years: String(storedEmpInsLastTwoYears),
    },
    mode: 'onChange',
    criteriaMode: 'all',
  });
  const submitContent: SubmitHandler<formInput> = (data) => {
    setStoredEmpInsTotal(Number(data.emp_ins_total));
    setStoredEmpInsLastTwoYears(Number(data.emp_ins_last_two_years));
  };

  return (
    <form>
      <QuestionTitle> これまでの被保険者期間</QuestionTitle>
      <div className='pb-4'>
        <label className='pb-1' htmlFor='emp_ins_last_two_years'>
          退職予定日までの2年間では…
        </label>
        <AnswerSelectButtons
          options={['半年未満', '半年以上1年未満', '1年以上']}
          name='emp_ins_last_two_years'
          register={register}
          errors={errors.emp_ins_last_two_years}
          idPrefix={'emp-ins-last-two-years-form'}
        />
      </div>

      <div>
        <label className='pb-1' htmlFor='emp_ins_total'>
          退職予定日までの通算では…
        </label>
        <AnswerSelectBox
          options={[
            '1年未満',
            '1年以上5年未満',
            '5年以上10年未満',
            '10年以上20年未満',
            '20年以上',
          ]}
          register={register}
          name='emp_ins_total'
          errors={errors.emp_ins_total}
        />
        <label htmlFor='how-to-count-emp-period' className='link'>
          <Alert>数え方について</Alert>
        </label>
      </div>

      <PagerButtons
        handleSubmit={handleSubmit(submitContent)}
        isValid={isValid}
      />
    </form>
  );
}
