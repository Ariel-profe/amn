import Link from "next/link";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaWhatsapp  } from "react-icons/fa6";
    
export const Footer = () => {
  
    const year = new Date().getFullYear();
  
    return (
      <div className="relative w-full h-full text-slate-800 dark:text-slate-300 shadow-lg mt-14 pb-10 px-3 ">
          <div className="w-full flex flex-col items-center justify-center m-auto">
              <div className="w-full h-full flex flex-row items-start justify-around flex-wrap px-3">
                  
                  <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                      <div className="font-bold text-sm lg:text-lg">Redes sociales</div>
                      <a href="https://www.instagram.com/amn.consultorainformatica/" target="_blank" className="flex flex-row items-center justify-between my-[15px] cursor-pointer md:hover:underline">
                          <FaInstagram />
                          <span className="text-sm ml-[6px]">Instagram</span>    
                      </a>
                      <a href="https://www.facebook.com/amn.consultorainformatica" target="_blank" className="flex flex-row items-center justify-between my-[15px] cursor-pointer md:hover:underline">
                          <CiFacebook />
                          <span className="text-sm ml-[6px]">Facebook</span>    
                      </a>
                      <a href="https://api.whatsapp.com/send?phone=2615535251" target="_blank" className="flex flex-row items-center justify-between my-[15px] cursor-pointer md:hover:underline">
                          <FaWhatsapp />
                          <span className="text-sm ml-[6px]">Whatsapp</span>    
                      </a>
                  </div>

                  <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-sm lg:text-lg">Ayuda</div>
                    <Link href={"/nosotros"} className="flex flex-row items-center my-[15px]">
                        ¿Quiénes somos?    
                    </Link>
                    <p className="flex flex-row items-center my-[15px]">
                        <Link href={"/contacto#formulario"} className="text-sm ml-[6px]">¿Cómo me contacto?</Link>    
                    </p>
                    <p className="flex flex-row items-center my-[15px]">
                        <Link href={"/contacto#faq"} className="text-sm ml-[6px]">FAQ</Link>    
                    </p>
                  </div>
  
                  <div className=" h-auto flex flex-col items-center justify-start">
                      <div className="font-bold text-sm lg:text-lg">Comunidad</div>
                      <p className="flex flex-row items-center my-[15px]">Creamos posibilidades para conectar al mundo.</p>
                      <p className="flex flex-row items-center my-[15px]">Todos los derechos reservados.</p>
                      <p className="flex flex-row items-center my-[15px]">&copy; AMN Consultora Informática {year}.</p>
                  </div>
              </div>
          </div>
      </div>
    )
  }