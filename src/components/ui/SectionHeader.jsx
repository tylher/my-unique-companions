export default function SectionHeader({ eyebrow, title, className = "" }) {
  return (
    <div className={className}>
      <div className="font-script font-bold text-secondary-container uppercase tracking-widest mb-4">
        {eyebrow}
      </div>

      <h2 className="font-display text-4xl font-semibold text-primary">{title}</h2>
    </div>
  );
}
