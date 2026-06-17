import Link from "next/link";
import { MdOutlineHome } from "react-icons/md";

const ContactMap = () => {
  return (
    <div className="bg-surface-container-lowest rounded-2xl sm:rounded-3xl p-2 shadow-xl border border-primary-fixed/50 overflow-hidden group">
      <div className="relative w-full h-48 sm:h-60 rounded-2xl sm:rounded-[20px] overflow-hidden bg-surface-container">
        <Link
          className="cursor-pointer"
          href={"https://maps.app.goo.gl/qnKaWvPnSoRar22u9"}
          target="_blank"
        >
          <img
            src="/images/unique-companions-map.png"
            alt="Map View"
            className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700 opacity-80 group-hover:opacity-100"
          />
        </Link>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="bg-primary text-on-primary rounded-full p-2 sm:p-3 shadow-lg">
            <MdOutlineHome className="text-base sm:text-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMap;
