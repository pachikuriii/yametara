import { HelloWork } from 'jp-hello-work';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { PatternFormat } from 'react-number-format';
import { useRecoilState } from 'recoil';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { postcodeState, ageState } from '../../../storage/session-stroage';
import { formInput } from '../../../types/type';
import AnswerSelectButton from 'src/components/atoms/answer-button';
import PagerButtons from 'src/components/molecules/pager-buttons';

export default function Q3(props: any) {
  const [storedAge, setStoredAge] = useRecoilState(ageState);
  const [storedPostcode, setStoredPostcode] = useRecoilState(postcodeState);
  const {
    handleSubmit,
    setError,
    control,
    formState: { errors, isValid },
    register,
  } = useForm<formInput>({
    defaultValues: {
      age: String(storedAge),
      postcode: storedPostcode,
    },
    mode: 'onChange',
    criteriaMode: 'all',
  });
  const submitContent: SubmitHandler<formInput> = (data) => {
    try {
      setStoredAge(Number(data.age));
      if (HelloWork.byZipCode(data.postcode.replace(/-/g, ''))) {
        setStoredPostcode(data.postcode);
      }
    } catch (error) {
      if (error instanceof TypeError) {
        setError('postcode', {
          types: {
            invalid_postcode: '存在する郵便番号を入力してください',
          },
        });
      }
    }
  };

  return (
    <div>
      <form>
        <div>
          <label htmlFor='age'>退職予定日における年齢</label>
          <div className='flex space-x-4 justify-center'>
            <Swiper
              slidesPerView={3}
              spaceBetween={40}
              className='mySwiper'
              navigation={true}
              modules={[Navigation]}
              centeredSlides={true}
              initialSlide={storedAge ? Number(storedAge) - 1 : 0}
              id='swiper'
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
                    <label htmlFor={`${index}`}>
                      <input
                        {...register('age', {
                          required: '選択してください',
                        })}
                        type='radio'
                        value={index}
                        className='form-check-input hidden peer'
                        id={`${index}`}
                      />
                      <AnswerSelectButton id={`age-form${index}`}>
                        {value}
                      </AnswerSelectButton>
                    </label>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          {errors.age && <p>{errors.age.message}</p>}
        </div>

        <div>
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
                id='postcode-form'
                format='###-####'
                placeholder='154-0023'
                onChange={onChange}
                className='border-2  border-primary input input-bordered input-lg w-full '
                {...rest}
                {...props}
              />
            )}
          />
          {errors.postcode && <p>{errors.postcode.message}</p>}
          {errors.postcode && errors.postcode.types && (
            <p>{errors.postcode.types.invalid_postcode}</p>
          )}
        </div>
      </form>

      <PagerButtons
        handleSubmit={handleSubmit(submitContent)}
        isValid={isValid}
      ></PagerButtons>
    </div>
  );
}
