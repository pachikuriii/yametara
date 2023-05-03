import { useRouter } from 'next/router';
import EmploymentInsuranceReference from 'src/components/organisms/question/modal/employment-insurance-reference';
import RetirementReasonReference from 'src/components/organisms/question/modal/retirement-reason-reference';
import Q1 from 'src/components/organisms/question/q1';
import Q2 from 'src/components/organisms/question/q2';
import Q3 from 'src/components/organisms/question/q3';
import Q4 from 'src/components/organisms/question/q4';
import Q5 from 'src/components/organisms/question/q5';
import Q6 from 'src/components/organisms/question/q6';
import Q7 from 'src/components/organisms/question/q7';
import Q8 from 'src/components/organisms/question/q8';
import ModalTemplate from 'src/components/template/modal-template';
import QuestionTemplate from 'src/components/template/question-template';

interface Props {
  id: string | string[] | undefined;
}

interface pageTitle {
  [key: string]: { title: string; todo: string };
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

const pageTitle: pageTitle = {
  '1': {
    title: '今回の退職について',
    todo: '【記入/選択してください】',
  },
  '2': {
    title: '退職後の予定について',
    todo: '【選択してください】',
  },
  '3': {
    title: 'あなたについて',
    todo: '【記入/選択してください】',
  },
  '4': {
    title: 'あなたの家族について',
    todo: '【選択してください】',
  },
  '5': {
    title: '雇用保険について',
    todo: '【選択してください】',
  },
  '6': {
    title: '健康保険について',
    todo: '【選択してください】',
  },
  '7': {
    title: '健康保険について',
    todo: '【選択してください】',
  },
  '8': {
    title: '住民税について',
    todo: '【選択してください】',
  },
};

export default function Question() {
  const router = useRouter();
  const id = router.query.id;
  if (id == null) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <QuestionTemplate
        title={pageTitle[`${id}`].title}
        todo={pageTitle[`${id}`].todo}
      >
        <Content id={id} />
      </QuestionTemplate>

      {id === '1' && (
        <ModalTemplate id='retirement-reason' title='退職事由について'>
          <RetirementReasonReference />
        </ModalTemplate>
      )}
      {id === '5' && (
        <ModalTemplate
          id='how-to-count-emp-period'
          title='被保険者期間の数え方について'
        >
          <EmploymentInsuranceReference />
        </ModalTemplate>
      )}
    </>
  );
}
