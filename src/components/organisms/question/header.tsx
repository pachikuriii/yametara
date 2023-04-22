import Image from 'next/image';
import Link from 'next/link';
interface Props {
  title: string;
  todo?: string;
}

const Header = ({ title, todo }: Props) => {
  return (
    <header className='pt-2 pb-4 bg-primary text-center text-secondary font-extrabold text-sm'>
      <div className='pb-2 flex justify-center'>
        <Link href='/'>
          <Image
            src='/yametara-logo-question.svg'
            alt='yametaraのロゴ'
            width='130'
            height='100'
            loading='eager'
          />
        </Link>
      </div>
      <h1 className='text-2xl mb-2'>{title}</h1>
      {todo && <p>{todo}</p>}
    </header>
  );
};

export default Header;
