export default function RetirementReasonReference() {
  return (
    <div className='text-center'>
      <div className='pb-4'>
        <div className='flex justify-center pb-2'>
          <p className='px-4 py-2 text-accent bg-white rounded-2xl border-2  border-primary  font-extrabold'>
            自己都合
          </p>
        </div>
        <p>「会社都合」と「その他」のいずれにも該当しない退職の場合</p>
      </div>
      <div className='pb-4'>
        <div className='flex justify-center pb-2'>
          <p className='px-4 py-2 text-accent bg-white rounded-2xl border-2  border-primary  font-extrabold'>
            会社都合
          </p>
        </div>
        <p>倒産/解雇等などでの退職の場合</p>
      </div>
      <div>
        <div className='flex justify-center pb-2'>
          <p className='px-4 py-2 text-accent bg-white rounded-2xl border-2  border-primary font-extrabold'>
            その他
          </p>
        </div>
        <div>
          <p>疾病/けが/介護/通勤困難など</p>
          <p>正当な理由のある自己都合での退職の場合</p>
          <p className='text-xs'>
            ※「正当な理由」の詳細は
            <a
              className='link'
              href='https://www.hellowork.mhlw.go.jp/insurance/insurance_range.html'
            >
              ハローワークHP
            </a>
            を参照
          </p>
        </div>
      </div>
    </div>
  );
}
