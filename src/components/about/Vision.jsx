import { visionPillars } from "@/data/features";
import { motion } from "framer-motion";
import { MdArrowForward } from "react-icons/md";
import VisionCard from "./VisionCard";

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
    <section className="py-12 md:py-16 bg-white z-10 -mt-10">
      <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20 px-4 sm:px-6">
        <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl text-primary mb-4 md:mb-6">
          Our Vision
        </h2>
        <p className="text-on-surface-variant leading-relaxed font-body text-base md:text-lg">
          To be a trusted home where residents experience purpose, belonging,
          and joy every day. We envision a community where every person,
          regardless of age or ability, can thrive in a place that truly feels
          like family.
        </p>
      </div>

      {/* Desktop: animated row with connectors */}
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
            <motion.div
              className={index % 2 === 0 ? "mt-0" : "mt-20"}
              variants={floatVariants(index)}
              animate="animate"
            >
              <VisionCard {...pillar} />
            </motion.div>
            {index !== visionPillars.length - 1 && (
              <motion.div
                className={`flex items-center ${index % 2 === 0 ? "mt-0" : "mt-20"}`}
                variants={connectorVariants}
                style={{ originX: 0 }}
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

      {/* Mobile/tablet: simple vertical stack */}
      <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-5 px-4 sm:px-6 max-w-2xl mx-auto">
        {visionPillars.map((pillar) => (
          <VisionCard key={pillar.title} {...pillar} />
        ))}
      </div>

      <p className="text-center text-on-surface-variant mt-10 md:mt-16 max-w-3xl mx-auto italic px-4 sm:px-6 text-sm sm:text-base">
        Together, these pillars guide our commitment to creating a community
        where every resident experiences purpose, belonging, and joy.
      </p>
    </section>
  );
};

export default Vision;
