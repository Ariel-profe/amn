import { galleryAboutImages } from "@/lib/constants"

export const Company = () => {
    return (
        <div className="py-10 lg:py-20">
            <h2 className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-center">Somos una empresa joven de soluciones informáticas que se centra en proporcionar servicios y soluciones tecnológicas a sus clientes.
                Tenemos equipos altamente capacitados y con un amplio conocimiento en tecnología, diseño y sistemas informáticos.
                Proporcionamos soluciones innovadoras y personalizadas, con un enfoque flexible y adaptable.
                Nos esforzamos por mantenernos actualizados con las últimas tendencias y tecnologías en el campo de la informática.
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">
                {galleryAboutImages.map(img => (
                    <div key={img} className="bg-white/10 flex items-center justify-center w-full mx-auto">
                        <img className="max-h-[200px] lg:max-h-[350px] rounded-lg" src={img} alt="" />
                    </div>
                ))}
            </div>
        </div>
    )
}
