import { Subtitle } from "@/components/ui/subtitle";

export const ConnectUs = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between mt-10 lg:mt-20">
      <div>
        <Subtitle subtitle="En que podemos ayudarte hoy?" />
        <p className="lg:text-2xl font-normal text-slate-400 max-w-lg text-center mx-auto">
          Tus necesidades son nuestra prioridad. Queremos impulsar tu negocio y llevarlo a todo el mundo.
        </p>
      </div>
        <img src="/images/banner.png" alt="banner-amn" className="rounded-2xl" />
    </div>
  )
}
