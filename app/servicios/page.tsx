import { Services } from "@/components/services/services"
import { Conectivity } from "@/components/services/conectivity"
import { ConnectUs } from "@/components/services/connect-us"
import { Plans } from "@/components/services/plans"

const ServicesPage = () => {
  return (
    <section className="container">
      <Services />
      <Conectivity />
      <Plans />
      <ConnectUs />
    </section>
  )
}

export default ServicesPage