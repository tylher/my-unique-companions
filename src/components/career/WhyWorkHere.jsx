"use client";
import { motion } from "framer-motion";
import {
  MdDiversity1,
  MdSchedule,
  MdTrendingUp,
  MdVolunteerActivism,
} from "react-icons/md";

const trainingItems = [
  "Dementia Care",
  "Mental Health Awareness",
  "De-escalation",
  "WA State Standards",
  "Medication Assistance",
];

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
    <section className="bg-surface-bright py-12">
      <div className="container mx-auto px-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-display font-semibold text-5xl text-[#0d1955]">
            Why People Love Working Here
          </h2>
          <p className="mt-6 text-on-surface-variant max-w-2xl mx-auto font-body text-lg">
            We believe that providing premium care starts with supporting our
            team. When you feel valued, our residents feel the warmth.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-12 items-start">
          {/* Story Card */}
          <motion.div
            className="rounded-3xl border bg-white p-10 gap-4 col-span-5 border-surface-variant shadow-[0_20px_40px_rgba(37,48,107,0.04)] hover:shadow-[0_30px_60px_rgba(37,48,107,0.08)] hover:border-secondary-fixed transition-all duration-500 group flex flex-col justify-between min-h-125 relative overflow-hidden"
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-fixed/40 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/3 group-hover:bg-secondary-fixed/50 transition-colors duration-500" />

            <motion.div
              className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-fixed"
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
              <MdDiversity1 className="text-primary-container text-[24px]" />
            </motion.div>

            <motion.h3
              className="font-display font-semibold text-4xl text-primary"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.45, ease: "easeOut" }}
            >
              A Team That Cares for Each Other
            </motion.h3>

            <motion.p
              className="text-on-surface-variant leading-relaxed font-body text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.45 }}
            >
              At Unique Companions AFH, you are never alone. We foster a deeply
              collaborative environment where caregivers support one another,
              share knowledge, and lift each other up during challenging days.
            </motion.p>

            {/* Pill chips — staggered */}
            <motion.div
              className="grid sm:grid-cols-2 gap-4 items-start"
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
                  className="rounded-2xl bg-primary-fixed-dim p-4 text-sm font-script text-on-surface-variant text-center font-semibold"
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
                  transition={{ type: "spring", stiffness: 320, damping: 18 }}
                >
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Stacked Cards */}
          <motion.div
            className="space-y-6 col-span-7"
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
                className="rounded-3xl p-8 bg-on-primary border border-surface-variant shadow-[0_10px_20px_rgba(37,48,107,0.02)] flex gap-6 hover:shadow-[0_20px_40px_rgba(37,48,107,0.06)] hover:border-primary-fixed transition-all duration-300"
                variants={{
                  hidden: { opacity: 0, x: 28 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                whileHover={{ x: -4 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <motion.span
                  className="h-12 w-12 flex shrink-0 rounded-full bg-[#fff7f2] text-lg items-center justify-center"
                  whileHover={{ scale: 1.15, rotate: 8 }}
                  transition={{ type: "spring", stiffness: 400, damping: 14 }}
                >
                  <Icon className="text-secondary" />
                </motion.span>
                <div className="flex flex-col gap-2">
                  <h4
                    className={`font-display text-2xl ${titleColor} font-semibold`}
                  >
                    {title}
                  </h4>
                  <p className="font-body text-on-surface-variant">{body}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
