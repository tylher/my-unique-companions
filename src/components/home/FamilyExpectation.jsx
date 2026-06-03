import { familyExpectations } from "@/data/features";
import ExpectationCard from "./ExpectationCard";

const FamilyExpectation = () => {
  return (
    <section className="py-32 bg-surface-container-low/50 ">
      <div className="max-w-7xl mx-auto px-16 flex flex-col gap-16">
        <div className="text-center flex flex-col gap-7">
          <h2 className="font-display text-primary font-semibold text-4xl">
            What Family Can Expect
          </h2>
          <p className="font-body text-lg  max-w-2xl mx-auto">
            A seamless transition into a supportive, enriching environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {
            /* Render family expectation cards here using the familyExpectations data */
            familyExpectations.map((expectation) => {
              return (
                <ExpectationCard
                  key={expectation.id}
                  title={expectation.title}
                  description={expectation.description}
                  icon={expectation.icon}
                />
              );
            })
          }
        </div>
      </div>
    </section>
  );
};
export default FamilyExpectation;
