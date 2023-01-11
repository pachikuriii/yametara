import { ReactNode } from 'react';
interface Props {
  children: ReactNode;
}

const Card = ({ children }: Props) => {
  return (
    <div className='card w-96 bg-base-100 shadow-md text-base-content'>
      <div className='card-body'>{children}</div>
    </div>
  );
};

export default Card;
