import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import {
  empInsLastTwoYearsState,
  empInsTotalState,
  retirementReasonState,
} from '../storage/session-stroage';

export const useEmpInsQualification = () => {
  const [storedEmpInsLastTwoYears] = useRecoilState(empInsLastTwoYearsState);
  const [storedEmpInsTotal] = useRecoilState(empInsTotalState);
  const [storedRetirementReason] = useRecoilState(retirementReasonState);
  const [empInsLastTwoYears, setEmpInsLastTwoYears] = useState(0);
  const [retirementReason, setRetirementReason] = useState(0);
  const [empInsQualification, setEmpInsQualification] = useState(false);
  const [empInsTotal, setEmpInsTotal] = useState(0);

  useEffect(() => {
    const retiredWithOwnReasonAndInsurance =
      retirementReason === 1 && empInsLastTwoYears === 3 && empInsTotal !== 1;
    const retiredWithCompanyReasonAndInsurance =
      retirementReason === 2 && empInsLastTwoYears !== 1;
    const retiredWithUnintentionalReasonAndInsurance =
      retirementReason === 3 && empInsLastTwoYears !== 1;

    setEmpInsLastTwoYears(storedEmpInsLastTwoYears);
    setRetirementReason(storedRetirementReason);
    setEmpInsTotal(storedEmpInsTotal);
    if (
      retiredWithOwnReasonAndInsurance ||
      retiredWithCompanyReasonAndInsurance ||
      retiredWithUnintentionalReasonAndInsurance
    ) {
      setEmpInsQualification(true);
    }
  }, [
    storedEmpInsLastTwoYears,
    storedRetirementReason,
    empInsLastTwoYears,
    retirementReason,
    empInsTotal,
    storedEmpInsTotal,
  ]);

  return [empInsQualification];
};
