import { IoIosHeart } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-primary px-20 text-white rounded-t-[50px] pt-10 ">
      <div className="flex gap-32 items-start mb-10">
        <div className="w-1/3 flex flex-col gap-4">
          <h1 className="text-4xl font-extrabold font-display">
            Unique Companions AFQ
          </h1>

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
