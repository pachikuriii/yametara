import { ReactNode } from 'react';
import { IconContext } from 'react-icons';
import { BsCheckLg } from 'react-icons/bs';

interface Props {
  children: ReactNode;
  id?: string;
}

const TodoPlate = ({ children, id }: Props) => {
  return (
    <div className='indicator w-full' id={id}>
      <div className='flex flex-row justify-center border-secondary border-2 text-secondary font-extrabold text-2xl w-full h-14 rounded-box bg-white place-items-center'>
        <IconContext.Provider
          value={{
            className: 'global-class-name  absolute left-4',
            size: '1.2em',
          }}
        >
          <BsCheckLg />
        </IconContext.Provider>
        {children}
      </div>
    </div>
  );
};

export default TodoPlate;
