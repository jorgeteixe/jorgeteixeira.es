import Link from 'next/link'
import { motion } from 'framer-motion'

function BizAway() {
  return (
    <Link href="https://bizaway.com" passHref>
      <motion.a
        whileHover={{
          scale: 1.01,
          transition: { duration: 0.5 }
        }}
        whileTap={{
          scale: 0.99,
          transition: { duration: 0.2 }
        }}
        className="hover:text-[#00BCD6] transition-colors inline-block"
      >
        BizAway
      </motion.a>
    </Link>
  )
}

export default BizAway
