import { useRouter } from 'next/router';
import Button from '../atoms/button';

export default function PagerButtons() {
  const router = useRouter();
  const currentQuestionNum: number = Number(
    router.asPath.replace('/questions/', ''),
  );
  const NextPage: number = currentQuestionNum + 1;
  const PrevPage: number = currentQuestionNum - 1;
  const NextPath: string = '/questions/' + NextPage;
  const PrevPath: string = '/questions/' + PrevPage;

  return (
    <div>
      <Button onClick={() => router.push(PrevPath)}>戻る</Button>
      <Button onClick={() => router.push(NextPath)}>次へ</Button>
    </div>
  );
}
