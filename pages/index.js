import Seo from '../components/seo'
import Navbar from '../components/navbar'
import Rotate from '../components/effects/rotate'
import Bounce from '../components/effects/bounce'

export default function Home() {
  return (
    <>
      <Seo />
      <div className="h-screen flex flex-col bg-black text-white pt-8 px-8 select-none">
        <div className="max-w-4xl">
          <p className="text-5xl sm:text-6xl md:text-8xl font-medium">
            I&apos;m Jorge, I love building <Bounce>cool</Bounce> stuff with
            technology.
          </p>
          <p className="text-5xl sm:text-6xl md:text-8xl font-medium mt-6">
            I <Rotate>help</Rotate> others do it too.
          </p>
        </div>
        <div className="grow" />
        <Navbar />
      </div>
    </>
  )
}
