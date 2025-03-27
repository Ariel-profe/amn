import { Collaborations } from "@/components/tecnologies/collaborations"
import { DragCards } from "@/components/tecnologies/drag-cards"
import { GraphicDesign } from "@/components/tecnologies/graphic-design"

const TecnologiesPage = () => {
  return (
    <section>
      {/* <BentoDemo /> */}
      <DragCards />
      <Collaborations />
      <GraphicDesign />
    </section>
  )
}

export default TecnologiesPage