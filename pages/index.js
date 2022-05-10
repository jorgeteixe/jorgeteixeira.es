import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import Introduction from '../components/introduction'
import Seo from '../components/seo'

export default function Home() {
  return (
    <>
      <Seo />
      <Header />
      <Introduction />
    </>
  )
}
