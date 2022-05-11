import { motion } from 'framer-motion'

function Bounce({ children }) {
  return (
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
      {children}
    </motion.span>
  )
}

export default Bounce
