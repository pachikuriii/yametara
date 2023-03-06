import { ReactNode } from 'react';
import { IconContext } from 'react-icons';
import { BsCheckLg } from 'react-icons/bs';

interface Props {
  children: ReactNode;
  id?: string;
}

const TodoPlate = ({ children, id }: Props) => {
  return (
    <div className='indicator w-full my-4 ' id={id}>
      <span className='bg-secondary text-accent indicator-item indicator-start badge badge-secondary rounded-full h-9 w-9 border-4 border-secondary'>
        <IconContext.Provider
          value={{ className: 'global-class-name', size: '1.5em' }}
        >
          <span>
            <BsCheckLg />
          </span>
        </IconContext.Provider>
      </span>
      <div className='text-white font-extrabold text-2xl grid w-full h-14 rounded-box bg-primary place-items-center'>
        {children}
      </div>
    </div>
  );
};

export default TodoPlate;
