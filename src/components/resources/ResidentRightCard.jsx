const ResidentRightCard = ({ icon:Icon, title, description }) => {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-6 shadow-xl flex flex-col items-start border border-outline-variant/20 hover:border-secondary-container/50 transition-colors duration-300">
      <div className="bg-primary-fixed w-12 h-12 rounded-full flex items-center justify-center mb-4">
        <span className="material-symbols-outlined text-primary"><Icon/></span>
      </div>

      <h3 className="font-display font-semibold text-xl text-primary mb-2">
        {title}
      </h3>

      <p className="font-body  text-on-surface-variant">
        {description}
      </p>
    </div>
  );
};

export default ResidentRightCard;
