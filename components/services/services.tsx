import { PiBracketsCurly } from "react-icons/pi";
import { AiOutlineStock } from "react-icons/ai";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { IoColorPaletteOutline, IoHardwareChipOutline  } from "react-icons/io5";
import { Card, TitleCard } from "@/components/ui/bento-card";

export const Services = () => {
  return (
    <div className="text-neutral-50">
      <div className="mx-auto grid grid-cols-1 divide-y divide-white/[0.1] border border-white/[0.1] md:grid-cols-3 md:divide-x md:divide-y-0 rounded-t-md" >
        <TitleCard title={"Nuestros"} secondTitle={"servicios para vos"} />
        <Card
          title="Desarrollo web y programación"
          desc="Creación y mantenimiento de aplicaciones, sitios y páginas web personalizadas."
          src="/services/development.jpg"
          icon={PiBracketsCurly}
        />
        <Card
          title="Marketing y publicidad"
          desc="Creación y promoción de contenido en línea para atraer tráfico a un sitio web o redes sociales."
          src="/services/marketing.webp"
          icon={AiOutlineStock}
        />
      </div>
      <div className="mx-auto grid grid-cols-1 divide-y divide-white/[0.1] border-x border-b border-white/[0.1] md:grid-cols-3 md:divide-x md:divide-y-0 rounded-b-md">
        <Card
          title="Servicio IT"
          desc="Relevamiento de equipos y asesoramiento sobre mejoría de hardware. Instalación, configuración y mantenimiento de sistemas informáticos. Asistencia técnica para solucionar problemas o dar soporte a los usuarios."
          src="/services/it.jpg"
          icon={MdOutlineMiscellaneousServices}
        />
        <Card
          title="Diseño gráfico"
          desc="Producir una imagen visual única y reconocible que represente a una empresa o marca. Diseño de carteles para promocionar productos o servicios en plataformas de redes sociales."
          src="/services/design.webp"
          icon={IoColorPaletteOutline}
        />
        <Card
          title="Hardware y conectividad"
          desc=""
          src="/services/hardware.png"
          icon={IoHardwareChipOutline}
        />
      </div>
    </div>
  );
};

