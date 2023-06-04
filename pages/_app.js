import '@/styles/globals.css'
import Head from 'next/head'
import Header from '@/components/Headers'
import Footers from '@/components/Footers'

export default function App({ Component, pageProps }) {
  return(
    <>
    <Head>
      <title>Tea Commerce Website</title>
      <style>
  @import url('https://fonts.googleapis.com/css2?family=Prosto+One&display=swap');
</style>
    </Head>
    <Header/>
    <Component {...pageProps} />
    <Footers/>
    </>
  )
}
