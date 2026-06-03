const ExpectationCard = ({ title, description, icon: Icon }) => {
  return (
    <div className="bg-surface border border-outline-variant/30 rounded-2xl p-8 shadow-premium card-hover-effect">
      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
        <span className="material-symbols-outlined text-primary text-2xl">
          <Icon />
        </span>
      </div>

      <h3 className="font-headline-sm text-primary mb-3">{title}</h3>

      <p className="font-body-md text-on-surface-variant">{description}</p>
    </div>
  );
};

export default ExpectationCard;
