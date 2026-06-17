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
      <div id="more">
        <WhyWorkHere />
      </div>

      <TypicalShift />
      <ResponsibilitiesSection />
      <QualificationsSection />
      <BenefitsSection />
      <div id="apply">
        <ApplicationSection />
      </div>
    </div>
  );
};

export default CareerPage;
