"use client";

import { motion } from "framer-motion";
import {
  MdEventAvailable,
  MdFavorite,
  MdGroups,
  MdPayments,
  MdSchool,
  MdTrendingUp,
} from "react-icons/md";

const benefits = [
  {
    icon: MdPayments,
    title: "Competitive Pay",
    description:
      "We value the work you do and offer compensation that reflects your contribution.",
  },
  {
    icon: MdGroups,
    title: "Supportive Leadership",
    description:
      "Work alongside a team that listens, supports, and helps you succeed.",
  },
  {
    icon: MdSchool,
    title: "Training & Education",
    description:
      "Access ongoing learning opportunities and caregiver development resources.",
  },
  {
    icon: MdFavorite,
    title: "Positive Work Culture",
    description:
      "Join a warm, family-like environment built on respect and teamwork.",
  },
  {
    icon: MdTrendingUp,
    title: "Long-Term Growth",
    description:
      "Build a meaningful career with opportunities to expand your skills.",
  },
  {
    icon: MdEventAvailable,
    title: "Consistent Scheduling",
    description: "Predictable schedules that help support work-life balance.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="relative overflow-hidden bg-primary-container py-12 md:py-16">
      <div className="absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-secondary-container/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="mb-10 md:mb-16 text-center"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-3 md:mb-4 text-sm font-semibold uppercase tracking-[0.25em] font-body text-[#fd7137]">
            Benefits & Perks
          </p>
          <h2 className="mb-3 md:mb-4 font-display text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
            Benefits That Value Your Contribution
          </h2>
          <p className="mx-auto max-w-2xl text-[#bac3ff] font-body text-sm sm:text-base">
            We believe great caregivers deserve a workplace that invests in
            their growth, well-being, and long-term success.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.08, delayChildren: 0.1 },
            },
          }}
        >
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                className="group rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6 backdrop-blur-sm"
                variants={{
                  hidden: { opacity: 0, y: 28, scale: 0.97 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                whileHover={{
                  y: -6,
                  backgroundColor: "rgba(255,255,255,0.10)",
                  borderColor: "rgba(186,195,255,0.4)",
                  transition: { type: "spring", stiffness: 280, damping: 18 },
                }}
              >
                <motion.div
                  className="mb-4 md:mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10"
                  whileHover={{ scale: 1.15, rotate: 6 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <Icon className="text-xl text-[#bac3ff]" />
                </motion.div>
                <h3 className="mb-2 md:mb-3 text-base md:text-lg font-semibold font-display text-white">
                  {benefit.title}
                </h3>
                <p className="text-[#bac3ff] font-body text-sm sm:text-base">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
