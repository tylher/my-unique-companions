import FamilyExpectation from "@/components/home/FamilyExpectation";
import FamilyTrust from "@/components/home/FamilyTrust";
import Image from "next/image";
import { MdArrowForward } from "react-icons/md";

const HomePage = () => {
  return (
    <section className="">
      <div className="min-h-screen relative w-full flex items-center">
        <div className="h-screen absolute w-full">
          <Image
            src={"/images/adult-moms.jpg"}
            alt="Home"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-linear-to-tr from-gray-300/80 to-gray-700/5  z-10" />

        <div className="z-30 relative mt-10 px-8 w-3/5 font-display flex flex-col gap-4">
          <h1 className="text-[46px] text-primary font-bold leading-tight">
            A Place That Feels Like Home.
            <br />
            <span className="text-primary/80 opacity-95 py-0.5">
              Care That Feels Like Family.
            </span>
          </h1>
          <p className="font-body text-gray-800 font-medium max-w-xl text-lg">
            Compassionate, personalized adult family home care designed to
            support dignity, independence, comfort, and meaningful connection
            every day. Experience a setting that prioritizes warmth over
            clinical routine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-primary px-8 py-3 font-script text-sm inline-flex justify-center items-center rounded-2xl text-white shadow-[0_4px_12px_rgba(37,48,107,0.15)] transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(37,48,107,0.25)]">
              Schedule a Visit
              <span className="material-symbols-outlined ml-2 text-lg">
                <MdArrowForward />
              </span>
            </button>
            <button className="border-2 border-secondary px-8 py-3 font-script text-sm inline-flex justify-center items-center rounded-2xl text-white transition-all duration-300 ease-in-out hover:bg-[rgba(227,94,37,0.05)]">
              Learn About Our Care
            </button>
          </div>
        </div>
      </div>

      <div className="w-full z-40">
        <FamilyTrust />
      </div>

      <div className="w-full z-40">
        <FamilyExpectation />
      </div>
    </section>
  );
};

export default HomePage;
