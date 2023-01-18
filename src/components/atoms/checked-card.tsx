import { ReactNode } from 'react';
import Check from './check';
interface Props {
  children: ReactNode;
  className: String;
}

const CheckedCard = ({ children, className }: Props) => {
  return (
    <div className={'indicator w-full' + className}>
      <Check></Check>
      <div className='text-black grid w-full h-10 rounded-box  bg-primary place-items-center border-secondary border-4'>
        {children}
      </div>
    </div>
  );
};

export default CheckedCard;
