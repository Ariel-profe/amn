"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export function ThreeDCardExample() {
  return (
    <CardContainer className="inte-var aspect-square">
      <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-[21rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-800 dark:text-white"
        >
          Creaciones que flotan en el aire
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Acerca el mouse y desata el poder 3D
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="h-52 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="text"
            className="px-4 py-2 rounded-xl text-xs font-normal text-slate-500"
          >
            Conocer →
          </CardItem>
          <CardItem
            translateZ={20}
            as="text"
            className="px-4 py-2 rounded-xl bg-slate-800 text-white text-xs font-bold"
          >
            Ingresar
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}