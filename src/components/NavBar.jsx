"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  {
    name: "Resources",
    children: [
      {
        name: "Welcome Packet",
        href: "/resources/welcome-packet",
      },
      {
        name: "Gallery",
        href: "/resources/gallery",
      },
    ],
  },
  { name: "Contact", href: "/contact" },
  { name: "Careers", href: "/careers" },
];

// ─── Animation variants ───────────────────────────────────────────────────────

const dropdownVariants = {
  hidden: { opacity: 0, y: -8, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -6,
    scale: 0.97,
    transition: { duration: 0.16, ease: [0.4, 0, 1, 1] },
  },
};

const dropdownItemVariants = {
  hidden: { opacity: 0, x: -6 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.2, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] },
  }),
};

const accordionVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.22, ease: [0.4, 0, 1, 1] },
  },
};

// ─── Desktop dropdown item ────────────────────────────────────────────────────

function DropdownItem({ sub, index, onClick }) {
  const pathName = usePathname();
  const isActive = pathName === sub.href;

  return (
    <motion.li custom={index} variants={dropdownItemVariants}>
      <Link
        href={sub.href}
        onClick={onClick}
        className={`group flex flex-col gap-0.5 rounded-lg px-4 py-3 transition-colors duration-200 hover:bg-primary/5 ${
          isActive ? "bg-primary/8 text-secondary-container" : "text-primary"
        }`}
      >
        <span className="text-sm font-semibold leading-tight group-hover:text-secondary transition-colors duration-200">
          {sub.name}
        </span>
        {sub.description && (
          <span className="text-xs text-primary/50 leading-snug">
            {sub.description}
          </span>
        )}
      </Link>
    </motion.li>
  );
}

// ─── Desktop Resources dropdown trigger ───────────────────────────────────────

function DesktopDropdown({ link }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const pathName = usePathname();
  const closeTimer = useRef(null);

  const isChildActive = link.children.some((c) => pathName === c.href);

  // Small delay on close so moving the cursor from trigger → panel
  // doesn't flicker the dropdown shut mid-travel.
  function handleMouseEnter() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  }

  function handleMouseLeave() {
    closeTimer.current = setTimeout(() => setOpen(false), 100);
  }

  // Clean up timer on unmount
  useEffect(() => () => clearTimeout(closeTimer.current), []);

  return (
    <li
      ref={ref}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger — still a button for keyboard/a11y */}
      <button
        aria-expanded={open}
        aria-haspopup="listbox"
        className={`relative flex items-center gap-1  font-medium cursor-pointer transition-colors duration-250
          after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px]
          after:bg-secondary after:origin-left after:transition-transform after:duration-300
          after:ease-[cubic-bezier(0.22,1,0.36,1)] hover:after:scale-x-100
          ${
            isChildActive
              ? "text-secondary-container after:scale-x-100"
              : "text-primary after:scale-x-0"
          }`}
      >
        {link.name}
        <motion.span
          animate={{ rotate: !open ? 180 : 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center mt-1"
        >
          {/* {open ? ( */}
          <MdKeyboardArrowUp className="text-lg" />
          {/* ) : ( */}
          {/* <MdKeyboardArrowDown className="text-lg" />
          )} */}
        </motion.span>
      </button>

      {/* Invisible bridge: fills the gap between trigger and panel so the
          cursor travelling downward doesn't leave the li and fire onMouseLeave */}
      {open && (
        <div
          className="absolute top-full left-0 w-full h-[14px]"
          aria-hidden="true"
        />
      )}

      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute top-[calc(100%+14px)] left-1/2 -translate-x-1/2 z-50
                       w-56 rounded-2xl bg-white shadow-[0_8px_32px_rgba(37,48,107,0.12)]
                       border border-primary/6 overflow-hidden"
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Decorative top accent */}
            <div className="h-1 w-full bg-gradient-to-r from-primary/30 via-secondary/40 to-primary/20" />
            <motion.ul
              className="p-2"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
            >
              {link.children.map((sub, i) => (
                <DropdownItem
                  key={sub.href}
                  sub={sub}
                  index={i}
                  onClick={() => setOpen(false)}
                />
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

// ─── NavBar ───────────────────────────────────────────────────────────────────

const NavBar = ({ isOpen, setIsOpen }) => {
  const pathName = usePathname();
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  return (
    <nav>
      {/* ── Desktop ── */}
      <ul className="hidden lg:flex items-center justify-between gap-10 font-medium ">
        {links.map((link) => {
          // Dropdown link
          if (link.children) {
            return <DesktopDropdown key={link.name} link={link} />;
          }

          // Plain link
          return (
            <li
              key={link.href}
              className={`after:content-[''] relative cursor-pointer pb-1 transition-colors duration-250
                after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px]
                after:bg-secondary after:scale-x-0 after:origin-left after:transition-transform
                after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)] hover:after:scale-x-100
                active:text-secondary
                ${pathName === link.href ? "text-secondary-container" : "text-primary"}`}
            >
              <Link href={link.href}>{link.name}</Link>
            </li>
          );
        })}
      </ul>

      {/* ── Mobile ── */}
      <div className="lg:hidden">
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              className="z-50 mt-4 flex w-full flex-col gap-1 rounded-xl bg-white p-4 shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              {links.map((link, idx) => {
                // Mobile dropdown (accordion)
                if (link.children) {
                  const isChildActive = link.children.some(
                    (c) => pathName === c.href,
                  );
                  return (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.04, duration: 0.22 }}
                    >
                      <button
                        onClick={() => setMobileResourcesOpen((v) => !v)}
                        className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 font-medium transition-colors duration-200 hover:bg-primary/5
                          ${isChildActive ? "text-secondary-container" : "text-primary"}`}
                      >
                        {link.name}
                        <motion.span
                          animate={{ rotate: mobileResourcesOpen ? 180 : 0 }}
                          transition={{
                            duration: 0.25,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="flex items-center text-primary/60"
                        >
                          {mobileResourcesOpen ? (
                            <MdKeyboardArrowUp className="text-xl" />
                          ) : (
                            <MdKeyboardArrowDown className="text-xl" />
                          )}
                        </motion.span>
                      </button>

                      <AnimatePresence initial={false}>
                        {mobileResourcesOpen && (
                          <motion.ul
                            className="overflow-hidden"
                            variants={accordionVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                          >
                            <div className="ml-3 mt-1 mb-1 flex flex-col gap-0.5 border-l-2 border-primary/10 pl-3">
                              {link.children.map((sub) => (
                                <li key={sub.href}>
                                  <Link
                                    href={sub.href}
                                    onClick={() => {
                                      setIsOpen(false);
                                      setMobileResourcesOpen(false);
                                    }}
                                    className={`flex flex-col gap-0.5 rounded-lg px-3 py-2.5 transition-colors duration-200 hover:bg-primary/5
                                      ${pathName === sub.href ? "text-secondary-container" : "text-primary/80"}`}
                                  >
                                    <span className="text-sm font-medium">
                                      {sub.name}
                                    </span>
                                    {sub.description && (
                                      <span className="text-xs text-primary/40">
                                        {sub.description}
                                      </span>
                                    )}
                                  </Link>
                                </li>
                              ))}
                            </div>
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </motion.li>
                  );
                }

                // Plain mobile link
                return (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04, duration: 0.22 }}
                    className={`rounded-lg ${
                      pathName === link.href
                        ? "text-secondary-container"
                        : "text-primary"
                    }`}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block w-full px-3 py-2.5 font-medium transition-colors duration-200 hover:bg-primary/5 rounded-lg"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                );
              })}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default NavBar;
