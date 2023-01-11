import Image from 'next/image';
import { ReactNode } from 'react';
import styles from './Header.module.css';

interface Props {
  children: ReactNode;
}

const Header = ({ children }: Props) => {
  return (
    <header className={styles.box}>
      <Image src='/yametara-logo.svg' alt='logo' width='150' height='100' />
      <p>{children}</p>
    </header>
  );
};

export default Header;