import Link from "next/link";
import Mark from "./Mark";

export default function Footer() {
  return (
    <footer className="bg-forest-900 text-cream-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <Mark />
            <span className="font-display text-lg font-medium text-cream-50">
              Ulysses Private College
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-forest-100/80">
            24 Olubunmi Johnson Street, Fagbile Estate (Phase 1), Ijegun,
            Ikotun, Lagos, Nigeria.
          </p>
        </div>

        <div>
          <div className="eyebrow text-forest-100/60">Explore</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-gold-400">About us</Link></li>
            <li><Link href="/academics" className="hover:text-gold-400">Academics</Link></li>
            <li><Link href="/admissions" className="hover:text-gold-400">Admissions</Link></li>
            <li><Link href="/news" className="hover:text-gold-400">News and events</Link></li>
          </ul>
        </div>

        <div>
          <div className="eyebrow text-forest-100/60">Contact</div>
          <ul className="mt-4 space-y-2 text-sm text-forest-100/80">
            <li>0803 727 0102</li>
            <li>0704 259 7572</li>
            <li>info@ulyssesprivatecollege.com</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-forest-700/60 px-6 py-5 text-center text-xs text-forest-100/60">
        © {new Date().getFullYear()} Ulysses Private College. All rights reserved.
      </div>
    </footer>
  );
}
