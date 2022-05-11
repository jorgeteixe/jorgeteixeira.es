import Head from 'next/head'
import Seo from '../components/seo'

export default function Home() {
  return (
    <>
      <Seo />
      <div className="h-screen flex justify-center">
        <div className="flex flex-col justify-center text-center">
          <p className="text-4xl">Jorge Teixeira</p>
          <p className="text-lg font-light">Coming soon...</p>
        </div>
      </div>
    </>
  )
}
