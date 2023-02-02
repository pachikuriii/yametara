import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { familyState } from '../../../local-stroage';
import { formInput } from '../../../types/type';
import Button from '../../atoms/button';

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

  const submitForm: SubmitHandler<formInput> = (data) => {
    setStoredFamily(data.family);
    router.push('/questions/5');
  };

  const router = useRouter();

  return (
    <div>
      <form>
        <input
          {...register('family', { required: '選択してください' })}
          type='hidden'
        />

        <div>
          {['はい', 'いいえ'].map((value, index) => {
            return (
              <button
                type='button'
                key={index}
                onClick={() => setValue('family', value === 'はい' ? 1 : 2)}
                className={
                  'btn btn-outline text-accent bg-primary  border-secondary no-animation hover:bg-secondary-focus shadow-md'
                }
              >
                {value}
              </button>
            );
          })}
        </div>
        {errors.family && <p>{errors.family.message}</p>}
        <Link href='/questions/3'>
          <Button>戻る</Button>
        </Link>
        <Button onClick={handleSubmit(submitForm)}>次へ</Button>
      </form>
    </div>
  );
}
