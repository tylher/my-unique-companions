import { memoryCareItems } from "@/data/features";

export default function MemoryCareSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#25306b] py-16"
      id="memory-care"
    >
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[500px] h-[500px] bg-[#fd7137]/30 rounded-full blur-[150px]" />
      </div>

      <div className="relative container mx-auto px-10">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <p className="tracking-[0.2em] text-[#fd7137] font-semibold">
              SPECIALIST CARE
            </p>

            <h2 className="mt-6 text-5xl font-serif text-white">
              Compassionate Memory Care & Developmental Support
            </h2>

            <p className="mt-6 italic text-[#bac3ff] text-xl font-serif">
              A calm, predictable environment where every resident feels safe
              and understood.
            </p>

            <p className="mt-8 text-[#bac3ff] leading-relaxed">
              We provide attentive support for residents experiencing
              memory-related challenges and developmental disabilities, creating
              an environment built on familiarity, patience, consistency and
              respect.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-5 top-8 bottom-8 w-[2px] bg-[#fd7137]" />

            <div className="space-y-10">
              {memoryCareItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="relative flex gap-6">
                    <div className="relative z-10 w-12 h-12 rounded-xl bg-[#dee0ff] flex items-center justify-center">
                      <Icon size={20} className="text-[#25306b]" />
                    </div>

                    <div>
                      <h3 className="text-white font-semibold text-lg">
                        {item.title}
                      </h3>

                      <p className="text-[#bac3ff] mt-2">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <blockquote className="mt-24 text-center font-serif italic text-3xl text-[#dee0ff]">
          “Our goal is to help every resident feel safe, understood, and at
          peace.”
        </blockquote>
      </div>
    </section>
  );
}
