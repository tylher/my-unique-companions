// TrustPillars.jsx

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
    <section className="bg-white py-16">
      <div className="container mx-auto px-10">
        <div className="grid gap-8 md:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <div
                key={pillar.title}
                className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm "
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-fixed">
                  <Icon className="h-8 w-8 text-primary-container" />
                </div>

                <h3 className="font-display text-3xl font-semibold text-primary">
                  {pillar.title}
                </h3>

                <p className="mt-4 text-on-surface-variant font-body">
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
