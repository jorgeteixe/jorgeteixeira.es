import Seo from '../components/seo'
import Navbar from '../components/navbar'
import Skills from '../components/effects/skills'
import BizAway from '../components/effects/bizaway'

export default function Home() {
  const skills = [
    'technology',
    'JavaScript',
    'containers',
    'React',
    'Kubernetes',
    'AWS',
    'Linux',
    'MongoDB'
  ]

  return (
    <>
      <Seo />
      <div className="sm:h-screen flex flex-col text-gray-50 select-none">
        <div className="max-w-4xl p-9 sm:p-20">
          <p className="text-5xl sm:text-6xl md:text-8xl mb-3 font-bold">
            I&apos;m Jorge.
          </p>
          <p className="text-4xl sm:text-5xl font-semibold md:text-7xl text-gray-400 mb-4">
            I use <Skills skills={skills} /> <br className="inline sm:hidden" />
            to <br className="hidden sm:inline" /> build great things.
          </p>
          <p className="text-3xl sm:text-4xl font-semibold md:text-6xl text-gray-600">
            Currently at <BizAway />.
          </p>
        </div>
        <div className="mt-60 sm:grow sm:mt-0" />
        <div className="pb-8 max-w-4xl ">
          <Navbar />
        </div>
      </div>
    </>
  )
}
