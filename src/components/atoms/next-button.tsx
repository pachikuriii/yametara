import { ButtonHTMLAttributes, ReactNode } from 'react';
import { IconContext } from 'react-icons';
import { IoIosArrowForward } from 'react-icons/io';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick?: () => void;
  children: ReactNode;
  isValid: boolean;
};

const NextButton = ({ children, onClick, isValid, ...props }: Props) => {
  return (
    <button
      id='next-page-button'
      className={
        isValid
          ? 'btn border-2 border-secondary text-white bg-secondary  rounded-xl hover:bg-primary-content  font-extrabold'
          : 'btn border-2 bg-base-200 border-base-200 text-primary-focus rounded-xl font-extrabold hover:bg-neutral-focus  pointer-events-none'
      }
      onClick={onClick}
      {...props}
    >
      <div className='flex flex-row items-center'>
        {children}
        <IconContext.Provider
          value={{
            className: 'global-class-name relative left-1',
            size: '1.2em',
          }}
        >
          <span>
            <IoIosArrowForward />
          </span>
        </IconContext.Provider>
      </div>
    </button>
  );
};

export default NextButton;
