const CommitmentBanner = ()=>{
    return (
      <section className="relative bg-[#0d1955] py-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#e35e25] opacity-10 blur-[180px]" />

        <div className="relative max-w-5xl mx-auto text-center px-6">
          <h2 className="font-display text-6xl text-white mb-12">
            We care for each person as we would our own family.
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-4 text-[#bac3ff] mb-12">
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
      "
          >
            Get in Touch
          </button>
        </div>
      </section>
    );
}

export default CommitmentBanner;