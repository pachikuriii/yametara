import { ReactNode } from 'react';
interface Props {
  children: ReactNode;
}

const Card = ({ children }: Props) => {
  return (
    <div className='card w-full text-gray-800 text-left bg-white shadow-basic mt-4 mb-10'>
      <div className='py-4 px-4 max-w-lg'>{children}</div>
    </div>
  );
};

export default Card;
