import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const links = [
    { to: "/", label: "HOME" },
    { to: "/about", label: "ABOUT" },
    { to: "/services", label: "JOURNAL" },
    { to: "/projects", label: "WORK" },
    { to: "/contact", label: "CONTACT" },
  ] as const;

  return (
    <header className="absolute top-0 left-0 z-50 flex w-full items-center justify-between px-8 py-6">
      <div className="flex items-center gap-3">
        <Image
          alt="Montek Logo"
          className="h-48 w-64"
          src="/logo.webp"
          width={256}
          height={192}
        />
      </div>

      <nav className="hidden items-center gap-8 md:flex">
        {links.map(({ to, label }) => (
          <Link
            className="group flex items-center gap-2 font-medium text-white/80 text-xs uppercase tracking-widest transition-colors hover:text-white"
            href={to}
            key={to}
          >
            <span className="h-px w-3 bg-transparent transition-colors duration-300 group-hover:bg-white" />
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
