"use client";

import { trainingItems } from "@/data/features";
import { motion } from "framer-motion";
import { MdCheckCircle } from "react-icons/md";

const headingVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const rowVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.07,
      duration: 0.38,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const iconVariants = {
  hidden: { scale: 0 },
  visible: (i) => ({
    scale: 1,
    transition: {
      delay: i * 0.07 + 0.1,
      type: "spring",
      stiffness: 360,
      damping: 16,
    },
  }),
};

export default function CareTeamSection() {
  return (
    <section className="bg-surface-container-lowest py-10 md:py-12 px-4 sm:px-6 md:px-[64px]">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
        {/* Left — text block */}
        <motion.div
          className="pr-0 md:pr-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headingVariants}
        >
          <span className="block text-secondary-container font-label-lg tracking-wider mb-4 uppercase text-sm font-semibold">
            Our Care Team
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-[40px] font-semibold text-primary leading-tight mb-6">
            Trained. Compassionate. Committed.
          </h2>
          <p className="text-on-surface-variant leading-relaxed text-base md:text-lg font-body">
            At Unique Companions AFH, we believe consistency is the foundation
            of quality care. Our dedicated team of professionals is rigorously
            trained and deeply committed to providing unwavering support,
            ensuring every resident feels known, valued, and secure in their
            environment.
          </p>
        </motion.div>

        {/* Right — checklist grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {trainingItems.map((item, i) => (
            <motion.div
              key={item}
              className="flex items-center py-4 border-b border-outline-variant"
              custom={i}
              variants={rowVariants}
            >
              <motion.span
                className="w-6 h-6 rounded-full bg-secondary-container flex items-center justify-center mr-4 shrink-0"
                custom={i}
                variants={iconVariants}
              >
                <MdCheckCircle className="text-white text-sm" />
              </motion.span>
              <span className="font-body text-sm font-medium text-primary">
                {item}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
