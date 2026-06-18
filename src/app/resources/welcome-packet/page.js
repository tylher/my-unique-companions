import Hero from "@/components/resources/Hero";
import MoveInRequirements from "@/components/resources/MoveInRequirements";
import OurPromiseToYou from "@/components/resources/OurPromiseToYou";
import ResidentRights from "@/components/resources/ResidentsRight";

const Resources = () => {
  return (
    <div className=" bg-[radial-gradient(circle_at_top_left,rgba(253,113,55,0.2),transparent_50%),radial-gradient(circle_at_bottom_right,rgba(13,25,85,0.2),transparent_40%)] bg-primary-fixed/20">
      <Hero />
      <OurPromiseToYou />
      <ResidentRights />
      <MoveInRequirements />
    </div>
  );
};

export default Resources;
