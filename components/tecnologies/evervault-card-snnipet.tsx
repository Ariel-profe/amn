import React from "react";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";

export function EvervaultCardSnippet() {
  return (
    <div className="border border-amn-dark/[0.2] dark:border-slate-400/20 flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-amn-dark dark:text-slate-400" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-amn-dark dark:text-slate-400" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-amn-dark dark:text-slate-400" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-amn-dark dark:text-slate-400" />

      <EvervaultCard text="mouse" />

      <h2 className="text-amn-dark dark:text-slate-300 mt-4 text-sm font-light">
        Acerca el mouse y revela un excelente efecto
      </h2>
    </div>
  );
}