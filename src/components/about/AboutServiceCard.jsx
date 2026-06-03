export default function AboutServiceCard({ title, description, icon: Icon }) {
  return (
    <div
      className="
        group
        relative
        rounded-3xl
        bg-white
        p-6
        border border-outline-variant

        shadow-[0_10px_15px_rgba(0,0,0,0.05),0_25px_50px_rgba(37,48,107,0.08)]

        transition-all
        duration-300
        ease-in-out

        transform-[perspective(1200px)_rotateX(0deg)_rotateY(0deg)]

        hover:-translate-y-2
        hover:transform-[perspective(1200px)_rotateX(4deg)_rotateY(-6deg)]
        hover:shadow-[0_20px_25px_rgba(0,0,0,0.08),0_40px_80px_rgba(37,48,107,0.12)]

        hover:border-secondary-container
      "
    >
      <div className="mb-2">
        <Icon className="text-secondary text-3xl" />
      </div>

      <h3 className="text-[18px] font-medium text-primary mb-2">{title}</h3>

      <p className="text-[14px] text-on-surface-variant leading-relaxed">
        {description}
      </p>
    </div>
  );
}
