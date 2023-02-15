import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import dayjs from '../../../day-js';
import {
  taxState,
  empInsLastTwoYearsState,
  retirementReasonState,
  retirementDateState,
} from '../../../session-stroage';
import CheckedTodoPlate from '../../molecules/checked-todo-plate';

const Todo = () => {
  const [retirementDate] = useRecoilState(retirementDateState);
  const [retirementDateToDisplay, setRetirementDateToDisplay] = useState('');
  const [storedTax] = useRecoilState(taxState);
  const [storedEmpInsLastTwoYears] = useRecoilState(empInsLastTwoYearsState);
  const [storedRetirementReason] = useRecoilState(retirementReasonState);
  const [tax, setTax] = useState(0);
  const [empInsLastTwoYears, setEmpInsLastTwoYears] = useState(0);
  const [retirementReason, setRetirementReason] = useState(0);

  useEffect(() => {
    setTax(storedTax);
    setEmpInsLastTwoYears(storedEmpInsLastTwoYears);
    setRetirementDateToDisplay(dayjs(retirementDate).format('YYYY年M月DD日'));
    setRetirementReason(storedRetirementReason);
  }, [
    storedTax,
    storedEmpInsLastTwoYears,
    storedRetirementReason,
    retirementDate,
  ]);

  // 雇用保険
  const RETIRED_WITH_UNINTENTIONAL_REASON_AND_INSURANCE =
    retirementReason === 3 && empInsLastTwoYears !== 1;

  const RETIRED_WITH_CONPANY_REASON_AND_INSURANCE =
    retirementReason === 2 && empInsLastTwoYears !== 1;

  const RETIRED_WITH_OWN_REASON_AND_INSURANCE =
    retirementReason === 1 && empInsLastTwoYears === 3;

  return (
    <>
      <p>
        あなたが{retirementDateToDisplay}
        に会社を辞めたら以下についての手続きが必要です。
      </p>
      <div className='h-[calc(100vh-8rem)] py-20'>
        <div>
          <CheckedTodoPlate>健康保険</CheckedTodoPlate>
          <CheckedTodoPlate>年金</CheckedTodoPlate>
          <CheckedTodoPlate
            additionalClassName={
              RETIRED_WITH_UNINTENTIONAL_REASON_AND_INSURANCE ||
              RETIRED_WITH_CONPANY_REASON_AND_INSURANCE ||
              RETIRED_WITH_OWN_REASON_AND_INSURANCE
                ? ''
                : ' hidden'
            }
          >
            雇用保険
          </CheckedTodoPlate>
          <CheckedTodoPlate additionalClassName={tax === 2 ? '' : ' hidden'}>
            税金
          </CheckedTodoPlate>
        </div>
      </div>
    </>
  );
};

export default Todo;
