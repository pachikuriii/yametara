import Image from 'next/image';
export default function EmploymentInsuranceReference() {
  return (
    <div className='text-center'>
      <p className='pb-4'>
        以下のいずれかに当てはまる場合は、それまでのすべての雇用保険の被保険者期間はカウントに含めないでください。
      </p>
      <ul>
        <div className='pb-4'>
          <div className='flex justify-center pb-2'>
            <p className='text-accent'>
              ・雇用保険の被保険者でない状態が1年以上続いたことがある場合
            </p>
          </div>
          <Image
            src='/employment-insurance/not-count-over-year.svg'
            alt='logo'
            width='400'
            height='100'
            className='mx-auto pb-4'
          />
          <Image
            src='/employment-insurance/count.svg'
            alt='logo'
            width='400'
            height='100'
            className='mx-auto'
          />
        </div>

        <div>
          <div className='flex justify-center pb-2'>
            <p className='text-accent '>
              ・雇用保険の被保険者でなくなったのち、失業手当の受給を受けたことがある場合
            </p>
          </div>
          <Image
            src='/employment-insurance/not-count-paid.svg'
            alt='logo'
            width='400'
            height='100'
            className='mx-auto'
          />
        </div>
      </ul>
    </div>
  );
}
