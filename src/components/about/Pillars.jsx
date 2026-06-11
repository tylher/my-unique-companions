import { pillars } from "@/data/features";
import PillarCard from "./PillarCard";

const Pillars = () => {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 md:px-16 bg-surface-container-lowest">
      <div className="mx-auto max-w-7xl">
        <div className="text-center space-y-3 sm:space-y-4">
          <h2 className="font-display text-primary text-2xl md:text-[32px] lg:text-[40px] font-semibold">
            Pillars of Our Care
          </h2>
          <p className="font-body text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto">
            Everything we do is guided by these four fundamental principles,
            ensuring a life of quality and purpose.
          </p>
        </div>
        <div className="mt-10 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
          {pillars.map((pillar) => (
            <PillarCard
              key={pillar.id}
              title={pillar.title}
              description={pillar.description}
              icon={pillar.icon}
              iconBg={pillar.iconBg}
              iconColor={pillar.iconColor}
              offset={pillar.offset}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
