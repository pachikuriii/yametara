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
import { useEmpInsQualification } from 'src/hooks/use-employment-insurance-condition';

const Todo = () => {
  const [retirementDate] = useRecoilState(retirementDateState);
  const [retirementDateToDisplay, setRetirementDateToDisplay] = useState('');
  const [storedTax] = useRecoilState(taxState);
  const [storedEmpInsLastTwoYears] = useRecoilState(empInsLastTwoYearsState);
  const [storedRetirementReason] = useRecoilState(retirementReasonState);
  const [tax, setTax] = useState(0);
  const [empInsQualification] = useEmpInsQualification();

  useEffect(() => {
    setTax(storedTax);
    setRetirementDateToDisplay(dayjs(retirementDate).format('YYYY年M月DD日'));
  }, [
    storedTax,
    storedEmpInsLastTwoYears,
    storedRetirementReason,
    retirementDate,
  ]);

  return (
    <>
      <p className='text-center'>
        あなたが{retirementDateToDisplay}
        に会社を辞めたら以下についての手続きが必要です。
      </p>
      <div className='h-[calc(100vh-8rem)] py-20'>
        <div>
          <CheckedTodoPlate>健康保険</CheckedTodoPlate>
          <CheckedTodoPlate>年金</CheckedTodoPlate>
          <CheckedTodoPlate
            additionalClassName={empInsQualification ? '' : ' hidden'}
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
