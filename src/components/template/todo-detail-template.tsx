import { ReactNode } from 'react';
interface Props {
  what: ReactNode;
  where: ReactNode;
  when: ReactNode;
  prepare: ReactNode;
  id?: string;
}

const TodoDetailTemplate = ({ what, where, when, prepare, id }: Props) => {
  return (
    <div className='text-center' id={id}>
      <p className='text-xs border-b-4 border-accent border-dotted w-fit'>
        なにを？
      </p>
      <h5 className='text-xl font-extrabold'>{what}</h5>
      <p className='text-xs border-b-4 border-accent border-dotted w-fit'>
        どこで？
      </p>
      <div>{where}</div>
      <p className='text-xs border-b-4 border-accent border-dotted w-fit'>
        いつまでに？
      </p>
      <div>{when}</div>
      <p className='text-xs border-b-4 border-accent border-dotted w-fit'>
        用意するもの
      </p>
      <div>{prepare}</div>
    </div>
  );
};

export default TodoDetailTemplate;