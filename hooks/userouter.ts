import { useRouter } from 'expo-router';

export const useRouterFunction = () => {
  const router = useRouter();

  const routerFunction = (url: string) => {
    router.push(url);
  };

  return routerFunction;
};
