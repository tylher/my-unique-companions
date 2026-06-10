import { contactInterests } from "@/data/features";
import { MdExpandMore, MdOutlineArrowForward } from "react-icons/md";

const ContactForm = () => {
  return (
    <div className="bg-surface-container-lowest rounded-3xl p-8 md:p-10 shadow-xl border border-primary-fixed/50 relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-secondary-fixed opacity-20 rounded-full blur-3xl pointer-events-none group-hover:bg-secondary-container transition-colors duration-500" />

      <h2 className="font-display text-3xl font-semibold text-primary mb-8">
        Send a Message
      </h2>

      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

        <div>
          <label
            htmlFor="interest"
            className="block font-sript text-sm text-on-surface mb-2"
          >
            Primary Interest
          </label>

          <div className="relative">
            <select
              id="interest"
              className="w-full bg-surface-container-low border-none rounded-xl px-4 py-4 appearance-none"
            >
              {contactInterests.map((interest) => (
                <option key={interest}>{interest}</option>
              ))}
            </select>

            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <MdExpandMore />
            </span>
          </div>
        </div>

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
            className="w-full bg-surface-container-low rounded-xl px-4 py-4 resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full md:w-auto bg-primary text-on-primary px-8 py-4 rounded-2xl font-body flex items-center justify-center gap-2"
        >
          Send Inquiry
          <span className="material-symbols-outlined text-[20px]">
            <MdOutlineArrowForward />
          </span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

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
      className="w-full bg-surface-container-low rounded-xl px-4 py-4"
    />
  </div>
);
