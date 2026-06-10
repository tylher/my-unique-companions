import { engagementItems, moveInRequirements } from "@/data/features";
import { MdCheckCircle } from "react-icons/md";

const MoveInRequirements = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 px-20 pb-16">
      {/* Requirements */}
      <div className="lg:col-span-7 bg-surface-container-low rounded-xl p-8 md:p-10 border border-outline-variant/20">
        <div className="w-12 h-1 bg-secondary-container mb-4 rounded-full" />

        <h2 className="font-display text-2xl font-semibold text-primary mb-6">
          What We Need From You
        </h2>

        <p className="font-body text-lg text-on-surface-variant mb-8">
          To ensure a seamless transition and the highest quality of immediate
          care, please prepare the following documents prior to move-in.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
          {moveInRequirements.map((item, index) => (
            <div
              key={item}
              className={`flex items-center ${
                index === moveInRequirements.length - 1 ? "sm:col-span-2" : ""
              }`}
            >
              <span className="material-symbols-outlined text-primary mr-3">
                <MdCheckCircle/>
              </span>

              <span className="font-script font-medium  text-on-surface">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Visiting & Engagement */}
      <div className="lg:col-span-5 bg-primary rounded-xl p-8 md:p-10 text-on-primary flex flex-col justify-center relative overflow-hidden">
        <div className="absolute -top-12.5 -right-12.5 w-48 h-48 bg-secondary-container/40 rounded-full blur-2xl opacity-70 pointer-events-none z-50" />

        <h2 className="font-display font-semibold text-2xl text-on-primary mb-4 relative z-10">
          Visiting & Engagement
        </h2>

        <p className="font-body text-lg text-on-primary-container mb-6 relative z-10">
          Families are encouraged to visit, participate in activities, and stay
          involved in their loved one's life. We maintain a respectful balance
          between:
        </p>

        <div className="space-y-4 relative z-10">
          {engagementItems.map((item) => (
            <div
              key={item}
              className="bg-primary-container/30 p-4 rounded-lg border-l-4 border-secondary-container"
            >
              <p className="font-body text-on-primary">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoveInRequirements;
