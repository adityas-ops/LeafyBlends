import '@/styles/globals.css'
import Head from 'next/head'
import Header from '@/components/Headers'
import Footers from '@/components/Footers'
import { Toaster } from 'react-hot-toast'
import Headers from '@/components/Headers'
import MobileCartIcon from '@/components/MobileCartIcon'

export default function App({ Component, pageProps }) {
  return(
    <>
    <Head>
      <title>Tea Commerce Website</title>
      <style>
  @import url('https://fonts.googleapis.com/css2?family=Prosto+One&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;600&display=swap');
</style>
    </Head>

    <Toaster
      position="top-center"
      toastOptions={{
        style: {
          background: '#22c55e', // Tailwind green-500
          color: '#fff',
          fontWeight: 'bold',
        },
        duration: 1000,
      }}
    />
    <Headers/>
    <Component {...pageProps} />
    <MobileCartIcon />
    <Footers/>
    </>
  )
}
