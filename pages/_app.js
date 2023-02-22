import { Toaster } from 'react-hot-toast'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Chat-GPT</title>
      </Head>
      <Component {...pageProps} />
      <Toaster position="top-right" />
    </>
  )
}

export default MyApp
