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
    <section id={id} className="bg-white py-10 sm:py-14 md:py-10">
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid items-center gap-10 md:gap-20 lg:grid-cols-2">
          {/* Content */}
          <div>
            <div className="flex h-12 w-12 md:h-15 md:w-15 items-center justify-center rounded-xl bg-primary-fixed">
              {icon}
            </div>
            <h2 className="mt-6 md:mt-8 font-display text-3xl md:text-4xl text-primary font-semibold">
              {title}
            </h2>
            <div className="mt-4 md:mt-5 h-1 w-12 rounded-full bg-secondary-container" />
            <p className="mt-6 md:mt-8 leading-relaxed text-on-surface-variant font-body text-sm sm:text-base">
              {description}
            </p>
            <div className="mt-6 md:mt-8 space-y-3 md:space-y-4">
              {bullets.map((bullet) => (
                <div
                  key={bullet}
                  className="flex items-start gap-3 md:gap-4 font-body"
                >
                  <div className="mt-2 h-3 w-3 shrink-0 rounded-full bg-secondary-container" />
                  <span className="text-sm sm:text-base">{bullet}</span>
                </div>
              ))}
            </div>
            <blockquote className="mt-6 md:mt-7 border-l-4 border-secondary-container pl-5 md:pl-6 font-serif italic text-primary-container text-sm sm:text-base">
              "{quote}"
            </blockquote>
          </div>

          {/* Image */}
          <div className="relative h-72 sm:h-96 md:h-162.5 w-full rounded-3xl md:rounded-4xl overflow-hidden shadow-2xl">
            <Image src={image} alt={title} className="object-cover" fill />
            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 rounded-full border border-primary-fixed bg-white/80 px-4 py-2 md:px-5 md:py-3 backdrop-blur-md font-semibold font-script text-sm">
              {chip}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBlockA;
