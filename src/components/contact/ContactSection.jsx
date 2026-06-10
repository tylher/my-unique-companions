import ContactForm from "./ContactForm";
import ContactInfoCard from "./ContactInfoCard";
import ContactMap from "./ContactMap";

const ContactSection = () => {
  return (
    <>
      <div className="mb-10 text-center md:text-left mt-30 flex flex-col items-start justify-center ">
        <span className="inline-block bg-[#FFF7F2] text-primary px-4 py-1.5 rounded-full my-6 border border-[#FFE8D6] max-w-3xl">
          Get in Touch
        </span>

        <h1 className="font-display  text-6xl font-semibold text-primary mb-6 max-w-2xl">
          We're here to assist you and your loved ones.
        </h1>

        <p className="font-body text-on-surface-variant text-lg max-w-2xl">
          Whether you're ready to schedule a personalized tour, have questions
          about our compassionate care services, or simply want to learn more
          about our approach, our team is ready to welcome you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-stretch">
        <div className="lg:col-span-7">
          <ContactForm />
        </div>

        <div className="lg:col-span-5 space-y-8">
          <ContactInfoCard />
          <ContactMap />
        </div>
      </div>
    </>
  );
};

export default ContactSection;
