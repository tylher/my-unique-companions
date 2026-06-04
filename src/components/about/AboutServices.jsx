import { motion } from "framer-motion";
import { services } from "@/data/features";
import AboutServiceCard from "./AboutServiceCard";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const blobVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 0.1,
    scale: 1,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

const AboutServices = () => {
  return (
    <section className="relative bg-[#f7f9fb]/50 py-24 overflow-hidden">
      {/* Glow blob */}
      <motion.div
        className="absolute -top-40 -left-40 w-125 h-125 bg-primary-container rounded-full blur-3xl"
        variants={blobVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-display text-primary mb-12 font-semibold text-center">
            Full-Circle Support, Every Day.
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{
                y: -6,
                transition: { duration: 0.25, ease: "easeOut" },
              }}
            >
              <AboutServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutServices;
