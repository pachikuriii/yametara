import { IconContext } from 'react-icons';
import { BsCheckLg } from 'react-icons/bs';

const Check = () => {
  return (
    <span className='bg-secondary text-accent indicator-item indicator-start badge badge-secondary rounded-full h-9 w-9 border-4 border-secondary'>
      <IconContext.Provider
        value={{ className: 'global-class-name', size: '1.5em' }}
      >
        <span>
          <BsCheckLg />
        </span>
      </IconContext.Provider>
    </span>
  );
};

export default Check;
