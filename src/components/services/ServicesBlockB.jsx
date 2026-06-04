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
    <section id={id} className="bg-surface-container-low py-10 overflow-hidden">
      <div className="container mx-auto px-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* IMAGE */}
          <div className="relative order-2 lg:order-1  h-162.5 w-full rounded-4xl overflow-hidden shadow-2xl">
            <Image
              src={image}
              alt={title}
              className="object-cover shadow-xl"
              fill
            />

            <div className="absolute bottom-6 right-6 rounded-full border border-primary-fixed bg-white/80 backdrop-blur-md px-5 py-3">
              <span className="text-primary-container font-semibold font-script">
                {chip}
              </span>
            </div>
          </div>

          {/* CONTENT */}
          <div className="order-1 lg:order-2">
            <div className="w-15 h-15 rounded-xl bg-primary-fixed flex items-center justify-center">
              {icon}
            </div>

            <h2 className="mt-8 text-4xl font-display font-semibold text-primary">
              {title}
            </h2>

            <div className="mt-5 h-1 w-12 bg-secondary-container rounded-full" />

            <p className="mt-8 text-on-surface-variant leading-relaxed font-body">
              {description}
            </p>

            <div className="mt-8 space-y-4 font-body">
              {bullets.map((item) => (
                <div key={item} className="flex gap-4 items-start">
                  <div className="w-3 h-3 rounded-full bg-secondary-container mt-2" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {badges.length > 0 && (
              <div className="flex flex-wrap gap-3 mt-8 font-body">
                {badges.map((badge) => (
                  <div
                    key={badge}
                    className="px-4 py-2 rounded-full border border-outline-variant bg-white text-primary-container text-sm"
                  >
                    {badge}
                  </div>
                ))}
              </div>
            )}

            <blockquote className="mt-8 italic font-serif text-primary-container border-l-4 border-secondary-container pl-6">
              “{quote}”
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBlockB;
