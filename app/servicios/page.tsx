import { Services } from "@/components/services/services"
import { Conectivity } from "@/components/services/conectivity"
import { ConnectUs } from "@/components/services/connect-us"
import { Plans } from "@/components/services/plans"

const ServicesPage = () => {
  return (
    <section className="max-w-[1640px] mt-40 mx-auto relative">
      <Services />
      <Conectivity />
      <Plans />
      <ConnectUs />
    </section>
  )
}

export default ServicesPage