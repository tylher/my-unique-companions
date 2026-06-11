"use client";

import { dayInTheLife } from "@/data/features";
import { motion } from "framer-motion";

export default function TypicalShift() {
  return (
    <section className="bg-surface-bright py-16 lg:py-24 px-4">
      <motion.h2
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-5xl font-display font-semibold text-primary text-center"
      >
        What A Typical Shift Looks Like
      </motion.h2>

      <div className="relative mt-16">
        {/* timeline line */}
        <motion.div
          className="hidden lg:block absolute top-8 left-0 w-full h-[2px] bg-secondary-container "
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-12 md:gap-8">
          {dayInTheLife.map((stage, i) => {
            const Icon = stage.icon;

            return (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center z-20 w-full"
              >
                <div className="w-14 h-14 lg:w-16 lg:h-16 bg-primary-fixed rounded-xl flex items-center justify-center mb-4 shadow-md">
                  <Icon className="text-primary-container text-2xl" />
                </div>

                <h4 className="text-xs sm:text-sm font-semibold uppercase text-primary">
                  {stage.title}
                </h4>

                <p className="text-sm text-on-surface-variant mt-2 max-w-3/5 md:max-w-45">
                  {stage.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
