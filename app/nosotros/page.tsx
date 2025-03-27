import {Goals} from "@/components/about/goals";
import { Company } from "@/components/about/company";
import { WorldMap } from "@/components/about/world-map";

const AboutPage = () => {
  return (
    <section>
      <Company />
      <Goals />
      <WorldMap />
    </section>
  )
}

export default AboutPage