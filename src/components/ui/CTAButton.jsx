import Link from "next/link";

export default function CTAButton({ children, className = "" ,href='#'}) {
  return (
    <Link
      className={`inline-flex items-center rounded-full transition-all hover:-translate-y-1 hover:shadow-lg ${className}`}
      href={href}
    >
      {children}
    </Link>
  );
}
