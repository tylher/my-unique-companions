
import { contactDetails } from "@/data/features";
import ContactInfoItem from "./ContactItem";


const ContactInfoCard = () => {
  return (
    <div className="bg-surface-container-lowest rounded-3xl p-8 md:p-10 shadow-xl border border-primary-fixed/50">
      <h3 className="font-display text-xl font-semibold text-primary mb-6">
        Direct Contact
      </h3>

      <div className="space-y-6">
        {contactDetails.map((item) => (
          <ContactInfoItem key={item.title} {...item} />
        ))}
      </div>

      <div className="mt-8 pt-8 border-t border-outline-variant/30">
        <p className="font-body text-on-surface-variant mb-4">
          Prefer an in-person conversation? We would be delighted to show you
          around our home.
        </p>

        <button className="w-full border-[1.5px] border-secondary text-secondary px-6 py-3 rounded-2xl hover:bg-[#FFF7F2] transition-colors">
          Schedule a Tour
        </button>
      </div>
    </div>
  );
};

export default ContactInfoCard;
