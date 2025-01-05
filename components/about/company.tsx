import { galleryAboutImages } from "@/lib/constants"

export const Company = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryAboutImages.map(img => (
                <div key={img} className="bg-white/10 flex items-center justify-center w-full mx-auto">
                    <img className="max-h-[350px] rounded-lg" src={img} alt="" />
                </div>
            ))}
        </div>
    )
}
