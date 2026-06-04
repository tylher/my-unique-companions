import { visionPillars } from "@/data/features";
import { motion } from "framer-motion";
import { MdArrowForward } from "react-icons/md";
import VisionCard from "./VisionCard";

// Animation variants
const sectionVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const connectorVariants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.3 },
  },
};

// Floating animation for even/odd cards
const floatVariants = (index) => ({
  animate: {
    y: index % 2 === 0 ? [0, -8, 0] : [0, 8, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
      delay: index * 0.4,
    },
  },
});

const Vision = () => {
  return (
    <section className="py-32 bg-white z-10 -mt-10">
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h2 className="font-display font-semibold text-5xl text-primary mb-6">
          Our Vision
        </h2>

        <p className="text-on-surface-variant leading-relaxed font-body text-lg">
          To be a trusted home where residents experience purpose, belonging,
          and joy every day. We envision a community where every person,
          regardless of age or ability, can thrive in a place that truly feels
          like family.
        </p>
      </div>

      <motion.div
        className="hidden lg:flex justify-center items-start gap-0"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {visionPillars.map((pillar, index) => (
          <motion.div
            key={pillar.title}
            className="flex items-center"
            variants={cardVariants}
          >
            {/* Card */}
            {/* Card with continuous float */}
            <motion.div
              className={index % 2 === 0 ? "mt-0" : "mt-20"}
              variants={floatVariants(index)}
              animate="animate"
            >
              <VisionCard {...pillar} />
            </motion.div>

            {/* Connector — goes RIGHT HERE, after the card, before the next */}
            {index !== visionPillars.length - 1 && (
              <motion.div
                className={`flex items-center ${index % 2 === 0 ? "mt-0" : "mt-20"}`}
                variants={connectorVariants}
                style={{ originX: 0 }} // draw left-to-right
              >
                <div className="w-8 border-t-2 border-dashed border-outline-variant" />
                <span className="text-outline-variant text-sm">
                  <MdArrowForward />
                </span>
                <div className="w-4 border-t-2 border-dashed border-outline-variant" />
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>

      <p className="text-center text-on-surface-variant mt-16 max-w-3xl mx-auto italic">
        Together, these pillars guide our commitment to creating a community
        where every resident experiences purpose, belonging, and joy.
      </p>
    </section>
  );
};

export default Vision;
