import Link from "next/link";
import Mark from "./Mark";

const links = [
  { href: "/about", label: "About" },
  { href: "/academics", label: "Academics" },
  { href: "/admissions", label: "Admissions" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-forest-100 bg-cream-50/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Mark />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg font-medium text-forest-900">
              Ulysses Private College
            </span>
            <span className="eyebrow text-forest-500">A.K.A. Pacesetter</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-700 transition hover:text-forest-700"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/admissions"
          className="rounded-md bg-forest-700 px-4 py-2 text-sm font-medium text-cream-50 transition hover:bg-forest-900"
        >
          Apply now
        </Link>
      </div>
    </header>
  );
}
