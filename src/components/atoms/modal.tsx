import { ReactNode } from 'react';
interface Props {
  children: ReactNode;
  label: ReactNode;
  id: string;
}

const Modal = ({ label, children, id }: Props) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type='checkbox' id={id} className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box relative'>
          <label
            htmlFor={id}
            className='btn btn-sm btn-circle absolute right-2 top-2'
          >
            ✕
          </label>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
