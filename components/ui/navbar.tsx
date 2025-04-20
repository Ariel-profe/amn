"use client";

import { Dispatch, SetStateAction, useState } from "react";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { FiMenu, FiArrowRight } from "react-icons/fi";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 150 ? true : false);
  });
  return (
    <nav className={`fixed top-0 z-50 w-full text-white transition-all duration-300 ease-out px-3  
      ${scrolled
        ? "bg-slate-900 py-3 shadow-xl w-full"
        : "bg-neutral-950/0 py-6 shadow-none w-full"
      }`}>
      <div className="flex items-center justify-between w-full max-w-[2100px] mx-auto">

        <NavLeft setIsOpen={setIsOpen} />
        <NavRight />
        <NavMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </nav>
  );
};

const Logo = () => {
  // Temp logo from https://logoipsum.com/
  return (
    <Link href="/">
      <svg xmlns="http://www.w3.org/2000/svg" width={120} fill="#fff" viewBox="0 0 534.85 214.88"><defs><style>.cls-1.cls-2</style></defs><g id="Capa_2" data-name="Capa 2"><g id="Capa_1-2" data-name="Capa 1"><path className="cls-1" d="M534.79,10.73V0L501.06.05h-22.8l.13,57.83L422,.74V.05H377.57A11.92,11.92,0,0,0,365.65,12V39a49.94,49.94,0,0,1,0,98.81v27a11.92,11.92,0,0,0,11.92,11.91h44.54L422,119.45l56.4,57.14v.1h44.55a11.91,11.91,0,0,0,11.91-11.91V12C534.85,11.55,534.83,11.13,534.79,10.73Z" /><path className="cls-1" d="M308.43,88.37A49.94,49.94,0,0,1,352,38.85V21.6l0,0V0L318.29.05h-23.7l-27,27L240.47.05H194.71A11.92,11.92,0,0,0,182.8,12V164.78a11.91,11.91,0,0,0,11.91,11.91h8.87v0h21.62v0h14.07l-.13-57.24,28.22,28.23h.16L295.22,120l.28,56.72h44.59A11.91,11.91,0,0,0,352,164.78V137.9A50,50,0,0,1,308.43,88.37Z" /><path className="cls-2" fill="#f4c5a3" d="M326,113.4a89.26,89.26,0,0,0,18.32.66,5.31,5.31,0,0,1,.76-1.93c-8.28-13.85-8.3-28.49-6-40.15a5.21,5.21,0,0,1-1.31-2.33c0-.11,0-.22-.05-.33a56.16,56.16,0,0,0-16.87,3.87A40.2,40.2,0,0,0,326,113.4Z" /><path className="cls-2" fill="#f4c5a3" d="M322.85,69.2a65.61,65.61,0,0,1,15.42-3.31,5.23,5.23,0,0,1,3.11-2.59,77.22,77.22,0,0,1,5.56-13.09A40.06,40.06,0,0,0,322.85,69.2Z" /><path className="cls-2" fill="#f4c5a3" d="M386.53,85.38a5.35,5.35,0,0,1,3.1.15,56.8,56.8,0,0,0,5-13,40.23,40.23,0,0,0-43.44-23.26,93.84,93.84,0,0,0-6.31,14.18,5.32,5.32,0,0,1,2.75,2.46C364.61,67.37,377,76.9,385,86A5.55,5.55,0,0,1,386.53,85.38Z" /><path className="cls-2" fill="#f4c5a3" d="M384,94.17a5.22,5.22,0,0,1-1.32-2.34,5.3,5.3,0,0,1,.2-3.21c-11.27-13-23.87-17.91-34.78-19.13a5.3,5.3,0,0,1-5.94,4.11c-2.86,15.33.6,27.42,5.73,36.37a3.21,3.21,0,0,1,.33-.12,5.29,5.29,0,0,1,6,2.76A51.46,51.46,0,0,0,384,94.17Z" /><path fill="#f4c5a3" className="cls-2" d="M329.28,117.15A40.23,40.23,0,0,0,360.53,129a65.67,65.67,0,0,1-9.62-8.92l-.07,0a5.29,5.29,0,0,1-6-2.76A80.44,80.44,0,0,1,329.28,117.15Z" /><path className="cls-2" fill="#f4c5a3" d="M396.43,77.36a66.3,66.3,0,0,1-4.17,10.29,5.14,5.14,0,0,1-.79,6.7,74.35,74.35,0,0,1,4.5,7.53A40,40,0,0,0,396.9,79C396.76,78.45,396.6,77.9,396.43,77.36Z" /><path className="cls-2" fill="#f4c5a3" d="M387.19,95.78c-9,12-21.3,17.65-32.43,20.11a5.29,5.29,0,0,1-1.05,2.34A57.55,57.55,0,0,0,365,128.48c.94-.16,1.88-.35,2.81-.59A40.16,40.16,0,0,0,394.34,106a96.12,96.12,0,0,0-6-10.17A5.17,5.17,0,0,1,387.19,95.78Z" /><path className="cls-1" d="M169,0,135.23.05H11.91A11.92,11.92,0,0,0,0,12V164.78a11.91,11.91,0,0,0,11.91,11.91H56.28V148.05h56.26v28.64h35l0,0H169.1V166.27a12.29,12.29,0,0,0,.1-1.49V12a11.91,11.91,0,0,0-.24-2.4ZM112.54,83.65a6,6,0,0,1-6,6H62.24a6,6,0,0,1-6-6V66.17a6,6,0,0,1,6-6h44.35a6,6,0,0,1,6,6Z" /><path className="cls-1" d="M24.24,214.88q-5,0-7.61-2.68A10,10,0,0,1,14,204.88c0-3.27.86-5.82,2.56-7.64s4.26-2.73,7.66-2.73a18.29,18.29,0,0,1,3.21.26,15.7,15.7,0,0,1,2.68.72v3.62A14.63,14.63,0,0,0,24.52,198q-3.37,0-4.85,1.69a7.67,7.67,0,0,0-1.47,5.15q0,6.51,6.38,6.51a15.12,15.12,0,0,0,2.85-.27,13.53,13.53,0,0,0,2.7-.78V214a20.6,20.6,0,0,1-2.68.65A19.44,19.44,0,0,1,24.24,214.88Z" /><path className="cls-1" d="M47.55,214.88q-9.6,0-9.6-10.09,0-5.43,2.42-7.86t7.18-2.42q4.77,0,7.18,2.42t2.43,7.86Q57.16,214.89,47.55,214.88Zm0-3.53a4.94,4.94,0,0,0,4.1-1.61,7.77,7.77,0,0,0,1.31-5q0-3.72-1.31-5.23a5.09,5.09,0,0,0-4.1-1.52,5.08,5.08,0,0,0-4.09,1.52q-1.3,1.51-1.31,5.23a7.77,7.77,0,0,0,1.31,5A4.93,4.93,0,0,0,47.55,211.35Z" /><path className="cls-1" d="M66.08,214.58V194.82h3.59L79,208V194.82h4.14v19.76H79.58l-9.36-13.17v13.17Z" /><path className="cls-1" d="M98.87,214.88a21.76,21.76,0,0,1-3.54-.27,12.33,12.33,0,0,1-2.84-.8v-3.65a17.68,17.68,0,0,0,2.91.89,15,15,0,0,0,3.07.34,9.32,9.32,0,0,0,3.16-.4,1.72,1.72,0,0,0,1-1.81,2.16,2.16,0,0,0-.43-1.41,3.71,3.71,0,0,0-1.49-.94,30,30,0,0,0-3-.94,9.73,9.73,0,0,1-4.36-2.15,4.84,4.84,0,0,1-1.26-3.55,4.93,4.93,0,0,1,2-4.21,9.68,9.68,0,0,1,5.8-1.47,21.46,21.46,0,0,1,3.31.24,14.82,14.82,0,0,1,2.49.59V199a14.83,14.83,0,0,0-5.25-1,9.12,9.12,0,0,0-3,.41,1.67,1.67,0,0,0-1.1,1.74,1.81,1.81,0,0,0,.39,1.22,3.39,3.39,0,0,0,1.37.83,27.2,27.2,0,0,0,2.72.83,12.74,12.74,0,0,1,3.74,1.53,4.87,4.87,0,0,1,1.82,2,6.18,6.18,0,0,1,.51,2.55,5,5,0,0,1-2,4.14Q103,214.88,98.87,214.88Z" /><path className="cls-1" d="M124.24,214.88a9.78,9.78,0,0,1-6.46-2,7,7,0,0,1-2.38-5.75V194.82h4.14v12a4.38,4.38,0,0,0,1.23,3.4,5,5,0,0,0,3.47,1.11,4.93,4.93,0,0,0,3.45-1.11,4.41,4.41,0,0,0,1.21-3.4v-12H133v12.33a7,7,0,0,1-2.36,5.75A9.72,9.72,0,0,1,124.24,214.88Z" /><path className="cls-1" d="M142.58,214.58V194.82h4.14v16.57h9.73v3.19Z" /><path className="cls-1" d="M167,214.58V198H161v-3.19h16.26V198h-6v16.57Z" /><path className="cls-1" d="M194.06,214.88q-9.6,0-9.61-10.09,0-5.43,2.43-7.86c1.61-1.61,4-2.42,7.18-2.42s5.56.81,7.18,2.42,2.42,4.24,2.42,7.86Q203.66,214.89,194.06,214.88Zm0-3.53a5,5,0,0,0,4.1-1.61,7.77,7.77,0,0,0,1.3-5q0-3.72-1.3-5.23a6.29,6.29,0,0,0-8.2,0q-1.31,1.51-1.3,5.23a7.77,7.77,0,0,0,1.3,5A5,5,0,0,0,194.06,211.35Z" /><path className="cls-1" d="M212.58,214.58V194.82h9.48c2.27,0,3.94.59,5,1.79a7,7,0,0,1,1.6,4.83,5.57,5.57,0,0,1-3.93,5.53,3.29,3.29,0,0,1,.78.86,6.59,6.59,0,0,1,.6,1.22l2.4,5.53h-4.3l-2.33-5.31a2.4,2.4,0,0,0-.68-1A2,2,0,0,0,220,208h-3.26v6.54Zm4.14-10H221a4.07,4.07,0,0,0,2.55-.72,2.92,2.92,0,0,0,.92-2.44,3.24,3.24,0,0,0-.8-2.42,3.39,3.39,0,0,0-2.43-.77h-4.51Z" /><path className="cls-1" d="M236.82,214.58l7.55-19.76h4.54l7.52,19.76h-4.3l-1.87-4.76H243l-1.84,4.76Zm6.78-8h6.05l-3-7.95Z" /><path className="cls-1" d="M278.34,214.58V194.82h4.14v19.76Z" /><path className="cls-1" d="M292.13,214.58V194.82h3.59L305.07,208V194.82h4.15v19.76h-3.59l-9.36-13.17v13.17Z" /><path className="cls-1" d="M318.87,214.58V194.82h13.9V198H323v5.06h8.62v3.19H323v8.29Z" /><path className="cls-1" d="M349.73,214.88q-9.6,0-9.6-10.09,0-5.43,2.42-7.86t7.18-2.42c3.17,0,5.57.81,7.18,2.42s2.43,4.24,2.43,7.86Q359.34,214.89,349.73,214.88Zm0-3.53a5,5,0,0,0,4.1-1.61,7.77,7.77,0,0,0,1.3-5q0-3.72-1.3-5.23a6.28,6.28,0,0,0-8.19,0q-1.31,1.51-1.31,5.23a7.77,7.77,0,0,0,1.31,5A4.93,4.93,0,0,0,349.73,211.35Z" /><path className="cls-1" d="M368.25,214.58V194.82h9.49c2.27,0,3.93.59,5,1.79a7,7,0,0,1,1.59,4.83,5.54,5.54,0,0,1-3.92,5.53,3.69,3.69,0,0,1,.78.86,8.16,8.16,0,0,1,.6,1.22l2.39,5.53h-4.3l-2.33-5.31a2.39,2.39,0,0,0-.67-1,2.07,2.07,0,0,0-1.23-.28H372.4v6.54Zm4.15-10h4.26a4,4,0,0,0,2.55-.72,2.92,2.92,0,0,0,.92-2.44,3.24,3.24,0,0,0-.8-2.42,3.38,3.38,0,0,0-2.42-.77H372.4Z" /><path className="cls-1" d="M393.24,214.58V194.82h4.17l5.8,11.87,5.8-11.87h4.14v19.76H409V201.72l-4.61,9.45H402l-4.63-9.45v12.86Z" /><path className="cls-1" d="M421.67,214.58l7.55-19.76h4.54l7.52,19.76H437l-1.87-4.76h-7.27L426,214.58Zm6.78-8h6.05l-3-7.95Zm1.2-13.16,2.45-5.74h3.59l-2.7,5.74Z" /><path className="cls-1" d="M452.16,214.58V198h-6.07v-3.19h16.26V198H456.3v16.57Z" /><path className="cls-1" d="M470.59,214.58V194.82h4.14v19.76Z" /><path className="cls-1" d="M493.87,214.88q-5,0-7.61-2.68a10,10,0,0,1-2.64-7.32q0-4.9,2.56-7.64t7.66-2.73a18.26,18.26,0,0,1,3.2.26,15.82,15.82,0,0,1,2.69.72v3.62a14.64,14.64,0,0,0-5.59-1.07c-2.25,0-3.86.56-4.85,1.69a7.67,7.67,0,0,0-1.47,5.15q0,6.51,6.38,6.51a15.22,15.22,0,0,0,2.86-.27,13.53,13.53,0,0,0,2.7-.78V214a20.76,20.76,0,0,1-2.69.65A19.4,19.4,0,0,1,493.87,214.88Z" /><path className="cls-1" d="M508,214.58l7.55-19.76h4.54l7.52,19.76h-4.3l-1.87-4.76h-7.27l-1.84,4.76Zm6.78-8h6l-3-7.95Z" /></g></g></svg>
    </Link>
  );
};

const NavLeft = ({
  setIsOpen,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex items-center justify-between w-full gap-6">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="block lg:hidden text-slate-100 text-2xl"
        onClick={() => setIsOpen((pv) => !pv)}
      >
        <FiMenu />
      </motion.button>
      <Logo />
      {/* <NavLink text="Nosotros" href="/nosotros" />
      <NavLink text="Servicios" href="/servicios" />
      <NavLink text="Proyectos" href="/proyectos" />
      <NavLink text="Contacto" href="/contacto" /> */}
    </div>
  );
};

const NavLink = ({ text, href }: { text: string; href: string }) => {
  return (
    <Link
      href={href}
      rel="nofollow"
      className="hidden lg:block h-[30px] overflow-hidden font-medium"
    >
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[30px] text-slate-100">{text}</span>
        <span className="flex items-center h-[30px] text-amn-light">
          {text}
        </span>
      </motion.div>
    </Link>
  );
};

const NavRight = () => {
  return (
    <div className="flex items-center gap-4">
      <NavLink text="Nosotros" href="/nosotros" />
      <NavLink text="Servicios" href="/servicios" />
      <NavLink text="Proyectos" href="/proyectos" />
      <NavLink text="Contacto" href="/contacto" />
      {/* <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-4 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent font-medium rounded-md whitespace-nowrap"
      >
        Sign in
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-4 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium rounded-md whitespace-nowrap"
      >
        Sign up
      </motion.button> */}
    </div>
  );
};

const NavMenu = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: Dispatch<SetStateAction<boolean>> }) => {
  return (
    <motion.div
      variants={menuVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      className="absolute p-4 bg-slate-900 shadow-lg left-0 right-0 top-full origin-top flex flex-col gap-4"
    >
      <MenuLink text="Nosotros" href="/nosotros" setIsOpen={setIsOpen} />
      <MenuLink text="Servicios" href="/servicios" setIsOpen={setIsOpen} />
      <MenuLink text="Proyectos" href="/proyectos" setIsOpen={setIsOpen} />
      <MenuLink text="Contacto" href="/contacto" setIsOpen={setIsOpen} />
    </motion.div>
  );
};

const MenuLink = ({ text, href, setIsOpen }: { text: string; href: string; setIsOpen: Dispatch<SetStateAction<boolean>>; }) => {
  return (
    <Link href={href} onClick={() => setIsOpen((pv) => !pv)}>
      <motion.div
        variants={menuLinkVariants}
        className="h-[30px] overflow-hidden font-medium text-lg flex items-start gap-2 z-50"
      >
        <motion.span variants={menuLinkArrowVariants}>
          <FiArrowRight className="h-[30px] text-gray-300" />
        </motion.span>
        <motion.div whileHover={{ y: -30 }}>
          <span className="flex items-center h-[30px] text-gray-300">{text}</span>
          <span className="flex items-center h-[30px] text-indigo-600">
            {text}
          </span>
        </motion.div>
      </motion.div>
    </Link>
  );
};

const menuVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const menuLinkVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: -10,
    opacity: 0,
  },
};

const menuLinkArrowVariants = {
  open: {
    x: 0,
  },
  closed: {
    x: -4,
  },
};