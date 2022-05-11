import React from 'react'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

function Skills({ skills }) {
  const [audio, setAudio] = useState(null)

  useEffect(() => {
    const _audio = new Audio('/click.mp3')
    _audio.volume = 0.3
    setAudio(_audio)
  }, [])

  const [current, setCurrent] = useState(0)
  const [clicks, setClicks] = useState(0)

  const click = () => {
    audio.play()
    clicks < 3
      ? setClicks(clicks + 1)
      : setCurrent((current + 1) % skills.length)
  }

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
      onClick={click}
      className="hover:text-primary hover:cursor-pointer transition-colors inline-block select-none"
    >
      {skills[current]}
    </motion.span>
  )
}

export default Skills
