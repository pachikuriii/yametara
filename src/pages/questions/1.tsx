import Q1 from '../../components/organisms/question/q1';
import RetirementReason from 'src/components/organisms/modal/retirement-reason';
import ModalTemplate from 'src/components/template/modal-template';
import QuestionTemplate from 'src/components/template/question-template';
export default function Page1() {
  return (
    <>
      <QuestionTemplate
        pageTitle=' yametara | 退職後の手続きシミュレーター | 今回の退職について'
        title='Q1.今回の退職について'
        todo={'【記入/選択してください】'}
      >
        <Q1></Q1>
      </QuestionTemplate>
      <ModalTemplate id='retirement-reason' title='退職事由について'>
        <RetirementReason />
      </ModalTemplate>
    </>
  );
}
