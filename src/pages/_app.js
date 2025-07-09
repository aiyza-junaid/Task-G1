import { ZustandProvider } from '../context/zustandContext';
import '../styles/globals.css'
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <ZustandProvider>
        <Component {...pageProps} />
      </ZustandProvider>
    </ThemeProvider>
  )
}

export default MyApp
