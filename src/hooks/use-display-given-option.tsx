import { useState, useEffect } from 'react';

export const useDisplayGivenOption = (
  recoilState: number | string,
  options: string[],
) => {
  const [state, setState] = useState('');
  const displayedOptions = options.map((value: string, index: number) => {
    index += 1;
    return { key: index, display: value };
  });
  useEffect(() => {
    const givenOption = displayedOptions.find(
      (displayedOption) => displayedOption.key === recoilState,
    );
    if (givenOption) {
      setState(givenOption.display);
    }
  }, [displayedOptions, recoilState]);

  return [state];
};
