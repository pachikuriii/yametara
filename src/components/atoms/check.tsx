import { IconContext } from 'react-icons';
import { BsCheckLg } from 'react-icons/bs';

const Check = () => {
  return (
    <span className='bg-secondary text-accent indicator-item indicator-start badge badge-secondary rounded-full h-7 w-7 border-4 border-secondary'>
      <IconContext.Provider
        value={{ className: 'global-class-name', size: '0.9em' }}
      >
        <span>
          <BsCheckLg />
        </span>
      </IconContext.Provider>
    </span>
  );
};

export default Check;
