import Image from "next/image";

const ServiceBlockB = ({
  id,
  title,
  description,
  bullets,
  quote,
  chip,
  image,
  icon,
  badges = [],
}) => {
  return (
    <section
      id={id}
      className="bg-surface-container-low py-10 sm:py-14 md:py-10 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1 h-72 sm:h-96 md:h-162.5 w-full rounded-3xl md:rounded-4xl overflow-hidden shadow-2xl">
            <Image
              src={image}
              alt={title}
              className="object-cover shadow-xl"
              fill
            />
            <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 rounded-full border border-primary-fixed bg-white/80 backdrop-blur-md px-4 py-2 md:px-5 md:py-3">
              <span className="text-primary-container font-semibold font-script text-sm">
                {chip}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="w-12 h-12 md:w-15 md:h-15 rounded-xl bg-primary-fixed flex items-center justify-center">
              {icon}
            </div>
            <h2 className="mt-6 md:mt-8 text-3xl md:text-4xl font-display font-semibold text-primary">
              {title}
            </h2>
            <div className="mt-4 md:mt-5 h-1 w-12 bg-secondary-container rounded-full" />
            <p className="mt-6 md:mt-8 text-on-surface-variant leading-relaxed font-body text-sm sm:text-base">
              {description}
            </p>
            <div className="mt-6 md:mt-8 space-y-3 md:space-y-4 font-body">
              {bullets.map((item) => (
                <div key={item} className="flex gap-3 md:gap-4 items-start">
                  <div className="w-3 h-3 shrink-0 rounded-full bg-secondary-container mt-2" />
                  <span className="text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </div>
            {badges.length > 0 && (
              <div className="flex flex-wrap gap-2 md:gap-3 mt-6 md:mt-8 font-body">
                {badges.map((badge) => (
                  <div
                    key={badge}
                    className="px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-outline-variant bg-white text-primary-container text-xs sm:text-sm"
                  >
                    {badge}
                  </div>
                ))}
              </div>
            )}
            <blockquote className="mt-6 md:mt-8 italic font-serif text-primary-container border-l-4 border-secondary-container pl-5 md:pl-6 text-sm sm:text-base">
              "{quote}"
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBlockB;
