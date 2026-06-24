import { quickLinks } from "@/data/features";
import Image from "next/image";
import Link from "next/link";
import { IoIosHeart } from "react-icons/io";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-primary-fixed/70 text-primary border-t border-surface-container-low px-6 sm:px-10 lg:px-20 pt-12">
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 justify-between  mb-10 ">
        {/* Logo + Tagline */}
        <div className="w-full lg:w-fit flex flex-col gap-1 justify-center items-center">
          <Link className="relative w-fit" href={"/"}>
            <Image
              src="/images/Unique-Companions-Logo.png"
              alt="Unique Companions AFH"
              className="object-contain"
              width={120}
              height={55}
            />
          </Link>

          <div className="flex items-center flex-wrap text-primary font-medium font-body gap-2 text-sm sm:text-base">
            <span className="text-secondary-container">
              <IoIosHeart />
            </span>
            <p className="text-sm">Where companion meets quality care.</p>
            <span className="text-secondary-container">
              <IoIosHeart />
            </span>
          </div>
        </div>

        <div>
          <h4 className="font-semibold font-display text-lg sm:text-xl tracking-wider mb-3">
            Quick Links
          </h4>

          <ul className="flex flex-col gap-2 font-body">
            {quickLinks.map((link, i) => (
              <li
                key={i}
                className="text-[14px] opacity-80 text-inverse-surface hover:opacity-100 hover:text-primary transition-all font-ui"
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="w-full lg:w-auto">
          <h2 className="font-display font-semibold text-lg sm:text-xl text-primary mb-3">
            Contact
          </h2>

          <p className="text-on-surface text-sm font-body">
            Reach out to us anytime, we’re here to help you and your loved ones.
          </p>

          <div className="mt-3 text-sm text-on-surface space-y-1 font-medium flex flex-col gap-2">
            <div className="flex items-center gap-2  font-body ">
              <span className="text-secondary ">
                <MdEmail />{" "}
              </span>
              <div className="flex flex-wrap gap-0.5">
                <a
                  href="mailto:uniquecompanionsafh@gmail.com"
                  className="hover:text-primary"
                >
                  uniquecompanionsafh@gmail.com{" "}
                </a>
                <span>,</span>
                <a
                  href={"mailto:info@uniquecompanions.com"}
                  className="hover:text-primary"
                >
                  info@uniquecompanions.com{" "}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2 font-body">
              <span className="text-secondary ">
                <MdPhone />{" "}
              </span>{" "}
              <div>
                <a href="tel:+12533044293" className="hover:text-primary">
                  {" "}
                  (253) 304-4293
                </a>
                <span>, </span>
                <a href="tel:+14255157787" className="hover:text-primary">
                  (425) 515-7787
                </a>
              </div>
            </div>
            <Link
              className="flex items-center gap-2  font-body"
              href={"https://maps.app.goo.gl/qnKaWvPnSoRar22u9"}
              target="_blank"
              rel="noopner noreferrer"
            >
              <span className="text-secondary ">
                <MdLocationOn />{" "}
              </span>{" "}
              710 ROE STREET, STEILACOOM, 98388
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-on-surface-variant/20 flex justify-center items-center gap-3 py-5 text-center ">
        <p className="text-xs sm:text-sm text-on-surface-variant">
          &copy; {new Date().getFullYear()} Unique Companions AFH. All rights
          reserved.
        </p>
        {/* <span>|</span>
        <p className="text-sm ">
          Designed by <a href="https://bservices.com.ng" target="_blank" rel="noreferrer ">Barakhel Services</a>
        </p> */}
      </div>
    </footer>
  );
};

export default Footer;
