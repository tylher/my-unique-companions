import CTAButton from "@/components/ui/CTAButton";
import GalleryCard from "@/components/ui/GalleryCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { homeGallery } from "@/data/features";
import { MdArrowForward } from "react-icons/md";

export default function HomeGallerySection() {
  return (
    <section className="px-7 py-10 md:px-16 md:py-16">
      <div className="max-w-container-max mx-auto text-center">
        <SectionHeader
          eyebrow={homeGallery.eyebrow}
          title={homeGallery.title}
          className="mb-12"
        />

        <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-2 lg:grid-cols-4">
          {homeGallery.images.map((image) => (
            <GalleryCard
              key={image.id}
              image={image}
              overlayText={image.overlayText}
            />
          ))}
        </div>

        <CTAButton className="bg-primary px-8 py-4 text-white" href="/gallery">
          {homeGallery.buttonText}

          <span className="material-symbols-outlined ml-2 text-lg">
            <MdArrowForward />
          </span>
        </CTAButton>
      </div>
    </section>
  );
}
