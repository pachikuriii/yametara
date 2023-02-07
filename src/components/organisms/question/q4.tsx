import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { familyState } from '../../../session-stroage';
import { formInput } from '../../../types/type';
import AnswerSelectButton from 'src/components/atoms/answer-button';
import PagerButtons from 'src/components/molecules/buttons-pager';
import { useNextPage, usePrevPage } from 'src/hooks/use-get-page';

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

  const nextPage = useNextPage();
  const prevPage = usePrevPage();
  const router = useRouter();

  const goNextPage: SubmitHandler<formInput> = (data) => {
    setStoredFamily(data.family);
    router.push(nextPage);
  };

  const goPrevPage = () => {
    router.push(prevPage);
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

        <div className='flex justify-center space-x-4'>
          {['いる', 'いない'].map((value, index) => {
            index += 1;
            return (
              <AnswerSelectButton
                type='button'
                key={index}
                onClick={() => setValue('family', index)}
              >
                {value}
              </AnswerSelectButton>
            );
          })}
        </div>
        {errors.family && <p>{errors.family.message}</p>}
        <PagerButtons
          handleSubmit={handleSubmit(goNextPage)}
          goBackPage={goPrevPage}
        ></PagerButtons>
      </form>
    </div>
  );
}
