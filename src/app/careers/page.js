import ApplicationSection from "@/components/career/ApplicationSection";
import BenefitsSection from "@/components/career/BenefitSection";
import CareersHero from "@/components/career/CareersHero";
import QualificationsSection from "@/components/career/Qualitifications";
import ResponsibilitiesSection from "@/components/career/Responsibilities";
import TypicalShift from "@/components/career/TypicalShift";
import WhyWorkHere from "@/components/career/WhyWorkHere";

const CareerPage = () => {
  return (
    <div className="mt-30">
      <CareersHero />
      <WhyWorkHere />
      <TypicalShift />
      <ResponsibilitiesSection />
      <QualificationsSection />
      <BenefitsSection />
      <ApplicationSection />
    </div>
  );
};

export default CareerPage;
