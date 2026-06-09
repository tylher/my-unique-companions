"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { forwardRef, useState } from "react";
import { MdCheckCircle, MdError, MdLock } from "react-icons/md";
import UploadZone from "./DocumentUpload";
import Field from "./Field";

const CLOUDINARY_CLOUD_NAME = "dwnoizvpx";
const CLOUDINARY_UPLOAD_PRESET = "uch_careers";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mkoabbko";

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
    const [fields, setFields] = useState({
      full_name: "",
      email: "",
      phone: "",
      availability: "",
      consent: false,
    });

    const [resumeFile, setResumeFile] = useState(null);
    const [certFile, setCertFile] = useState(null);
    const [resumeProgress, setResumeProgress] = useState(null);
    const [certProgress, setCertProgress] = useState(null);
    const [resumeError, setResumeError] = useState(null);
    const [certError, setCertError] = useState(null);
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState(null);

    async function uploadToCloudinary(file, onProgress) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.upload.addEventListener("progress", (e) => {
          if (e.lengthComputable) {
            onProgress(Math.round((e.loaded / e.total) * 100));
          }
        });

        xhr.addEventListener("load", () => {
          if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            resolve(data.secure_url);
          } else {
            reject(new Error("Cloudinary upload failed"));
          }
        });

        xhr.addEventListener("error", () =>
          reject(new Error("Network error during upload")),
        );

        xhr.open(
          "POST",
          `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/raw/upload`,
        );
        xhr.send(formData);
      });
    }

    const validate = () => {
      const e = {};
      if (!fields.full_name.trim()) e.full_name = "Full name is required";
      if (!fields.email.trim()) e.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(fields.email))
        e.email = "Enter a valid email";
      if (!fields.phone.trim()) e.phone = "Phone number is required";
      if (!resumeFile) e.resume = "Please upload your resume";
      if (!fields.consent) e.consent = "You must agree to continue";
      return e;
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setSubmitError(null);
      const validationErrors = validate();
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        const firstError = document.querySelector("[data-error]");
        firstError?.scrollIntoView({ behavior: "smooth", block: "center" });
        return;
      }
      setErrors({});
      setSubmitting(true);
      console.log("submitting..");

      try {
        // 1. Upload resume to Cloudinary
        let resumeUrl = "";
        if (resumeFile) {
          setResumeError(null);
          try {
            resumeUrl = await uploadToCloudinary(resumeFile, setResumeProgress);
          } catch {
            setResumeError("Failed to upload resume. Please try again.");
            setSubmitting(false);
            return;
          }
        }

        // 2. Upload certification to Cloudinary (optional)
        let certUrl = "";
        if (certFile) {
          setCertError(null);
          try {
            certUrl = await uploadToCloudinary(certFile, setCertProgress);
          } catch {
            setCertError("Failed to upload certification. Please try again.");
            setSubmitting(false);
            return;
          }
        }

        // 3. Submit to Formspree with file URLs as plain text
        const payload = new FormData();
        payload.append("full_name", fields.full_name);
        payload.append("email", fields.email);
        payload.append("phone", fields.phone);
        payload.append("availability", fields.availability);
        payload.append("resume_url", resumeUrl || "Not provided");
        payload.append("certification_url", certUrl || "Not provided");

        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          body: payload,
          headers: { Accept: "application/json" },
        });

        if (!res.ok) throw new Error("Submission failed");
        setSubmitted(true);
      } catch (err) {
        console.log(err);
        setSubmitError(
          "Something went wrong. Please try again or contact us directly.",
        );
      } finally {
        setSubmitting(false);
      }
    };


    return (
      <motion.div
        onClick={onCloseFromOutside}
        className="backdrop-blur-2xl fixed w-screen h-screen z-50 top-0 left-0 bg-black/30 flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        {submitted ? (
          <div className="mx-auto max-w-2xl rounded-3xl border border-[#e0e3e5] bg-white p-12 text-center shadow-[0_20px_60px_rgba(37,48,107,0.07)] ">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#e1f5ee]">
              <MdCheckCircle className="text-4xl text-[#0f6e56]" />
            </div>
            <h2 className="mb-3 font-playfair text-2xl font-semibold text-[#0d1955]">
              Application Received!
            </h2>
            <p className="mb-8 text-sm leading-relaxed text-[#454650]">
              Thank you for applying to Unique Companions AFH. We review every
              application personally and will be in touch within 3–5 business
              days.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="rounded-xl border border-[#25306b] bg-transparent px-6 py-3 text-sm font-semibold text-[#25306b] transition-colors hover:bg-[#f7f9fb]"
            >
              ← Back to Careers
            </button>
          </div>
        ) : (
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
              <form
                onSubmit={handleSubmit}
                noValidate
                className="px-10 flex flex-col gap-5"
                encType="application/x-www-form-urlencoded"
              >
                {[
                  { type: "text", placeholder: "Full Name", name: "full_name" },
                  {
                    type: "email",
                    placeholder: "Email Address",
                    name: "email",
                  },
                  { type: "tel", placeholder: "Phone Number", name: "phone" },
                ].map((field, i) => (
                  <Field
                    required={true}
                    error={errors[`${field.name}`]}
                    label={field.placeholder}
                  >
                    <motion.input
                      key={field.placeholder}
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      value={fields[`${field.name}`]}
                      className="w-full rounded-lg border border-outline-variant px-4 py-4 outline-none focus:ring-2 focus:ring-primary-container"
                      custom={i}
                      onChange={(e) => {
                        const val = e.target.value;
                        setFields((prev) => {
                          return { ...prev, [field.name]: val };
                        });
                      }}
                      variants={fieldVariants}
                      initial="hidden"
                      animate="visible"
                    />
                  </Field>
                ))}

                <Field
                  label={"Availability"}
                  optional={true}
                  error={errors.availability}
                >
                  <motion.textarea
                    rows={4}
                    name="availability"
                    placeholder="Tell us about your availability..."
                    className="w-full rounded-lg border border-outline-variant px-4 py-4 outline-none focus:ring-2 focus:ring-primary-container"
                    custom={3}
                    variants={fieldVariants}
                    initial="hidden"
                    animate="visible"
                    onChange={(e) => {
                      const val = e.target.value;
                      setFields((prev) => {
                        return { ...prev, availability: val };
                      });
                    }}
                  />
                </Field>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <UploadZone
                      label="Upload Resume"
                      hint="Drag & drop or click to browse"
                      accept=".pdf,.doc,.docx"
                      name="resume"
                      required
                      file={resumeFile}
                      onChange={(f) => {
                        setResumeFile(f);
                        setResumeProgress(null);
                        setResumeError(null);
                      }}
                      uploadProgress={resumeProgress}
                      uploadError={resumeError}
                    />

                    {errors.resume && (
                      <p className="mt-1.5 flex items-center gap-1 text-[11px] text-[#ba1a1a]">
                        <MdError className="text-xs" /> {errors.resume}
                      </p>
                    )}
                  </div>

                  <UploadZone
                    label="Upload Certification"
                    hint="HCA, CNA, CPR or other credentials"
                    accept=".pdf,.doc,.docx,.jpg,.png"
                    name="certificate"
                    optional
                    file={certFile}
                    onChange={(f) => {
                      setCertFile(f);
                      setCertProgress(null);
                      setCertError(null);
                    }}
                    uploadProgress={certProgress}
                    uploadError={certError}
                  />
                </div>

                <div>
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
                        checked={fields.consent}
                        onChange={(e) =>
                          setFields((p) => ({
                            ...p,
                            consent: e.target.checked,
                          }))
                        }
                        className="peer sr-only h-5 w-5 cursor-pointer appearance-none rounded border-2 border-outline bg-surface-bright transition-colors checked:border-primary checked:bg-primary"
                      />
                      <div
                        className={`flex h-5 w-5 items-center justify-center rounded border-2 transition-all duration-200
                  ${
                    fields.consent
                      ? "border-[#25306b] bg-[#25306b]"
                      : errors.consent
                        ? "border-red-400 bg-red-50"
                        : "border-[#c6c5d1] bg-white"
                  }
                `}
                      >
                        {fields.consent && (
                          <svg
                            width="10"
                            height="8"
                            viewBox="0 0 10 8"
                            fill="none"
                          >
                            <path
                              d="M1 4l3 3 5-6"
                              stroke="white"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </div>
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

                  {errors.consent && (
                    <p className="mt-2 flex items-center gap-1 text-[11px] text-[#ba1a1a]">
                      <MdError className="text-xs" /> {errors.consent}
                    </p>
                  )}
                </div>

                {submitError && (
                  <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3">
                    <MdError className="mt-0.5 shrink-0 text-base text-red-500" />
                    <p className="text-sm text-red-600">{submitError}</p>
                  </div>
                )}

                {/* <motion.div
                className="flex flex-col gap-4 pt-4 sm:flex-row items-center justify-center"
                custom={5}
                variants={fieldVariants}
                initial="hidden"
                animate="visible"
              > */}
                <motion.button
                  type="submit"
                  disabled={submitting || !fields.consent}
                  className="rounded-lg bg-secondary-container px-6 py-4 font-medium text-white transition hover:bg-secondary"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  {submitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="h-4 w-4 animate-spin"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    "Submit My Application"
                  )}
                </motion.button>
                {/* </motion.div> */}
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
        )}
      </motion.div>
    );
  },
);

export default ApplicationFormModal;
