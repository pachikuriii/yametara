import Image from 'next/image';
import styles from './Header.module.css';
export default function Header() {
  return (
    <header className={styles.box}>
      <Image src='/yametara-logo.svg' alt='logo' width='150' height='100' />
      <p>ページごとの質問</p>
    </header>
  );
}
