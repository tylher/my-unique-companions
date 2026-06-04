"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 2);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`flex items-center justify-between py-4 w-full px-8 ${scrolled == false ? "bg-transparent " : "bg-white fixed shadow-2xl z-40"} `}
    >
      <div>
        <Image
          src="/images/Unique-Companions-Logo.png"
          alt="Unique Companions AFQ"
          className="object-cover"
          width={120}
          height={50}
        />
      </div>
      <NavBar />

      <button className="text-white font-bold bg-primary py-2 px-4 rounded-2xl">
        Schedule a visit
      </button>
    </header>
  );
};

export default Header;
