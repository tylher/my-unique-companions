const ContactInfoItem = ({
  icon: Icon,
  title,
  content,
  link,
  text,
  subtitle,
}) => {
  return (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary shrink-0">
        <span className="material-symbols-outlined">
          <Icon />
        </span>
      </div>

      <div>
        <h4 className="font-script font-semibold text-on-surface mb-1">
          {title}
        </h4>

        <div className="font-body text-on-surface-variant">
          {content}

          {link && text && (
            <>
              <a href={link} className="hover:text-primary transition-colors">
                {text}
              </a>

              {subtitle && (
                <>
                  <br />
                  <span className="text-sm opacity-80">{subtitle}</span>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactInfoItem;
