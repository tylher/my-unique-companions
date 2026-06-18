"use client";

import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos, MdClose } from "react-icons/md";

// ─── Dot indicator ────────────────────────────────────────────────────────────

function Dot({ active, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      className="rounded-full bg-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      aria-label={active ? "Current image" : "Go to image"}
      animate={{
        width: active ? 20 : 6,
        opacity: active ? 1 : 0.45,
        backgroundColor: active ? "#ffffff" : "rgba(255,255,255,0.6)",
      }}
      style={{ height: 6, display: "inline-block" }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ opacity: 0.8 }}
    />
  );
}

// ─── Lightbox ─────────────────────────────────────────────────────────────────

export default function GalleryLightbox({
  images,
  activeIndex,
  onClose,
  onNavigate,
}) {
  const isOpen = activeIndex !== null;
  const current = isOpen ? images[activeIndex] : null;

  // direction is plain state — never a ref, never touches the number from setActiveIndex
  const [direction, setDirection] = useState(1);

  // Swipe drag motion values — created unconditionally (Rules of Hooks)
  const dragX = useMotionValue(0);
  const dragXSpring = useSpring(dragX, { stiffness: 300, damping: 35 });

  // Navigate helpers — always call onNavigate with a concrete number, never a callback
  const goNext = useCallback(() => {
    if (activeIndex === null) return;
    setDirection(1);
    onNavigate((activeIndex + 1) % images.length);
  }, [activeIndex, images.length, onNavigate]);

  const goPrev = useCallback(() => {
    if (activeIndex === null) return;
    setDirection(-1);
    onNavigate((activeIndex - 1 + images.length) % images.length);
  }, [activeIndex, images.length, onNavigate]);

  const navigateTo = useCallback(
    (i) => {
      if (activeIndex === null) return;
      setDirection(i > activeIndex ? 1 : -1);
      onNavigate(i);
    },
    [activeIndex, onNavigate],
  );

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const handle = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    document.addEventListener("keydown", handle);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handle);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, goNext, goPrev]);

  // Drag-to-navigate
  function handleDragEnd(_, info) {
    if (info.offset.x < -60) goNext();
    else if (info.offset.x > 60) goPrev();
    dragX.set(0);
  }

  // Directional slide variants — uses the `direction` state via `custom`
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? "55%" : "-55%",
      opacity: 0,
      scale: 0.88,
      filter: "blur(8px)",
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
    exit: (dir) => ({
      x: dir > 0 ? "-55%" : "55%",
      opacity: 0,
      scale: 0.88,
      filter: "blur(8px)",
      transition: { duration: 0.35, ease: [0.4, 0, 1, 1] },
    }),
  };

  const showDots = images.length <= 9;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-tertiary/90 backdrop-blur-xl px-4 sm:px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={current?.title || "Gallery image"}
        >
          {/* ── Close ── */}
          <motion.button
            onClick={onClose}
            className="absolute top-5 right-5 sm:top-8 sm:right-8 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/10 text-on-primary backdrop-blur-md"
            initial={{ opacity: 0, scale: 0.6, rotate: -45 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.35, delay: 0.1 }}
            whileHover={{ backgroundColor: "rgba(255,255,255,0.22)", scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            aria-label="Close gallery"
          >
            <MdClose className="text-xl sm:text-2xl" />
          </motion.button>

          {/* ── Prev arrow ── */}
          <motion.button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-2 sm:left-6 z-20 flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white/10 text-on-primary backdrop-blur-md"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.35, delay: 0.12 }}
            whileHover={{ backgroundColor: "rgba(255,255,255,0.22)", x: -3 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Previous image"
          >
            <MdArrowBackIosNew className="text-base sm:text-xl" />
          </motion.button>

          {/* ── Next arrow ── */}
          <motion.button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-2 sm:right-6 z-20 flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white/10 text-on-primary backdrop-blur-md"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.35, delay: 0.12 }}
            whileHover={{ backgroundColor: "rgba(255,255,255,0.22)", x: 3 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Next image"
          >
            <MdArrowForwardIos className="text-base sm:text-xl" />
          </motion.button>

          {/* ── Image card (directional slide) ── */}
          <AnimatePresence mode="popLayout" custom={direction}>
            <motion.div
              key={current?.id}
              className="relative z-10 w-full max-w-5xl"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.18}
              onDragEnd={handleDragEnd}
              style={{ x: dragXSpring, cursor: "grab" }}
              whileDrag={{ cursor: "grabbing", scale: 0.97 }}
            >
              {/* Image frame */}
              <div className="relative w-full h-[55vh] sm:h-[70vh] rounded-2xl sm:rounded-[24px] overflow-hidden shadow-2xl">
                <Image
                  src={current.src}
                  alt={current.alt}
                  fill
                  className="object-cover select-none"
                  sizes="(max-width: 768px) 100vw, 80vw"
                  priority
                  draggable={false}
                />
                {/* Gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                />
              </div>

              {/* Caption */}
              {(current.title || current.badge) && (
                <motion.div
                  className="mt-4 sm:mt-6 text-center px-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.18, duration: 0.4 }}
                >
                  {current.badge && (
                    <span className="inline-block px-4 py-1.5 bg-[#FFF7F2] text-primary font-label-md text-label-md rounded-full mb-3">
                      {current.badge}
                    </span>
                  )}
                  {current.title && (
                    <h3 className="font-headline-sm text-headline-sm text-on-primary">
                      {current.title}
                    </h3>
                  )}
                </motion.div>
              )}

              {/* Dots / counter */}
              <motion.div
                className="mt-4 flex items-center justify-center gap-1.5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
              >
                {showDots ? (
                  images.map((_, i) => (
                    <Dot
                      key={i}
                      active={i === activeIndex}
                      onClick={(e) => { e?.stopPropagation?.(); navigateTo(i); }}
                    />
                  ))
                ) : (
                  <p className="text-center text-xs sm:text-sm text-on-primary/60 font-body-md">
                    {activeIndex + 1} / {images.length}
                  </p>
                )}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}