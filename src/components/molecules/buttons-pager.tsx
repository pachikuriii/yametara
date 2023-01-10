import { useRouter } from 'next/router';
import Button from '../atoms/button';

export default function PagerButtons() {
  const router = useRouter();
  const currentQuestion = Number(router.asPath.replace('/questions/', ''));
  const NextPage: number = currentQuestion + 1;
  const PrevPage: number = currentQuestion - 1;
  const NextPath: string = '/questions/' + NextPage;
  const PrevPath: string = '/questions/' + PrevPage;

  // const NextPage = '/questions/' + {currentQuestion + 1}
  // const nextPage = router.pathname + 1;

  return (
    <div>
      <Button onClick={() => router.push(PrevPath)}>戻る</Button>
      <Button onClick={() => router.push(NextPath)}>次へ</Button>
    </div>
  );
}
