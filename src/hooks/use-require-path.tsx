import { useRouter } from 'next/router';

export const useNextPage = () => {
  const router = useRouter();
  const id = router.query.id;
  const nextPath: string = '/questions/' + `${Number(id) + 1}`;
  return Number(id) === 8 ? '/result' : nextPath;
};

export const usePrevPage = () => {
  const router = useRouter();
  const id = router.query.id;
  const prevPath: string = '/questions/' + `${Number(id) - 1}`;
  return Number(id) === 1 ? '/' : prevPath;
};
