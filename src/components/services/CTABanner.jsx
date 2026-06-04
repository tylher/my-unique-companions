export default function CTABanner() {
  return (
    <section className="bg-surface-container-low py-16">
      <div className="container mx-auto px-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-5xl text-primary">
            Ready to Find the Right Care?
          </h2>

          <p className="mt-6 text-lg text-on-surface-variant font-body">
            Choosing care for someone you love is a significant decision. We're
            here to answer questions, listen carefully, and help you find the
            best path forward.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">
            <button className="px-5 py-2 rounded-xl bg-primary-container text-white font-medium hover:bg-primary-container/90">
              Schedule a Conversation
            </button>

            <button className="px-5 py-2 rounded-xl border-2 border-secondary-container text-secondary-container hover:font-medium hover:bg-secondary-container hover:text-white">
              Learn About Our Home
            </button>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {[
              "WA State Licensed",
              "Personalized Plans",
              "24/7 Support",
              "Family Communication",
              "Dignified Care",
            ].map((item) => (
              <span
                key={item}
                className="bg-primary-fixed text-primary-container rounded-full px-3 py-1 font script font-medium text-sm"
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
