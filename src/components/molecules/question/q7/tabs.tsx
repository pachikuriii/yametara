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
        className={
          'tab ' + (tab === 1 ? 'bg-accent rounded-full text-primary' : '')
        }
        onClick={(event) => {
          event.preventDefault();
          setTab(1);
        }}
      >
        任意継続健康保険
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
        国民健康保険
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
        家族の健康保険（被扶養者）
      </a>
    </>
  );
};

export default Tabs;
