import Image from "next/image";

const FamilyTrustFeatureCard = ({ title, description, iconSrc, iconAlt }) => {
  return (
    <div
      className="
        bg-surface
        p-6
        sm:p-8
        rounded-3xl
        shadow-[0_20px_40px_rgba(37,48,107,0.04)]
        card-hover-effect
        text-center
        flex
        flex-col
        items-center
        h-full
      "
    >
      <div className="w-16 h-16 flex items-center justify-center mb-4">
        <Image
          src={iconSrc}
          alt={iconAlt}
          width={40}
          height={40}
          className="object-contain"
        />
      </div>

      <h3 className="font-display text-primary font-semibold text-lg sm:text-xl mb-3">
        {title}
      </h3>

      <p className="font-body text-on-surface-variant text-sm sm:text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FamilyTrustFeatureCard;
