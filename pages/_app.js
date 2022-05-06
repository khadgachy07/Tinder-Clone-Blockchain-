import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'
import { TinderProvider } from '../context/TinderContext'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl='https://hv28qujmlfe7.usemoralis.com:2053/server'
      appId='idMOpKwOzXtUzaVWvXNhPWsZm8Y4UGalvdjOvQsE'
    >
      <TinderProvider>
        <Component {...pageProps} />
      </TinderProvider>
    </MoralisProvider>
  )
}

export default MyApp