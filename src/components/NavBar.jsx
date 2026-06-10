"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathName = usePathname();


  return (
    <nav className="">
      <ul className="flex items-center justify-between gap-10 font-medium ">
        <li
          className={`after:content-[''] relative cursor-pointer pb-1 transition-colors duration-250 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-secondary after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)] hover:after:scale-x-100 active:text-secondary ${pathName == "/" ? "text-secondary-container" : "text-primary"}`}
        >
          <Link href="/">Home</Link>
        </li>
        <li
          className={`after:content-[''] relative cursor-pointer pb-1 transition-colors duration-250 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-secondary after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)] hover:after:scale-x-100 active:text-secondary ${pathName == "/about" ? "text-secondary-container" : "text-primary"}`}
        >
          <Link href="/about">About</Link>
        </li>
        <li
          className={`after:content-[''] relative cursor-pointer pb-1 transition-colors duration-250 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-secondary after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)] hover:after:scale-x-100 active:text-secondary ${pathName == "/services" ? "text-secondary-container" : "text-primary"}`}
        >
          <Link href="/services">Services</Link>
        </li>
        <li
          className={`after:content-[''] relative cursor-pointer pb-1 transition-colors duration-250 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-secondary after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)] hover:after:scale-x-100 active:text-secondary ${pathName == "/careers" ? "text-secondary-container" : "text-primary"}`}
        >
          <Link href="/careers">Careers</Link>
        </li>
        <li
          className={`after:content-[''] relative cursor-pointer pb-1 transition-colors duration-250 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-secondary after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)] hover:after:scale-x-100 active:text-secondary ${pathName == "/resources" ? "text-secondary-container" : "text-primary"}`}
        >
          <Link href="/resources">Resources</Link>
        </li>
        <li
          className={`after:content-[''] relative cursor-pointer pb-1 transition-colors duration-250 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-secondary after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)] hover:after:scale-x-100 active:text-secondary ${pathName == "/contact" ? "text-secondary-container" : "text-primary"}`}
        >
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
