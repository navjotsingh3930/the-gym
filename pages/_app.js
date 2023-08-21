import Footer from '@/layout/Footer/footer'
import Header from '@/layout/Header/Header'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <>
   <Header/>
   <Component {...pageProps} />
   <Footer/>
  </>
}
