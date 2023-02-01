import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import dayjs from '../day-js';
import {
  retirementDateState,
  retirementReasonState,
  reEmploymentState,
  ageState,
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

export const useFetchAge = () => {
  const [storedAge] = useRecoilState(ageState);
  const [age, setAge] = useState(0);

  useEffect(() => {
    setAge(storedAge);
  }, [storedAge]);

  return [age];
};

export const useDisplayRetirementReason = () => {
  const [storedRetirementReason] = useRecoilState(retirementReasonState);
  const [displayRetirementReason, setDisplayRetirementReason] = useState('');

  useEffect(() => {
    const reason = [
      { retirementReason: 1, display: '自己都合' },
      { retirementReason: 2, display: '会社都合' },
      { retirementReason: 3, display: 'その他' },
    ].find((reason) => reason.retirementReason === storedRetirementReason);

    if (reason === undefined) {
      throw Error;
    }
    setDisplayRetirementReason(reason.display);
  }, [storedRetirementReason]);

  return [displayRetirementReason];
};

export const useDisplayReEmployment = () => {
  const [storedReEmployment] = useRecoilState(reEmploymentState);
  const [displayReEmployment, setDisplayReEmployment] = useState('');

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

  return [displayReEmployment];
};

export const useDisplayAge = () => {
  const [storedAge] = useRecoilState(ageState);
  const [displayAge, setDisplayAge] = useState('');

  useEffect(() => {
    const givenChoice = [
      { age: 1, display: '30歳未満' },
      { age: 2, display: '30歳以上35歳未満' },
      { age: 3, display: '35歳以上45歳未満' },
      { age: 4, display: '45歳以上60歳未満' },
      { age: 5, display: '60歳以上65歳未満' },
    ].find((choice) => choice.age === storedAge);

    if (givenChoice === undefined) {
      throw Error;
    }
    setDisplayAge(givenChoice.display);
  }, [storedAge]);

  return [displayAge];
};
