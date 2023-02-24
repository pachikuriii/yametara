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
        <label className='modal-box relative' htmlFor=''>
          <p className='py-4'>{childrenState}</p>
        </label>
      </label>
    </>
  );
};

export default Modal;
