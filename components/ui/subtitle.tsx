import { cn } from "@/lib/utils";

export const Subtitle = ({subtitle, className}:{subtitle:string; className?:string;}) => {
  return (
    <h2 className={cn(`text-2xl text-amn-darker dark:text-slate-300 text-center md:text-4xl font-bold md:py-10`,
      className
    )}>
      {subtitle}
    </h2>
  )
}
