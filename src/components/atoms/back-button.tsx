import { ButtonHTMLAttributes, ReactNode } from 'react';
import { IconContext } from 'react-icons';
import { IoIosArrowBack } from 'react-icons/io';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick?: () => void;
  children: ReactNode;
};

const BackButton = ({ children, onClick, ...props }: Props) => {
  return (
    <button
      className='btn  border-2 border-primary-focus text-secondary rounded-xl bg-transparent hover:bg-primary hover:text-white hover:border-primary font-extrabold'
      onClick={onClick}
      {...props}
    >
      <div className='flex flex-row items-center'>
        <IconContext.Provider
          value={{
            className: 'global-class-name relative right-1',
            size: '1.2em',
          }}
        >
          <span>
            <IoIosArrowBack />
          </span>
        </IconContext.Provider>
        {children}
      </div>
    </button>
  );
};

export default BackButton;
