const PillarCard = ({
  title,
  description,
  icon: Icon,
  iconBg,
  iconColor,
  offset,
}) => {
  return (
    <div
      className={`
        group
        bg-white
        rounded-3xl
        p-8
        border border-[#DBE4FF]
        shadow-[0_20px_40px_rgba(37,48,107,0.04)]
        hover:-translate-y-3
        hover:scale-[1.02]
        hover:shadow-xl
        transition-all
        duration-500
        ${offset ? "lg:translate-y-8" : ""}
      `}
    >
      <div
        className={`
          w-12 h-12
          rounded-full
          flex items-center justify-center
          mb-6
          ${iconBg}
          ${iconColor}
          group-hover:scale-110
          transition-transform
          duration-300
        `}
      >
        <Icon size={24} />
      </div>

      <h3 className="text-2xl font-semibold text-primary mb-3">{title}</h3>

      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default PillarCard;
