import { ReactNode } from 'react';
interface Props {
  children: ReactNode;
}

const Card = ({ children }: Props) => {
  return (
    <div className='card max-sm:w-full md:w-96 text-gray-800 text-center  bg-white shadow-basic'>
      <div className='py-6 px-4'>{children}</div>
    </div>
  );
};

export default Card;
