"use client";
import { useEffect, useRef, useState } from "react";

export default function PhilosophyBlock({ item, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const isLeft = index % 2 === 0;
  const Icon = item.icon;

  return (
    <div
      ref={ref}
      className={`
        w-full
        py-[120px]
        transition-all
        duration-700
        ${index % 2 === 1 ? "bg-surface-container-low" : "bg-white"}
      `}
    >
      <div
        className={`
          max-w-6xl
          mx-auto
          px-6
          flex
          flex-col
          md:flex-row
          items-center
          gap-14
          transition-all
          duration-700

          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}

          ${isLeft ? "" : "md:flex-row-reverse"}
        `}
      >
        {/* TEXT SIDE */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <Icon className="text-primary-container text-2xl" />
          </div>

          <h2 className="text-4xl md:text-5xl font-serif text-primary-container mb-4 relative">
            {item.title}
            <span className="absolute left-0 -bottom-3 w-16 h-0.75 bg-[#e35e25]" />
          </h2>

          <p className="text-on-surface-variant text-[16px] leading-relaxed max-w-xl">
            {item.text}
          </p>
        </div>

        {/* IMAGE SIDE */}
        <div className="flex-1 relative">
          <div className="rounded-3xl overflow-hidden shadow-[0_20px_40px_rgba(37,48,107,0.08)]">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-95 object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* subtle glow behind image */}
          <div className="absolute -inset-6 bg-primary-container opacity-[0.05] blur-3xl rounded-3xl -z-10" />
        </div>
      </div>
    </div>
  );
}