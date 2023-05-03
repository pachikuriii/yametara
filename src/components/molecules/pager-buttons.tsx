import { useRouter } from 'next/router';
import { BaseSyntheticEvent, useEffect } from 'react';
import { useSetRecoilState, useRecoilState } from 'recoil';
import BackButton from '../atoms/back-button';
import NextButton from '../atoms/next-button';
import { useNextPage, usePrevPage } from 'src/hooks/use-require-path';
import {
  isNextButtonClicked,
  isBackButtonClicked,
  nextMotionState,
  backMotionState,
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
  const id = router.query.id;
  const [storedNextButtonClicked, setStoredNextButtonClicked] =
    useRecoilState(isNextButtonClicked);
  const [storedBackButtonClicked, setStoredBackButtonClicked] =
    useRecoilState(isBackButtonClicked);
  const setStoredInitialMotion = useSetRecoilState(nextMotionState);
  const setStoredExitMotion = useSetRecoilState(backMotionState);

  useEffect(() => {
    if (storedNextButtonClicked && !storedBackButtonClicked) {
      setStoredInitialMotion('100%');
      setStoredExitMotion('-100%');
    } else if (!storedNextButtonClicked && storedBackButtonClicked) {
      setStoredInitialMotion('-100%');
      setStoredExitMotion('100%');
    }
  }, [
    setStoredExitMotion,
    setStoredInitialMotion,
    storedBackButtonClicked,
    storedNextButtonClicked,
  ]);

  return (
    <div className='flex justify-center'>
      <div className='mr-auto'>
        <BackButton
          type='button'
          onClick={() => {
            router.push(prevPage);
            setStoredBackButtonClicked(true);
            setStoredNextButtonClicked(false);
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
            setStoredBackButtonClicked(false);
            setStoredNextButtonClicked(true);
            {
              isValid && router.push(nextPage);
            }
          }}
          isValid={isValid}
        >
          {id === '8' ? '結果へ' : '次へ'}
        </NextButton>
      </div>
    </div>
  );
};

export default PagerButtons;
