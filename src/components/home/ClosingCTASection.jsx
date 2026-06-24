import CTAButton from "@/components/ui/CTAButton";
import { closingCTAData } from "@/data/features";

export default function ClosingCTASection() {
  return (
    <section className="relative overflow-hidden bg-primary/90 px-7 py-16 md:px-20">
      <div className="absolute left-1/2 top-1/2 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary-container/20 blur-[100px]" />

      <div className="relative z-10 max-w-container-max mx-auto flex flex-col items-center text-center">
        <h2 className="font-display font-semibold text-3xl text-white mb-3 max-w-4xl">
          {closingCTAData.title}
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-4 font-script font-medium text-inverse-primary">
          {closingCTAData.values.map((value, index) => (
            <div key={value} className="flex items-center gap-4">
              <span>{value}</span>

              {index < closingCTAData.values.length - 1 && (
                <span className="w-2 h-2 rounded-full bg-secondary-container" />
              )}
            </div>
          ))}
        </div>

        <CTAButton
          className="bg-secondary-container px-10 py-3  text-white shadow-secondary-container/30 font-body font-medium"
          href={"/contact"}
        >
          {closingCTAData.buttonText}
        </CTAButton>
      </div>
    </section>
  );
}
