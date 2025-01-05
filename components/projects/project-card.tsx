import { Dispatch, SetStateAction } from "react";

import { IProject } from '@/interfaces';

export function ProjectCard({project, setProjectSelected, setOpenModal}:{project:IProject, setProjectSelected: Dispatch<SetStateAction<IProject>>, setOpenModal: Dispatch<SetStateAction<boolean>>;}) {

  const {category, client, image, title, icon, desc} = project;

  const handleSelect = () => {
    setProjectSelected(project);
    setOpenModal(true);
  };

  return (
      <div 
        className="w-full bg-slate-900 rounded-md p-3 shadow-lg transform transition duration-500 hover:scale-95 hover:shadow-2xl"
        onClick={handleSelect}
      >
        <h1 className="text-2xl mt-2 font-bold text-slate-300 cursor-pointer hover:text-slate-400 transition duration-100 my-2">{title}</h1>
        <img className="cursor-pointer max-h-44 mx-auto" src={image} alt={title} />
        <div className="flex p-4 justify-between">
          <div className="w-full flex justify-between items-center space-x-2">
            <p className="mt-1 mb-2 text-slate-400 hover:underline cursor-pointer capitalize">#{category}</p>
            <div className="flex items-center gap-2">
              <img className="w-6 h-6 rounded-full" src={icon} alt="sara" />
              <p className="text-slate-300 text-xs font-bold cursor-pointer capitalize">{client}</p>
            </div>
          </div>
    
      </div>
    </div>
  );
}