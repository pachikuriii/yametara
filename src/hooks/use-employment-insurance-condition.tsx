import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import {
  empInsLastTwoYearsState,
  empInsTotalState,
  retirementReasonState,
} from '../session-stroage';

export const useEmpInsQualification = () => {
  const [storedEmpInsLastTwoYears] = useRecoilState(empInsLastTwoYearsState);
  const [storedEmpInsTotal] = useRecoilState(empInsTotalState);
  const [storedRetirementReason] = useRecoilState(retirementReasonState);
  const [empInsLastTwoYears, setEmpInsLastTwoYears] = useState(0);
  const [retirementReason, setRetirementReason] = useState(0);
  const [empInsQualification, setEmpInsQualification] = useState(false);
  const [empInsTotal, setEmpInsTotal] = useState(0);

  useEffect(() => {
    const RETIRED_WITH_OWN_REASON_AND_INSURANCE =
      retirementReason === 1 && empInsLastTwoYears === 3 && empInsTotal !== 1;
    const RETIRED_WITH_CONPANY_REASON_AND_INSURANCE =
      retirementReason === 2 && empInsLastTwoYears !== 1;
    const RETIRED_WITH_UNINTENTIONAL_REASON_AND_INSURANCE =
      retirementReason === 3 && empInsLastTwoYears !== 1;

    setEmpInsLastTwoYears(storedEmpInsLastTwoYears);
    setRetirementReason(storedRetirementReason);
    setEmpInsTotal(storedEmpInsTotal);
    if (
      RETIRED_WITH_UNINTENTIONAL_REASON_AND_INSURANCE ||
      RETIRED_WITH_CONPANY_REASON_AND_INSURANCE ||
      RETIRED_WITH_OWN_REASON_AND_INSURANCE
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
