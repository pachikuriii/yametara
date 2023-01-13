import { useState, useEffect } from 'react';
import AnswerSelectButton from '../atoms/answer-select-button';

interface Props {
  selectedButton: number;
  onClick?: () => void;
  setSelectedButton: (button: number) => void;
}

const RetirementReasonButton = (props: Props) => {
  const [reasonButton, setSelectedButton] = useState(0);
  useEffect(() => {
    props.setSelectedButton(reasonButton);
  });
  return (
    <div>
      <AnswerSelectButton onClick={() => setSelectedButton(1)}>
        自己都合
      </AnswerSelectButton>
      <AnswerSelectButton onClick={() => setSelectedButton(2)}>
        会社都合
      </AnswerSelectButton>
      <AnswerSelectButton onClick={() => setSelectedButton(3)}>
        その他
      </AnswerSelectButton>
    </div>
  );
};

export default RetirementReasonButton;
