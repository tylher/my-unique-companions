"use client";

import { motion } from "framer-motion";
import {
    FaComment,
  FaHandshake,
  FaHeart,
  FaHome,
  FaSeedling,
  FaShieldAlt,
} from "react-icons/fa";
import { FaShield } from "react-icons/fa6";
import { FiMessageCircle } from "react-icons/fi";

// ─── Data ─────────────────────────────────────────────────────────────────────
const values = [
  {
    icon: FaHeart,
    title: "Compassion",
    description:
      "We lead with empathy, kindness, and patience. Every interaction is grounded in genuine care for the well‑being of our residents.",
  },
  {
    icon: FaHandshake,
    title: "Respect",
    description:
      "We honor each resident's individuality, preferences, and life story. Their dignity guides every decision we make.",
  },
  {
    icon: FaHome,
    title: "Home‑Like Comfort",
    description:
      "We create a warm, welcoming environment where residents feel safe, relaxed, and at ease — a true home, not a facility.",
  },
  {
    icon: FaShieldAlt,
    title: "Integrity",
    description:
      "We uphold the highest standards of professionalism, honesty, and accountability in everything we do.",
  },
  {
    icon: FaSeedling,
    title: "Growth & Learning",
    description:
      "We invest in ongoing training and development to ensure our caregivers provide the best, most up‑to‑date care possible.",
  },
  {
    icon: FaShield,
    title: "Safety",
    description:
      "We prioritize physical and emotional safety through attentive care, consistent routines, and proactive support.",
  },
  {
    icon: FaComment,
    title: "Communication",
    description:
      "We maintain open, transparent communication with families, healthcare providers, and residents to ensure continuity and trust.",
  },
];

// ─── Animation Variants ───────────────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const commitmentVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.4 },
  },
};

// ─── Value Card ───────────────────────────────────────────────────────────────
function ValueCard({ icon: Icon, title, description }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="group relative flex flex-col rounded-3xl border bg-white p-8 border-outline-variant"
      style={{
        boxShadow: "0 20px 40px rgba(13, 25, 85, 0.04)",
        transition:
          "box-shadow 0.3s ease-in-out, border-color 0.3s ease-in-out",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 28px 56px rgba(13, 25, 85, 0.08)";
        e.currentTarget.style.borderColor = "rgba(253, 113, 55, 0.6)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 20px 40px rgba(13, 25, 85, 0.04)";
        e.currentTarget.style.borderColor = "#c6c5d1";
      }}
    >
      {/* Icon container */}
      <div
        className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300"
        style={{ backgroundColor: "rgba(37, 48, 107, 0.08)" }}
      >
        <Icon
          size={22}
          className="transition-colors duration-300 group-hover:text-[#fd7137] text-on-primary-container"
        />
      </div>

      {/* Title */}
      <h3
        className="mb-2 text-2xl font-semibold leading-snug text-on-surface"
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="text-base leading-relaxed text-on-surface-variant"
        style={{
          fontFamily: "'Manrope', system-ui, sans-serif",
          lineHeight: "1.6",
        }}
      >
        {description}
      </p>
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function CoreValues() {
  return (
    <section className="relative overflow-hidden py-10 lg:py-16 bg-surface">
      {/* Background glow — top left (blue) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full"
        style={{
          background: `radial-gradient(circle, rgba(13, 25, 85, 0.06) 0%, transparent 70%)`,
          filter: "blur(80px)",
        }}
      />

      {/* Background glow — bottom right (orange) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full"
        style={{
          background: `radial-gradient(circle, rgba(253, 113, 55, 0.08) 0%, transparent 70%)`,
          filter: "blur(100px)",
        }}
      />

      {/* ── Content ── */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-16">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <p
            className="mb-4 text-sm font-semibold uppercase tracking-widest text-on-surface-variant"
            style={{
              fontFamily: "'Manrope', system-ui, sans-serif ",
              letterSpacing: "0.05em",
            }}
          >
            Our Core Values
          </p>

          <h2
            className="text-4xl font-semibold leading-tight lg:text-5xl text-on-surface"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              lineHeight: "1.2",
            }}
          >
            What We Stand For
          </h2>

          <p
            className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-on-surface-variant"
            style={{
              fontFamily: "'Manrope', system-ui, sans-serif",
              lineHeight: "1.6",
            }}
          >
            The principles that guide every moment of care, every conversation,
            and every decision we make at Unique Companions.
          </p>
        </motion.div>

        {/* Values grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch justify-start"
        >
          {values.map((value, index) => {
            // Center the lone 7th card in the 3-column desktop grid
            const isLastOdd =
              index === values.length - 1 && values.length % 3 !== 0;

            return (
              <div
                key={value.title}
                className={
                  isLastOdd ? "sm:col-span-2 lg:col-span-1 lg:col-start-1" : ""
                }
              >
                <ValueCard
                  icon={value.icon}
                  title={value.title}
                  description={value.description}
                />
              </div>
            );
          })}
        </motion.div>

        {/* Commitment block */}
        <motion.div
          variants={commitmentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mt-20 max-w-3xl rounded-3xl px-10 py-14 text-center lg:px-16 bg-primary-container"
        >
          {/* Orange accent bar */}
          <div className="mx-auto mb-7 h-1 w-16 rounded-full bg-secondary-container" />

          <h3
            className="mb-5 text-2xl md:text-4xl font-semibold font-display"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              color: "#ffffff",
            }}
          >
            Our Commitment to You
          </h3>

          <p
            className="text-lg leading-relaxed text-inverse-on-surface"
            style={{
              fontFamily: "'Manrope', system-ui, sans-serif",
              lineHeight: "1.6",
            }}
          >
            Unique Companions AFH is committed to creating a home where
            residents feel valued, supported, and empowered. We care for each
            person as we would our own family — with warmth, respect, and
            unwavering dedication.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
