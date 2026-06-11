import { memoryCareItems } from "@/data/features";

export default function MemoryCareSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#25306b] py-12 md:py-16"
      id="memory-care"
    >
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-64 h-64 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] bg-[#fd7137]/30 rounded-full blur-[150px]" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-20">
          {/* Left — intro copy */}
          <div>
            <p className="tracking-[0.2em] text-[#fd7137] font-semibold text-sm sm:text-base">
              SPECIALIST CARE
            </p>
            <h2 className="mt-4 md:mt-6 text-3xl sm:text-4xl md:text-5xl font-serif text-white leading-tight">
              Compassionate Memory Care & Developmental Support
            </h2>
            <p className="mt-4 md:mt-6 italic text-[#bac3ff] text-lg md:text-xl font-serif">
              A calm, predictable environment where every resident feels safe
              and understood.
            </p>
            <p className="mt-6 md:mt-8 text-[#bac3ff] leading-relaxed text-sm sm:text-base">
              We provide attentive support for residents experiencing
              memory-related challenges and developmental disabilities, creating
              an environment built on familiarity, patience, consistency and
              respect.
            </p>
          </div>

          {/* Right — timeline items */}
          <div className="relative">
            <div className="absolute left-5 top-8 bottom-8 w-[2px] bg-[#fd7137]" />
            <div className="space-y-8 md:space-y-10">
              {memoryCareItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="relative flex gap-4 md:gap-6"
                  >
                    <div className="relative z-10 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#dee0ff] flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-[#25306b]" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-base md:text-lg">
                        {item.title}
                      </h3>
                      <p className="text-[#bac3ff] mt-1 md:mt-2 text-sm sm:text-base">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <blockquote className="mt-16 md:mt-24 text-center font-serif italic text-xl sm:text-2xl md:text-3xl text-[#dee0ff] px-4">
          "Our goal is to help every resident feel safe, understood, and at
          peace."
        </blockquote>
      </div>
    </section>
  );
}
