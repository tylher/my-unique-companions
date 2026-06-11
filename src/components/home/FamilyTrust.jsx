import { features } from "@/data/features";
import FamilyTrustFeatureCard from "./FamilyTrustFeatureCard";

const FamilyTrust = () => {
  return (
    <section className="bg-surface-container py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-14">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-primary font-semibold text-3xl sm:text-4xl">
              Why Families Trust Us
            </h2>

            <p className="font-body text-base sm:text-lg mt-6">
              We provide a sanctuary of care where every resident is treated
              with the dignity and warmth of a beloved family member.
            </p>
          </div>

          {/* Features Grid */}
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              xl:grid-cols-4
              gap-6
            "
          >
            {features.map((feature) => (
              <FamilyTrustFeatureCard
                key={feature.id}
                title={feature.title}
                description={feature.description}
                iconSrc={feature.icon}
                iconAlt={feature.iconAlt}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FamilyTrust;
