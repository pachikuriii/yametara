import GuideButton from '../atoms/guide-button';

type Props = {
  handleSubmit: () => void;
  goBackPage: () => void;
};

const PagerButtons = ({ handleSubmit, goBackPage }: Props) => {
  return (
    <div>
      <GuideButton type='button' onClick={goBackPage}>
        戻る
      </GuideButton>
      <GuideButton onClick={handleSubmit}>次へ</GuideButton>
    </div>
  );
};

export default PagerButtons;
