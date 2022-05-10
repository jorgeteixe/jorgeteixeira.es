import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const suffixVariants = {
  hidden: {
    opacity: 0
  },
  shown: {
    opacity: 1
  }
}

function Logo() {
  const [shown, setShown] = useState(false)
  const scaleBig = 1.02

  useEffect(() => {
    window.addEventListener('resize', () => setShown(window.innerWidth <= 768))
  }, [setShown])

  return (
    <motion.div
      onHoverStart={() => setShown(true)}
      animate={{ scale: [1, scaleBig, 1, scaleBig, 1, scaleBig, 1] }}
      transition={{ delay: 1 }}
      className="text-xl"
    >
      <Link href="/" passHref>
        <a>
          Jorge Teixe
          <motion.span
            initial="hidden"
            animate={shown ? 'shown' : 'hidden'}
            variants={suffixVariants}
          >
            ira
          </motion.span>
        </a>
      </Link>
    </motion.div>
  )
}

export default Logo
