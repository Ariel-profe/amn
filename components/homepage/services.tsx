import { MdPeopleOutline, MdOutlineJoinRight  } from "react-icons/md";
import { TbSteam } from "react-icons/tb";
import { PiExamLight, PiTreeStructureLight  } from "react-icons/pi";
import { Card, TitleCard } from "@/components/ui/bento-card";

export const Services = () => {
  return (
    <div className="text-neutral-50 mt-10">
      <div className="mx-auto grid grid-cols-1 divide-y divide-white/[0.1] border border-white/[0.1] md:grid-cols-3 md:divide-x md:divide-y-0 rounded-t-md" >
        <TitleCard title={"Lo que"} secondTitle={"podemos ofrecerte"} />
        <Card
          title="Atención personalizada e integral"
          desc="Para asegurarnos de cumplir tus expectativas y que el camino hacia tus sueños sea el mejor."
          src="/images/homepage/atencion.jpg"
          icon={MdPeopleOutline}
        />
        <Card
          title="Equipo altamente capacitado"
          desc="Profesionales formados con bases sólidas de conocimiento, fundamental para un mejor servicio."
          src="/images/homepage/equipo.webp"
          icon={TbSteam}
        />
      </div>
      <div className="mx-auto grid grid-cols-1 divide-y divide-white/[0.1] border-x border-b border-white/[0.1] md:grid-cols-3 md:divide-x md:divide-y-0 rounded-b-md">
        <Card
          title="Relevamientos, evaluaciones y diagnóstico"
          desc="Comprender tus necesidades es nuestra tarea. Las evaluamos y elegimos el caminos correcto."
          src="/images/homepage/relevamiento.jpg"
          icon={PiExamLight}
        />
        <Card
          title="Planificación de alternativas"
          desc="Manejamos y creamos contenido que te ayudará a crecer y a darte presencia en el mercado."
          src="/images/homepage/planificacion.jpg"
          icon={PiTreeStructureLight}
        />
        <Card
          title="Alianzas estratégicas con otras empresas"
          desc="Establecer un acuerdo formal con otras empresas para compartir recursos, esfuerzo y estrategias."
          src="/images/homepage/alianzas.jpg"
          icon={MdOutlineJoinRight}
        />
      </div>
    </div>
  );
};
