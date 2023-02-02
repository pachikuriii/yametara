import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import {
  taxState,
  empInsLastTwoYearsState,
  retirementReasonState,
} from '../../../session-stroage';
import CheckedTodoPlate from '../../molecules/checked-todo-plate';

const Todo = () => {
  const [storedTax] = useRecoilState(taxState);
  const [storedEmpInsLastTwoYears] = useRecoilState(empInsLastTwoYearsState);
  const [storedRetirementReason] = useRecoilState(retirementReasonState);
  const [tax, setTax] = useState(0);
  const [empInsLastTwoYears, setEmpInsLastTwoYears] = useState(0);
  const [retirementReason, setRetirementReason] = useState(0);

  useEffect(() => {
    setTax(storedTax);
    setEmpInsLastTwoYears(storedEmpInsLastTwoYears);
    setRetirementReason(storedRetirementReason);
  }, [storedTax, storedEmpInsLastTwoYears, storedRetirementReason]);

  // 雇用保険
  const RETIRED_WITH_UNINTENTIONAL_REASON_AND_INSURANCE =
    retirementReason === 3 && empInsLastTwoYears !== 1;

  const RETIRED_WITH_CONPANY_REASON_AND_INSURANCE =
    retirementReason === 2 && empInsLastTwoYears !== 1;

  const RETIRED_WITH_OWN_REASON_AND_INSURANCE =
    retirementReason === 1 && empInsLastTwoYears === 3;

  return (
    <>
      <div className='flex flex-col w-1/3 '>
        <CheckedTodoPlate>健康保険</CheckedTodoPlate>
        <CheckedTodoPlate>年金</CheckedTodoPlate>
        <CheckedTodoPlate
          className={
            RETIRED_WITH_UNINTENTIONAL_REASON_AND_INSURANCE ||
            RETIRED_WITH_CONPANY_REASON_AND_INSURANCE ||
            RETIRED_WITH_OWN_REASON_AND_INSURANCE
              ? ''
              : ' hidden'
          }
        >
          雇用保険
        </CheckedTodoPlate>
        <CheckedTodoPlate className={tax === 2 ? '' : ' hidden'}>
          税金
        </CheckedTodoPlate>
      </div>
    </>
  );
};

export default Todo;
