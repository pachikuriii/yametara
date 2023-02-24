import { UseFormSetValue } from 'react-hook-form';
import AnswerSelectButton from '../atoms/answer-button';
import { formInput } from 'src/types/type';
type Props = {
  labels: Array<string>;
  setValue: UseFormSetValue<formInput>;
  originalStyling?: string;
  property:
    | 'retirementDate'
    | 'retirementReason'
    | 're_employment'
    | 'age'
    | 'postcode'
    | 'family'
    | 'emp_ins_total'
    | 'emp_ins_last_two_years'
    | 'health_ins_last_two_month'
    | 'health_ins_after_retirement'
    | 'tax';
};

const AnswerSelectButtons = ({
  labels,
  setValue,
  property,
  originalStyling,
}: Props) => {
  return (
    <div className='flex space-x-4 justify-center'>
      {labels.map((value, index) => {
        index += 1;
        return (
          <AnswerSelectButton
            type='button'
            key={index}
            onClick={() => setValue(property, index)}
            originalStyling={originalStyling}
          >
            {value}
          </AnswerSelectButton>
        );
      })}
    </div>
  );
};

export default AnswerSelectButtons;
