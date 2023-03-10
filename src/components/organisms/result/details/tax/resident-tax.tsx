import Card from 'src/components/atoms/card';
import TodoDetailTemplate from 'src/components/template/todo-detail-template';

export default function ResidentTaxDetail() {
  return (
    <TodoDetailTemplate
      what='住民税の支払い'
      where='口座振替/コンビニなどで'
      when='納付書に記載の期日までに'
      prepare={
        <div className='flex justify-center'>
          <Card>
            <div className='text-center'>
              <p>お住まいの自治体から送られてくる納付書</p>
            </div>
          </Card>
        </div>
      }
      id='resident-tax'
    ></TodoDetailTemplate>
  );
}
