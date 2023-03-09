import Q5 from '../../components/organisms/question/q5';
import EmploymentInsuranceReference from 'src/components/organisms/modal/employment-insurance-reference';
import ModalTemplate from 'src/components/template/modal-template';
import QuestionTemplate from 'src/components/template/question-template';
export default function Page5() {
  return (
    <>
      <QuestionTemplate
        pageTitle='yametara | 退職後の手続きシミュレーター | 雇用保険について'
        title='Q5.雇用保険について'
        todo='【選択してください】'
      >
        <Q5></Q5>
      </QuestionTemplate>
      <ModalTemplate
        id='how-to-count-emp-period'
        title='被保険者期間の数え方について'
      >
        <EmploymentInsuranceReference />
      </ModalTemplate>
    </>
  );
}
