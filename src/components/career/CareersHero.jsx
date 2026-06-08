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
      <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-secondary-container/30 blur-[150px]" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[#bac3ff]/10 blur-[150px]" />

      <div className="container mx-auto px-10 py-16 w-full min-h-screen flex items-center">
        <div className="flex gap-16 items-center w-full">
          {/* Content */}
          <div className="relative z-10 w-1/2">
            <motion.p
              className="tracking-[0.2em] text-sm font-semibold text-secondary-container font-body"
              {...fadeUp(0.1)}
            >
              CAREGIVER OPPORTUNITIES · WASHINGTON STATE
            </motion.p>

            <motion.h1
              className="mt-6 font-display text-3xl md:text-6xl text-white leading-tight font-semibold"
              {...fadeUp(0.2)}
            >
              Caregivers Are the{" "}
              <span className="italic text-[#fd7137]">Heart</span> of Our Home.
            </motion.h1>

            <motion.p
              className="mt-5 text-lg leading-relaxed text-[#bac3ff] max-w-xl"
              {...fadeUp(0.32)}
            >
              We're looking for compassionate, dedicated individuals who believe
              in care with dignity, respect, and genuine human connection. If
              you want to make a real difference every day — this is your place.
            </motion.p>

            <motion.div className="mt-5 flex flex-wrap gap-4" {...fadeUp(0.42)}>
              <motion.button
                className="rounded-lg bg-white text-sm font-body px-8 py-2 font-medium text-primary shadow-[0_10px_30px_rgba(253,113,55,0.35)] transition"
                whileHover={{ y: -3, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 350, damping: 18 }}
              >
                Apply Now
              </motion.button>

              <motion.button
                className="rounded-lg border-2 text-sm font-body border-secondary hover:bg-secondary px-8 py-2 text-white backdrop-blur"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 350, damping: 18 }}
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Culture strip — staggered icons */}
            <motion.div
              className="mt-6 flex flex-wrap items-center gap-4 text-sm text-[#bac3ff] font-body"
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
                      className={`inline text-[6px] mr-4 ${i === 3 ? "text-[#fd7137]" : "text-secondary-container"}`}
                    />
                  )}
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Visual */}
          <motion.div
            className="relative w-1/2 overflow-hidden"
            initial={{ opacity: 0, x: 40, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="h-162.5 rounded-4xl bg-linear-to-br from-tertiary-container via-on-primary-fixed-variant to-surface-tint shadow-2xl overflow-hidden px-6">
              <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-primary/80 to-transparent" />
              <Image
                src="/images/caregiver1.jpg"
                fill
                className="object-cover rounded-4xl"
                alt="Caregiver"
              />

              {/* Overlay badge — slides up after image loads */}
              <motion.div
                className="absolute bottom-6 left-6 w-[calc(100%-48px)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.65,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="flex items-center justify-between gap-3 rounded-2xl border-none bg-white/5 backdrop-blur-lg px-10 py-6 relative overflow-hidden">
                  <div className="text-white z-10">
                    <h2 className="font-display text-lg text-on-primary">
                      Now Hiring
                    </h2>
                    <p className="font-body text-sm text-primary-fixed-dim">
                      Washington State
                    </p>
                  </div>
                  <motion.div
                    className="bg-secondary-container text-on-secondary rounded-full p-3 shadow-lg"
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.8,
                      ease: "easeInOut",
                      delay: 1.2,
                    }}
                  >
                    <span className="text-[24px]">
                      <MdArrowForward />
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave */}
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block h-30 w-full"
      >
        <path
          fill="#f7f9fb"
          d="M0,64L60,69.3C120,75,240,85,360,90.7C480,96,600,96,720,85.3C840,75,960,53,1080,48C1200,43,1320,53,1380,58.7L1440,64V120H0Z"
        />
      </svg>
    </section>
  );
}
