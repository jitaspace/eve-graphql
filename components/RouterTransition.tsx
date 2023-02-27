import { useRouter } from 'next/router';
import { useEffect } from 'react';
import {
  startNavigationProgress,
  NavigationProgress,
  setNavigationProgress,
} from '@mantine/nprogress';

function RouterTranstion() {
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url: string) => url !== router.asPath && startNavigationProgress();
    const handleComplete = () => setNavigationProgress(100);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router.asPath]);

  return <NavigationProgress autoReset={true} />;
}

export default RouterTranstion;
