import { useEffect, useState } from 'react';

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
        className={'tab ' + (tab === 1 ? 'tab-active' : '')}
        onClick={(event) => {
          event.preventDefault();
          setTab(1);
        }}
      >
        健康保険
      </a>

      <a
        className={'tab ' + (tab === 2 ? 'tab-active' : '')}
        onClick={(event) => {
          event.preventDefault();
          setTab(2);
        }}
      >
        年金
      </a>

      <a
        className={'tab ' + (tab === 3 ? 'tab-active' : '')}
        onClick={(event) => {
          event.preventDefault();
          setTab(3);
        }}
      >
        雇用保険
      </a>
      <a
        className={'tab ' + (tab === 4 ? 'tab-active' : '')}
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
