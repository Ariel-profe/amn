"use client"

import { poppins } from "@/app/fonts";
import { motion } from "motion/react";

export const Hero = () => {

  return (
    <div className="relative flex lg:flex-row items-center w-full justify-center h-screen">
       <motion.div 
          initial={{opacity: 0, scale: 0}}
          animate={{opacity: 1, scale: 1, transition: {delay: 1.9, duration: 1}}}
          className="lg:hidden absolute top-10 right-0 rounded-full blur-[80px] w-24 h-24 bg-white"
        ></motion.div>
      {/* Hand Image */}
      <div className="hidden w-1/2 relative lg:block gap-2">
        <motion.img 
          initial={{x: '-150%', opacity: 0.1 }}
          animate={{x: 0, transition:{ duration: 2}, opacity: 1}}
          src="/images/homepage/mano.webp" 
          alt="mano-amn" 
          className={`object-contain`} 
          />
        <motion.div 
          initial={{opacity: 0, scale: 0}}
          animate={{opacity: 1, scale: 1, transition: {delay: 1.9, duration: 1}}}
          className="absolute -right-14 top-1 rounded-full blur-[100px] w-60 lg:h-60 bg-white"
        ></motion.div>
      </div>
      {/* Text Hero */}
      <motion.div
        initial={{x: '200%'}}
        animate={{x: 0, transition:{ duration: 2}}}
        className={`${poppins.className} relative flex flex-col items-center justify-center gap-2 lg:w-1/2 lg:-ml-40 max-w-[510px]`}
      >
        <h1 className="text-amn-light text-7xl sm:text-8xl xl:text-[12rem] font-extrabold italic">AMN</h1>
        <p className="text-xl md:text-2xl xl:text-[2.7rem] xl:-mt-4">Consultora Informática</p>
      </motion.div>
    </div>
  )
}
