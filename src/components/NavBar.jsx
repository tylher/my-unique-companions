import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="">
      <ul className="flex items-center justify-between gap-10 font-medium text-primary">
        <li className="after:content-[''] relative cursor-pointer pb-1 transition-colors duration-250 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-secondary after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)] hover:after:scale-x-100 active:text-secondary">
          <Link href="/">Home</Link>
        </li>
        <li className="after:content-[''] relative cursor-pointer pb-1 transition-colors duration-250 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-secondary after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)] hover:after:scale-x-100 active:text-secondary">
          <Link href="/about">About</Link>
        </li>
        <li className="after:content-[''] relative cursor-pointer pb-1 transition-colors duration-250 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-secondary after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)] hover:after:scale-x-100 active:text-secondary">
          <Link href="/services">Services</Link>
        </li>
        <li className="after:content-[''] relative cursor-pointer pb-1 transition-colors duration-250 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-secondary after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)] hover:after:scale-x-100 active:text-secondary">
          <Link href="/careers">Careers</Link>
        </li>
        <li className="after:content-[''] relative cursor-pointer pb-1 transition-colors duration-250 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-secondary after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)] hover:after:scale-x-100 active:text-secondary">
          <Link href="/resources">Resources</Link>
        </li>
        <li className="after:content-[''] relative cursor-pointer pb-1 transition-colors duration-250 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-secondary after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)] hover:after:scale-x-100 active:text-secondary">
          <Link href="/resources">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
