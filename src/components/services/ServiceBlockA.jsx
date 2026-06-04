// ServiceBlockA.jsx

import Image from "next/image";

const ServiceBlockA = ({
  id,
  title,
  description,
  bullets,
  quote,
  chip,
  image,
  icon,
}) => {
  return (
    <section id={id} className="bg-white py-10">
      <div className="container mx-auto px-10">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <div>
            <div className="flex h-15 w-15 items-center justify-center rounded-xl bg-primary-fixed">
              {icon}
            </div>

            <h2 className="mt-8 font-display text-4xl text-primary font-semibold ">
              {title}
            </h2>

            <div className="mt-5 h-1 w-12 rounded-full bg-secondary-container" />

            <p className="mt-8 leading-relaxed text-on-surface-variant font-body">
              {description}
            </p>

            <div className="mt-8 space-y-4">
              {bullets.map((bullet) => (
                <div key={bullet} className="flex items-start gap-4 font-body">
                  <div className="mt-2 h-3 w-3 rounded-full bg-secondary-container" />

                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            <blockquote className="mt-7 border-l-4 border-secondary-container pl-6 font-serif italic text-primary-container">
              “{quote}”
            </blockquote>
          </div>

          <div className="relative h-162.5 w-full rounded-4xl overflow-hidden shadow-2xl">
            <Image
              src={image}
              alt={title}
              className="object-cover"
              fill
            />

            <div className="absolute bottom-6 left-6 rounded-full border border-primary-fixed bg-white/80 px-5 py-3 backdrop-blur-md font-semibold font-script">
              {chip}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBlockA;
