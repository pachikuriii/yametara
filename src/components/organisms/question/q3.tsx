import { useRouter } from 'next/router';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { PatternFormat } from 'react-number-format';
import { useRecoilState } from 'recoil';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { postcodeState, ageState } from '../../../session-stroage';
import { formInput } from '../../../types/type';
import AnswerSelectButton from 'src/components/atoms/answer-button';
import PagerButtons from 'src/components/molecules/buttons-pager';
import { useNextPage, usePrevPage } from 'src/hooks/use-get-page';
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

  const nextPage = useNextPage();
  const prevPage = usePrevPage();
  const router = useRouter();

  const goNextPage: SubmitHandler<formInput> = (data) => {
    setStoredAge(data.age);
    setStoredPostcode(data.postcode);
    router.push(nextPage);
  };

  const goPrevPage = () => {
    router.push(prevPage);
  };

  return (
    <form>
      <label htmlFor='age'>退職予定日における年齢</label>

      <div>
        <input
          {...register('age', { required: '選択してください' })}
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
            '30歳未満',
            '30歳以上35歳未満',
            '35歳以上45歳未満',
            '45歳以上60歳未満',
            '60歳以上65歳未満',
          ].map((value, index) => {
            index += 1;
            return (
              <SwiperSlide key={index}>
                <AnswerSelectButton
                  type='button'
                  onClick={() => setValue('age', index)}
                >
                  {value}
                </AnswerSelectButton>
              </SwiperSlide>
            );
          })}
        </Swiper>
        {errors.age && <p>{errors.age.message}</p>}
      </div>

      <label htmlFor='postcode'>お住まいの住所の郵便番号</label>
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
            className='border-2  border-primary input input-bordered input-lg w-full '
            {...rest}
            {...props}
          />
        )}
      />
      {errors.postcode && <p>{errors.postcode.message}</p>}

      <PagerButtons
        handleSubmit={handleSubmit(goNextPage)}
        goBackPage={goPrevPage}
      ></PagerButtons>
    </form>
  );
}
