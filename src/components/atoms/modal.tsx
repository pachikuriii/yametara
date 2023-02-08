import { ReactNode } from 'react';
interface Props {
  children: ReactNode;
  id: string;
}

const Modal = ({ children, id }: Props) => {
  return (
    <>
      <input type='checkbox' id={id} className='modal-toggle' />
      <label htmlFor='retirement-reason' className='modal cursor-pointer'>
        <label className='modal-box relative' htmlFor=''>
          <p className='py-4'>{children}</p>
        </label>
      </label>
    </>
  );
};

export default Modal;
