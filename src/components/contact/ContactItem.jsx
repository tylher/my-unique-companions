const ContactInfoItem = ({ icon: Icon, title, content, data, subtitle }) => {
  return (
    <div className="flex items-start gap-3 sm:gap-4">
      <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-surface-container flex items-center justify-center text-primary shrink-0">
        <Icon className="text-base sm:text-lg" />
      </div>

      <div className="min-w-0">
        <h4 className="font-script font-semibold text-sm sm:text-base text-on-surface mb-1">
          {title}
        </h4>

        <div className="font-body text-sm sm:text-base text-on-surface-variant break-words">
          {content}

          <div className="flex flex-wrap gap-0.5">
            {data &&
              data.length > 0 &&
              data.map((item, id) => {
                return (
                  <div>
                    <a
                      href={item.link}
                      key={id}
                      className="hover:text-primary transition-colors break-words"
                    >
                      {item.text}
                    </a>

                    {id != data.length - 1 && <span>,</span>}
                  </div>
                );
              })}
          </div>
          {subtitle && (
            <>
              <span className="text-xs sm:text-sm opacity-80">{subtitle}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactInfoItem;
