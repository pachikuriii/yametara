import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import dayjs from '../../../day-js';
import {
  taxState,
  empInsLastTwoYearsState,
  retirementReasonState,
  retirementDateState,
  reEmploymentState,
} from '../../../session-stroage';
import TodoPlate from '../../atoms/todo-plate';
import { useEmpInsQualification } from 'src/hooks/use-employment-insurance-condition';

const Todo = () => {
  const [retirementDate] = useRecoilState(retirementDateState);
  const [retirementDateToDisplay, setRetirementDateToDisplay] = useState('');
  const [storedTax] = useRecoilState(taxState);
  const [storedEmpInsLastTwoYears] = useRecoilState(empInsLastTwoYearsState);
  const [storedRetirementReason] = useRecoilState(retirementReasonState);
  const [storedReEmployment] = useRecoilState(reEmploymentState);
  const [tax, setTax] = useState(0);
  const [reEmployment, setReEmployment] = useState(0);
  const [empInsQualification] = useEmpInsQualification();

  useEffect(() => {
    setTax(storedTax);
    setRetirementDateToDisplay(dayjs(retirementDate).format('YYYY年M月D日'));
    setReEmployment(storedReEmployment);
  }, [
    storedTax,
    storedEmpInsLastTwoYears,
    storedRetirementReason,
    storedReEmployment,
    retirementDate,
  ]);

  return (
    <div>
      <p className='text-center' id='todo-retirement-date'>
        あなたが{retirementDateToDisplay}
        に会社を辞めたら以下についての手続きが必要です。
      </p>
      <div className='h-[calc(100vh-8rem)] py-20'>
        <div>
          <TodoPlate id='todo-health-insurance-plate'>健康保険</TodoPlate>
          <TodoPlate id='todo-pension-plate'>年金</TodoPlate>
          {empInsQualification && (
            <TodoPlate id='todo-employment-insurance-plate'>雇用保険</TodoPlate>
          )}
          {(reEmployment !== 1 || tax === 2) && (
            <TodoPlate id='todo-tax-plate'>税金</TodoPlate>
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;
