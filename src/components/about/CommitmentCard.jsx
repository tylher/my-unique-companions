"use client";

import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.09,
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function CommitmentCard({ icon: Icon, label, index }) {
  return (
    <motion.div
      className="
        group
        bg-surface-container-lowest
        rounded-2xl
        p-8
        shadow-[0_20px_40px_rgba(37,48,107,0.04)]
        border border-outline-variant/20
        w-full md:w-[calc(20%-1.2rem)]
        min-w-[200px]
        flex flex-col items-center text-center
        transition-all duration-300
        hover:border-secondary-container/30
        hover:shadow-[0_12px_28px_rgba(37,48,107,0.08)]
        cursor-default
      "
      custom={index}
      variants={cardVariants}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Icon wrapper */}
      <div className="w-8 h-8 rounded-lg bg-secondary-container/10 flex items-center justify-center mb-6 group-hover:bg-secondary-container transition-colors duration-300">
        <span className="material-symbols-outlined text-secondary-container group-hover:text-white transition-colors duration-300 text-[20px]">
          <Icon />
        </span>
      </div>

      <h3 className="font-body text-sm font-medium text-primary">{label}</h3>
    </motion.div>
  );
}
