import Q2 from '../../components/organisms/question/q2';
import QuestionTemplate from 'src/components/template/question-template';
export default function Page2() {
  return (
    <>
      <QuestionTemplate
        pageTitle='yametara | 退職後の手続きシミュレーター | 退職後の予定について'
        title='Q2.退職後の予定について'
        todo='【選択してください】'
      >
        <Q2></Q2>
      </QuestionTemplate>
    </>
  );
}
