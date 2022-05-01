import { motion } from 'framer-motion'

const pageTransition = {
  in: { opacity: 1 },
  out: { opacity: 0 }
}

const AnimatedPage = ({ children }) => (
  <motion.div
    className='framerMotion'
    initial='out'
    animate='in'
    exit='out'
    variants={pageTransition}
  >
    {children}
  </motion.div>
)

export default AnimatedPage
