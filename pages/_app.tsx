import { ReactElement, ReactNode, useEffect } from 'react';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { ApolloProvider } from '@apollo/client';
import { SessionProvider, signIn } from 'next-auth/react';
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { ModalsProvider } from '@mantine/modals';
import moment from 'moment';

import RouterTransition from '../components/RouterTransition';
import ConfiguredApolloClient from '../components/ConfiguredApolloProvider';

// Configure displaying the time
moment.relativeTimeThreshold('ss', 0);

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);
  const router = useRouter();

  useEffect(() => {
    if (session?.error === 'RefreshAccessTokenError') {
      signIn(); // Force sign in to hopefully resolve error
    }
  }, [session]);

  return (
    <>
      <Head>
        <title>JitaSpace</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <SessionProvider session={session}>
        <MantineProvider withGlobalStyles withNormalizeCSS theme={{colorScheme: "dark"}}>
          <RouterTransition />
          <ApolloProvider client={ConfiguredApolloClient}>
            <NotificationsProvider>
              <ModalsProvider>{getLayout(<Component {...pageProps} />)}</ModalsProvider>
            </NotificationsProvider>
          </ApolloProvider>
        </MantineProvider>
      </SessionProvider>
    </>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
//   colorScheme: getCookie('mantine-color-scheme', ctx) || 'light',
// });
