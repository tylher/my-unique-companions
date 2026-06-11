const ResidentRightCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-5 sm:p-6 shadow-xl flex flex-col items-start border border-outline-variant/20 hover:border-secondary-container/50 transition-colors duration-300">
      <div className="bg-primary-fixed w-10 sm:w-12 h-10 sm:h-12 rounded-full flex items-center justify-center mb-4">
        <Icon className="text-primary text-lg sm:text-xl" />
      </div>

      <h3 className="font-display font-semibold text-lg sm:text-xl text-primary mb-2">
        {title}
      </h3>

      <p className="font-body text-sm sm:text-base text-on-surface-variant">
        {description}
      </p>
    </div>
  );
};

export default ResidentRightCard;
