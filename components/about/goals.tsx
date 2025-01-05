import { HiOutlineLightBulb } from "react-icons/hi";
import { SlTarget } from "react-icons/sl";
import { CgArrowsExpandUpRight } from "react-icons/cg";
import { Card, TitleCard } from "@/components/ui/bento-card";

export const Goals = () => {
  return (
    <div className="text-neutral-50 my-10 lg:mt-40" id="objetivos">
      <div className="mx-auto grid grid-cols-1 divide-y divide-white/[0.1] border border-white/[0.1] md:grid-cols-3 md:divide-x md:divide-y-0 rounded-t-md" >
        <TitleCard title={"Estos son"} secondTitle={"nuestros pilares"} />
      </div>
      <div className="mx-auto grid grid-cols-1 divide-y divide-white/[0.1] border-x border-b border-white/[0.1] md:grid-cols-3 md:divide-x md:divide-y-0 rounded-b-md">
        <Card
          title="MISIÓN"
          desc="Brindar soluciones informáticas innovadoras y personalizadas que mejoren la eficiencia y productividad en las empresas clientes."
          src="/services/it.jpg"
          icon={HiOutlineLightBulb}
        />
        <Card
          title="VISIÓN"
          desc="Ser líderes en la consultoría informática, destacando nuestro potencial humano, profesional y estructural. Queremos acercar propuestas y asesoramiento que ayuden a alcanzar el máximo potencial de las empresas."
          src="/services/design.webp"
          icon={SlTarget}
        />
        <Card
          title="VALORES"
          desc="Responsabilidad, honestidad, desarrollo profesional y personal, calidad, resolución de problemas."
          src="/services/hardware.png"
          icon={CgArrowsExpandUpRight}
        />
      </div>
    </div>
  );
};

