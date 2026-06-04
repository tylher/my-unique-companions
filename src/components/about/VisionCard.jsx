const VisionCard = ({ title, description, icon: Icon }) => {
  return (
    <div
      className="
        relative
        w-60
        rounded-2xl
        bg-white
        border border-primary-fixed
        overflow-hidden
        shadow-[0_10px_30px_rgba(37,48,107,0.05)]
        transition-all
        duration-300
        hover:-translate-y-2
      "
    >
      <div className="h-2 bg-primary-fixed" />

      <div className="p-6">
        <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center mb-5">
          <Icon className="text-primary-container text-2xl" />
        </div>

        <h3 className="font-display text-2xl text-primary mb-3 font-semibold">
          {title}
        </h3>

        <p className="text-on-surface-variant leading-relaxed font-medium font-body">
          {description}
        </p>
      </div>
    </div>
  );
};

export default VisionCard;
