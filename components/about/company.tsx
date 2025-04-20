import { galleryAboutImages } from "@/lib/constants"

export const Company = () => {
    return (
        <div className="py-10 lg:py-20">
            <h2 className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-center">Somos una empresa joven, dinámica y proactiva. <br /> AMN te acompaña en tu crecimiento.
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">
                {galleryAboutImages.map(img => (
                    <div key={img} className="bg-white/10 flex items-center justify-center w-full mx-auto">
                        <img className="max-h-[200px] lg:max-h-[350px] rounded-lg md:hover:scale-95 transition" src={img} alt="" />
                    </div>
                ))}
            </div>
        </div>
    )
}
