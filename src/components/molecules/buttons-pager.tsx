import { useRouter } from 'next/router';
import { BaseSyntheticEvent } from 'react';
import GuideButton from '../atoms/guide-button';
import { usePrevPage, useNextPage } from 'src/hooks/use-get-page';

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
        <GuideButton type='button' onClick={() => router.push(prevPage)}>
          戻る
        </GuideButton>
      </div>

      <div className='ml-auto'>
        <GuideButton
          type='button'
          onClick={() => {
            handleSubmit();
          }}
        >
          次へ
        </GuideButton>
      </div>
    </div>
  );
};

export default PagerButtons;
