import Q3 from '../../components/organisms/question/q3';
import QuestionTemplate from 'src/components/template/question-template';
export default function Page3() {
  return (
    <>
      <QuestionTemplate
        pageTitle='yametara | 退職後の手続きシミュレーター | あなたについて'
        title='Q3.あなたについて'
        todo='【記入/選択してください】'
      >
        <Q3></Q3>
      </QuestionTemplate>
    </>
  );
}
