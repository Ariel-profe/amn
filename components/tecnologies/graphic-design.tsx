'use client';

import { motion } from "framer-motion";
import { ThreeDCardExample } from "./3d-card-snnipet";
import { EvervaultCardSnippet } from "./evervault-card-snnipet";

export const GraphicDesign = () => {
    return ( 
    <div className="hidden mt-16 lg:mt-32 lg:flex flex-col-reverse xl:flex-row items-center mx-auto relative w-full">
      <div className="items-center lg:flex justify-center md:space-x-4">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="md:px-0"
        >
          <ThreeDCardExample />
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="md:px-0"
        >
          <EvervaultCardSnippet />
        </motion.div>
      </div> 

      <div className="flex flex-col w-full lg:pl-20">
        <h2 className="text-3xl md:pb-8 md:text-6xl text-start bg-clip-text text-transparent bg-gradient-to-b from-rose-500 to-amn-light bg-opacity-50">
          Interfaz y experiencia de usuario
        </h2>
        <p className="mt-4 text-lg font-normal text-slate-500 text-start mx-auto">
          Las herramientas que usamos en el departamento de diseño son las más actuales y las que permiten al usuario tenes la mejor experiencia al utilizarlas.
        </p>
      </div>
    </div>  );
};