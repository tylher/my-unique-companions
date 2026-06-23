"use client";

import { commitmentCards } from "@/data/features";
import { motion } from "framer-motion";
import CommitmentCard from "./CommitmentCard";

const headingVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.15 },
  },
};

export default function CommitmentSection() {
  return (
    <section className="bg-surface py-7 md:py-10  relative overflow-hidden ">
      {/* Decorative blobs */}
     
      <div className=" relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={headingVariants}
        >
          <span className="block text-secondary-container font-label tracking-wider mb-2 uppercase text-sm font-semibold">
            Our Commitment
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-[40px] font-semibold text-primary leading-tight">
            What We Stand For
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="flex flex-wrap justify-center gap-5 md:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {commitmentCards.map((card, i) => (
            <CommitmentCard
              key={card.id}
              icon={card.icon}
              label={card.label}
              index={i}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
