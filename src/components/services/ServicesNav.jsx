// ServicesNav.jsx

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
    <div className="sticky top-20 z-40 border-y border-slate-200 bg-white/90 backdrop-blur w-full">
      <div className="container mx-auto overflow-x-auto px-6">
        <div className="flex justify-center min-w-max gap-8 py-4">
          {links.map((item) => (
            <Link
              href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
              key={item}
              className="whitespace-nowrap text-sm font-script font-bold text-primary-container transition hover:text-secondary-container"
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
