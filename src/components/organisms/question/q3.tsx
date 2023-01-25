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
  age: number;
}

export default function Q3() {
  const {
    handleSubmit,
    setValue,
    formState: { errors },
    register,
  } = useForm<formInput>({});

  const [age, setAge] = useState(0);

  function reflectDataToLocalStrage() {
    const localStrage = LocalStorage.fetch();
    localStrage.age = age;
    LocalStorage.save(localStrage);
  }

  const submitForm: SubmitHandler<formInput> = (data) => {
    setAge(data.age);
    router.push('/questions/4');
  };

  useEffect(() => {
    reflectDataToLocalStrage();
  });
  const router = useRouter();

  return (
    <form>
      <div>
        <input
          {...register('age', { required: '選択してください' })}
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
            '30歳未満',
            '30歳以上35歳未満',
            '35歳以上45歳未満',
            '45歳以上60歳未満',
            '60歳以上65歳未満',
          ].map((value, index) => {
            index += 1;
            return (
              <SwiperSlide key={index}>
                <button
                  type='button'
                  onClick={() => setValue('age', index)}
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
      </div>
      {errors.age && <p>{errors.age.message}</p>}
      <Link href='/questions/2'>
        <Button>戻る</Button>
      </Link>
      <Button onClick={handleSubmit(submitForm)}>次へ</Button>
    </form>
  );
}
