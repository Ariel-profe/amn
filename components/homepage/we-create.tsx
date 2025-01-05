"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from "motion/react";
export const WeCreate = () => {
    return ( 
        <div className="flex flex-col items-center justify-center py-10 max-w-[1600px] mx-auto">
            <BrandingVideo src="/content/content-managment.mp4" />
        </div> );
};

export const BrandingVideo = ({src}:{src:string}) => {

    const videoRef = useRef(null);

    const {scrollYProgress} = useScroll({
        target: videoRef,
        offset: ["start end", "end end"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [.6, 1])

  return (
    <div className="lg:pt-10">
        <motion.video 
            ref={videoRef}
            className="rounded-xl" 
            autoPlay 
            muted 
            loop
            style={{scale}}
        >
            <source src={src} type="video/mp4" />
        </motion.video>
    </div>
  )
}
