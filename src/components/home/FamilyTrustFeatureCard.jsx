import Image from "next/image";

const FamilyTrustFeatureCard = ({ title, description, iconSrc, iconAlt }) => {
  return (
    <div className="bg-surface p-8 rounded-4xl shadow-[0_20px_40px_rgba(37,48,107,0.04)] card-hover-effect text-center space-y-4 flex flex-col items-center">
      <div
        className={`w-16 h-16 rounded-full flex items-center justify-center mb-2`}
      >
        <Image
          src={iconSrc}
          alt={iconAlt}
          width={40}
          height={40}
          className="object-contain"
        />
      </div>

      <h3 className="font-display text-primary font-semibold text-xl">
        {title}
      </h3>

      <p className="font-body text-on-surface-variant font-medium text-sm">
        {description}
      </p>
    </div>
  );
};

export default FamilyTrustFeatureCard;
