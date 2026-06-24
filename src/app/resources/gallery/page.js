"use client";

import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useMemo, useRef, useState } from "react";

import GalleryLightbox from "@/components/gallery/GalleryLightBox";
import {
  LargeTile,
  SmallTile,
  WideTile,
  revealVariants,
} from "@/components/gallery/GalleryTiles";
import { categories, galleryImages } from "@/data/features";

// ─── Variants ────────────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const gridContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.11 },
  },
};

const filterBar = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const filterPill = {
  hidden: { opacity: 0, y: 16, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Layout grouping ──────────────────────────────────────────────────────────

function groupIntoBlocks(images) {
  const blocks = [];
  let i = 0;

  while (i < images.length) {
    const img = images[i];

    if (img.size === "wide") {
      blocks.push({ type: "wide", items: [img] });
      i += 1;
      continue;
    }

    if (img.size === "large") {
      // Collect immediately following smalls, stopping at the first non-small
      const smalls = [];
      let j = i + 1;
      while (
        j < images.length &&
        images[j].size === "small" &&
        smalls.length < 2
      ) {
        smalls.push(images[j]);
        j++;
      }
      blocks.push({ type: "asymmetric", items: [img, ...smalls] });
      i = j; // advance past everything consumed
      continue;
    }

    if (img.size === "small") {
      // Collect a run of smalls (up to 3 for a row of smalls)
      const smalls = [];
      let j = i;
      while (
        j < images.length &&
        images[j].size === "small" &&
        smalls.length < 3
      ) {
        smalls.push(images[j]);
        j++;
      }
      blocks.push({ type: "smalls", items: smalls });
      i = j;
      continue;
    }

    // Fallback: skip unknown size to prevent infinite loop
    i += 1;
  }

  return blocks;
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeIndex, setActiveIndex] = useState(null);

  // Hero parallax
  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  const heroImgY = useTransform(scrollY, [0, 600], [0, 110]);
  const heroTextY = useTransform(scrollY, [0, 400], [0, 55]);
  const heroOpacity = useTransform(scrollY, [0, 380], [1, 0]);

  const filteredImages = useMemo(() => {
    if (activeCategory === "all") return galleryImages;
    return galleryImages.filter((img) => img.category === activeCategory);
  }, [activeCategory]);

  const blocks = useMemo(
    () => groupIntoBlocks(filteredImages),
    [filteredImages],
  );

  console.log(filteredImages);

  const openLightboxFor = (image) => {
    const index = filteredImages.findIndex((img) => img.id === image.id);
    setActiveIndex(index);
  };

  const message =
    "Hi there, I would like to schedule a visit to Unique companions AFQ";

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative w-full h-153.5 md:h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Parallax image */}
        <motion.div
          className="absolute inset-0 z-0 scale-110"
          style={{ y: heroImgY }}
        >
          <img
            alt="Cinematic wide shot of a luxurious, light-filled living room in a high-end adult family home with soft natural light through floor-to-ceiling windows."
            className="w-full h-full object-cover object-center"
            src="/images/gallery/hero-living-room.jpg"
          />
          <div className="absolute inset-0 bg-primary-container/50 mix-blend-multiply" />
          <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" />
        </motion.div>

        {/* Hero text — separate parallax + fade on scroll */}
        <motion.div
          className="relative z-10 text-center px-10 md:px-20 max-w-4xl mx-auto mt-20 md:mt-0"
          style={{ y: heroTextY, opacity: heroOpacity }}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          {/* Eyebrow label */}
          <motion.span
            className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-on-primary/80 text-xs font-semibold tracking-[0.12em] uppercase"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Spaces
          </motion.span>

          <motion.h1
            className="font-display md:font-display text-xl md:text-6xl font-bold text-on-primary mb-6 drop-shadow-lg"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Experience Our Home
          </motion.h1>

          <motion.p
            className="font-body text-lg text-on-primary/90 max-w-2xl mx-auto drop-shadow-md"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            A visual journey through our thoughtfully designed spaces, crafted
            for dignity, comfort, and community connection.
          </motion.p>

          {/* Scroll cue */}
          <motion.div
            className="mt-10 flex flex-col items-center gap-1.5 text-on-primary/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <span className="text-[11px] tracking-widest uppercase font-medium">
              Scroll to explore
            </span>
            <motion.div
              className="w-px h-8 bg-on-primary/30 origin-top"
              animate={{ scaleY: [0, 1, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ── FILTER BAR ────────────────────────────────────────────────────── */}
      <motion.section
        className="max-w-container-max mx-auto px-7 md:px-20 py-6 flex flex-wrap justify-center gap-5 sm:gap-8 md:gap-16 border-b border-surface-variant overflow-x-auto"
        variants={filterBar}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          const count =
            cat.id === "all"
              ? galleryImages.length
              : galleryImages.filter((img) => img.category === cat.id).length;

          return (
            <motion.button
              key={cat.id}
              variants={filterPill}
              onClick={() => setActiveCategory(cat.id)}
              className="relative font-script font-medium text-base pb-2 whitespace-nowrap transition-colors duration-200 flex items-center gap-1.5"
              style={{
                color: isActive
                  ? "var(--color-primary)"
                  : "var(--color-on-surface-variant)",
              }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.label}

              {/* count bubble */}
              <AnimatePresence>
                {isActive && (
                  <motion.span
                    className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-on-primary text-[10px] font-bold"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    {count}
                  </motion.span>
                )}
              </AnimatePresence>

              {/* Animated underline */}
              <motion.span
                className="absolute bottom-0 left-0 h-0.5 bg-primary rounded-full"
                initial={false}
                animate={{ width: isActive ? "100%" : "0%" }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.button>
          );
        })}
      </motion.section>

      {/* ── GALLERY GRID ──────────────────────────────────────────────────── */}
      <AnimatePresence mode="wait">
        <motion.section
          key={activeCategory}
          className="max-w-container-max mx-auto px-7 md:px-10 py-7 space-y-4 md:space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={gridContainer}
          // Slide in from bottom when category changes
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24, transition: { duration: 0.22 } }}
        >
          {blocks.map((block, blockIndex) => {
            if (block.type === "wide") {
              const img = block.items[0];
              return (
                <WideTile
                  key={img.id}
                  image={img}
                  onClick={() => openLightboxFor(img)}
                  captionAlign={blockIndex % 2 === 0 ? "left" : "right"}
                />
              );
            }

            if (block.type === "smalls") {
              return (
                <motion.div
                  key={block.items[0].id}
                  className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6"
                  variants={revealVariants}
                >
                  {block.items.map((img) => (
                    <SmallTile
                      key={img.id}
                      image={img}
                      onClick={() => openLightboxFor(img)}
                      className={
                        block.items.length === 3
                          ? "md:col-span-4"
                          : block.items.length === 2
                            ? "md:col-span-6"
                            : "md:col-span-4"
                      }
                    />
                  ))}
                </motion.div>
              );
            }

            const [large, ...smalls] = block.items;
            if (!large) return null;

            return (
              <motion.div
                key={large.id}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6"
                variants={revealVariants}
              >
                <LargeTile
                  image={large}
                  onClick={() => openLightboxFor(large)}
                  className="md:col-span-8"
                />
                {smalls.length > 0 && (
                  <div className="md:col-span-4 flex flex-col gap-4 md:gap-6 h-full">
                    {smalls.map((img) => (
                      <SmallTile
                        key={img.id}
                        image={img}
                        onClick={() => openLightboxFor(img)}
                      />
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}

          {/* Empty state */}
          <AnimatePresence>
            {filteredImages.length === 0 && (
              <motion.p
                className="text-center text-on-surface-variant font-body py-16"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                No photos in this category yet.
              </motion.p>
            )}
          </AnimatePresence>
        </motion.section>
      </AnimatePresence>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <motion.section
        className="max-w-container-max mx-auto px-7 md:px-12 pb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <div className="relative rounded-[32px] overflow-hidden bg-surface-container py-16 md:py-20 px-6 sm:px-8 text-center shadow-[0_20px_40px_rgba(37,48,107,0.04)]">
          {/* Animated ambient blobs */}
          <motion.div
            className="absolute top-0 right-0 w-64 h-64 bg-secondary-container/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none"
            animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-64 h-64 bg-primary-container/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/3 pointer-events-none"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          <div className="relative z-10 max-w-2xl mx-auto">
            <motion.h2
              className="font-display md:font-display font-semibold text-xl md:text-3xl text-primary mb-5 md:mb-6"
              variants={fadeUp}
            >
              Experience the Warmth in Person
            </motion.h2>
            <motion.p
              className="font-body-lg text-body-lg text-on-surface-variant mb-8 md:mb-10"
              variants={fadeUp}
            >
              Photos can only tell part of the story. We invite you to walk our
              halls, meet our dedicated team, and feel the difference of premium
              care.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              variants={fadeUp}
            >
              <motion.a
                className="bg-primary text-on-primary px-8 py-4 rounded-xl font-label-lg text-label-lg shadow-md"
                whileHover={{
                  scale: 1.04,
                  y: -2,
                  boxShadow: "0 12px 28px rgba(37,48,107,0.25)",
                }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.2 }}
                href={`https://wa.me/12533044293?text=${encodeURIComponent(message)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule a visit
              </motion.a>
              <motion.a
                className="bg-transparent border-2 border-secondary text-secondary px-8 py-4 rounded-xl font-label-lg text-label-lg"
                whileHover={{
                  scale: 1.04,
                  y: -2,
                  backgroundColor: "rgba(var(--color-secondary-rgb), 0.05)",
                }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.2 }}
                href="/contact"
              >
                Contact Our Care Team
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ── LIGHTBOX ──────────────────────────────────────────────────────── */}
      <GalleryLightbox
        images={filteredImages}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </>
  );
}
