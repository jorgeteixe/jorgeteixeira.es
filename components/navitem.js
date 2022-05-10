import { motion } from 'framer-motion'
import Link from 'next/link'

function Navitem({ text, link }) {
  return (
    <motion.div
      whileHover={{
        rotate: [0, 5, -5, 0],
        transition: { duration: 0.5 }
      }}
      whileTap={{ scale: 0.9 }}
      className="flex flex-col justify-center mx-3"
    >
      <Link href={link}>{text}</Link>
    </motion.div>
  )
}

export default Navitem
