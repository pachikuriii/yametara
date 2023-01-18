import { ReactNode } from 'react';
import Check from '../../atoms/check';
import TodoPlate from '../../atoms/todo-plate';
interface Props {
  children: ReactNode;
  className: String;
}

const CheckedTodoPlate = ({ children, className }: Props) => {
  return (
    <div className={'indicator w-full' + className}>
      <Check></Check>
      <TodoPlate>{children}</TodoPlate>
    </div>
  );
};

export default CheckedTodoPlate;
