import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface Props {
  title: string;
  todo?: string;
}

const Header = ({ title, todo }: Props) => {
  const router = useRouter();
  const currentPage = Number(router.asPath.replace('/questions/', ''));
  return (
    <header className='pt-4 pb-4 bg-primary text-center text-secondary font-extrabold text-sm'>
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
      <div className='flex justify-center items-center'>
        {!Number.isNaN(currentPage) && (
          <div className='inline-block p-1 bg-secondary rounded-full mr-4'>
            <p className='mx-2 my-2 text-lg text-white'>Q.{currentPage}</p>
          </div>
        )}
        <h1 className='text-2xl'>{title}</h1>
      </div>

      {todo && <p>{todo}</p>}
    </header>
  );
};

export default Header;
