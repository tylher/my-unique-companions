import { MdOutlineHome } from "react-icons/md";

const ContactMap = () => {
  return (
    <div className="bg-surface-container-lowest rounded-3xl p-2 shadow-xl border border-primary-fixed/50 overflow-hidden group">
      <div className="relative w-full h-60 rounded-[20px] overflow-hidden bg-surface-container">
        <img
          src="/images/contact-map.jpg"
          alt="Map View"
          className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700 opacity-80 group-hover:opacity-100"
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="bg-primary text-on-primary rounded-full p-2 shadow-lg">
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              <MdOutlineHome/>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMap;
