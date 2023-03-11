import Tab from 'src/components/atoms/tab';
export default function DependentInsurance() {
  return (
    <Tab
      title='家族の健康保険の特徴'
      explanation='被保険者である家族が加入している健康保険へ被扶養者として加入することで同一の保険制度を利用できる制度'
    >
      <ul className='text-xs text-left py-2 list-disc'>
        <li>
          被扶養者として認定されるためには、家族の範囲と収入について一定の条件を満たしている必要がある
        </li>
        <li>被扶養者の保険料の負担はなし</li>
      </ul>
    </Tab>
  );
}
