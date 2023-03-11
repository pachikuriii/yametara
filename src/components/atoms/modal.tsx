import { ReactNode, useEffect, useState } from 'react';
interface Props {
  children: ReactNode;
  id: string;
}

const Modal = ({ children, id }: Props) => {
  const [idState, setIdState] = useState('');
  const [childrenState, setChildrenState] = useState<ReactNode>();
  useEffect(() => {
    setIdState(id);
    setChildrenState(children);
  }, [id, children]);
  return (
    <>
      <input type='checkbox' id={idState} className='modal-toggle' />
      <label htmlFor={idState} className='modal cursor-pointer'>
        <label className='modal-box relative py-0 px-0' htmlFor={idState}>
          <label
            htmlFor={idState}
            className='btn btn-sm btn-circle absolute right-2 top-2 bg-secondary border-none'
          >
            ✕
          </label>
          <div>{childrenState}</div>
        </label>
      </label>
    </>
  );
};

export default Modal;
