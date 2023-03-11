import Tab from 'src/components/atoms/tab';
export default function NoTax() {
  return (
    <Tab title='今年度は支払いはなし'>
      <p className='text-xs'>
        前年度の収入が一定以下で今年度の住民税がない場合
      </p>
    </Tab>
  );
}
