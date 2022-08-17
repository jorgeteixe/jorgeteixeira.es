import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

function Logo({ href, rotate = true }) {
  let logo = (
    <Image
      priority={true}
      src="/logo.png"
      height={40}
      width={40}
      alt="Jorge."
      className={href ? 'cursor-pointer' : ''}
    />
  )

  if (rotate) {
    logo = (
      <motion.div
        className="inline-block"
        whileHover={{
          rotate: 365,
          transition: { type: 'spring', duration: 1.2 }
        }}
      >
        {logo}
      </motion.div>
    )
  }

  if (href) {
    return (
      <Link href={href} passHref>
        {logo}
      </Link>
    )
  }
  return logo
}

export default Logo
