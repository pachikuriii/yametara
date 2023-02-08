import { useRouter } from 'next/router';
import { BaseSyntheticEvent } from 'react';
import BackButton from '../atoms/back-button';
import NextButton from '../atoms/next-button';
import { usePrevPage } from 'src/hooks/use-get-page';

type Props = {
  handleSubmit(
    e?: BaseSyntheticEvent<object, any, any> | undefined,
  ): Promise<void>;
};

const PagerButtons = ({ handleSubmit }: Props) => {
  const prevPage = usePrevPage();
  const router = useRouter();

  return (
    <div className='flex w-full justify-center'>
      <div className='mr-auto'>
        <BackButton type='button' onClick={() => router.push(prevPage)}>
          戻る
        </BackButton>
      </div>

      <div className='ml-auto'>
        <NextButton
          type='button'
          onClick={() => {
            handleSubmit();
          }}
        >
          次へ
        </NextButton>
      </div>
    </div>
  );
};

export default PagerButtons;
