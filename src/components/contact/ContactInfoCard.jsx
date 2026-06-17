import { contactDetails } from "@/data/features";
import Link from "next/link";
import ContactInfoItem from "./ContactItem";

const ContactInfoCard = () => {
  return (
    <div className="bg-surface-container-lowest rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-xl border border-primary-fixed/50">
      <h3 className="font-display text-lg sm:text-xl font-semibold text-primary mb-5 sm:mb-6">
        Direct Contact
      </h3>

      <div className="space-y-5 sm:space-y-6">
        {contactDetails.map((item) => (
          <ContactInfoItem key={item.title} {...item} data={item.data} />
        ))}
      </div>

      <div className="flex flex-col gap-4 items-center md:items-start mt-5 sm:mt-6 pt-2 sm:pt-3 border-t border-outline-variant/30 w-full ">
        <p className="font-body text-sm sm:text-base text-on-surface-variant text-center md:text-start ">
          Prefer an in-person conversation? We would be delighted to show you
          around our home.
        </p>

        <Link
          className="w-full md:w-fit text-center border-[1.5px] border-secondary text-secondary px-5 sm:px-6 py-3 rounded-2xl hover:bg-[#FFF7F2] transition-colors text-sm sm:text-base "
          href={"tel:+12533044293"}
        >
          Schedule a Tour
        </Link>
      </div>
    </div>
  );
};

export default ContactInfoCard;
