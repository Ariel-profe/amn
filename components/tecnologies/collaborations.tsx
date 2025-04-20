import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { collabApps, collabContent } from "@/lib/constants";

const RightCurve = () => {
  return (
    <div className="hidden absolute top-1/2 left-full w-[10.125rem] -mt-1 ml-10 pointer-events-none xl:block">
      <img src='/images/about/curve-2.svg' width={162} height={76} alt="Curve 2" />
    </div>
  );
};

const LeftCurve = () => {
  return (
    <div className="hidden absolute top-1/2 right-full w-[32.625rem] -mt-1 mr-10 pointer-events-none xl:block">
      <img src='/images/about/curve-1.svg' width={522} height={182} alt="Curve 1" />
    </div>
  );
};

export const Collaborations = () => {
  return (
      <div className="flex flex-col items-center justify-center xl:flex-row mt-20 my-10 lg:py-20">
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl md:pb-8 md:text-6xl text-start bg-clip-text text-transparent bg-gradient-to-b from-rose-500 to-amn-light bg-opacity-50">
            Profesionalismo sin límites
          </h2>

          <ul className="max-w-[32rem] mb-10 lg:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                    <IoIosCheckmarkCircleOutline size={30} className="text-amn-light" />
                    <h6 className="lg:text-2xl ml-5">{item.title}</h6>
                </div>
                {item.text && (<p className="lg:text-xl mt-3 text-slate-400">{item.text}</p>)}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:ml-auto mt-4 w-full lg:w-1/2">
         <div className="relative left-1/2 flex w-[18rem] aspect-square border border-slate-600 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-slate-600 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-amn-darker rounded-full">
                  <img
                    src='/amn-iso.png'
                    alt="amn-logo"
                    className="w-16"
                  />
                </div>
              </div>
            </div>

            <ul>
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom `}
                  style={{
                    transform: `rotate(${index * 45}deg)`
                  }}
                >
                 <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-slate-700 border border-n-1/15 rounded-xl`}
                    style={{
                      transform: `rotate(${index * -45}deg)`
                    }}
                  >
                    <img
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                      src={app.icon}
                    />
                  </div>
                </li>
              ))}
            </ul>

            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
  );
};