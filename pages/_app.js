import Footer_ from '@/layout/Footer/Footer_';
import Header from '@/layout/Header/Header';
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <>
   <Header/>
   <Component {...pageProps} />
   <Footer_/>
  </>
}
