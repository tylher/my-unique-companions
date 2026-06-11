import { contactInterests } from "@/data/features";
import { MdExpandMore, MdOutlineArrowForward } from "react-icons/md";

const ContactForm = () => {
  return (
    <div className="bg-surface-container-lowest rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-xl border border-primary-fixed/50 relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-secondary-fixed opacity-20 rounded-full blur-3xl pointer-events-none group-hover:bg-secondary-container transition-colors duration-500" />

      <h2 className="font-display text-2xl sm:text-3xl font-semibold text-primary mb-6 sm:mb-8">
        Send a Message
      </h2>

      <form className="space-y-5 sm:space-y-6">
        {/* Name Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <InputField label="First Name" id="firstName" placeholder="Jane" />
          <InputField label="Last Name" id="lastName" placeholder="Doe" />
        </div>

        <InputField
          label="Email Address"
          id="email"
          type="email"
          placeholder="jane@example.com"
        />

        <InputField
          label="Phone Number (Optional)"
          id="phone"
          type="tel"
          placeholder="(555) 123-4567"
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
              id="interest"
              className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 sm:py-4 appearance-none text-sm sm:text-base"
            >
              {contactInterests.map((interest) => (
                <option key={interest}>{interest}</option>
              ))}
            </select>

            <MdExpandMore className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-lg" />
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
            rows={4}
            placeholder="Please share any specific needs or questions..."
            className="w-full bg-surface-container-low rounded-xl px-4 py-3 sm:py-4 resize-none text-sm sm:text-base"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full sm:w-auto bg-primary text-on-primary px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-body flex items-center justify-center gap-2 hover:opacity-95 transition"
        >
          Send Inquiry
          <MdOutlineArrowForward className="text-[18px] sm:text-[20px]" />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

/* Reusable input */
const InputField = ({ label, id, placeholder, type = "text" }) => (
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
      className="w-full bg-surface-container-low rounded-xl px-4 py-3 sm:py-4 text-sm sm:text-base"
    />
  </div>
);
