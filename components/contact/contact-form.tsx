"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { cn } from "@/lib/utils";
import { FoldableMap } from "./foldable-map";
import { Subtitle } from "../ui/subtitle";
 
export function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="flex flex-col lg:flex-row justify-between w-full h-full" id="formulario">
      <div className="w-full mx-auto">
        <Subtitle subtitle="Formulario de contacto" className="text-start" />
        <p className="text-slate-600 text-lg mt-2 dark:text-neutral-300">
          Envianos un email con cualquier duda que tengas y las responderemos a la brevedad posible.
        </p>

        <div className="flex flex-col lg:flex-row w-full gap-5 justify-between mt-10">
          <form className="w-full lg:max-w-7xl flex flex-col justify-between" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="firstname">Nombre</Label>
                <Input id="firstname" placeholder="Juan" type="text" />
              </LabelInputContainer>

              <LabelInputContainer>
                <Label htmlFor="lastname">Apellido</Label>
                <Input id="lastname" placeholder="Perez" type="text" />
              </LabelInputContainer>
            </div>

            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="juanperez@mail.com" type="email" />
            </LabelInputContainer>

            <LabelInputContainer className="mb-4">
              <Label htmlFor="password">Teléfono</Label>
              <Input id="password" placeholder="••••••••" type="number" />
            </LabelInputContainer>

            <LabelInputContainer className="mb-8">
              <Label htmlFor="message">Mensaje</Label>
              <Input
                  id="message"
                  placeholder="¡ Hola ! Quisiera saber más sobre..."
                  type="message"
              />
              </LabelInputContainer>
      
            <button
              className="bg-gradient-to-br relative group/btn from-slate-800 dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full lg:max-w-xl text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
              >
              Enviar &rarr;
              <BottomGradient />
            </button>
          </form>

          <FoldableMap />
        </div>
      </div>
    </div>
  );
}
 
const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-amn-semidark to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-2 inset-x-10 bg-gradient-to-r from-transparent via-amn-light to-transparent" />
    </>
  );
};
 
const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};