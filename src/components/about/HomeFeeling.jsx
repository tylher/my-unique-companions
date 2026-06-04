"use client";

import { statements } from "@/data/features";
import { motion } from "framer-motion";

export default function HomeFeeling() {
  return (
    <section className="relative overflow-hidden bg-surface-container-low py-16">
      {/* Ambient blobs */}
      <div className="absolute left-0 top-40 h-80 w-80 rounded-full bg-primary-container opacity-[0.04] blur-[120px]" />

      <div className="absolute right-0 bottom-40 h-96 w-96 rounded-full bg-primary-container opacity-[0.04] blur-[140px]" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display font-semibold text-5xl md:text-6xl text-primary mb-12 mx-auto text-center leading-tight">
            A Home That Feels Like Family
          </h2>
        </motion.div>

        <div className="relative">
          {/* Center journey line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-[#d8dceb]" />

          <div className="flex flex-col gap-10">
            {statements.map((item, index) => {
              const isRight = index % 2 === 1;

              return (
                <div
                  key={item.title}
                  className={`relative flex ${
                    isRight ? "justify-end" : "justify-start"
                  }`}
                >
                  {/* Timeline marker */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.15,
                    }}
                    className="
                      hidden
                      lg:flex
                      absolute
                      left-1/2
                      -translate-x-1/2
                      top-6
                      z-10
                    "
                  >
                    <div className="h-5 w-5 rounded-full bg-[#e35e25] shadow-lg shadow-[#e35e25]/30" />
                  </motion.div>

                  <motion.div
                    initial={{
                      opacity: 0,
                      x: isRight ? 120 : -120,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.3,
                    }}
                    transition={{
                      duration: 0.9,
                      ease: "easeOut",
                    }}
                    className="
                      w-full
                      lg:w-[45%]
                    "
                  >
                    {/* Floating motif */}
                    <motion.div
                      animate={{
                        y: [0, -6, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="flex gap-2 mb-5"
                    >
                      <div className="w-3 h-5 bg-[#e35e25] rounded-full rotate-12" />
                      <div className="w-3 h-5 bg-[#e35e25] rounded-full rotate-12" />
                    </motion.div>

                    <motion.h3
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.7,
                        delay: 0.15,
                      }}
                      className="
                        font-display
                        font-semibold
                        text-3xl
                        md:text-4xl
                        text-primary
                        leading-tight
                        mb-5
                      "
                    >
                      {item.title}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.8,
                        delay: 0.3,
                      }}
                      className="
                        max-w-md
                        text-on-surface-variant
                        leading-relaxed
                      "
                    >
                      {item.description}
                    </motion.p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
