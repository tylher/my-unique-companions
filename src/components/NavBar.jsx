"use client";
import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
  const [activeNum, setActiveNum] = useState(0);

  return (
    <nav className="">
      <ul className="flex items-center justify-between gap-10 font-medium ">
        <li
          className={`after:content-[''] relative cursor-pointer pb-1 transition-colors duration-250 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-secondary after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)] hover:after:scale-x-100 active:text-secondary ${activeNum == 0 ? "text-secondary-container" : "text-primary"}`}
          onClick={() => setActiveNum(0)}
        >
          <Link href="/">Home</Link>
        </li>
        <li
          className={`after:content-[''] relative cursor-pointer pb-1 transition-colors duration-250 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-secondary after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)] hover:after:scale-x-100 active:text-secondary ${activeNum == 1 ? "text-secondary-container" : "text-primary"}`}
          onClick={() => setActiveNum(1)}
        >
          <Link href="/about">About</Link>
        </li>
        <li
          className={`after:content-[''] relative cursor-pointer pb-1 transition-colors duration-250 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-secondary after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)] hover:after:scale-x-100 active:text-secondary ${activeNum == 2 ? "text-secondary-container" : "text-primary"}`}
          onClick={() => setActiveNum(2)}
        >
          <Link href="/services">Services</Link>
        </li>
        <li
          className={`after:content-[''] relative cursor-pointer pb-1 transition-colors duration-250 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-secondary after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)] hover:after:scale-x-100 active:text-secondary ${activeNum == 3 ? "text-secondary-container" : "text-primary"}`}
          onClick={() => setActiveNum(3)}
        >
          <Link href="/careers">Careers</Link>
        </li>
        <li
          className={`after:content-[''] relative cursor-pointer pb-1 transition-colors duration-250 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-secondary after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)] hover:after:scale-x-100 active:text-secondary ${activeNum == 4 ? "text-secondary-container" : "text-primary"}`}
          onClick={() => setActiveNum(4)}
        >
          <Link href="/resources">Resources</Link>
        </li>
        <li
          className={`after:content-[''] relative cursor-pointer pb-1 transition-colors duration-250 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-secondary after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)] hover:after:scale-x-100 active:text-secondary ${activeNum == 5 ? "text-secondary-container" : "text-primary"}`}
          onClick={() => setActiveNum(5)}
        >
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
