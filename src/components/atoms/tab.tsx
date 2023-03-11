import { ReactNode } from 'react';
import { IconContext } from 'react-icons';
import { RiMoneyCnyCircleFill } from 'react-icons/ri';
interface Props {
  title: string;
  explanation: string;
  children: ReactNode;
}

const Tab = ({ title, explanation, children }: Props) => {
  return (
    <div>
      <IconContext.Provider
        value={{
          className: 'global-class-name',
          style: {
            display: 'inline',
          },
          size: '1.3em',
        }}
      >
        <h3>
          <RiMoneyCnyCircleFill /> {title}
        </h3>
      </IconContext.Provider>
      <p className='text-xs pt-2'>{explanation}</p>
      <div className='flex justify-center'>{children}</div>
    </div>
  );
};
export default Tab;
