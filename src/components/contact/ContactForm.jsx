"use client";
import { contactInterests } from "@/data/features";
import { useState } from "react";
import { MdCheckCircle, MdError, MdExpandMore, MdOutlineArrowForward } from "react-icons/md";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mgojokjy";

const ContactForm = () => {
  const [fields, setFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const validate = () => {
    const e = {};
    if (!fields.firstName.trim()) e.firstName = "First name is required";
    if (!fields.lastName.trim()) e.lastName = "Last name is required";
    if (!fields.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(fields.email))
      e.email = "Enter a valid email";
    if (!fields.phone.trim()) e.phone = "Phone number is required";
    if (!fields.interest.trim()) e.interest = "Interest is required";
    if (!fields.message.trim()) e.message = "Your message is required";
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

    try {
      const payload = new FormData();
      payload.append("firstName", fields.firstName);
      payload.append("lastName", fields.lastName);
      payload.append("email", fields.email);
      payload.append("phone", fields.phone);
      payload.append("interest", fields.interest);
      payload.append("message", fields.message);

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

  if (submitted) {
    return (
      <div className="mx-auto max-w-2xl w-full rounded-3xl border border-[#e0e3e5] bg-white p-8 sm:p-12 text-center shadow-[0_20px_60px_rgba(37,48,107,0.07)]">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#e1f5ee]">
          <MdCheckCircle className="text-4xl text-[#0f6e56]" />
        </div>
        <h2 className="mb-3 font-playfair text-2xl font-semibold text-[#0d1955]">
          Submission Received!
        </h2>
        <p className="mb-8 text-sm leading-relaxed text-[#454650]">
          Thank you for reaching out to us at Unique Companions AFH. We will be
          sure to get back to you as soon as possible.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="rounded-xl border border-[#25306b] bg-transparent px-6 py-3 text-sm font-semibold text-[#25306b] transition-colors hover:bg-[#f7f9fb]"
        >
          ← Back to Contact form
        </button>
      </div>
    );
  }

  return (
    <div className="bg-surface-container-lowest rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-xl border border-primary-fixed/50 relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-secondary-fixed opacity-20 rounded-full blur-3xl pointer-events-none group-hover:bg-secondary-container transition-colors duration-500" />

      <h2 className="font-display text-2xl sm:text-3xl font-semibold text-primary mb-6 sm:mb-8">
        Send a Message
      </h2>

      <form className="space-y-5 sm:space-y-6" onSubmit={handleSubmit}>
        {/* Name Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <InputField
            label="First Name"
            id="firstName"
            name={"firstName"}
            value={fields.firstName}
            placeholder="Jane"
            error={errors.firstName}
            handleChange={(e) => {
              const val = e.target.value;
              setFields((f) => ({ ...f, ["firstName"]: val }));
            }}
          />
          <InputField
            label="Last Name"
            name={"lastName"}
            value={fields.lastName}
            id="lastName"
            placeholder="Doe"
            error={errors.lastName}
            handleChange={(e) => {
              const val = e.target.value;
              setFields((f) => ({ ...f, ["lastName"]: val }));
            }}
          />
        </div>
        <InputField
          label="Email Address"
          id="email"
          name={"email"}
          value={fields.email}
          type="email"
          placeholder="jane@example.com"
          error={errors.email}
          handleChange={(e) => {
            const val = e.target.value;
            setFields((f) => ({ ...f, ["email"]: val }));
          }}
        />
        <InputField
          label="Phone Number (Optional)"
          name={"phone"}
          value={fields.phone}
          id="phone"
          type="tel"
          placeholder="(555) 123-4567"
          error={errors.phone}
          handleChange={(e) => {
            const val = e.target.value;
            setFields((f) => ({ ...f, ["phone"]: val }));
          }}
        />
        {/* Select */}
        <div>
          <label
            htmlFor="interest"
            className="block font-script text-sm text-on-surface mb-2"
          >
            Primary Interest
          </label>

          <div className="relative">
            <select
              name="interest"
              id="interest"
              value={fields.interest}
              onChange={(e) => {
                const val = e.target.value;
                setFields((f) => ({ ...f, ["interest"]: val }));
              }}
              className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 sm:py-4 appearance-none text-sm sm:text-base"
            >
              {contactInterests.map((interest) => (
                <option key={interest}>{interest}</option>
              ))}
            </select>

            <MdExpandMore className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-lg" />

            {errors.interest && (
              <p className="flex items-center gap-1 text-[11px] text-[#ba1a1a]">
                <MdError className="text-xs" />
                {errors.interest}
              </p>
            )}
          </div>
        </div>
        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block font-script text-sm text-on-surface mb-2"
          >
            How can we help?
          </label>

          <textarea
            id="message"
            name="message"
            value={fields.message}
            rows={4}
            placeholder="Please share any specific needs or questions..."
            onChange={(e) => {
              const val = e.target.value;
              setFields((f) => ({ ...f, ["message"]: val }));
            }}
            className="w-full bg-surface-container-low rounded-xl px-4 py-3 sm:py-4 resize-none text-sm sm:text-base"
          />

          {errors.message && (
            <p className="flex items-center gap-1 text-[11px] text-[#ba1a1a]">
              <MdError className="text-xs" />
              {errors.message}
            </p>
          )}
        </div>
        {/* Button */}
        <button
          disabled={submitting}
          type="submit"
          className="w-full sm:w-auto bg-primary text-on-primary px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-body flex items-center justify-center gap-2 hover:opacity-95 transition"
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
            <span className="flex gap-2 items-center ">
              Send Inquiry
              <MdOutlineArrowForward className="text-[18px] sm:text-[20px]" />
            </span>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

/* Reusable input */
const InputField = ({
  label,
  id,
  placeholder,
  type = "text",
  error,
  name,
  value,
  handleChange,
}) => (
  <div>
    <label
      htmlFor={id}
      className="block font-script text-sm text-on-surface mb-2"
    >
      {label}
    </label>

    <input
      id={id}
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={handleChange}
      className="w-full bg-surface-container-low rounded-xl px-4 py-3 sm:py-4 text-sm sm:text-base"
    />

    {error && (
      <p className="flex items-center gap-1 text-[11px] text-[#ba1a1a]">
        <MdError className="text-xs" />
        {error}
      </p>
    )}
  </div>
);
