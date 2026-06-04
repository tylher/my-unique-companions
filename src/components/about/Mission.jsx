import { motion } from "framer-motion";
const Mission = () => {
  return (
    <section className="relative bg-primary-container py-24 overflow-hidden">
      <div className="absolute inset-0 flex justify-center">
        <div className="w-150 h-150 bg-[#e35e25] opacity-10 blur-[180px]" />
      </div>

      <motion.div
        className="relative max-w-4xl mx-auto text-center px-6"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <span className="text-[#e35e25] uppercase text-center mb-10 font-bold text-lg inline-block font-body">
          Our Mission
        </span>
        <div className="w-24 h-px bg-[#e35e25] mx-auto mb-7" />

        <h2 className="font-display text-5xl  leading-tight text-white italic">
          "To provide compassionate, personalized care in a warm and supportive
          environment where every resident feels safe, respected, and at home."
        </h2>

        <p className="text-gray-300 mt-8 text-lg max-w-3xl mx-auto">
          This is not a statement on a wall. It is the intention behind every
          conversation, every meal, every moment of care we provide.
        </p>

        <div className="w-24 h-px bg-[#e35e25] mx-auto mt-7" />
      </motion.div>

      <div className="absolute -top-1 left-0 w-full leading-none z-20 pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-20 block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C480,120 960,-40 1440,40 L1440,0 L0,0 Z"
            fill="#f2f4f6"
          />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 w-full leading-none z-20">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-20"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64 C240,140 480,0 720,64 C960,128 1200,32 1440,64 L1440,120 L0,120 Z"
            fill="#ffffff"
            // opacity="0.08"
          />
        </svg>
      </div>
    </section>
  );
};

export default Mission;
