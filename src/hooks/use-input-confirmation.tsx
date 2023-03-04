import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import dayjs from '../day-js';
import { retirementDateState, postcodeState } from '../session-stroage';

export const useDisplayRetirementDate = () => {
  const [storedRetirementDate] = useRecoilState(retirementDateState);
  const [formattedRetirementDate, setFormattedRetirementDate] = useState('');

  useEffect(() => {
    setFormattedRetirementDate(
      dayjs(storedRetirementDate).format('YYYY年M月D日'),
    );
  }, [storedRetirementDate]);

  return [formattedRetirementDate];
};

export const useSample = (storedInfo: any, array: any) => {
  const [stored] = useRecoilState(storedInfo);
  const [state, setState] = useState('');
  const newArray = array.map((value: string, index: number) => {
    index += 1;
    return { key: index, display: value };
  });
  useEffect(() => {
    const reason = newArray.find((component: any) => component.key === stored);
    if (reason === undefined) {
      throw Error;
    }
    setState(reason.display);
  }, [stored, newArray]);

  return [state];
};

export const useDisplayPostcode = () => {
  const [storedPostcode] = useRecoilState(postcodeState);
  const [postcode, setPostcode] = useState('');

  useEffect(() => {
    setPostcode(storedPostcode);
  }, [storedPostcode]);

  return [postcode];
};
