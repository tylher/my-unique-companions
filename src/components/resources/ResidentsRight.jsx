import { residentRights } from "@/data/features";
import ResidentRightCard from "./ResidentRightCard";

const ResidentRights = () => {
  return (
    <section className="px-4 sm:px-10 lg:px-20 pb-16">
      <div className="text-center mb-10 sm:mb-12">
        <div className="w-14 sm:w-16 h-1 bg-secondary-container mx-auto mb-4 rounded-full" />

        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-primary mb-4">
          Resident Rights
        </h2>

        <p className="font-body text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto">
          We uphold the highest standards of personal dignity and legal rights.
          Every resident is guaranteed these fundamental pillars of respect.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {residentRights.map((right) => (
          <ResidentRightCard key={right.title} {...right} />
        ))}
      </div>
    </section>
  );
};

export default ResidentRights;
