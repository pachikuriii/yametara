import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import {
  healthInsAfterRetirementState,
  familyState,
  healthInsLastTwoMonthState,
} from '../../../session-stroage';
import TodoPlate from '../../atoms/todo-plate';
import DependentInsuranceDetail from './details/health-insurance/dependent-insurance';
import NationalInsuranceDetail from './details/health-insurance/national-insurance';
import OptionalInsuranceDetail from './details/health-insurance/optional-insurance';

export default function HealthlInsurance() {
  const [storedHealthInsAfterRetirement] = useRecoilState(
    healthInsAfterRetirementState,
  );
  const [storedFamily] = useRecoilState(familyState);
  const [storedHealthInsLastTwoMonthState] = useRecoilState(
    healthInsLastTwoMonthState,
  );
  const [healthInsAfterRetirement, setHealthInsAfterRetirement] = useState(0);
  const [healthInsLastTwoMonth, setHealthInsLastTwoMonthState] = useState(0);
  const [family, setFamily] = useState(0);

  useEffect(() => {
    setHealthInsAfterRetirement(storedHealthInsAfterRetirement);
    setFamily(storedFamily);
    setHealthInsLastTwoMonthState(storedHealthInsLastTwoMonthState);
  }, [
    storedFamily,
    storedHealthInsAfterRetirement,
    storedHealthInsLastTwoMonthState,
  ]);

  return (
    <div id='health-insurance'>
      <TodoPlate>
        <h4>健康保険</h4>
      </TodoPlate>
      {healthInsAfterRetirement === 1 && <NationalInsuranceDetail />}
      {healthInsLastTwoMonth === 1 && healthInsAfterRetirement === 2 && (
        <OptionalInsuranceDetail />
      )}
      {family === 1 && healthInsAfterRetirement === 3 && (
        <DependentInsuranceDetail />
      )}
    </div>
  );
}
