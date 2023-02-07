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
  const nextPage = useNextPage();
  const router = useRouter();

  const goPrevPage = () => {
    router.push(prevPage);
  };
  const goNextPage = () => {
    router.push(nextPage);
  };

  return (
    <div className='flex w-full justify-center space-x-56'>
      <GuideButton type='button' onClick={goPrevPage}>
        戻る
      </GuideButton>
      <GuideButton
        type='button'
        onClick={() => {
          handleSubmit();
          goNextPage();
        }}
      >
        次へ
      </GuideButton>
    </div>
  );
};

export default PagerButtons;
