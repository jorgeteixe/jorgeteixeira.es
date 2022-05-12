import { useRef } from 'react'
import { motion } from 'framer-motion'

function Draggable({ children }) {
  const constraintsRef = useRef(null)
  return (
    <motion.span
      whileTap={{ scale: 0.95 }}
      ref={constraintsRef}
      drag
      dragConstraints={constraintsRef}
      className="inline-block cursor-pointer"
    >
      {children}
    </motion.span>
  )
}

export default Draggable
