'use client'

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mt-4 text-gray-700 ">
        {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque enim quam, egestas ac sollicitudin non, rhoncus eu nisl. Maecenas nunc orci, sodales a ipsum quis, maximus egestas ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque enim quam, egestas ac sollicitudin non, rhoncus eu nisl. Maecenas nunc orci, sodales a ipsum quis, maximus egestas ligula.`}
      </p>
    </motion.section>
  )
}
