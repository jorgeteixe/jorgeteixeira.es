import { motion } from 'framer-motion'
import { useState } from 'react'

function Skills({ skills }) {
  const variants = {}

  const [current, setCurrent] = useState(0)
  const [clicks, setClicks] = useState(0)

  return (
    <motion.span
      whileHover={{
        scale: 1.0 + 0.02 * clicks,
        transition: { duration: 0.5 }
      }}
      whileTap={{
        scale: 0.99,
        transition: { duration: 0.2 }
      }}
      onClick={() =>
        clicks < 3
          ? setClicks(clicks + 1)
          : setCurrent((current + 1) % skills.length)
      }
      className="hover:text-primary hover:cursor-pointer transition-colors inline-block select-none"
    >
      {skills[current]}
    </motion.span>
  )
}

export default Skills
