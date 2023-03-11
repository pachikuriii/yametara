import { HelloWork } from 'jp-hello-work';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { postcodeState } from '../storage/session-stroage';
type helloWorkName = string[];

export const useRequireHellowork = () => {
  const [storedPostcode] = useRecoilState(postcodeState);
  const [helloWork, setHelloWork] = useState<helloWorkName>([]);
  useEffect(() => {
    const helloWork = HelloWork.byZipCode(storedPostcode.replace(/-/g, ''));
    setHelloWork(
      helloWork.name.map((name) => {
        return `ハローワーク${name}`;
      }),
    );
  }, [storedPostcode]);
  return [helloWork];
};
