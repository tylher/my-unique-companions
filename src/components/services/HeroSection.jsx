import { MdCircle } from "react-icons/md";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fb] min-h-[90vh] bg-[radial-gradient(circle_at_top_right,rgba(253,113,55,0.18),transparent_55%),radial-gradient(circle_at_bottom_left,rgba(13,25,85,0.18),transparent_55%)]">
      <div className="container mx-auto px-4 sm:px-6 pt-16 sm:pt-32  sm:pb-16 w-full min-h-screen flex items-center">
        <div className="mx-auto max-w-full sm:max-w-180 text-center flex flex-col gap-4 sm:gap-5">
          {/* Eyebrow — wraps gracefully on mobile */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-secondary-container font-semibold">
            <span className="tracking-[0.25em] font-script text-xs sm:text-sm font-semibold text-secondary-container">
              COMPASSIONATE
            </span>
            <span className="hidden xs:inline">
              <MdCircle size={7} />
            </span>
            <span className="tracking-[0.25em] font-script text-xs sm:text-sm font-semibold text-secondary-container">
              PERSONALISED
            </span>
            <span className="hidden xs:inline">
              <MdCircle size={7} />
            </span>
            <span className="tracking-[0.25em] font-script text-xs sm:text-sm font-semibold text-secondary-container">
              DIGNIFIED
            </span>
          </div>

          <h1 className="font-display font-semibold text-3xl sm:text-5xl md:text-6xl leading-tight text-primary">
            Every Service,
            <br />
            Designed Around You.
          </h1>

          <p className="font-body leading-relaxed text-on-surface-variant text-sm sm:text-base max-w-2xl mx-auto">
            At Unique Companions AFH, we provide compassionate, personalized
            care designed to support each resident's comfort, dignity, and
            independence. Our services are tailored to meet individual needs
            while creating a warm, home like environment where residents feel
            safe, respected, and truly cared for.
          </p>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {[
              "Personalized Care",
              "Family Communication",
              "Safe & Comfortable Home",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full bg-primary-fixed px-4 sm:px-5 py-2 sm:py-3 text-xs sm:text-sm font-medium text-primary-container"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Wave */}
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block w-full h-16 sm:h-24 md:h-30"
      >
        <path
          fill="#ffffff"
          d="M0,64L60,69.3C120,75,240,85,360,90.7C480,96,600,96,720,85.3C840,75,960,53,1080,48C1200,43,1320,53,1380,58.7L1440,64V120H0Z"
        />
      </svg>
    </section>
  );
};

export default HeroSection;
