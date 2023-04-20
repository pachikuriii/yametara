import { useForm, SubmitHandler } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { postcodeState, ageState } from '../../../storage/session-stroage';
import { formInput } from '../../../types/type';
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
          <div className='relative'>
            <select
              className='block appearance-none w-full text-center border-2 border-primary input input-bordered input-lg focus:outline-none focus:border-gray-500'
              {...register('age', {
                required: '選択してください',
              })}
            >
              <option value='1'>30歳未満</option>
              <option value='2'>30歳以上35歳未満</option>
              <option value='3'>35歳以上45歳未満</option>
              <option value='4'>45歳以上60歳未満</option>
              <option value='5'>60歳以上65歳未満</option>
            </select>
            <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2'>
              <svg
                className='fill-current h-4 w-4'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
              >
                <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
              </svg>
            </div>
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
