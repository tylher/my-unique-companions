"use client";
import AboutServices from "@/components/about/AboutServices";
import CarePhilosophySection from "@/components/about/CarePhilosophySection";
import Pillars from "@/components/about/Pillars";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div>
      <section className="md:py-32 md:px-16 flex items-center gap-16 flex-col md:flex-row relative min-h-screen bg-surface/40">
        <div className="absolute top-[-10%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-secondary-fixed-dim/40 blur-[100px] -z-10 pointer-events-none animate-float"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[30vw] h-[30vw] rounded-full bg-primary-fixed-dim/40 blur-[80px] -z-10 pointer-events-none animate-float-delayed"></div>
        <div className="relative max-w-1/2 space-y-8">
          <span className="bg-[#FFF] text-primary px-4 py-2 rounded-full font-semibold text-sm inline-block font-script">
            Our Story
          </span>
          <h1 className="text-6xl font-bold font-display text-primary">
            Where Every Resident Feels Truly at Home
          </h1>
          <p className="text-lg font-body text-on-surface-variant max-w-lg">
            At Unique Companions AFH, we transcend traditional care by fostering
            a nurturing environment where dignity and personalized attention
            create a sanctuary for your loved ones.
          </p>
        </div>

        <div className="relative w-full md:w-1/2 flex justify-center">
          <div
            className="relative h-100 md:h-150 rounded-3xl shadow-[0_20px_40px_rgba(37,48,107,0.04)] reveal-on-scroll reveal-delay-200 flex-1
          border-5 border-white
         "
            style={{
              transform: "perspective(1000px) rotateY(-15deg)",
            }}
          >
            <Image
              alt="Warm home interior"
              className="inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105 rounded-3xl"
              data-alt="A warm, inviting living room interior of a high-end luxury adult family home. Sunlight streams through large windows, illuminating plush, comfortable seating arrangements in soft creams and warm blues. A senior woman and a caregiver sit together on a sofa, engaged in a gentle, warm conversation. The atmosphere is serene, dignified, and comforting, reflecting a premium healthcare luxury aesthetic with soft, natural lighting."
              src="/images/home.jpg"
              fill
            />
          </div>
          <div className="absolute -bottom-8 -left-8  p-6 rounded-2xl shadow-[0_20px_40px_rgba(37,48,107,0.04)] bg-white/70 backdrop-blur-md border border-[rgba(219,228,255,0.5)] z-20 ">
            <p className="font-display font-semibold text-2xl text-secondary">
              24/7 Care
            </p>
            <p className="text-xs text-on-surface-variant">
              Round-the-clock support
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 120"
            className="relative block w-full h-30"
            preserveAspectRatio="none"
          >
            <path
              fill="white"
              d="
                M0,60
                C120,20 240,100 360,60
                C480,20 600,100 720,60
                C840,20 960,100 1080,60
                C1200,20 1320,100 1440,60
                L1440,120
                L0,120
                Z
                "
            />
          </svg>
        </div>
      </section>

      <section>
        <CarePhilosophySection />
      </section>

      <section>
        <Pillars />
      </section>

      <section>
        {/* <AboutServices /> */}
        <AboutServices />
      </section>
    </div>
  );
};

export default AboutPage;
