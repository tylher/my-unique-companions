import { philosophy } from "@/data/features";
import PhilosophyBlock from "./PhilosophyBlock";

export default function CarePhilosophySection() {
  return (
    <section>
      {/* Header */}
      <div className="bg-white py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-display text-primary-container mb-4 font-semibold">
          Care Philosophy
        </h1>
        <p className="text-on-surface-variant max-w-2xl mx-auto font-body">
          At Unique Companions AFH, we believe exceptional care begins with
          respect, dignity, and human connection.
        </p>
      </div>

      {/* Blocks */}
      {philosophy.map((item, i) => (
        <PhilosophyBlock key={i} item={item} index={i} />
      ))}
    </section>
  );
}
