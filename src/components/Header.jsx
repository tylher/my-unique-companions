import Image from "next/image";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="flex items-center justify-between py-4 w-full px-8 bg-transparent">
      <div>
        <Image
          src="/images/Unique-Companions-Logo.png"
          alt="Unique Companions AFQ"
          className="object-cover"
          width={120}
          height={50}
        />
      </div>
      <NavBar />

      <button className="text-white font-bold bg-primary py-2 px-4 rounded-2xl">
        Schedule a visit
      </button>
    </header>
  );
};

export default Header;
