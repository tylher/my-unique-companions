import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="flex items-center justify-between py-4 w-full px-8 bg-transparent">
      <h1 className="text-2xl font-bold font-body w-1/5">
        Unique Companions AFQ
      </h1>
      <NavBar />

      <button className="text-white font-bold bg-primary py-2 px-4 rounded-2xl">
        Schedule a visit
      </button>
    </header>
  );
};

export default Header;
