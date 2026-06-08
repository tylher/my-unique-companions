"use client";
import { credentials, qualifications } from "@/data/features";
import { motion } from "framer-motion";
import { MdCheckCircle } from "react-icons/md";

const rowVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.06, duration: 0.38, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function QualificationsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-5xl font-semibold font-display text-primary text-center mb-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          Who We're Looking For
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 mt-10">
          {/* Personal Qualities */}
          <motion.div
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={{ visible: { transition: { staggerChildren: 0 } } }}
          >
            <motion.h3
              className="text-lg font-semibold font-display text-primary mb-4"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              Personal Qualities
            </motion.h3>

            {qualifications.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3 border-b border-surface-container-low pb-3"
                custom={index}
                variants={rowVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.span
                  className="w-5 h-5 rounded bg-primary-fixed flex items-center justify-center mt-1"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.06 + 0.1,
                    type: "spring",
                    stiffness: 360,
                    damping: 16,
                  }}
                >
                  <MdCheckCircle className="text-primary-container text-sm" />
                </motion.span>
                <p className="text-[#191c1e] font-script text-sm font-medium">
                  {item}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Required Credentials */}
          <motion.div
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={{ visible: { transition: { staggerChildren: 0 } } }}
          >
            <motion.h3
              className="text-lg font-semibold font-display text-primary mb-4"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.4, ease: "easeOut" }}
            >
              Required Credentials
            </motion.h3>

            {credentials.map((credential, index) => (
              <motion.div
                className="flex items-start gap-3 border-b border-surface-container-low pb-3"
                key={index}
                custom={index}
                variants={{
                  hidden: { opacity: 0, x: 16 },
                  visible: (i) => ({
                    opacity: 1,
                    x: 0,
                    transition: {
                      delay: i * 0.06,
                      duration: 0.38,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  }),
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ x: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.span
                  className="w-5 h-5 rounded bg-secondary-fixed flex items-center justify-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.06 + 0.1,
                    type: "spring",
                    stiffness: 360,
                    damping: 16,
                  }}
                >
                  <MdCheckCircle className="text-secondary text-sm" />
                </motion.span>
                <p className="text-[#191c1e] font-script text-sm font-medium">
                  {credential}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Helper banner */}
        <motion.div
          className="mt-16 bg-[#f7f9fb] border border-[#dee0ff] p-6 rounded-xl flex items-start gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{
            scale: 1.01,
            boxShadow: "0 8px 28px rgba(37,48,107,0.07)",
          }}
        >
          <motion.div
            className="w-10 h-10 bg-[#dee0ff] rounded-lg flex items-center justify-center"
            initial={{ rotate: -12, scale: 0.8 }}
            whileInView={{ rotate: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 300,
              damping: 16,
            }}
          >
            <MdCheckCircle className="text-[#25306b]" />
          </motion.div>
          <div>
            <h4 className="font-semibold text-[#0d1955] mb-1">
              New to caregiving? We'll guide you.
            </h4>
            <p className="text-[#454650]">
              We support new caregivers through training and certification
              steps.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
