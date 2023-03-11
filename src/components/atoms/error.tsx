import { ReactNode } from 'react';
interface Props {
  children: ReactNode;
}

const Error = ({ children }: Props) => {
  return <p className='text-accent py-1 text-sm'>{children}</p>;
};

export default Error;
