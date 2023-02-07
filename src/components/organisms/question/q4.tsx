import { useForm, SubmitHandler } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { familyState } from '../../../session-stroage';
import { formInput } from '../../../types/type';
import AnswerSelectButtons from 'src/components/molecules/answer-buttons';
import PagerButtons from 'src/components/molecules/buttons-pager';

export default function Q4() {
  const [storedFamily, setStoredFamily] = useRecoilState(familyState);

  const {
    handleSubmit,
    setValue,
    formState: { errors },
    register,
  } = useForm<formInput>({
    defaultValues: {
      family: storedFamily,
    },
  });

  const submitContent: SubmitHandler<formInput> = (data) => {
    setStoredFamily(data.family);
  };

  return (
    <div>
      <form>
        <label htmlFor='family'>
          家計を共にしている社会保険の被保険者の家族
        </label>

        <input
          {...register('family', { required: '選択してください' })}
          type='hidden'
        />

        <AnswerSelectButtons
          labels={['いる', 'いない']}
          setValue={setValue}
          property='family'
        ></AnswerSelectButtons>

        {errors.family && <p>{errors.family.message}</p>}
        <PagerButtons handleSubmit={handleSubmit(submitContent)}></PagerButtons>
      </form>
    </div>
  );
}
