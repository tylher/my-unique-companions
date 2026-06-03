import { services } from "@/data/features";
import AboutServiceCard from "./AboutServiceCard";

const AboutServices = () => {
  return (
    <section className="relative bg-[#f7f9fb]/50 py-24 overflow-hidden">
      {/* Glow blob background */}
      <div className="absolute -top-40 -left-40 w-125 h-125 bg-primary-container opacity-[0.1] rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div>
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-display text-primary mb-12 font-semibold text-center">
            Full-Circle Support, Every Day.
          </h2>

          <p>
            
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <AboutServiceCard key={i} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutServices;
