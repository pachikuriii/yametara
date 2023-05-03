import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Loading from 'src/components/atoms/loading';
import QuestionTemplate from 'src/components/template/question-template';
const Q1 = dynamic(() => import('src/components/organisms/question/q1'), {
  loading: () => <Loading />,
  ssr: false,
});
const Q2 = dynamic(() => import('src/components/organisms/question/q2'), {
  loading: () => <p>Loading...</p>,
});
const Q3 = dynamic(() => import('src/components/organisms/question/q3'), {
  loading: () => <p>Loading...</p>,
});
const Q4 = dynamic(() => import('src/components/organisms/question/q4'), {
  loading: () => <p>Loading...</p>,
});
const Q5 = dynamic(() => import('src/components/organisms/question/q5'), {
  loading: () => <p>Loading...</p>,
});
const Q6 = dynamic(() => import('src/components/organisms/question/q6'), {
  loading: () => <p>Loading...</p>,
});
const Q7 = dynamic(() => import('src/components/organisms/question/q7'), {
  loading: () => <p>Loading...</p>,
});
const Q8 = dynamic(() => import('src/components/organisms/question/q8'), {
  loading: () => <p>Loading...</p>,
});
const EmploymentInsuranceReference = dynamic(
  () =>
    import(
      'src/components/organisms/question/modal/employment-insurance-reference'
    ),
  { loading: () => <Loading />, ssr: false },
);
const RetirementReasonReference = dynamic(
  () =>
    import(
      'src/components/organisms/question/modal/retirement-reason-reference'
    ),
  { loading: () => <Loading />, ssr: false },
);
const ModalTemplate = dynamic(
  () => import('src/components/template/modal-template'),
  { loading: () => <Loading />, ssr: false },
);

const Content = ({ id }: { id: string | string[] | undefined }) => {
  return (
    <div>
      {id === '1' && <Q1></Q1>}
      {id === '2' && <Q2></Q2>}
      {id === '3' && <Q3></Q3>}
      {id === '4' && <Q4></Q4>}
      {id === '5' && <Q5></Q5>}
      {id === '6' && <Q6></Q6>}
      {id === '7' && <Q7></Q7>}
      {id === '8' && <Q8></Q8>}
      {!id && <h1>Loading...</h1>}
    </div>
  );
};

const pageTitle: { [key: string]: { title: string; todo: string } } = {
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
