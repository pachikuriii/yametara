import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Header = ({ children }: Props) => {
  return (
    <header>
      <Link href='/'>
        <Image src='/yametara-logo.svg' alt='logo' width='150' height='100' />
      </Link>

      <h2>{children}</h2>
    </header>
  );
};

export default Header;
