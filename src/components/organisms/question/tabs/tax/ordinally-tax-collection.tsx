import Tab from 'src/components/atoms/tab';
export default function OrdinallyTaxCollection() {
  return (
    <Tab title='普通徴収の特徴' explanation='未納分を一括で支払う方式'>
      <ul className='text-xs text-left py-2 list-disc'>
        <li>
          自治体より送付される納税通知書（納付書）によって自分自身で年1回（一括）または年4回（分割）で納税する
        </li>
      </ul>
    </Tab>
  );
}
