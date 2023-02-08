import { ReactNode } from 'react';
interface Props {
  children: ReactNode;
}

const Card = ({ children }: Props) => {
  return (
    <div className='card max-sm:w-full md:w-96 bg-base-100 shadow-basic h-max text-base-content'>
      <div className='card-body py-6 px-4 text-gray-800 text-center'>
        {children}
      </div>
    </div>
  );
};

export default Card;
