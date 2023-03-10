import Tab from 'src/components/atoms/tab';
export default function OptionalInsurance() {
  return (
    <Tab
      title='任意継続制度の特徴'
      explanation='一定条件のもとで個人の希望により、それまで加入していた健康保険に個人でさらに最長2年間継続して加入できる制度'
    >
      <ul className='text-xs text-left py-2 list-disc'>
        <li>
          在職時は事業主と折半していた保険料を全額自己負担する形となるため原則、退職時の給与から天引きされる保険料の倍額（
          ≒ 退職時の標準報酬月額×継続しようとする健康保険が定める料率）が保険料
        </li>
        <li>扶養家族の保険料はかからない</li>
        <li>継続期間中に保険料は原則変わらない</li>
      </ul>
    </Tab>
  );
}
