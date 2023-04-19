import { useForm, SubmitHandler } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  empInsTotalState,
  empInsLastTwoYearsState,
} from '../../../storage/session-stroage';
import { formInput } from '../../../types/type';
import Alert from 'src/components/atoms/alert';
import AnswerSelectButton from 'src/components/atoms/answer-button';
import Error from 'src/components/atoms/error';
import QuestionTitle from 'src/components/atoms/question-title';
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
      emp_ins_total: String(storedEmpInsTotal),
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
          choices={['半年未満', '半年以上1年未満', '1年以上']}
          name='emp_ins_last_two_years'
          register={register}
          errors={errors.emp_ins_last_two_years}
          idPrefix={'emp-ins-last-two-years-form'}
        ></AnswerSelectButtons>
      </div>

      <div>
        <label className='pb-1' htmlFor='emp_ins_total'>
          退職予定日までの通算では…
        </label>
        <div className='flex space-x-4 justify-center'>
          <Swiper
            slidesPerView={1}
            className='mySwiper'
            navigation={true}
            modules={[Navigation]}
            centeredSlides={true}
            initialSlide={storedEmpInsTotal ? Number(storedEmpInsTotal) - 1 : 0}
            id='swiper'
            style={{ width: '15rem' }}
          >
            {[
              '1年未満',
              '1年以上5年未満',
              '5年以上10年未満',
              '10年以上20年未満',
              '20年以上',
            ].map((value, index) => {
              index += 1;
              return (
                <SwiperSlide key={index} style={{ height: '6.5rem' }}>
                  <label htmlFor={`emp_ins_total${index}`}>
                    <input
                      {...register('emp_ins_total', {
                        required: '選択してください',
                      })}
                      type='radio'
                      value={index}
                      className='form-check-input hidden peer'
                      id={`emp_ins_total${index}`}
                    />
                    <AnswerSelectButton id={`emp-ins-total-form${index}`}>
                      {value}
                    </AnswerSelectButton>
                  </label>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        {errors.emp_ins_total && <Error>{errors.emp_ins_total.message}</Error>}
        <label htmlFor='how-to-count-emp-period' className='link'>
          <Alert>数え方について</Alert>
        </label>
      </div>

      <PagerButtons
        handleSubmit={handleSubmit(submitContent)}
        isValid={isValid}
      ></PagerButtons>
    </form>
  );
}
