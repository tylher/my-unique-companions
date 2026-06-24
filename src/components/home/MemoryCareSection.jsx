import CTAButton from "@/components/ui/CTAButton";
import ChipList from "@/components/ui/ChipList";
import SectionHeader from "@/components/ui/SectionHeader";
import { memoryCareData } from "@/data/features";
import { MdArrowForward } from "react-icons/md";

export default function MemoryCareSection() {
  return (
    <section className="bg-white px-7 py-10 md:px-16 md:py-12">
      <div className="max-w-container-max mx-auto flex flex-col items-center text-center">
        <SectionHeader
          eyebrow={memoryCareData.eyebrow}
          title={memoryCareData.title}
          className="max-w-3xl mb-6"
        />

        <p className="font-body text-on-surface-variant max-w-2xl mb-10">
          {memoryCareData.description}
        </p>

        <div className="mb-12 font-script text-sm font-medium">
          <ChipList items={memoryCareData.tags} />
        </div>

        <CTAButton className="bg-[#fd7137] px-8 py-3 text-white shadow-secondary-container/20" href="/services#memory-care">
          {memoryCareData.buttonText}

          <span className="material-symbols-outlined ml-2 text-lg">
            <MdArrowForward />
          </span>
        </CTAButton>
      </div>
    </section>
  );
}
