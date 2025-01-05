import {Goals} from "@/components/about/goals";
import { Company } from "@/components/about/company";
import { WorldMap } from "@/components/about/world-map";

const AboutPage = () => {
  return (
    <section className="max-w-[1640px] mx-auto relative mt-40">
      <Company />
      <Goals />
      <WorldMap />
    </section>
  )
}

export default AboutPage