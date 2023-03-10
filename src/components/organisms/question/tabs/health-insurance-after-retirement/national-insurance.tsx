import Tab from 'src/components/atoms/tab';
export default function NationalInsurance() {
  return (
    <Tab
      title='国民健康保険の特徴'
      explanation='会社員や公務員以外の全ての住民を対象とした保険'
    >
      <ul className='text-xs text-left py-2 list-disc'>
        <li>前年の所得や世帯人員数に応じて保険料が決まる</li>
        <li>保険料の減免制度が受けられる場合がある</li>
        <li>居住している市区町村により保険料額が異なる</li>
      </ul>
    </Tab>
  );
}
