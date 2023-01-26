import CheckedTodoPlate from '../../molecules/checked-todo-plate';

interface Props {
  tax: number;
}

const Main = (props: Props) => {
  return (
    <>
      <div className='flex flex-col w-1/3 '>
        <CheckedTodoPlate className={props.tax === 4 ? 'hidden' : ''}>
          健康保険
        </CheckedTodoPlate>
        <CheckedTodoPlate className={props.tax === 3 ? 'hidden' : ''}>
          年金
        </CheckedTodoPlate>
        <CheckedTodoPlate className={props.tax === 2 ? ' hidden' : ''}>
          雇用保険
        </CheckedTodoPlate>
        <CheckedTodoPlate className={props.tax === 3 ? ' hidden' : ''}>
          税金
        </CheckedTodoPlate>
      </div>
    </>
  );
};

export default Main;
