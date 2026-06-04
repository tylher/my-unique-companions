import Image from "next/image";
import { IoIosHeart } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-primary px-20 text-white  pt-10 ">
      <div className="flex gap-32 items-start mb-10">
        <div className="w-1/3 flex flex-col gap-4">
          <div
            className="
              relative
              w-40 h-40
              rounded-full
              flex items-center justify-center
              bg-linear-to-br from-white via-gray-50 to-gray-200
              border border-white/70
              shadow-[0_10px_30px_rgba(0,0,0,0.15),inset_0_2px_8px_rgba(255,255,255,0.9)]
              backdrop-blur-sm
            "
          >
            {/* Highlight */}
            <div className="absolute top-4 left-6 w-16 h-6 rounded-full bg-white/70 blur-md" />

            <Image
              src="/images/Unique-Companions-Logo.png"
              alt="Unique Companions AFH"
              className="object-contain"
              width={110}
              height={50}
            />
          </div>
          <div className="flex items-center text-gray-300 gap-2">
            <span className="text-secondary">
              <IoIosHeart />
            </span>
            <p>Compassionate care, exceptional living</p>
            <span className="text-secondary">
              <IoIosHeart />
            </span>
          </div>
        </div>

        <div>
          <h2 className="font-semibold text-xl">Contact</h2>
        </div>
      </div>

      <div className="border-t border-gray-400 flex justify-center items-center py-4">
        <p className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Unique Companions AFQ. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
