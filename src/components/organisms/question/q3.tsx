import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { PatternFormat } from 'react-number-format';
import { useRecoilState } from 'recoil';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { postcodeState, ageState } from '../../../local-stroage';
import { formInput } from '../../../types/type';
import Button from '../../atoms/button';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Q3(props: any) {
  const [storedAge, setStoredAge] = useRecoilState(ageState);
  const [storedPostcode, setStoredPostcode] = useRecoilState(postcodeState);

  const {
    handleSubmit,
    setValue,
    control,
    formState: { errors },
    register,
  } = useForm<formInput>({
    defaultValues: {
      age: storedAge,
      postcode: storedPostcode,
    },
  });

  const submitForm: SubmitHandler<formInput> = (data) => {
    setStoredAge(data.age);
    setStoredPostcode(data.postcode);
    router.push('/questions/4');
  };

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
        {errors.age && <p>{errors.age.message}</p>}
      </div>

      <label htmlFor='postcode'>郵便番号</label>
      <Controller
        control={control}
        rules={{
          required: '郵便番号を入力してください',
          pattern: {
            value: /^[0-9]{3}-[0-9]{4}$/,
            message: '有効な郵便番号を入力してください',
          },
        }}
        name='postcode'
        render={({ field: { onChange, ref, ...rest } }) => (
          <PatternFormat
            format='###-####'
            placeholder='123-4567'
            onChange={onChange}
            {...rest}
            {...props}
          />
        )}
      />
      {errors.postcode && <p>{errors.postcode.message}</p>}

      <Link href='/questions/4'>
        <Button>戻る</Button>
      </Link>
      <Button onClick={handleSubmit(submitForm)}>次へ</Button>
    </form>
  );
}
