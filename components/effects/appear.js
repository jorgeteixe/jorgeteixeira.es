import { motion } from 'framer-motion'

function Appear({ children, delay = 0 }) {
  return (
    <motion.div
      animate={{ x: 0, opacity: 1 }}
      initial={{ x: 100, opacity: 0 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}

export default Appear
