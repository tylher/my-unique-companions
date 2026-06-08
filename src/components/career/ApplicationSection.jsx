"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ApplicationFormModal from "./ApplicationModal";

const steps = [
  "Your Resume",
  "Caregiver Certification",
  "Contact Information",
  "Your Availability",
];

export default function ApplicationSection() {
  const modalRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleCloseFromOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  return (
    <section className="bg-[#f7f9fb] py-16">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-[0_20px_60px_rgba(37,48,107,0.07)] md:p-12"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-secondary-container/10 blur-[100px]" />

          <div className="relative z-10">
            <motion.p
              className="mb-4 text-sm font-script font-semibold uppercase tracking-[0.25em] text-secondary-container"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              How To Apply
            </motion.p>

            <motion.div
              className="mb-6 h-1 w-12 rounded-full bg-secondary-container"
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
            />

            <motion.h2
              className="mb-4 font-display text-5xl font-semibold text-primary md:text-4xl"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.22,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Ready to Make a Difference?
            </motion.h2>

            <motion.p
              className="mb-7 text-on-surface-variant font-body"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.32, duration: 0.45 }}
            >
              We'd love to learn more about you. Submit your information below
              and we'll be in touch.
            </motion.p>

            {/* Step cards — staggered */}
            <motion.div
              className="mb-10 grid gap-4 md:grid-cols-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={{
                visible: {
                  transition: { staggerChildren: 0.09, delayChildren: 0.35 },
                },
              }}
            >
              {steps.map((step, index) => (
                <motion.div
                  key={step}
                  className="rounded-xl border border-[#e0e3e5] bg-[#f7f9fb] p-4"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                  whileHover={{
                    y: -3,
                    boxShadow: "0 8px 24px rgba(37,48,107,0.08)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-primary-fixed font-display font-medium text-primary-container">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h4 className="font-medium text-[#191c1e] font-body">
                    {step}
                  </h4>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="flex flex-col gap-4 pt-4 sm:flex-row font-body"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.55, duration: 0.4 }}
          >
            <motion.button
              type="button"
              className="rounded-lg bg-primary-container px-6 py-4 font-medium text-white transition hover:bg-primary w-50 flex items-center justify-center"
              onClick={handleOpenModal}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 380, damping: 18 }}
            >
              Apply Now
            </motion.button>

            <motion.button
              type="button"
              className="rounded-lg border border-secondary-container px-6 py-4 font-medium text-secondary-container hover:bg-secondary-container hover:text-white w-50 flex items-center justify-center"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 380, damping: 18 }}
            >
              Contact Us Directly
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <ApplicationFormModal
            ref={modalRef}
            onCloseModal={handleCloseModal}
            onCloseFromOutside={handleCloseFromOutside}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
