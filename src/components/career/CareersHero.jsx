"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaCircle } from "react-icons/fa";
import { MdArrowForward } from "react-icons/md";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
});

export default function CareersHero() {
  return (
    <section className="relative overflow-hidden bg-primary">
      {/* Background Blobs (responsive scale only, same design) */}
      <div className="absolute top-0 right-0 h-56 w-56 sm:h-80 sm:w-80 md:h-[500px] md:w-[500px] rounded-full bg-secondary-container/30 blur-[150px]" />
      <div className="absolute bottom-0 left-0 h-56 w-56 sm:h-72 sm:w-72 md:h-[400px] md:w-[400px] rounded-full bg-[#bac3ff]/10 blur-[150px]" />

      <div className="container mx-auto px-4 sm:px-6 md:px-10 py-14 md:py-16 w-full min-h-screen flex items-center">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center w-full">
          {/* ================= TEXT ================= */}
          <div className="relative z-10 w-full md:w-1/2">
            <motion.p
              className="tracking-[0.2em] text-[11px] sm:text-xs md:text-sm font-semibold text-secondary-container font-body"
              {...fadeUp(0.1)}
            >
              CAREGIVER OPPORTUNITIES · WASHINGTON STATE
            </motion.p>

            <motion.h1
              className="mt-5 md:mt-6 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight font-semibold"
              {...fadeUp(0.2)}
            >
              Caregivers Are the{" "}
              <span className="italic text-[#fd7137]">Heart</span> of Our Home.
            </motion.h1>

            <motion.p
              className="mt-4 md:mt-5 text-sm sm:text-base md:text-lg leading-relaxed text-[#bac3ff] max-w-xl"
              {...fadeUp(0.32)}
            >
              We're looking for compassionate, dedicated individuals who believe
              in care with dignity, respect, and genuine human connection. If
              you want to make a real difference every day — this is your place.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="mt-5 flex flex-col sm:flex-row gap-3 sm:gap-4"
              {...fadeUp(0.42)}
            >
              <motion.button
                className="rounded-lg bg-white text-sm font-body px-6 sm:px-8 py-2.5 sm:py-2 font-medium text-primary shadow-[0_10px_30px_rgba(253,113,55,0.35)] w-full sm:w-auto"
                whileHover={{ y: -3, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 350, damping: 18 }}
              >
                Apply Now
              </motion.button>

              <motion.button
                className="rounded-lg border-2 text-sm font-body border-secondary hover:bg-secondary px-6 sm:px-8 py-2.5 sm:py-2 text-white backdrop-blur w-full sm:w-auto"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 350, damping: 18 }}
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Culture strip */}
            <motion.div
              className="mt-5 md:mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] sm:text-sm text-[#bac3ff] font-body"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.08, delayChildren: 0.55 },
                },
              }}
            >
              {[
                "24/7 Supportive Team",
                "Growth Opportunities",
                "Meaningful Work",
                "WA Licensed Home",
              ].map((item, i) => (
                <motion.span
                  key={item}
                  variants={{
                    hidden: { opacity: 0, x: -8 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {i > 0 && (
                    <FaCircle
                      className={`inline text-[6px] mr-3 ${
                        i === 3 ? "text-[#fd7137]" : "text-secondary-container"
                      }`}
                    />
                  )}
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* ================= IMAGE ================= */}
          <motion.div
            className="relative w-full md:w-1/2 overflow-hidden hidden md:block"
            initial={{ opacity: 0, x: 40, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative h-[420px] lg:h-[560px] rounded-3xl md:rounded-4xl bg-linear-to-br from-tertiary-container via-on-primary-fixed-variant to-surface-tint shadow-2xl overflow-hidden px-6">
              <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-primary/80 to-transparent z-10" />

              <Image
                src="/images/caregiver1.jpg"
                fill
                className="object-cover rounded-3xl md:rounded-4xl"
                alt="Caregiver"
              />

              {/* Badge */}
              <motion.div
                className="absolute bottom-6 left-6 w-[calc(100%-48px)] z-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.65,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="flex items-center justify-between gap-3 rounded-2xl bg-white/5 backdrop-blur-lg px-5 sm:px-6 md:px-10 py-4 md:py-6">
                  <div className="text-white">
                    <h2 className="font-display text-sm sm:text-base md:text-lg text-on-primary">
                      Now Hiring
                    </h2>
                    <p className="font-body text-[11px] sm:text-xs md:text-sm text-primary-fixed-dim">
                      Washington State
                    </p>
                  </div>

                  <motion.div
                    className="bg-secondary-container text-on-secondary rounded-full p-2 md:p-3 shadow-lg"
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.8,
                      ease: "easeInOut",
                      delay: 1.2,
                    }}
                  >
                    <MdArrowForward className="text-lg md:text-2xl" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave (responsive height preserved) */}
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block h-14 sm:h-20 md:h-30 w-full"
      >
        <path
          fill="#f7f9fb"
          d="M0,64L60,69.3C120,75,240,85,360,90.7C480,96,600,96,720,85.3C840,75,960,53,1080,48C1200,43,1320,53,1380,58.7L1440,64V120H0Z"
        />
      </svg>
    </section>
  );
}
