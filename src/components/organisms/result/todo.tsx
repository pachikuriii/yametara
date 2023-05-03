import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import dayjs from '../../../day-js';
import {
  taxState,
  empInsLastTwoYearsState,
  retirementReasonState,
  retirementDateState,
  reEmploymentState,
} from '../../../storage/session-stroage';
import TodoPlate from '../../atoms/todo-plate';
import CheckedIcon from 'src/components/atoms/checkedIcon';
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
    <div className='text-center'>
      <div className='pt-2' id='todo-retirement-date'>
        <p>
          <span className='font-semibold text-accent'>
            {retirementDateToDisplay}
          </span>
          に会社を辞めたら
        </p>
        <p>以下についての手続きが必要です。</p>
      </div>

      <div className='overflow-x-auto pt-10 pb-20'>
        <table className='table w-full'>
          <tbody>
            <tr id='todo-health-insurance-plate'>
              <td className='text-center flex flex-row justify-center text-secondary font-extrabold text-2xl w-full h-16 bg-white place-items-center'>
                <CheckedIcon />
                健康保険
              </td>
            </tr>
            <tr id='todo-pension-plate'>
              <td className='text-center flex flex-row justify-center text-secondary font-extrabold text-2xl w-full h-16  bg-white place-items-center'>
                <CheckedIcon />
                年金
              </td>
            </tr>
            {empInsQualification && (
              <tr id='todo-employment-insurance-plate'>
                <td className='text-center flex flex-row justify-center text-secondary font-extrabold text-2xl w-full h-16  bg-white place-items-center'>
                  <CheckedIcon />
                  雇用保険
                </td>
              </tr>
            )}
            {(reEmployment !== 1 || tax === 2) && (
              <tr id='todo-tax-plate'>
                <td className='text-center flex flex-row justify-center text-secondary font-extrabold text-2xl w-full h-16  bg-white place-items-center'>
                  <CheckedIcon />
                  税金
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {/* <div className='pt-10 pb-20'>
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
      </div> */}
    </div>
  );
};

export default Todo;
