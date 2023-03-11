import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const TabTemplate = ({ children }: Props) => {
  return (
    <div className='tab-content tab-space w-11/12 mx-auto'>{children}</div>
  );
};
export default TabTemplate;
