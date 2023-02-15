import { ReactNode } from 'react';
interface Props {
  children: ReactNode;
}

const TodoPlate = ({ children }: Props) => {
  return (
    <div className='text-white font-extrabold text-2xl grid w-full h-14 rounded-box bg-primary place-items-center'>
      {children}
    </div>
  );
};

export default TodoPlate;
