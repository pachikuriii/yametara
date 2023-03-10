import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { taxState, reEmploymentState } from '../../../session-stroage';
import TodoPlate from '../../atoms/todo-plate';
import IncomeTaxDetail from './details/tax/income-tax';
import ResidentTaxDetail from './details/tax/resident-tax';

export default function Tax() {
  const [storedTax] = useRecoilState(taxState);
  const [storedReEmployment] = useRecoilState(reEmploymentState);
  const [tax, setTax] = useState(0);
  const [reEmployment, setReEmployment] = useState(0);

  useEffect(() => {
    setTax(storedTax);
    setReEmployment(storedReEmployment);
  }, [storedReEmployment, storedTax]);

  return (
    <div>
      {(reEmployment !== 1 || tax === 2) && (
        <div id='tax'>
          <TodoPlate>税金</TodoPlate>
          {tax === 2 && <ResidentTaxDetail />}
          {reEmployment !== 1 && <IncomeTaxDetail />}
        </div>
      )}
    </div>
  );
}
