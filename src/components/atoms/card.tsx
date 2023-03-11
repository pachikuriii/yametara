import { ReactNode } from 'react';
interface Props {
  children: ReactNode;
}

const Card = ({ children }: Props) => {
  return (
    <div className='card w-full text-gray-800 text-center bg-white shadow-basic'>
      <div className='py-4 px-4 max-w-lg mx-auto'>{children}</div>
    </div>
  );
};

export default Card;
