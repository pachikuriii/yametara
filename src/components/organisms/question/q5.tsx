import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import LocalStorage from '../../../local-stroage';
import Button from '../../atoms/button';
import 'swiper/css';
import 'swiper/css/navigation';

interface formInput {
  emp_ins_total: number;
  emp_ins_last_two_years: number;
}

export default function Q5() {
  const {
    handleSubmit,
    setValue,
    formState: { errors },
    register,
  } = useForm<formInput>({});

  const [empInsTotal, setEmpInsTotal] = useState(0);
  const [empInsLastTwoYears, setEmpInsLastTwoYears] = useState(0);

  function reflectDataToLocalStrage() {
    const localStrage = LocalStorage.fetch();
    localStrage.emp_ins_total = empInsTotal;
    localStrage.emp_ins_last_two_years = empInsLastTwoYears;
    LocalStorage.save(localStrage);
  }

  const submitForm: SubmitHandler<formInput> = (data) => {
    setEmpInsTotal(data.emp_ins_total);
    setEmpInsLastTwoYears(data.emp_ins_last_two_years);
    router.push('/questions/6');
  };

  useEffect(() => {
    reflectDataToLocalStrage();
  });
  const router = useRouter();

  return (
    <form>
      <div>
        <label htmlFor='emp_ins_last_two_years'>
          退職予定日までの2年間では…
        </label>
        <input
          {...register('emp_ins_last_two_years', {
            required: '選択してください',
          })}
          type='hidden'
        />
        {['6ヶ月未満', '6ヶ月以上1年未満', '1年以上'].map((value, index) => {
          return (
            <button
              type='button'
              key={index}
              onClick={() => setValue('emp_ins_last_two_years', index)}
              className={
                'btn btn-outline text-accent bg-primary  border-secondary no-animation hover:bg-secondary-focus shadow-md'
              }
            >
              {value}
            </button>
          );
        })}
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
          spaceBetween={100}
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
                <button
                  type='button'
                  onClick={() => setValue('emp_ins_total', index)}
                  className={
                    'btn btn-outline text-accent bg-primary  border-secondary no-animation hover:bg-secondary-focus shadow-md'
                  }
                >
                  {value}
                </button>
              </SwiperSlide>
            );
          })}
        </Swiper>
        {errors.emp_ins_total && <p>{errors.emp_ins_total.message}</p>}
      </div>

      <Link href='/questions/4'>
        <Button>戻る</Button>
      </Link>
      <Button onClick={handleSubmit(submitForm)}>次へ</Button>
    </form>
  );
}
