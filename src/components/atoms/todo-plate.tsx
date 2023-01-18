import { ReactNode } from 'react';
interface Props {
  children: ReactNode;
}

const TodoPlate = ({ children }: Props) => {
  return (
    <div className='text-black grid w-full h-10 rounded-box bg-primary place-items-center border-secondary border-4'>
      {children}
    </div>
  );
};

export default TodoPlate;
