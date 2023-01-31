import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import dayjs from '../day-js';
import { retirementDateState, retirementReasonState } from '../local-stroage';

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

export const useFetchRetirementReason = () => {
  const [storedRetirementReason] = useRecoilState(retirementReasonState);
  const [retirementReason, setRetirementReason] = useState(0);

  useEffect(() => {
    setRetirementReason(storedRetirementReason);
  }, [storedRetirementReason]);

  return [retirementReason];
};

export const useDisplayRetirementReason = () => {
  const [storedRetirementReason] = useRecoilState(retirementReasonState);
  const [displayedRetirementReason, setDisplayedRetirementReason] =
    useState('');

  useEffect(() => {
    const reason = [
      { retirementReason: 1, display: '自己都合' },
      { retirementReason: 2, display: '会社都合' },
      { retirementReason: 3, display: 'その他' },
    ].find((reason) => reason.retirementReason === storedRetirementReason);

    if (reason === undefined) {
      throw Error;
    }
    setDisplayedRetirementReason(reason.display);
  }, [storedRetirementReason]);

  return [displayedRetirementReason];
};
