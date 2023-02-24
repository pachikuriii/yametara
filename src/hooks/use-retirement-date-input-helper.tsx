import { usePatternFormat } from 'react-number-format';

export const useRetirementDateInputHelper = (props: any) => {
  const { format } = usePatternFormat({
    ...props,
    format: '####-##-##',
  });

  const formattedValue = (value: string) => {
    const year = value.substring(0, 4);
    let month = value.substring(4, 6);
    let day = value.substring(6, 8);

    if (month.length === 1 && Number(month[0]) > 1) {
      month = `0${month[0]}`;
    } else if (month.length === 2) {
      if (Number(month) === 0) {
        month = `01`;
      } else if (Number(month) > 12) {
        month = '12';
      }
    }

    if (day.length === 1 && Number(day[0]) > 3) {
      day = `0${day[0]}`;
    } else if (day.length === 2) {
      if (Number(day) === 0) {
        day = `01`;
      } else if (Number(day) > 31) {
        day = '31';
      }
    }
    return format(`${year}${month}${day}`);
  };
  return formattedValue;
};
