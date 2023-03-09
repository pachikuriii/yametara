import Image from 'next/image';
import Link from 'next/link';
interface Props {
  title: string;
  todo?: string;
}

const Header = ({ title, todo }: Props) => {
  return (
    <header className='pb-2 bg-primary text-center text-white font-extrabold text-sm'>
      <div className='py-1.5 flex justify-center'>
        <Link href='/'>
          <Image
            src='/yametara-logo-white.svg'
            alt='logo'
            width='150'
            height='100'
            loading='eager'
          />
        </Link>
      </div>
      <h1 className='text-2xl'>{title}</h1>
      {todo && <p>{todo}</p>}
    </header>
  );
};

export default Header;
