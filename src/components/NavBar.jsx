import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="">
      <ul className="flex items-center justify-between gap-10 font-medium text-primary">
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/careers">Careers</Link>
        </li>
        <li>
          <Link href="/resources">Resources</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
