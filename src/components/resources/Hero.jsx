import { MdSpa } from "react-icons/md";

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex flex-col text-center justify-center items-center w-full gap-4">
      <div className="flex gap-3 items-center mt-10 font-script text-sm font-medium text-on-secondary-fixed-variant bg-secondary-fixed rounded-3xl px-3 py-1">
        <MdSpa />
        <p>Family Welcome Packet</p>
      </div>

      <h2 className="font-display font-semibold text-6xl max-w-3xl text-primary ">
        Welcome To Your Extended Family
      </h2>
      <p className="font-body text-lg text-on-surface-variant max-w-3xl font-light">
        Welcome to Unique Companions AFH. We are honored that you have chosen us
        to be part of your loved one’s care journey. This packet is designed to
        help you understand who we are, what we provide, and how we partner with
        families to ensure every resident feels safe, respected, and truly at
        home.
      </p>
    </div>
  );
};

export default Hero;
