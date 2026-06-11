
import { familyExpectations } from "@/data/features";
import ExpectationCard from "./ExpectationCard";

const FamilyExpectation = () => {
  return (
    <section className="py-20 lg:py-32 bg-surface-container-low/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-14 lg:gap-16">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-primary font-semibold text-3xl sm:text-4xl">
              What Families Can Expect
            </h2>

            <p className="font-body text-base sm:text-lg mt-6">
              A seamless transition into a supportive, enriching environment.
            </p>
          </div>

          {/* Grid */}
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-6 sm:gap-8
            "
          >
            {familyExpectations.map((expectation) => (
              <ExpectationCard
                key={expectation.id}
                title={expectation.title}
                description={expectation.description}
                icon={expectation.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FamilyExpectation;
