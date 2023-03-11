import { useRouter } from 'next/router';
import { BaseSyntheticEvent } from 'react';
import { useSetRecoilState } from 'recoil';
import BackButton from '../atoms/back-button';
import NextButton from '../atoms/next-button';
import { useNextPage, usePrevPage } from 'src/hooks/use-require-path';
import {
  isNextButtonClicked,
  isBackButtonClicked,
} from 'src/storage/motion-controller';
type Props = {
  handleSubmit(
    e?: BaseSyntheticEvent<object, any, any> | undefined,
  ): Promise<void>;
  isValid: boolean;
};

const PagerButtons = ({ handleSubmit, isValid }: Props) => {
  const prevPage = usePrevPage();
  const nextPage = useNextPage();
  const router = useRouter();
  const setNextButtonClicked = useSetRecoilState(isNextButtonClicked);
  const setBackButtonClicked = useSetRecoilState(isBackButtonClicked);

  return (
    <div className='flex w-full justify-center'>
      <div className='mr-auto'>
        <BackButton
          type='button'
          onClick={() => {
            router.push(prevPage);
            setBackButtonClicked(true);
            setNextButtonClicked(false);
          }}
        >
          戻る
        </BackButton>
      </div>

      <div className='ml-auto'>
        <NextButton
          type='button'
          onClick={() => {
            handleSubmit();
            setBackButtonClicked(false);
            setNextButtonClicked(true);
            {
              isValid && router.push(nextPage);
            }
          }}
          isValid={isValid}
        >
          次へ
        </NextButton>
      </div>
    </div>
  );
};

export default PagerButtons;
