"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 2);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full max-w-screen overflow-hidden px-4 md:px-6 lg:px-8 py-4 transition-all duration-300 ${
        scrolled
          ? "fixed top-0 left-0 bg-white shadow-2xl z-50"
          : "absolute top-0 left-0 bg-transparent z-50"
      }`}
    >
      <div className="flex items-center justify-between">
        <Image
          src="/images/Unique-Companions-Logo.png"
          alt="Unique Companions AFQ"
          width={120}
          height={50}
          className="object-cover"
        />

        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <NavBar />
        </div>

        {/* Desktop Button */}
        <button className="hidden lg:block text-white font-bold bg-primary py-2 px-4 rounded-2xl">
          Schedule a visit
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-1 mr-5"
          aria-label="Toggle menu"
        >
          <span className="w-6 h-0.5 bg-primary"></span>
          <span className="w-6 h-0.5 bg-primary"></span>
          <span className="w-6 h-0.5 bg-primary"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden mt-4 rounded-2xl bg-white shadow-xl p-5">
          <NavBar isOpen={menuOpen} />

          <button className="w-full mt-5 text-white font-bold bg-primary py-3 rounded-xl">
            Schedule a visit
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
