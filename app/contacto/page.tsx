import { ContactForm } from "@/components/contact/contact-form";
import Faqs from "@/components/contact/faqs";

const ContactPage = () => {
  return (
    <section className="max-w-[1640px] mx-auto mt-40 relative">
      <ContactForm />
      <Faqs />
    </section>
  )
}

export default ContactPage