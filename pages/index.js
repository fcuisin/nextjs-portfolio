import Head from 'next/head';
import Header from '../components/Header.js'
import Navbar from '../components/Navbar.js'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Header/>
    </div>
  )
}
