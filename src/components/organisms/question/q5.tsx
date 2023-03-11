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
      <h2 className='card-title'>雇用保険のこれまでの被保険者期間</h2>
      <div>
        <label htmlFor='emp_ins_last_two_years'>
          退職予定日までの2年間では…
        </label>
        <div className='flex space-x-4 justify-center'>
          {['半年未満', '半年以上1年未満', '1年以上'].map((value, index) => {
            index += 1;
            return (
              <div key={index}>
                <label htmlFor={`emp_ins_last_two_years${index}`}>
                  <input
                    {...register('emp_ins_last_two_years', {
                      required: '選択してください',
                    })}
                    type='radio'
                    value={index}
                    className='form-check-input hidden peer'
                    id={`emp_ins_last_two_years${index}`}
                  />
                  <AnswerSelectButton
                    id={`emp-ins-last-two-years-form${index}`}
                  >
                    {value}
                  </AnswerSelectButton>
                </label>
              </div>
            );
          })}
        </div>
        {errors.emp_ins_last_two_years && (
          <p>{errors.emp_ins_last_two_years.message}</p>
        )}
      </div>

      <div>
        <label htmlFor='emp_ins_total'>退職予定日までの通算では…</label>
        <div className='flex space-x-4 justify-center'>
          <Swiper
            slidesPerView={3}
            spaceBetween={40}
            className='mySwiper'
            navigation={true}
            modules={[Navigation]}
            centeredSlides={true}
            initialSlide={storedEmpInsTotal ? Number(storedEmpInsTotal) - 1 : 0}
            id='swiper'
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
                <SwiperSlide key={index}>
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
        {errors.emp_ins_total && <p>{errors.emp_ins_total.message}</p>}
      </div>

      <label htmlFor='how-to-count-emp-period' className='link'>
        <Alert>被保険者期間の数え方について</Alert>
      </label>

      <PagerButtons
        handleSubmit={handleSubmit(submitContent)}
        isValid={isValid}
      ></PagerButtons>
    </form>
  );
}
