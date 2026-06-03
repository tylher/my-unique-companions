import { features } from "@/data/features";
import FamilyTrustFeatureCard from "./FamilyTrustFeatureCard";

const FamilyTrust = () => {
  return (
    <section className="bg-surface-container py-32 w-full">
      <div className="max-w-7xl mx-auto px-16 flex flex-col gap-16">
        <div className="text-center flex flex-col gap-7">
          <h2 className="font-display text-primary font-semibold text-4xl">
            Why Family Trust Us
          </h2>
          <p className="font-body text-lg  max-w-2xl mx-auto">
            We provide a sanctuary of care where every resident is treated with
            the dignity and warmth of a beloved family member.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-5">
          {
            /* Render feature cards here using the features data */
            features.map((feature) => {
              return (
                <FamilyTrustFeatureCard
                  key={feature.id}
                  title={feature.title}
                  description={feature.description}
                  iconSrc={feature.icon}
                  iconAlt={feature.iconAlt}
                />
              );
            })
          }
        </div>
      </div>
    </section>
  );
};

export default FamilyTrust;
