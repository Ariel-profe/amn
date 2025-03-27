
import { IconType } from "react-icons";
import { FiArrowUpRight } from "react-icons/fi";

export const Card = ({
    title,
    desc,
    src,
    icon: Icon
  }: {
    title: string;
    desc: string;
    src: string;
    icon: IconType
  }) => {
    return (
      <div className="group relative flex  flex-col justify-between overflow-hidden p-6 transition-colors hover:bg-neutral-950 md:h-80 md:p-9">
        <h2 className="relative z-10 text-3xl leading-tight transition-transform duration-500 group-hover:translate-y-3">
          {title}
        </h2>

        <p className="relative z-10 text-xl leading-tight transition-all duration-500 group-hover:-translate-y-3 mt-10 text-slate-300 opacity-30 group-hover:opacity-100">{desc}</p>
  
        <Icon className="absolute right-3 top-4 z-10 text-2xl text-neutral-400 transition-colors group-hover:text-neutral-50" />
  
        <div
          className="absolute bottom-0 left-0 right-0 top-0 opacity-5 blur-sm transition-all group-hover:opacity-20 group-active:scale-105 group-active:opacity-50 group-active:blur-0"
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
  
        <Corners />
      </div>
    );
  };
  
  const Corners = () => (
    <>
      <span className="absolute left-[1px] top-[1px] z-10 h-3 w-[1px] origin-top scale-0 bg-amn-dark transition-all duration-500 group-hover:scale-100" />
      <span className="absolute left-[1px] top-[1px] z-10 h-[1px] w-3 origin-left scale-0 bg-amn-dark transition-all duration-500 group-hover:scale-100" />
      <span className="absolute bottom-[1px] right-[1px] z-10 h-3 w-[1px] origin-bottom scale-0 bg-amn-dark transition-all duration-500 group-hover:scale-100" />
      <span className="absolute bottom-[1px] right-[1px] z-10 h-[1px] w-3 origin-right scale-0 bg-amn-dark transition-all duration-500 group-hover:scale-100" />
      <span className="absolute bottom-[1px] left-[1px] z-10 h-3 w-[1px] origin-bottom scale-0 bg-amn-dark transition-all duration-500 group-hover:scale-100" />
      <span className="absolute bottom-[1px] left-[1px] z-10 h-[1px] w-3 origin-left scale-0 bg-amn-dark transition-all duration-500 group-hover:scale-100" />
      <span className="absolute right-[1px] top-[1px] z-10 h-3 w-[1px] origin-top scale-0 bg-amn-dark transition-all duration-500 group-hover:scale-100" />
      <span className="absolute right-[1px] top-[1px] z-10 h-[1px] w-3 origin-right scale-0 bg-amn-dark transition-all duration-500 group-hover:scale-100" />
    </>
  );
  
export const TitleCard = ({title, secondTitle}:{title: string; secondTitle: string}) => {
    return (
      <div className="group relative flex h-56 flex-col justify-between bg-amn-dark/20 p-6 md:h-80 md:p-9">
        <h2 className="text-4xl uppercase leading-tight">
          <span className="text-neutral-400 transition-colors duration-500 group-hover:text-amn-dark">
            {title}
          </span>
          <br />
          {secondTitle}
        </h2>
  
        <FiArrowUpRight className="absolute right-3 top-4 text-2xl text-neutral-400 transition-colors duration-500 group-hover:text-amn-dark" />
      </div>
    );
  };