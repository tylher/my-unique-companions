import { FaComments, FaHandHoldingHeart, FaShieldAlt } from "react-icons/fa";

const pillars = [
  {
    icon: FaHandHoldingHeart,
    title: "Personalized Care",
    description:
      "Every resident receives a care plan tailored to their unique needs.",
  },
  {
    icon: FaComments,
    title: "Family Communication",
    description:
      "Families stay informed and involved throughout the care journey.",
  },
  {
    icon: FaShieldAlt,
    title: "Safety & Dignity",
    description: "A secure environment where comfort and respect come first.",
  },
];

export default function TrustPillars() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid gap-5 md:gap-8 sm:grid-cols-2 md:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="rounded-3xl border border-slate-100 bg-white p-6 md:p-8 shadow-sm"
              >
                <div className="mb-4 md:mb-6 flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-2xl bg-primary-fixed">
                  <Icon className="h-6 w-6 md:h-8 md:w-8 text-primary-container" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-semibold text-primary">
                  {pillar.title}
                </h3>
                <p className="mt-3 md:mt-4 text-on-surface-variant font-body text-sm sm:text-base">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
