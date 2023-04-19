import { useForm, SubmitHandler } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { postcodeState, ageState } from '../../../storage/session-stroage';
import { formInput } from '../../../types/type';
import AnswerSelectButton from 'src/components/atoms/answer-button';
import Error from 'src/components/atoms/error';
import QuestionTitle from 'src/components/atoms/question-title';
import PagerButtons from 'src/components/molecules/pager-buttons';
import PostcodeForm from 'src/components/molecules/postcode-form';

export default function Q3(props: any) {
  const [storedAge, setStoredAge] = useRecoilState(ageState);
  const [storedPostcode, setStoredPostcode] = useRecoilState(postcodeState);

  const {
    handleSubmit,
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
    setStoredAge(Number(data.age));
    setStoredPostcode(data.postcode);
  };

  return (
    <div>
      <form>
        <div className='pb-4'>
          <QuestionTitle>
            <label htmlFor='age'>退職予定日における年齢</label>
          </QuestionTitle>
          <div>
            <Swiper
              slidesPerView={1}
              className='mySwiper'
              navigation={true}
              modules={[Navigation]}
              centeredSlides={true}
              initialSlide={storedAge ? Number(storedAge) - 1 : 0}
              id='swiper'
              style={{ width: '15rem' }}
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
                  <SwiperSlide key={index} style={{ height: '6.5rem' }}>
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
          {errors.age && <Error>{errors.age.message}</Error>}
        </div>

        <div className='pb-4'>
          <QuestionTitle>
            <label htmlFor='postcode'>お住まいの住所の郵便番号</label>
          </QuestionTitle>
          <PostcodeForm
            props={props}
            control={control}
            errors={errors.postcode}
          />
        </div>
      </form>

      <PagerButtons
        handleSubmit={handleSubmit(submitContent)}
        isValid={isValid}
      ></PagerButtons>
    </div>
  );
}
