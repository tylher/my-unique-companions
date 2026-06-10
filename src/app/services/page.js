import CTABanner from "@/components/services/CTABanner";
import HeroSection from "@/components/services/HeroSection";
import MemoryCareSection from "@/components/services/MemoryCareSection";
import ServiceBlockA from "@/components/services/ServiceBlockA";
import ServiceBlockB from "@/components/services/ServicesBlockB";
import ServicesNav from "@/components/services/ServicesNav";
import TrustPillars from "@/components/services/TrustPillar";
import { detailedServices, servicesPageSections } from "@/data/features";

const ServicesPage = () => {
  const getService = (id) => detailedServices.find((s) => s.id === id);
  return (
    <div>
      <HeroSection />
      <ServicesNav />
      <TrustPillars />

      <div>
        {servicesPageSections.map((section, index) => {
          // SERVICE BLOCKS
          if (section.type === "service") {
            const service = getService(section.serviceId);
            const Icon = service.icon;

            const props = {
              id: service.id,
              title: service.title,
              description: service.description,
              bullets: service.bullets,
              quote: service.quote,
              chip: service.chip,
              image: service.image,
              icon: <Icon className="text-primary-container text-2xl" />,
            };

            return service.type === "A" ? (
              <ServiceBlockA key={service.id} {...props} />
            ) : (
              <ServiceBlockB key={service.id} {...props} />
            );
          }

          // SPECIAL BLOCKS
          switch (section.component) {
            case "memory-care":
              return <MemoryCareSection key={index} />;

            case "cta":
              return <CTABanner key={index} />;

            default:
              return null;
          }
        })}
      </div>
    </div>
  );
};

export default ServicesPage;
