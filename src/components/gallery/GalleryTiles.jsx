"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { MdZoomIn } from "react-icons/md";

// ─── Shared variants ────────────────────────────────────────────────────────

export const revealVariants = {
  hidden: { opacity: 0, y: 48, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Magnetic tilt hook ─────────────────────────────────────────────────────
// Each tile subtly tilts toward the cursor when hovered.

function useTilt(strength = 6) {
  const ref = useRef(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const rotateX = useSpring(rawY, { stiffness: 180, damping: 22 });
  const rotateY = useSpring(rawX, { stiffness: 180, damping: 22 });

  function onMouseMove(e) {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const cx = (e.clientX - left) / width - 0.5;  // -0.5 → 0.5
    const cy = (e.clientY - top) / height - 0.5;
    rawX.set(cx * strength);
    rawY.set(-cy * strength);
  }

  function onMouseLeave() {
    rawX.set(0);
    rawY.set(0);
  }

  return { ref, rotateX, rotateY, onMouseMove, onMouseLeave };
}

// ─── WideTile ───────────────────────────────────────────────────────────────

export function WideTile({
  image,
  onClick,
  captionAlign = "left",
}) {
  const { ref, rotateX, rotateY, onMouseMove, onMouseLeave } = useTilt(3);

  return (
    <motion.div
      ref={ref}
      className="group relative w-full aspect-[4/3] md:aspect-[21/9] rounded-[24px] overflow-hidden shadow-[0_20px_40px_rgba(37,48,107,0.06)] cursor-pointer"
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      variants={revealVariants}
      onClick={onClick}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      whileHover="hovered"
      initial="rest"
    >
      {/* Parallax image layer */}
      <motion.div
        className="absolute inset-[-4%] will-change-transform"
        variants={{
          rest: { scale: 1 },
          hovered: { scale: 1.06, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
        }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 768px) 100vw, 1280px"
          className="object-cover"
        />
      </motion.div>

      {/* Gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-tertiary/80 via-transparent to-transparent"
        variants={{
          rest: { opacity: 0.6 },
          hovered: { opacity: 0.85, transition: { duration: 0.4 } },
        }}
      />

      {/* Shimmer sweep on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(115deg, transparent 40%, rgba(255,255,255,0.08) 50%, transparent 60%)",
          backgroundSize: "200% 100%",
        }}
        variants={{
          rest: { backgroundPosition: "200% 0" },
          hovered: {
            backgroundPosition: "-200% 0",
            transition: { duration: 0.8, ease: "easeInOut" },
          },
        }}
      />

      {/* Caption */}
      <div
        className={`absolute bottom-0 ${
          captionAlign === "right" ? "right-0 text-right" : "left-0"
        } p-6 sm:p-8 md:p-12`}
      >
        {image.badge && (
          <motion.span
            className="inline-block px-4 py-1.5 bg-[#FFF7F2] text-primary font-label-md text-label-md rounded-full mb-3 sm:mb-4"
            variants={{
              rest: { opacity: 0, y: 12 },
              hovered: { opacity: 1, y: 0, transition: { duration: 0.35, delay: 0.05 } },
            }}
          >
            {image.badge}
          </motion.span>
        )}
        {image.title && (
          <motion.h3
            className="font-headline-sm md:font-headline-md text-headline-sm md:text-headline-md text-on-primary"
            variants={{
              rest: { opacity: 0, y: 16 },
              hovered: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.1 } },
            }}
          >
            {image.title}
          </motion.h3>
        )}
      </div>

      {/* Corner zoom icon */}
      <motion.div
        className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
        variants={{
          rest: { opacity: 0, scale: 0.7, rotate: -15 },
          hovered: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.3 } },
        }}
      >
        <MdZoomIn className="text-on-primary text-lg" />
      </motion.div>
    </motion.div>
  );
}

// ─── LargeTile ──────────────────────────────────────────────────────────────

export function LargeTile({
  image,
  onClick,
  className = "",
}) {
  const { ref, rotateX, rotateY, onMouseMove, onMouseLeave } = useTilt(4);

  return (
    <motion.div
      ref={ref}
      className={`group relative aspect-[4/3] md:aspect-auto md:h-[600px] rounded-[24px] overflow-hidden shadow-[0_20px_40px_rgba(37,48,107,0.06)] cursor-pointer ${className}`}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      variants={revealVariants}
      onClick={onClick}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      whileHover="hovered"
      initial="rest"
    >
      {/* Parallax image */}
      <motion.div
        className="absolute inset-[-4%] will-change-transform"
        variants={{
          rest: { scale: 1 },
          hovered: { scale: 1.07, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
        }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 768px) 100vw, 66vw"
          className="object-cover"
        />
      </motion.div>

      {/* Vignette gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-tertiary/70 via-transparent to-transparent"
        variants={{
          rest: { opacity: 0 },
          hovered: { opacity: 1, transition: { duration: 0.4 } },
        }}
      />

      {/* Title slide-up */}
      {image.title && (
        <motion.div
          className="absolute bottom-0 left-0 p-6 sm:p-8"
          variants={{
            rest: { opacity: 0, y: 20 },
            hovered: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
          }}
        >
          {image.badge && (
            <motion.span
              className="inline-block px-3 py-1 bg-[#FFF7F2] text-primary text-xs font-semibold tracking-wide rounded-full mb-2"
              variants={{
                rest: { opacity: 0, x: -8 },
                hovered: { opacity: 1, x: 0, transition: { duration: 0.35, delay: 0.08 } },
              }}
            >
              {image.badge}
            </motion.span>
          )}
          <h3 className="font-display font-semibold text-sm text-on-primary">
            {image.title}
          </h3>
        </motion.div>
      )}

      {/* Zoom dot */}
      <motion.div
        className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
        variants={{
          rest: { opacity: 0, scale: 0.6 },
          hovered: { opacity: 1, scale: 1, transition: { duration: 0.3, delay: 0.05 } },
        }}
      >
        <MdZoomIn className="text-on-primary text-lg" />
      </motion.div>
    </motion.div>
  );
}

// ─── SmallTile ──────────────────────────────────────────────────────────────

export function SmallTile({
  image,
  onClick,
  className = "",
}) {
  // Simpler tilt for smaller tiles
  const { ref, rotateX, rotateY, onMouseMove, onMouseLeave } = useTilt(5);

  return (
    <motion.div
      ref={ref}
      className={`group relative flex-1 min-h-[220px] sm:min-h-[250px] rounded-[24px] overflow-hidden shadow-[0_20px_40px_rgba(37,48,107,0.06)] cursor-pointer ${className}`}
      style={{ rotateX, rotateY, transformPerspective: 700 }}
      variants={revealVariants}
      onClick={onClick}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      whileHover="hovered"
      initial="rest"
    >
      {/* Image */}
      <motion.div
        className="absolute inset-[-4%] will-change-transform"
        variants={{
          rest: { scale: 1 },
          hovered: { scale: 1.09, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
        }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </motion.div>

      {/* Dark scrim */}
      <motion.div
        className="absolute inset-0 bg-black/25"
        variants={{
          rest: { opacity: 0 },
          hovered: { opacity: 1, transition: { duration: 0.3 } },
        }}
      />

      {/* Zoom icon — scale + rotate in */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        variants={{
          rest: { opacity: 0 },
          hovered: { opacity: 1, transition: { duration: 0.25 } },
        }}
      >
        <motion.div
          variants={{
            rest: { scale: 0.5, rotate: -20 },
            hovered: { scale: 1, rotate: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
          }}
        >
          <MdZoomIn className="text-on-primary text-3xl sm:text-4xl drop-shadow-md" />
        </motion.div>
      </motion.div>

      {/* Badge bottom strip */}
      {image.badge && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 px-4 pb-4 pt-8 bg-gradient-to-t from-tertiary/70 to-transparent"
          variants={{
            rest: { opacity: 0, y: 8 },
            hovered: { opacity: 1, y: 0, transition: { duration: 0.35 } },
          }}
        >
          <span className="inline-block px-3 py-1 bg-[#FFF7F2] text-primary text-[11px] font-semibold tracking-wide rounded-full">
            {image.badge}
          </span>
        </motion.div>
      )}
    </motion.div>
  );
}