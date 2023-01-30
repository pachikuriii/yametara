import { ReactNode } from 'react';
import Alert from '../atoms/alert';
interface Props {
  children: ReactNode;
  label: string;
  id: string;
}

const ModalRemarks = ({ label, children, id }: Props) => {
  return (
    <div>
      <label htmlFor={id}>
        <Alert>{label}</Alert>
      </label>
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

export default ModalRemarks;
