import Featured from '../components/featured'
import Hero from '../components/hero'
import Navbar from '../components/navbar'
import Seo from '../components/seo'
import Suscribete from '../components/subscribete'

export default function Home() {
  return (
    <>
      <Seo />
      <div className="mx-auto max-w-screen-xl">
        <Navbar />
        <div className="flex justify-around flex-wrap">
          <Hero />
          <div className="flex flex-col justify-center">
            <Suscribete />
          </div>
        </div>
        <Featured />
      </div>
    </>
  )
}
