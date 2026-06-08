"use client";
import { responsibilities } from "@/data/features";
import { motion } from "framer-motion";
import { MdCheckCircle } from "react-icons/md";

export default function ResponsibilitiesSection() {
  return (
    <section className="py-16 bg-surface-container-low">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-5xl font-display text-primary text-center font-semibold mb-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          What You'll Do
        </motion.h2>

        <motion.p
          className="text-center text-on-surface-variant mb-12 font-body font-medium text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.45 }}
        >
          You'll be part of a team that provides dignified, hands-on care and
          companionship.
        </motion.p>

        <motion.div
          className="space-y-4"
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
              className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              whileHover={{
                x: 6,
                boxShadow: "0 6px_20px_rgba(37,48,107,0.07)",
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
            >
              <motion.span
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
                <MdCheckCircle className="text-secondary-container font-body shrink-0" />
              </motion.span>
              <p className="text-on-surface-variant font-body">{item}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
