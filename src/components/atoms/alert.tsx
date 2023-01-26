import { ReactNode } from 'react';
interface Props {
  children: ReactNode;
}

const Alert = ({ children }: Props) => {
  return (
    <div className='alert bg-primary'>
      <div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          className='stroke-accent flex-shrink-0 w-5 h-5'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          ></path>
        </svg>
        <a className='link'>{children}</a>
      </div>
    </div>
  );
};

export default Alert;
