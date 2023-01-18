import { useEffect, useState } from 'react';
import LocalStorage from '../../../local-stroage';

interface Props {
  onClick?: () => void;
  openTab: number;
  setOpenTab: (tab: number) => void;
}

const Tabs = (props: Props) => {
  const [tab, setTab] = useState(1);
  useEffect(() => {
    props.setOpenTab(tab);
  });
  return (
    <>
      <a
        className={
          'tab ' + (tab === 1 ? 'bg-accent rounded-full text-primary' : '')
        }
        onClick={(event) => {
          event.preventDefault();
          setTab(1);
        }}
      >
        健康保険
      </a>

      <a
        className={
          'tab ' + (tab === 2 ? 'bg-accent rounded-full text-primary' : '')
        }
        onClick={(event) => {
          event.preventDefault();
          setTab(2);
        }}
      >
        年金
      </a>

      <a
        className={
          'tab ' + (tab === 3 ? 'bg-accent rounded-full text-primary' : '')
        }
        onClick={(event) => {
          event.preventDefault();
          setTab(3);
        }}
      >
        雇用保険
      </a>
      <a
        className={
          'tab ' +
          (tab === 4 ? 'bg-accent rounded-full text-primary' : '') +
          (LocalStorage.fetch().tax === 1 ? ' hidden' : '')
        }
        onClick={(event) => {
          event.preventDefault();
          setTab(4);
        }}
      >
        税金
      </a>
    </>
  );
};

export default Tabs;
