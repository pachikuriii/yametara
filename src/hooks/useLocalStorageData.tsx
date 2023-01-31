import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import dayjs from '../day-js';
import { retirementDateState } from '../local-stroage';

export const useFetchRetirementDate = () => {
  const [storedRetirementDate] = useRecoilState(retirementDateState);
  const [retirementDate, setRetirementDate] = useState('');

  useEffect(() => {
    setRetirementDate(storedRetirementDate);
  }, [storedRetirementDate]);

  return [retirementDate, { setRetirementDate }];
};

export const useFormattedFullRetirementDate = () => {
  const [storedRetirementDate] = useRecoilState(retirementDateState);
  const [formattedRetirementDate, setFormattedRetirementDate] = useState('');

  useEffect(() => {
    setFormattedRetirementDate(
      dayjs(storedRetirementDate).format('YYYY年M月D日'),
    );
  }, [storedRetirementDate]);

  return [formattedRetirementDate];
};
