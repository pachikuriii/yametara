import { useRouter } from 'next/router';

export const useNextPage = () => {
  const router = useRouter();
  const currentPage = Number(router.asPath.replace('/questions/', ''));
  const NextPath: string = '/questions/' + `${currentPage + 1}`;
  return currentPage === 8 ? '/result' : NextPath;
};

export const usePrevPage = () => {
  const router = useRouter();
  const currentPage = Number(router.asPath.replace('/questions/', ''));
  const prevPath: string = '/questions/' + `${currentPage - 1}`;
  return currentPage === 1 ? '/' : prevPath;
};
