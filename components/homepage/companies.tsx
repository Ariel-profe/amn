"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

import { Subtitle } from "@/components/ui/subtitle";
import { brands } from "@/lib/constants";


export const Companies = () => {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === brands.length - 1 ? 0 : prevIndex + 1
      );
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div id="marcas" className="lg:py-20">
      <Subtitle subtitle="Estas compañías confían en nosotros" />

        <AnimatePresence custom={currentImageIndex}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {brands.map((image, index) => (
            <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{
              opacity : index === currentImageIndex ? 1 : 0.8,
              scale : index === currentImageIndex ? 1.2 : 1,
              transition: { duration: 0.5 },
            }}
            className="flex items-center justify-center h-40 w-full"
            exit={{ opacity: 0 }}
            custom={index}
            transition={{ opacity: { duration: 0.5 }}}>
                <img
                  src={image.url}
                  alt={image.alt}
                  className="object-contain h-40 w-40 lg:h-52 lg:w-52 items-center justify-center flex mx-auto"
                  />
              </motion.div>
          ))}
          </div>
        </AnimatePresence>
    </div>
  );
};
