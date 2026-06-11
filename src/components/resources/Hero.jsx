"use client";

import { motion } from "framer-motion";
import { MdSpa } from "react-icons/md";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
});

const Hero = () => {
  return (
    <section className="relative min-h-[60vh] pt-24 md:pt-0 md:min-h-[80vh] sm:min-h-[90vh] flex flex-col justify-center items-center text-center w-full px-4 sm:px-6 lg:px-0 gap-4 sm:gap-5">
      {/* Badge */}
      <motion.div
        className="flex gap-2 sm:gap-3 items-center mt-8 sm:mt-10 font-script text-xs sm:text-sm font-medium text-on-secondary-fixed-variant bg-secondary-fixed rounded-3xl px-3 py-1.5"
        {...fadeUp(0.1)}
      >
        <MdSpa />
        <p>Family Welcome Packet</p>
      </motion.div>

      {/* Title */}
      <motion.h2
        className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl text-primary"
        {...fadeUp(0.2)}
      >
        Welcome To Your Extended Family
      </motion.h2>

      {/* Description */}
      <motion.p
        className="font-body text-sm sm:text-base md:text-lg text-on-surface-variant max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl font-light leading-relaxed"
        {...fadeUp(0.32)}
      >
        Welcome to Unique Companions AFH. We are honored that you have chosen us
        to be part of your loved one’s care journey. This packet is designed to
        help you understand who we are, what we provide, and how we partner with
        families to ensure every resident feels safe, respected, and truly at
        home.
      </motion.p>
    </section>
  );
};

export default Hero;
