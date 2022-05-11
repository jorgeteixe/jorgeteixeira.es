import Head from 'next/head'
import Link from 'next/link'
import Seo from '../components/seo'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      <Seo />
      <div className="h-screen flex flex-col bg-black text-white pt-8 px-8 select-none">
        <div className="max-w-4xl">
          <p className="text-5xl sm:text-6xl md:text-8xl font-medium">
            I&apos;m Jorge, I love building{' '}
            <motion.span
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 }
              }}
              whileTap={{
                scale: 0.9,
                transition: { duration: 0.2 }
              }}
              className="hover:text-primary hover:cursor-pointer transition-colors inline-block select-none"
            >
              cool
            </motion.span>{' '}
            stuff with technology.
          </p>
          <p className="text-5xl sm:text-6xl md:text-8xl font-medium mt-6">
            I{' '}
            <motion.span
              whileHover={{
                rotate: 360,
                transition: { duration: 0.4 }
              }}
              whileTap={{
                rotate: 370,
                scale: 1.05,
                transition: { duration: 0.5 }
              }}
              className="hover:text-primary hover:cursor-pointer transition-colors inline-block select-none"
            >
              help
            </motion.span>{' '}
            others do it too.
          </p>
        </div>
        <div className="grow" />
        <div className="flex flex-col sm:flex-row pb-8 justify-around max-w-4xl font-medium">
          <Link href="https://github.com/jorgeteixe" passHref>
            <a className="mt-2 sm:mt-0 hover:text-primary transition-colors">
              GitHub
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/jorge-teixeira-crespo">
            <a className="mt-2 sm:mt-0 hover:text-primary transition-colors">
              LinkedIn
            </a>
          </Link>
          <Link href="https://twitter.com/jorgeteixe_">
            <a className="mt-2 sm:mt-0 hover:text-primary transition-colors">
              Twitter
            </a>
          </Link>
          <Link href="https://instagram.com/jorgeteixe_">
            <a className="mt-2 sm:mt-0 hover:text-primary transition-colors">
              Instagram
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}
