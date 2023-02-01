import { useState, useEffect, ReactNode } from 'react';
import { useRecoilState } from 'recoil';
import dayjs from '../day-js';
import {
  retirementDateState,
  retirementReasonState,
  reEmploymentState,
  ageState,
  postcodeState,
  familyState,
  empInsLastTwoYearsState,
  empInsTotalState,
  healthInsLastTwoMonthState,
  healthInsAfterRetirementState,
  taxState,
} from '../local-stroage';

export const useFetchRetirementDate = () => {
  const [storedRetirementDate] = useRecoilState(retirementDateState);
  const [retirementDate, setRetirementDate] = useState('');

  useEffect(() => {
    setRetirementDate(storedRetirementDate);
  }, [storedRetirementDate]);

  return [retirementDate, { setRetirementDate }];
};

export const useFetchRetirementReason = () => {
  const [storedRetirementReason] = useRecoilState(retirementReasonState);
  const [retirementReason, setRetirementReason] = useState(0);

  useEffect(() => {
    setRetirementReason(storedRetirementReason);
  }, [storedRetirementReason]);

  return [retirementReason];
};

export const useFetchReEmployment = () => {
  const [storedReEmployment] = useRecoilState(reEmploymentState);
  const [reEmployment, setReEmployment] = useState('');

  useEffect(() => {
    setReEmployment(storedReEmployment);
  }, [storedReEmployment]);

  return [reEmployment];
};

export const useFetchAge = () => {
  const [storedAge] = useRecoilState(ageState);
  const [age, setAge] = useState(0);

  useEffect(() => {
    setAge(storedAge);
  }, [storedAge]);

  return [age];
};

export const useFetchPostcode = () => {
  const [storedPostcode] = useRecoilState(postcodeState);
  const [postcode, setPostcode] = useState('');

  useEffect(() => {
    setPostcode(storedPostcode);
  }, [storedPostcode]);

  return [postcode];
};

export const useFetchFamily = () => {
  const [storedFamily] = useRecoilState(familyState);
  const [family, setFamily] = useState(0);

  useEffect(() => {
    setFamily(storedFamily);
  }, [storedFamily]);

  return [family];
};

export const useFetchEmpInsLastTwoYears = () => {
  const [storedEmpInsLastTwoYears] = useRecoilState(empInsLastTwoYearsState);
  const [empInsLastTwoYears, setEmpInsLastTwoYears] = useState(0);

  useEffect(() => {
    setEmpInsLastTwoYears(storedEmpInsLastTwoYears);
  }, [storedEmpInsLastTwoYears]);

  return [empInsLastTwoYears];
};

export const useFetchEmpInsTotal = () => {
  const [storedEmpInsTotal] = useRecoilState(empInsTotalState);
  const [empInsTotal, setEmpInsTotal] = useState(0);

  useEffect(() => {
    setEmpInsTotal(storedEmpInsTotal);
  }, [storedEmpInsTotal]);

  return [empInsTotal];
};

export const useFetchHealthInsLastTwoMonth = () => {
  const [storedHealthInsLastTwoMonth] = useRecoilState(
    healthInsLastTwoMonthState,
  );
  const [healthInsLastTwoMonth, setHealthInsLastTwoMonth] = useState(0);

  useEffect(() => {
    setHealthInsLastTwoMonth(storedHealthInsLastTwoMonth);
  }, [storedHealthInsLastTwoMonth]);

  return [healthInsLastTwoMonth];
};

export const useFetchHealthAfterRetirement = () => {
  const [storedHealthInsAfterRetirement] = useRecoilState(
    healthInsAfterRetirementState,
  );
  const [healthInsAfterRetirement, setHealthInsAfterRetirement] = useState(0);

  useEffect(() => {
    setHealthInsAfterRetirement(storedHealthInsAfterRetirement);
  }, [storedHealthInsAfterRetirement]);

  return [healthInsAfterRetirement];
};

export const useFetchTax = () => {
  const [storedTax] = useRecoilState(taxState);
  const [tax, setTax] = useState(0);

  useEffect(() => {
    setTax(storedTax);
  }, [storedTax]);

  return [tax];
};
