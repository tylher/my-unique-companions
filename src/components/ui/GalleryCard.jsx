import Image from "next/image";

export default function GalleryCard({ image, overlayText }) {
  return (
    <div
      className={`h-64 rounded-3xl overflow-hidden premium-shadow relative ${
        overlayText ? "group cursor-pointer" : ""
      }`}
    >
      <Image src={image.src} alt={image.alt} fill className="object-cover" />

      {overlayText && (
        <div className="absolute inset-0 flex items-center justify-center bg-primary/70 transition-all group-hover:bg-primary/80">
          <span className="font-display text-white">{overlayText}</span>
        </div>
      )}
    </div>
  );
}
