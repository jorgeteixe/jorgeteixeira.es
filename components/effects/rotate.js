import { motion } from 'framer-motion'

function Rotate({ children }) {
  return (
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
      {children}
    </motion.span>
  )
}

export default Rotate
