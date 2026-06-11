"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Careers", href: "/careers" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
];

const NavBar = ({isOpen}) => {
  const pathName = usePathname();

  return (
    <nav>
      {/* Desktop Navigation */}
      <ul className="hidden lg:flex items-center justify-between gap-10 font-medium">
        {links.map((link) => (
          <li
            key={link.href}
            className={`after:content-[''] relative cursor-pointer pb-1 transition-colors duration-250 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-secondary after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)] hover:after:scale-x-100 active:text-secondary ${
              pathName === link.href
                ? "text-secondary-container"
                : "text-primary"
            }`}
          >
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        {isOpen && (
          <ul className="z-50 mt-4 flex w-full flex-col gap-4 rounded-xl bg-white p-6 shadow-lg">
            {links.map((link) => (
              <li
                key={link.href}
                className={`${
                  pathName === link.href
                    ? "text-secondary-container"
                    : "text-primary"
                }`}
              >
                <Link href={link.href} onClick={() => setIsOpen(false)}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
