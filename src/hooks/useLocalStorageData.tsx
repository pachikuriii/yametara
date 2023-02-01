import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import dayjs from '../day-js';
import {
  retirementDateState,
  retirementReasonState,
  reEmploymentState,
} from '../local-stroage';

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

export const useFetchReEmployment = () => {
  const [storedReEmployment] = useRecoilState(reEmploymentState);
  const [reEmployment, setReEmployment] = useState('');

  useEffect(() => {
    setReEmployment(storedReEmployment);
  }, [storedReEmployment]);

  return [reEmployment];
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

export const useDisplayReEmployment = () => {
  const [storedReEmployment] = useRecoilState(reEmploymentState);
  const [displayreEmployment, setDisplayReEmployment] = useState('');

  useEffect(() => {
    const plan = [
      { reEmployment: 1, display: '年内の再就職の予定あり' },
      { reEmployment: 2, display: '年内の再就職の予定なし' },
      { reEmployment: 3, display: '年内の再就職の予定は未定' },
    ].find((plan) => plan.reEmployment === storedReEmployment);

    if (plan === undefined) {
      throw Error;
    }
    setDisplayReEmployment(plan.display);
  }, [storedReEmployment]);

  return [displayreEmployment];
};
