"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { forwardRef } from "react";
import { MdCheck, MdLock } from "react-icons/md";

const fieldVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  }),
};

const ApplicationFormModal = forwardRef(
  ({ onCloseModal, onCloseFromOutside }, ref) => {
    return (
      <motion.div
        onClick={onCloseFromOutside}
        className="backdrop-blur-2xl fixed w-screen h-screen z-50 top-0 left-0 bg-black/30 flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        <motion.div
          className="bg-white h-[90%] w-3/4 overflow-auto rounded-4xl scrollbar-none"
          ref={ref}
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.97 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Header */}
          <motion.div
            className="px-7 py-10 mx-auto text-center bg-primary text-on-primary flex flex-col gap-5"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.4, ease: "easeOut" }}
          >
            <h2 className="font-display text-5xl font-semibold">
              We'd love to meet you
            </h2>
            <p className="font-body text-primary-fixed-dim text-lg mx-auto max-w-137.5">
              Join our team of dedicated caregivers providing premium,
              compassionate support
            </p>
          </motion.div>

          <div className="py-10">
            <form action="" className="px-10 flex flex-col gap-5">
              {[
                { type: "text", placeholder: "Full Name" },
                { type: "email", placeholder: "Email Address" },
                { type: "tel", placeholder: "Phone Number" },
              ].map((field, i) => (
                <motion.input
                  key={field.placeholder}
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full rounded-lg border border-outline-variant px-4 py-4 outline-none focus:ring-2 focus:ring-primary-container"
                  custom={i}
                  variants={fieldVariants}
                  initial="hidden"
                  animate="visible"
                />
              ))}

              <motion.textarea
                rows={4}
                placeholder="Tell us about your availability..."
                className="w-full rounded-lg border border-outline-variant px-4 py-4 outline-none focus:ring-2 focus:ring-primary-container"
                custom={3}
                variants={fieldVariants}
                initial="hidden"
                animate="visible"
              />

              <motion.label
                className="group mt-4 flex cursor-pointer items-start gap-3"
                custom={4}
                variants={fieldVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="relative mt-1 flex items-center justify-center">
                  <input
                    type="checkbox"
                    required
                    className="peer h-5 w-5 cursor-pointer appearance-none rounded border-2 border-outline bg-surface-bright transition-colors checked:border-primary checked:bg-primary"
                  />
                  <span className="material-symbols-outlined pointer-events-none absolute text-[16px] text-white opacity-0 transition-opacity peer-checked:opacity-100">
                    <MdCheck />
                  </span>
                </div>
                <span className="select-none pt-0.5 font-body-md text-body-md text-on-surface-variant">
                  I confirm that the information provided is accurate and
                  consent to Unique Companions AFH storing my data for
                  recruitment purposes in accordance with their{" "}
                  <Link
                    href="#"
                    className="font-medium text-primary hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </span>
              </motion.label>

              <motion.div
                className="flex flex-col gap-4 pt-4 sm:flex-row items-center justify-center"
                custom={5}
                variants={fieldVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.button
                  type="submit"
                  className="rounded-lg bg-secondary-container px-6 py-4 font-medium text-white transition hover:bg-secondary"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  Submit Application
                </motion.button>
              </motion.div>
            </form>

            <motion.div
              className="flex items-center gap-2 mt-4 text-on-surface-variant mx-auto text-center w-full justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              <span className="material-symbols-outlined text-[18px]">
                <MdLock />
              </span>
              <span className="font-label-md text-label-md text-sm">
                Your information is secure and confidential.
              </span>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    );
  },
);

export default ApplicationFormModal;
