"use client";

import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import Link from "next/link";
import { useMotionValueEvent, AnimatePresence, useScroll, motion} from "motion/react";
import { FiMenu, FiArrowRight, FiX, FiChevronDown } from "react-icons/fi";

import useMeasure from "react-use-measure";
import { aboutLinks, servicesLinks } from '@/lib/links';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 150 ? true : false);
  });

  return (
    <nav
      className={`fixed top-0 z-50 w-full text-white 
      transition-all duration-300 ease-out 
      ${
        scrolled
          ? "bg-slate-900 py-3 shadow-xl"
          : "bg-neutral-950/0 py-6 shadow-none"
      }`}
    >
      <div className="container mx-auto px-0 flex items-center justify-between">
        <Logo />
        <div className="hidden lg:flex">
          <Links />
        </div>
        <MobileMenu />
      </div>
    </nav>
  );
};

const Logo = ({ color = "white" }) => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <img src="/logo.webp" width={90} height={90} alt="logo" />
    </Link>
  );
};

const Links = () => {
  return (
    <div className="flex items-center gap-6">
      {navLinks.map((l) => (
        <NavLink key={l.text} href={l.href} FlyoutContent={l.component}>
          {l.text}
        </NavLink>
      ))}
    </div>
  );
};

const NavLink = ({ children, href, FlyoutContent }:{ children: ReactNode, href:string, FlyoutContent:any }) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative h-fit w-fit"
    >
      <Link href={href} className="relative">
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-amn-dark transition-transform duration-300 ease-out"
        />
      </Link>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const AboutUsContent = () => {
  return (
    <div className="grid h-fit w-full grid-cols-12 shadow-xl lg:h-72 lg:w-[600px] lg:shadow-none xl:w-[750px]">
      <div className="col-span-12 flex flex-col justify-between bg-amn-dark p-2 lg:col-span-4">
        <div>
          <h2 className="mb-2 text-xl font-semibold text-white">Nosotros</h2>
          <p className="mb-6 max-w-xs text-sm text-slate-200">
            Todo acerca de nuestra empresa, ¡Conocenos!
          </p>
        </div>
        <Link href="/nosotros" className="flex items-center gap-1 text-xs text-white hover:underline">
          <FiArrowRight />
        </Link>
      </div>
      <div className="col-span-12 grid grid-cols-2 grid-rows-2 gap-3 bg-white p-2 lg:col-span-8">
        {aboutLinks.map( link => (
            <Link key={link.title} href={link.href} className="rounded border-2 border-neutral-200 bg-white p-3 transition-colors hover:bg-neutral-100">
                <h3 className="mb-1 font-semibold">{link.title}</h3>
                <p className="text-xs">
                    {link.description}
                </p>
            </Link>
        ))}
      </div>
    </div>
  );
};

const ServicesContent = () => {
  return (
    <div className="grid h-fit w-full grid-cols-12 shadow-xl lg:h-72 lg:w-[600px] lg:shadow-none xl:w-[750px]">
      <div className="col-span-12 flex flex-col justify-between bg-amn-dark p-2 lg:col-span-4">
        <div>
          <h2 className="mb-2 text-xl font-semibold text-white">Servicios</h2>
          <p className="mb-6 max-w-xs text-sm text-slate-200">
            Tus necesidades son nuestra prioridad
          </p>
        </div>
        <Link href="/servicios" className="flex items-center gap-1 text-xs text-white hover:underline">
          <FiArrowRight />
        </Link>
      </div>
      <div className="col-span-12 grid grid-cols-2 grid-rows-2 gap-3 bg-white p-2 lg:col-span-8">
        {servicesLinks.map( link => (
            <Link key={link.title} href={link.href} className="rounded border-2 border-neutral-200 bg-white p-3 transition-colors hover:bg-neutral-100">
                <h3 className="mb-1 font-semibold">{link.title}</h3>
                <p className="text-xs">
                    {link.description}
                </p>
            </Link>
        ))}
      </div>
    </div>
  );
};


const MobileMenuLink = ({ children, href, FoldContent, setMenuOpen }:{ children:ReactNode, href:string, FoldContent:any, setMenuOpen: Dispatch<SetStateAction<boolean>> }) => {
  const [ref, { height }] = useMeasure();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative text-slate-200 bg-background">
      {FoldContent ? (
        <div
          className="flex w-full cursor-pointer items-center justify-between py-6 text-start text-2xl font-semibold"
          onClick={() => setOpen((pv) => !pv)}
        >
          <Link
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen(false);
            }}
            href={href}
          >
            {children}
          </Link>
          <motion.div
            animate={{ rotate: open ? "180deg" : "0deg" }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            <FiChevronDown />
          </motion.div>
        </div>
      ) : (
        <Link
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen(false);
          }}
          href="#"
          className="flex w-full cursor-pointer items-center justify-between py-6 text-start text-2xl font-semibold"
        >
          <span>{children}</span>
          <FiArrowRight />
        </Link>
      )}
      {FoldContent && (
        <motion.div
          initial={false}
          animate={{
            height: open ? height : "0px",
            marginBottom: open ? "24px" : "0px",
            marginTop: open ? "12px" : "0px",
          }}
          className="overflow-hidden"
        >
          <div ref={ref}>
            <FoldContent />
          </div>
        </motion.div>
      )}
    </div>
  );
};

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="block lg:hidden">
      <button onClick={() => setOpen(true)} className="block text-3xl">
        <FiMenu />
      </button>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "100vw" }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed left-0 top-0 flex h-screen w-full flex-col bg-background"
          >
            <div className="flex items-center justify-between p-6">
              <Logo color="black" />
              <button onClick={() => setOpen(false)}>
                <FiX className="text-3xl text-slate-200" />
              </button>
            </div>
            <div className="h-screen overflow-y-scroll bg-background p-6">
              {navLinks.map((l) => (
                <MobileMenuLink
                  key={l.text}
                  href={l.href}
                  FoldContent={l.component}
                  setMenuOpen={setOpen}
                >
                  {l.text}
                </MobileMenuLink>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export const navLinks = [
    {
      text: "Nosotros",
      href: "/nosotros",
      component: AboutUsContent,
    },
    {
      text: "Servicios",
      href: "/servicios",
      component: ServicesContent,
    },
    {
      text: "Proyectos",
      href: "/proyectos",
    },
    {
      text: "Contacto",
      href: "/contacto",
    },
  ];