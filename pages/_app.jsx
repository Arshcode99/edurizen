import '@/styles/globals.css';
import Head from 'next/head';
import { Ubuntu } from 'next/font/google';
import Navbar from '@/components/navbar';

const ubuntu = Ubuntu({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '700']
});

export default function App({ Component, pageProps }) {
  return <>
  <Head>
        <title>Edurizen</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
  </Head>
  <main className={ubuntu.className}>
  <Navbar/>
  <Component {...pageProps} />
  </main>
  </>
}
