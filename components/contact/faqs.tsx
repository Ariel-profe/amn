import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Subtitle } from "../ui/subtitle";

const Faqs = () => {
    return ( 
        <div className="w-full my-10" id="faq">
            <Subtitle subtitle="Preguntas frecuentes" className="text-start" />

            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>¿En dónde nos encontramos?</AccordionTrigger>
                    <AccordionContent>
                        Nuestras oficinas se encuentran en la provincia de Mendoza, Argentina. Pero recordá que trabajamos para clientes de todo el mundo.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                    <AccordionTrigger>¿Cómo me contacto?</AccordionTrigger>
                    <AccordionContent>
                        Podes hacerlo desde esta misma sección con el formulario de contacto (nos llegará un mail), a nuestro teléfono: 2615535251 o a través de nuestras redes que están colocadas en el pie de todas las páginas.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                    <AccordionTrigger>
                        ¿Qué planes existen ?
                    </AccordionTrigger>
                    <AccordionContent>
                        Muchos. Según tus necesidades nosotros abordamos y planificamos la opción que se ajuste a vos. Al ser personalizado se pueden modificar sin ningún problema para hacerlo perfecto a tu medida.
                    </AccordionContent>
                </AccordionItem>
            
                <AccordionItem value="item-4">
                    <AccordionTrigger>
                        ¿Qué soporte me brindan?
                    </AccordionTrigger>
                    <AccordionContent>
                        Te ofrecemos un soporte activo, en el que vas a poder contactarte con nosotros sin barreras ni problemas. Trabajamos en equipo para resolver cualquier inconveniente que surja
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div> 
    );
}
 
export default Faqs;