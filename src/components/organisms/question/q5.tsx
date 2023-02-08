import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  empInsTotalState,
  empInsLastTwoYearsState,
} from '../../../session-stroage';
import { formInput } from '../../../types/type';
import Alert from 'src/components/atoms/alert';
import AnswerSelectButton from 'src/components/atoms/answer-button';
import AnswerSelectButtons from 'src/components/molecules/answer-buttons';
import PagerButtons from 'src/components/molecules/buttons-pager';
import { useNextPage } from 'src/hooks/use-get-page';

import 'swiper/css';
import 'swiper/css/navigation';

export default function Q5() {
  const [storedEmpInsTotal, setStoredEmpInsTotal] =
    useRecoilState(empInsTotalState);
  const [storedEmpInsLastTwoYears, setStoredEmpInsLastTwoYears] =
    useRecoilState(empInsLastTwoYearsState);

  const {
    handleSubmit,
    setValue,
    formState: { errors },
    register,
  } = useForm<formInput>({
    defaultValues: {
      emp_ins_total: storedEmpInsTotal,
      emp_ins_last_two_years: storedEmpInsLastTwoYears,
    },
  });

  const router = useRouter();
  const nextPage = useNextPage();
  const submitContent: SubmitHandler<formInput> = (data) => {
    setStoredEmpInsTotal(data.emp_ins_total);
    setStoredEmpInsLastTwoYears(data.emp_ins_last_two_years);
    router.push(nextPage);
  };

  return (
    <form>
      <div>
        <h2 className='card-title'>雇用保険のこれまでの被保険者期間</h2>

        <label htmlFor='how-to-count-emp-period'>
          <Alert>期間の数え方について</Alert>
        </label>

        <label htmlFor='emp_ins_last_two_years'>
          退職予定日までの2年間では…
        </label>

        <input
          {...register('emp_ins_last_two_years', {
            required: '選択してください',
          })}
          type='hidden'
        />

        <AnswerSelectButtons
          labels={['半年未満', '半年以上1年未満', '1年以上']}
          setValue={setValue}
          property='emp_ins_last_two_years'
        ></AnswerSelectButtons>
      </div>
      {errors.emp_ins_last_two_years && (
        <p>{errors.emp_ins_last_two_years.message}</p>
      )}

      <div>
        <label htmlFor='emp_ins_total'>退職予定日までの通算では…</label>
        <input
          {...register('emp_ins_total', { required: '選択してください' })}
          type='hidden'
        />
        <Swiper
          slidesPerView={3}
          spaceBetween={40}
          className='mySwiper'
          navigation={true}
          modules={[Navigation]}
          centeredSlides={true}
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
                <AnswerSelectButton
                  type='button'
                  onClick={() => setValue('emp_ins_total', index)}
                >
                  {value}
                </AnswerSelectButton>
              </SwiperSlide>
            );
          })}
        </Swiper>
        {errors.emp_ins_total && <p>{errors.emp_ins_total.message}</p>}
      </div>

      <PagerButtons handleSubmit={handleSubmit(submitContent)}></PagerButtons>
    </form>
  );
}
