import Link from "next/link";

const CommitmentBanner = () => {
  return (
    <section className="relative bg-primary/90 py-8 md:py-12 overflow-hidden">
      <div className="absolute top-0 right-0 w-48 h-48 md:w-100 md:h-100 bg-[#e35e25] opacity-10 blur-[180px]" />
      <div className="relative text-center px-4 sm:px-6">
        <h2 className="font-display text-2xl md:text-4xl lg:text-4xl md:max-w-3xl mx-auto text-white mb-4 leading-tight">
          We care for each person as we would our own family.
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 text-[#dbdef2] mb-4 text-sm ">
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
        <Link
          className="
            bg-[#e35e25]
            text-white
            px-8
            py-2
            rounded-full
            font-medium
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-xl
            w-full sm:w-auto
          "
        href={"/contact"}>
          Get in Touch
        </Link>
      </div>
    </section>
  );
};

export default CommitmentBanner;
