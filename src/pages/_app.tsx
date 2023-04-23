import { QueryClientProvider } from '@tanstack/react-query';
import { AppProps } from 'next/app';
// EXPANSION CHANGES: 2 lines below
import Router from 'next/router';
import nProgress from 'nprogress';

import '@/styles/globals.css';
import '@/styles/nprogress.css';

import { queryClient } from '@/lib/react-query';

Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
