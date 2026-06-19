"use client";
import ClosingCTASection from "@/components/home/ClosingCTASection";
import FamilyExpectation from "@/components/home/FamilyExpectation";
import FamilyTrust from "@/components/home/FamilyTrust";
import HomeGallerySection from "@/components/home/HomeGallerySection";
import MemoryCareSection from "@/components/home/MemoryCareSection";
import PromiseSection from "@/components/home/PromiseSection";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";

const HomePage = () => {
  // Animation variants — defined outside the component so they aren't recreated on every render
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.28, // delay between each child's animation start
        delayChildren: 0.2,
      },
    },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1], // smooth "ease-out-expo"-like curve
      },
    },
  };

  const buttonContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.65, // starts after the heading + paragraph have animated in
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  return (
    <section>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center ">
        {/* Background Image */}
        <Image
          src="/images/homeBg.jpg"
          alt="Home Background"
          fill
          priority
          className="object-cover
           object-[70%_10%]"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-15 z-10"></div>

        {/* Overlay */}
        <div
          className="absolute z-10 inset-0"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: 10,
            backgroundImage:
              "linear-gradient(to bottom right, rgba(209,220,255,0.4), rgba(55,65,81,0.1))",
          }}
        />

        {/* Content */}
        <div className="relative z-20 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-7">
          <motion.div
            className="md:max-w-4xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={fadeUpVariants}
              className="text-primary font-display font-bold leading-tight text-4xl  lg:text-6xl"
            >
              A Place That Feels Like Home.
              <br />
              <motion.span variants={fadeUpVariants} className="text-white">
                Care That Feels Like Family.
              </motion.span>
            </motion.h1>

            <motion.p
              variants={fadeUpVariants}
              className="mt-6 text-base font-body sm:text-xl text-primary font-medium max-w-2xl"
            >
              Compassionate, personalized adult family home care designed to
              support dignity, independence, comfort, and meaningful connection
              every day. Experience a setting that prioritizes warmth over
              clinical routine.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col sm:flex-row gap-4"
              variants={buttonContainerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={buttonVariants}>
                <Link
                  className="
                    bg-primary
                    px-8
                    py-3
                    text-white
                    rounded-2xl
                    inline-flex
                    items-center
                    justify-center
                    font-body
                    font-medium
                    shadow-[0_4px_12px_rgba(37,48,107,0.15)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_8px_20px_rgba(37,48,107,0.25)]
                  "
                  href="/contact"
                >
                  Schedule a Visit
                  <MdArrowForward className="ml-2 text-lg" />
                </Link>
              </motion.div>

              <motion.div variants={buttonVariants}>
                <Link
                  className="
                    border-2
                    border-secondary
                    text-secondary-container
                    px-8
                    py-3
                    rounded-2xl
                    inline-flex
                    items-center
                    justify-center
                    font-medium
                    transition-all
                    duration-300
                    font-body
                    hover:bg-secondary
                    hover:text-white
                    hover:shadow-lg
                  "
                  href={"/about"}
                >
                  Learn About Our Care
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
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

      <HomeGallerySection />

      <PromiseSection />

      <MemoryCareSection />

      <ClosingCTASection />
    </section>
  );
};

export default HomePage;
