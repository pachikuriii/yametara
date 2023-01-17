import { ReactNode } from 'react';
interface Props {
  children: ReactNode;
}

const CheckedCard = ({ children }: Props) => {
  return (
    <div className='indicator w-full'>
      <span className='bg-secondary text-accent indicator-item indicator-start badge badge-secondary rounded-full h-7 w-7 border-4 border-secondary'>
        ✔︎
      </span>
      <div className='text-black grid w-full h-10 rounded-box  bg-primary place-items-center border-secondary border-4'>
        {children}
      </div>
    </div>
  );
};

export default CheckedCard;
