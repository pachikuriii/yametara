import { useForm, SubmitHandler } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { postcodeState, ageState } from '../../../storage/session-stroage';
import { formInput } from '../../../types/type';
import QuestionTitle from 'src/components/atoms/question-title';
import AnswerSelectBox from 'src/components/molecules/answer-select-box';
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
      age: storedAge ? String(storedAge) : '',
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
          <AnswerSelectBox
            options={[
              '30歳未満',
              '30歳以上35歳未満',
              '35歳以上45歳未満',
              '45歳以上60歳未満',
              '60歳以上65歳未満',
            ]}
            register={register}
            name='age'
            errors={errors.age}
          ></AnswerSelectBox>
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
