import { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/icons/bitcat.png" type="image/png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
