import { useRef } from 'react'
import { motion } from 'framer-motion'

function Draggable({ children }) {
  const constraintsRef = useRef(null)
  return (
    <motion.span
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
