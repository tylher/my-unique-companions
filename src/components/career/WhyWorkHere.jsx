"use client";

import { motion } from "framer-motion";
import {
  MdDiversity1,
  MdSchedule,
  MdTrendingUp,
  MdVolunteerActivism,
} from "react-icons/md";

const stackedCards = [
  {
    icon: MdTrendingUp,
    title: "Growth & Training",
    body: "We invest in your career with specialized training programs, including advanced Dementia Care techniques and WA State Standards compliance, empowering you to become a leader in elder care.",
    titleColor: "text-[#0d1955]",
  },
  {
    icon: MdSchedule,
    title: "Consistent Scheduling",
    body: "We understand you have a life outside of work. Our scheduling respects your time, aiming for consistent shifts that allow you to plan your life while providing reliable care to our residents.",
    titleColor: "text-primary",
  },
  {
    icon: MdVolunteerActivism,
    title: "Meaningful Work",
    body: "Move away from the sterile, rushed medical environment. Here, you have the time to build genuine relationships with residents, bringing dignity and joy to their daily lives.",
    titleColor: "text-primary",
  },
];

export default function WhyWorkHere() {
  return (
    <section className="bg-surface-bright py-10 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        {/* ================= HEADER ================= */}
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-display font-semibold text-2xl sm:text-4xl lg:text-5xl text-[#0d1955]">
            Why People Love Working Here
          </h2>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-on-surface-variant max-w-2xl mx-auto font-body">
            We believe that providing premium care starts with supporting our
            team. When you feel valued, our residents feel the warmth.
          </p>
        </motion.div>

        {/* ================= GRID ================= */}
        <div className="mt-10 sm:mt-14 lg:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* ================= STORY CARD ================= */}
          <motion.div
            className="
              col-span-1 lg:col-span-5
              rounded-3xl border bg-white
              p-6 sm:p-8 lg:p-10
              min-h-auto lg:min-h-125
              shadow-[0_20px_40px_rgba(37,48,107,0.04)]
              hover:shadow-[0_30px_60px_rgba(37,48,107,0.08)]
              hover:border-secondary-fixed
              transition-all duration-500
              group relative overflow-hidden
              flex flex-col justify-between
            "
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* glow */}
            <div className="absolute top-0 right-0 w-40 sm:w-52 lg:w-64 h-40 sm:h-52 lg:h-64 bg-secondary-fixed/40 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/3 group-hover:bg-secondary-fixed/50 transition-colors duration-500" />

            {/* icon */}
            <motion.div
              className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-primary-fixed"
              initial={{ scale: 0.7, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.2,
                duration: 0.4,
                type: "spring",
                stiffness: 280,
                damping: 18,
              }}
            >
              <MdDiversity1 className="text-primary-container text-[20px] sm:text-[24px]" />
            </motion.div>

            {/* title */}
            <motion.h3
              className="font-display font-semibold text-2xl sm:text-3xl lg:text-4xl text-primary mt-4"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.45, ease: "easeOut" }}
            >
              A Team That Cares for Each Other
            </motion.h3>

            {/* body */}
            <motion.p
              className="text-sm sm:text-base lg:text-lg text-on-surface-variant leading-relaxed font-body mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.45 }}
            >
              At Unique Companions AFH, you are never alone. We foster a deeply
              collaborative environment where caregivers support one another,
              share knowledge, and lift each other up during challenging days.
            </motion.p>

            {/* chips */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: { staggerChildren: 0.08, delayChildren: 0.4 },
                },
              }}
            >
              {[
                "Team-First Culture",
                "Consistent Scheduling",
                "Growth Opportunities",
                "Meaningful Relationships",
              ].map((item) => (
                <motion.div
                  key={item}
                  className="rounded-2xl bg-primary-fixed-dim p-3 sm:p-4 text-xs sm:text-sm font-script text-on-surface-variant text-center font-semibold"
                  variants={{
                    hidden: { opacity: 0, scale: 0.9, y: 10 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      y: 0,
                      transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                  whileHover={{ scale: 1.04 }}
                >
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ================= STACKED CARDS ================= */}
          <motion.div
            className="col-span-1 lg:col-span-7 space-y-4 sm:space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{
              visible: {
                transition: { staggerChildren: 0.12, delayChildren: 0.1 },
              },
            }}
          >
            {stackedCards.map(({ icon: Icon, title, body, titleColor }) => (
              <motion.div
                key={title}
                className="
                    flex gap-4 sm:gap-6
                    rounded-2xl sm:rounded-3xl
                    p-5 sm:p-6 lg:p-8
                    bg-on-primary border border-surface-variant
                    shadow-[0_10px_20px_rgba(37,48,107,0.02)]
                    hover:shadow-[0_20px_40px_rgba(37,48,107,0.06)]
                    hover:border-primary-fixed
                    transition-all duration-300
                  "
                variants={{
                  hidden: { opacity: 0, x: 28 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                whileHover={{ x: -4 }}
              >
                <motion.span
                  className="h-10 w-10 sm:h-12 sm:w-12 flex shrink-0 rounded-full bg-[#fff7f2] items-center justify-center"
                  whileHover={{ scale: 1.15, rotate: 8 }}
                >
                  <Icon className="text-secondary text-base sm:text-lg" />
                </motion.span>

                <div className="flex flex-col gap-1 sm:gap-2">
                  <h4
                    className={`font-display text-lg sm:text-xl lg:text-2xl ${titleColor} font-semibold`}
                  >
                    {title}
                  </h4>

                  <p className="font-body text-sm sm:text-base text-on-surface-variant">
                    {body}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
