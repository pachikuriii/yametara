import { ReactNode } from 'react';
import Modal from '../atoms/modal';
interface Props {
  id: string;
  title: string;
  children: ReactNode;
}

const ModalTemplate = ({ id, title, children }: Props) => {
  return (
    <div>
      <Modal id={id}>
        <div className='w-full bg-primary'>
          <h2 className='text-white text-xl text-center py-2 font-extrabold'>
            {title}
          </h2>
        </div>
        <div className='px-6 py-6'>{children}</div>
      </Modal>
    </div>
  );
};

export default ModalTemplate;
