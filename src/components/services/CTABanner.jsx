export default function CTABanner() {
  return (
    <section className="bg-surface-container-low py-10 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl text-primary leading-tight">
            Ready to Find the Right Care?
          </h2>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-on-surface-variant font-body">
            Choosing care for someone you love is a significant decision. We're
            here to answer questions, listen carefully, and help you find the
            best path forward.
          </p>
          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row justify-center gap-3 sm:gap-5">
            <button className="w-full sm:w-auto px-5 py-3 rounded-xl bg-primary-container text-white font-medium hover:bg-primary-container/90 text-sm sm:text-base">
              Schedule a Conversation
            </button>
            <button className="w-full sm:w-auto px-5 py-3 rounded-xl border-2 border-secondary-container text-secondary-container hover:font-medium hover:bg-secondary-container hover:text-white text-sm sm:text-base">
              Learn About Our Home
            </button>
          </div>
          <div className="mt-8 md:mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
            {[
              "WA State Licensed",
              "Personalized Plans",
              "24/7 Support",
              "Family Communication",
              "Dignified Care",
            ].map((item) => (
              <span
                key={item}
                className="bg-primary-fixed text-primary-container rounded-full px-3 py-1 font-script font-medium text-xs sm:text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
