"use client";

import { useEffect, useState } from "react";

import { IProject } from "@/interfaces";
import { projects } from "@/lib/projects";
import { Categories } from "@/components/projects/categories";
import { ProjectList } from "@/components/projects/project-list";

import { AnimatePresence, motion } from "motion/react";
import { RiCloseCircleLine } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { PaginationDemo } from "@/components/projects/pagination";

const allCategories: string[] = ['todas', ...new Set(projects.map(i => i.category))];

const modalVariants = {
  open: { opacity: 1 },
  closed: { opacity: 0  },
}

const ProjectsPage = () => {

  const [categories] = useState(allCategories);
  const [isSelected, setIsSelected] = useState('todas');
  const [projectSelected, setProjectSelected] = useState({} as IProject);
  const [menuItems, setMenuItems] = useState<IProject[]>(projects);
  const [openModal, setOpenModal] = useState(false);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage] = useState(9);

  // Get current projects
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = menuItems.slice(indexOfFirstProject, indexOfLastProject);

  useEffect(() => {
    if (menuItems.length < projectsPerPage) {
      setCurrentPage(1);
    }
  }, [menuItems.length, projectsPerPage]);

  useEffect(() => {
    if (openModal) {
      document.documentElement.style.overflow = "hidden"
    }
  }, []);  

  // Change page
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const filterItems = (category: string) => {
    if (category === 'todas') {
      setMenuItems(projects);
      setIsSelected('todas');
      return;
    };

    const newCategory = projects.filter(c => c.category === category);
    setMenuItems(newCategory);
    setIsSelected(category);
  };

  return (
    <section>
      <div className="flex flex-col lg:flex-row items-start gap-5 w-full">
        <Categories categories={categories} filterItems={filterItems} isSelected={isSelected} />
        <ProjectList projects={currentProjects} setProjectSelected={setProjectSelected} setOpenModal={setOpenModal} />
      </div>

      <PaginationDemo
        projectsPerPage={projectsPerPage}
        totalPosts={menuItems.length}
        paginate={paginate}
        currentPage={currentPage}
      />

      {/* Project Modal */}
      <AnimatePresence>
        {openModal && (
          <motion.div
            initial={{
              opacity: 0, 
              scale: 0.8
            }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 50
              }
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.2 }
            }}
            variants={modalVariants}
            className="fixed inset-0 bg-black/95 z-50 flex justify-center items-center lg:p-10 overflow-hidden"
          >
            <div className="relative bg-white flex flex-col items-center justify-center dark:bg-amn-darker w-full h-full rounded-xl p-6 lg:p-10 max-w-[1600px]">
              <button
                className="absolute top-2 right-2 hover:opacity-75 transition-all text-3xl text-rose-600"
                onClick={() => {
                  setOpenModal(false) 
                  document.body.setAttribute('style', '')
                  window.scrollTo({})
                  }}>
                <RiCloseCircleLine />
              </button>

              <div className="w-full flex flex-col lg:flex-row gap-5">
                {/* Image container */}
                <div className="w-full flex items-center justify-center">
                  <img src={projectSelected.modal_img} alt={`imagen-${projectSelected.title}`} className="h-40 lg:h-full max-w-3xl rounded-xl" />
                </div>

                {/* Data container */}
                <div className="w-full flex flex-col justify-between gap-y-5">
                  <h3 className="text-lg lg:text-3xl">{projectSelected.title}</h3>
                  <p className="dark:text-slate-400 text-sm lg:text-xl text-justify">{projectSelected.desc}</p>

                  {projectSelected.link && (
                    <a
                      href={projectSelected.link}
                      target="_blank"
                      className="bg-slate-800 text-center py-2 w-full md:hover:bg-slate-700 transition"
                    >Visitar
                    </a>)}

                  <div className="flex flex-col justify-center gap-3 text-xs lg:text-lg">
                    {projectSelected.tags?.map(tag => (
                      <p key={tag.name} className={`${tag.color}`}>
                        #{tag.name}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default ProjectsPage;