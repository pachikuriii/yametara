import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Header = ({ children }: Props) => {
  return (
    <header className='bg-primary text-center'>
      <div className='py-1.5 flex justify-center'>
        <Link href='/'>
          <Image
            src='/yametara-logo-white.svg'
            alt='logo'
            width='150'
            height='100'
          />
        </Link>
      </div>
      <h2 className='text-white font-extrabold text-2xl pb-2'>{children}</h2>
    </header>
  );
};

export default Header;
