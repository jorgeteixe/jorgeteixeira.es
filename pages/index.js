import Seo from '../components/seo'
import Navbar from '../components/navbar'
import Skills from '../components/effects/skills'
import BizAway from '../components/effects/bizaway'
import Appear from '../components/effects/appear'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Home() {
  const [showMenu, setShowMenu] = useState(false)

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
          <Appear>
            <p className="text-5xl sm:text-6xl md:text-8xl mb-3 font-bold">
              I&apos;m Jorge.
            </p>
          </Appear>
          <Appear delay={0.1}>
            <p className="text-4xl sm:text-5xl font-semibold md:text-7xl text-gray-400 mb-4">
              I use <Skills skills={skills} />{' '}
              <br className="inline sm:hidden" />
              to <br className="hidden sm:inline" /> build great things.
            </p>
          </Appear>
          <Appear delay={0.2}>
            <p className="text-3xl sm:text-4xl font-semibold md:text-6xl text-gray-600">
              Currently at <BizAway />.
            </p>
          </Appear>
        </div>
        <div className="mt-60 sm:grow sm:mt-0" />
        <div className="pb-8 max-w-4xl ">
          <Navbar />
        </div>
      </div>
    </>
  )
}
