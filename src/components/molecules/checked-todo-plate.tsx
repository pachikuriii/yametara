import { ReactNode } from 'react';
import Check from '../atoms/check';
import TodoPlate from '../atoms/todo-plate';
interface Props {
  children: ReactNode;
  additionalClassName?: String;
}

const CheckedTodoPlate = ({ children, additionalClassName }: Props) => {
  return (
    <div className={'indicator w-full my-4 ' + additionalClassName}>
      <Check></Check>
      <TodoPlate>{children}</TodoPlate>
    </div>
  );
};

export default CheckedTodoPlate;
