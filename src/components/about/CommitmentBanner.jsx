const CommitmentBanner = () => {
  return (
    <section className="relative bg-primary/90 py-12 md:py-16 overflow-hidden">
      <div className="absolute top-0 right-0 w-48 h-48 md:w-125 md:h-125 bg-[#e35e25] opacity-10 blur-[180px]" />
      <div className="relative max-w-5xl mx-auto text-center px-4 sm:px-6">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-8 md:mb-12 leading-tight">
          We care for each person as we would our own family.
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 text-[#dbdef2] mb-8 md:mb-12 text-sm sm:text-base">
          <span>Compassion</span>
          <span className="w-2 h-2 rounded-full bg-[#e35e25]" />
          <span>Trust</span>
          <span className="w-2 h-2 rounded-full bg-[#e35e25]" />
          <span>Respect</span>
          <span className="w-2 h-2 rounded-full bg-[#e35e25]" />
          <span>Connection</span>
          <span className="w-2 h-2 rounded-full bg-[#e35e25]" />
          <span>Dignity</span>
        </div>
        <button
          className="
            bg-[#e35e25]
            text-white
            px-8
            py-4
            rounded-full
            font-medium
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-xl
            w-full sm:w-auto
          "
        >
          Get in Touch
        </button>
      </div>
    </section>
  );
};

export default CommitmentBanner;
