import Link from "next/link";

const links = [
  "Daily Living",
  "Medication",
  "Meals",
  "Housekeeping",
  "Memory Care",
  "Healthcare",
  "Activities",
  "Safety",
];

const ServicesNav = () => {
  return (
    <div className="sticky top-16 sm:top-20 z-40 border-y border-slate-200 bg-white/90 backdrop-blur w-full">
      <div className="container mx-auto overflow-x-auto px-4 sm:px-6 scrollbar-none">
        <div className="flex min-w-max gap-5 sm:gap-8 py-3 sm:py-4 justify-start sm:justify-center">
          {links.map((item) => (
            <Link
              href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
              key={item}
              className="whitespace-nowrap text-xs sm:text-sm font-script font-bold text-primary-container transition hover:text-secondary-container"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesNav;
