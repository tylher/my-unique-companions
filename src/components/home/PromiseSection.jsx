
import WaveSection from "@/components/ui/WaveSection";
import { promiseData } from "@/data/features";

export default function PromiseSection() {
  return (
    <WaveSection>
      <div className="relative z-10 max-w-4xl mx-auto px-7 md:px-16 text-center flex flex-col items-center">
        <div className="flex items-center space-x-4 mb-8">
          <div className="h-px w-12 bg-secondary-container" />

          <span className="font-script font-bold text-sm text-secondary-container uppercase tracking-widest">
            {promiseData.eyebrow}
          </span>

          <div className="h-px w-12 bg-secondary-container" />
        </div>

        <p className="font-display italic leading-tight mb-8">
          "{promiseData.quote}"
        </p>

        <p className="font-body text-inverse-primary max-w-2xl mb-8">
          {promiseData.description}
        </p>

        <div className="h-px w-24 bg-secondary-container/50" />
      </div>
    </WaveSection>
  );
}
