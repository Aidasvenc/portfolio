"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import profileImg from "@/public/profile.jpg";
import Link from 'next/link';
import { BsArrowDown, BsArrowRight, BsLinkedin, BsPhone, BsPhoneFill } from 'react-icons/bs';

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "tween",
              duration: 0.2
            }}
          >
            <Image 
              src={profileImg}
              alt="Karina's profile picture"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 object-cover rounded-full border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span 
            className='absolute bottom-0 right-0 text-4xl'
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1
            }}
          >
            👏
          </motion.span>
        </div>
      </div>
      <motion.h1 
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">{`Hi, I'm Karina. `}</span>
        <span>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque enim quam, egestas ac sollicitudin non, rhoncus eu nisl. Maecenas nunc orci, sodales a ipsum quis, maximus egestas ligula. `}</span>
        <span className="underline">{`I strive to create environments that reflect the unique personality and lifestyle of each client.`}</span>
      </motion.h1>
      <motion.div 
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2
        }}
      >
        <Link 
          href="#contact"
          className="group flex items-center gap-2 bg-gray-900 text-white px-7 py-3 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me here <BsArrowDown className="group-hover:translate-x-1"/>
        </Link>
        <a className="flex items-center gap-2 bg-white text-gray-700 px-7 py-3 rounded-full border border-black/10 outline-none focus:scale-110 hover:scale-110 hover:text-gray-950 active:scale-105 transition">
          <BsPhoneFill/> +41 788 07 0487
        </a>
        <a className="flex items-center gap-2 bg-white text-gray-700 p-4 rounded-full border border-black/10 outline-none focus:scale-110 hover:scale-110 hover:text-gray-950 active:scale-105 transition">
          <BsLinkedin/>
        </a>
      </motion.div>
    </section>
  )
}
