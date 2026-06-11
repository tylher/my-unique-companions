"use client";

import { engagementItems, moveInRequirements } from "@/data/features";
import { motion } from "framer-motion";
import { MdCheckCircle } from "react-icons/md";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
});

const MoveInRequirements = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 px-4 sm:px-8 lg:px-20 pb-12 sm:pb-14 lg:pb-16">
      {/* ================= REQUIREMENTS ================= */}
      <motion.div
        className="lg:col-span-7 bg-surface-container-low rounded-xl p-5 sm:p-8 md:p-10 border border-outline-variant/20"
        {...fadeUp(0.1)}
      >
        <div className="w-10 sm:w-12 h-1 bg-secondary-container mb-4 rounded-full" />

        <h2 className="font-display text-xl sm:text-2xl font-semibold text-primary mb-4 sm:mb-6">
          What We Need From You
        </h2>

        <p className="font-body text-sm sm:text-base lg:text-lg text-on-surface-variant mb-6 sm:mb-8 leading-relaxed">
          To ensure a seamless transition and the highest quality of immediate
          care, please prepare the following documents prior to move-in.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 sm:gap-y-4 gap-x-6 sm:gap-x-8">
          {moveInRequirements.map((item, index) => (
            <motion.div
              key={item}
              className={`flex items-start sm:items-center ${
                index === moveInRequirements.length - 1 ? "sm:col-span-2" : ""
              }`}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.05,
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <MdCheckCircle className="text-primary mr-2 sm:mr-3 text-base sm:text-lg shrink-0 mt-0.5 sm:mt-0" />

              <span className="font-script font-medium text-sm sm:text-base text-on-surface leading-relaxed">
                {item}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ================= VISITING & ENGAGEMENT ================= */}
      <motion.div
        className="lg:col-span-5 bg-primary rounded-xl p-5 sm:p-8 md:p-10 text-on-primary flex flex-col justify-center relative overflow-hidden"
        {...fadeUp(0.2)}
      >
        {/* glow */}
        <div className="absolute -top-16 sm:-top-12 -right-16 sm:-right-12 w-40 sm:w-48 h-40 sm:h-48 bg-secondary-container/40 rounded-full blur-2xl opacity-70 pointer-events-none" />

        <h2 className="font-display font-semibold text-xl sm:text-2xl text-on-primary mb-3 sm:mb-4 relative z-10">
          Visiting & Engagement
        </h2>

        <p className="font-body text-sm sm:text-base lg:text-lg text-on-primary-container mb-5 sm:mb-6 relative z-10 leading-relaxed">
          Families are encouraged to visit, participate in activities, and stay
          involved in their loved one's life. We maintain a respectful balance
          between:
        </p>

        <div className="space-y-3 sm:space-y-4 relative z-10">
          {engagementItems.map((item) => (
            <motion.div
              key={item}
              className="bg-primary-container/30 p-3 sm:p-4 rounded-lg border-l-4 border-secondary-container"
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-body text-sm sm:text-base text-on-primary leading-relaxed">
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default MoveInRequirements;
