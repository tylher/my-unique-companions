import { MdCircle } from "react-icons/md";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fb]  min-h-screen bg-[radial-gradient(circle_at_top_right,rgba(253,113,55,0.18),transparent_55%),radial-gradient(circle_at_bottom_left,rgba(13,25,85,0.18),transparent_55%)]">
      {/* Background layer */}
      {/* <div className="absolute inset-0 pointer-events-none"> */}
      {/* Top-right glow */}
      {/* <div className="absolute top-[-120px] right-[-120px] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(253,113,55,0.25)_0%,transparent_70%)]" /> */}

      {/* Bottom-left glow */}
      {/* <div className="absolute bottom-[-120px] left-[-120px] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(13,25,85,0.25)_0%,transparent_70%)]" /> */}
      {/* </div> */}
      <div className="container mx-auto px-6 pt-32 pb-16 w-full h-screen flex items-center">
        <div className="mx-auto max-w-180 text-center flex flex-col gap-5">
          <div className="flex items-center justify-center gap-3 text-secondary-container font-semibold">
            <span className="tracking-[0.25em] font-script text-sm font-semibold text-secondary-container">
              COMPASSIONATE
            </span>
            <span>
              <MdCircle size={7} />
            </span>
            <span className="tracking-[0.25em] font-script text-sm font-semibold text-secondary-container">
              PERSONALISED
            </span>
            <span>
              <MdCircle size={7} />
            </span>
            <span className="tracking-[0.25em] font-script text-sm font-semibold text-secondary-container">
              DIGNIFIED
            </span>
          </div>

          <h1 className="font-display font-semibold text-5xl leading-tight text-primary md:text-6xl">
            Every Service,
            <br />
            Designed Around You.
          </h1>

          <p className=" font-body leading-relaxed text-on-surface-variant ">
            At Unique Companions AFH, we provide compassionate, personalized
            care designed to support each resident’s comfort, dignity, and
            independence. Our services are tailored to meet individual needs
            while creating a warm, home like environment where residents feel
            safe, respected, and truly cared for.
          </p>

          <div className=" flex flex-wrap justify-center gap-4">
            {[
              "Personalized Care",
              "Family Communication",
              "Safe & Comfortable Home",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full bg-primary-fixed px-5 py-3 text-sm font-medium text-primary-container"
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
        className="block w-full h-30"
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
