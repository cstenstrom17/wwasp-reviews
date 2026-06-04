// pages/_app.js
import '../styles/globals.css' // Next.js allows global CSS ONLY here

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}