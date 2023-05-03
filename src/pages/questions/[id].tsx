import { useRouter } from 'next/router';
import Q1 from 'src/components/organisms/question/q1';
import Q2 from 'src/components/organisms/question/q2';
import Q3 from 'src/components/organisms/question/q3';
import Q4 from 'src/components/organisms/question/q4';
import Q5 from 'src/components/organisms/question/q5';
import Q6 from 'src/components/organisms/question/q6';
import Q7 from 'src/components/organisms/question/q7';
import Q8 from 'src/components/organisms/question/q8';
import QuestionTemplate from 'src/components/template/question-template';

interface Props {
  id: string | string[] | undefined;
}
const Content = ({ id }: Props) => {
  return (
    <>
      {id === '1' && <Q1></Q1>}
      {id === '2' && <Q2></Q2>}
      {id === '3' && <Q3></Q3>}
      {id === '4' && <Q4></Q4>}
      {id === '5' && <Q5></Q5>}
      {id === '6' && <Q6></Q6>}
      {id === '7' && <Q7></Q7>}
      {id === '8' && <Q8></Q8>}
      {!id && <h1>Loading...</h1>}
    </>
  );
};

export default function Page() {
  const router = useRouter();
  const id = router.query.id;
  if (id == null) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <QuestionTemplate
        pageTitle='yametara | 退職後の手続きシミュレーター | 今回の退職について'
        title='今回の退職について'
        todo={'【記入/選択してください】'}
      >
        <Content id={id} />
      </QuestionTemplate>
    </>
  );
}
