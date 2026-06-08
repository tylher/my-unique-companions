"use client";
import { dayInTheLife } from "@/data/features";
import { motion } from "framer-motion";

const TypicalShift = () => {
  return (
    <section className="bg-surface-bright py-16 px-10">
      <motion.h2
        className="font-display text-primary font-semibold max-w-3xl text-5xl text-center mt-6 mb-12 mx-auto"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        What A Typical Shift Looks Like
      </motion.h2>

      <div className="relative w-full mt-16">
        {/* Timeline line — draws in left to right */}
        <motion.div
          className="h-0.5 bg-secondary-container absolute top-7.5 left-0"
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 z-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.1, delayChildren: 0.3 },
            },
          }}
        >
          {dayInTheLife.map((stage) => {
            const Icon = stage.icon;
            return (
              <motion.div
                key={stage.id}
                className="flex flex-col items-center text-center group"
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
              >
                <motion.div
                  className="w-16 h-16 rounded-xl z-20 bg-primary-fixed flex items-center justify-center mb-6 shadow-sm transition-all duration-300"
                  whileHover={{
                    scale: 1.12,
                    boxShadow: "0 10px_28px_rgba(37,48,107,0.15)",
                    rotate: 4,
                  }}
                  transition={{ type: "spring", stiffness: 340, damping: 16 }}
                >
                  <Icon className="text-primary-container text-3xl" />
                </motion.div>

                <motion.h4
                  className="text-sm font-semibold uppercase tracking-wider text-primary mb-3 font-script"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                >
                  {stage.title}
                </motion.h4>

                <p className="text-on-surface-variant font-body">
                  {stage.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default TypicalShift;
