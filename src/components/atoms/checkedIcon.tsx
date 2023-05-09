import { IconContext } from 'react-icons';
import { BsCheckLg } from 'react-icons/bs';
interface Props {
  size?: string;
}

const CheckedIcon = ({ size = '1em' }: Props) => {
  return (
    <IconContext.Provider
      value={{
        className: 'global-class-name absolute left-4 text-primary-focus',
        size: size,
      }}
    >
      <BsCheckLg />
    </IconContext.Provider>
  );
};

export default CheckedIcon;
