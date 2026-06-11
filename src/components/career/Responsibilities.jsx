"use client";

import { responsibilities } from "@/data/features";
import { motion } from "framer-motion";
import { MdCheckCircle } from "react-icons/md";

export default function ResponsibilitiesSection() {
  return (
    <section className="py-12 sm:py-16 bg-surface-container-low">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* ================= TITLE ================= */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-5xl font-display text-primary text-center font-semibold mb-3 sm:mb-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          What You'll Do
        </motion.h2>

        {/* ================= SUBTITLE ================= */}
        <motion.p
          className="text-center text-sm sm:text-base md:text-lg text-on-surface-variant mb-8 sm:mb-10 md:mb-12 font-body font-medium leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.45 }}
        >
          You'll be part of a team that provides dignified, hands-on care and
          companionship.
        </motion.p>

        {/* ================= LIST ================= */}
        <motion.div
          className="space-y-3 sm:space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.07, delayChildren: 0.1 },
            },
          }}
        >
          {responsibilities.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-start sm:items-center gap-3 bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-sm"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              whileHover={{
                x: 6,
                boxShadow: "0 6px_20px_rgba(37,48,107,0.07)",
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
            >
              {/* ICON */}
              <motion.span
                className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 mt-0.5 sm:mt-0"
                initial={{ scale: 0, rotate: -30 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.06 + 0.05,
                  type: "spring",
                  stiffness: 340,
                  damping: 16,
                }}
              >
                <MdCheckCircle className="text-secondary-container text-base sm:text-lg" />
              </motion.span>

              {/* TEXT */}
              <p className="text-sm sm:text-base text-on-surface-variant font-body leading-relaxed">
                {item}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
