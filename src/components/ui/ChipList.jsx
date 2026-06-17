export default function ChipList({ items }) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {items.map((item) => (
        <span
          key={item}
          className="px-6 py-3 rounded-full border border-primary/20 font-script font-medium text-primary bg-surface/50"
        >
          {item}
        </span>
      ))}
    </div>
  );
}
