import FamilyExpectation from "@/components/home/FamilyExpectation";
import FamilyTrust from "@/components/home/FamilyTrust";
import Image from "next/image";
import { MdArrowForward } from "react-icons/md";

const HomePage = () => {
  return (
    <section>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/homeBg.jpg"
          alt="Home Background"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-300/80 to-gray-700/5 z-10" />

        {/* Content */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-0">
          <div className="max-w-4xl">
            <h1 className="text-primary font-bold leading-tight text-4xl sm:text-5xl lg:text-6xl">
              A Place That Feels Like Home.
              <br />
              <span className="text-primary/80">
                Care That Feels Like Family.
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-gray-800 font-medium max-w-2xl">
              Compassionate, personalized adult family home care designed to
              support dignity, independence, comfort, and meaningful connection
              every day. Experience a setting that prioritizes warmth over
              clinical routine.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                className="
                  bg-primary
                  px-8
                  py-3
                  text-white
                  rounded-2xl
                  inline-flex
                  items-center
                  justify-center
                  font-medium
                  shadow-[0_4px_12px_rgba(37,48,107,0.15)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_8px_20px_rgba(37,48,107,0.25)]
                "
              >
                Schedule a Visit
                <MdArrowForward className="ml-2 text-lg" />
              </button>

              <button
                className="
                  border-2
                  border-secondary
                  text-secondary
                  px-8
                  py-3
                  rounded-2xl
                  inline-flex
                  items-center
                  justify-center
                  font-medium
                  transition-all
                  duration-300
                  hover:bg-secondary
                  hover:text-white
                  hover:shadow-lg
                "
              >
                Learn About Our Care
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="relative z-20">
        <FamilyTrust />
      </section>

      {/* Expectations Section */}
      <section className="relative z-20">
        <FamilyExpectation />
      </section>
    </section>
  );
};

export default HomePage;
