import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Sidebar from '../components/Sidebar1'


export default function App({ Component, pageProps }: AppProps) 
{
  return <>
  <Sidebar/>
  <Component {...pageProps} />

  </> 
}
