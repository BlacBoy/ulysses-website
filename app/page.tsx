import Link from "next/link";
import Image from "next/image";
import WaveDivider from "@/components/WaveDivider";
import Slideshow, { type Slide } from "@/components/Slideshow";

// Add your photos to /public/gallery, then list them here.
// Each `src` must match a filename in that folder exactly (case-sensitive).
const gallerySlides: Slide[] = [
  { src: "/gallery/campus-1.jpg", alt: "Ulysses Private College campus" },
  { src: "/gallery/campus-2.jpg", alt: "Students in class at Ulysses Private College" },
  { src: "/gallery/campus-3.jpg", alt: "Ulysses Private College students and staff" },
];

const quickLinks = [
  {
    title: "Admissions",
    body: "How to apply, entrance assessment and required documents.",
    href: "/admissions",
  },
  {
    title: "Academics",
    body: "Curriculum, subjects offered and examination results.",
    href: "/academics",
  },
  {
    title: "Student life",
    body: "Clubs, sports, and the values that shape our pacesetters.",
    href: "/about",
  },
  {
    title: "Contact us",
    body: "Visit, call or write to the school office.",
    href: "/contact",
  },
];

const facts = [
  { label: "Secondary levels", value: "JSS1 – SS3" },
  { label: "Location", value: "Ijegun, Ikotun, Lagos" },
  { label: "Examinations", value: "WAEC / NECO" },
  { label: "School type", value: "Private, day" },
];

const news = [
  {
    title: "2026/27 admissions now open",
    date: "Latest",
    body: "Applications for the new academic session are open. Entrance assessments hold on a rolling basis.",
  },
  {
    title: "Inter-house sports day",
    date: "Recent",
    body: "Students competed across track and field events as part of this term's inter-house competition.",
  },
  {
    title: "Science and innovation fair",
    date: "Recent",
    body: "Students presented independent projects at this term's school-wide science fair.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-forest-900">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <span className="eyebrow inline-block rounded-full border border-gold-400/50 px-3 py-1 text-gold-400">
              A.K.A. Pacesetter
            </span>
            <h1 className="mt-5 font-display text-4xl font-medium leading-tight text-cream-50 md:text-5xl">
              Building tomorrow&apos;s pacesetters, one lesson at a time.
            </h1>
            <p className="mt-5 max-w-md text-forest-100/85">
              Ulysses Private College is a private secondary school in
              Ijegun, Ikotun, Lagos, dedicated to academic excellence,
              discipline and character.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/admissions"
                className="rounded-md bg-gold-500 px-5 py-3 text-sm font-medium text-forest-900 transition hover:bg-gold-400"
              >
                Apply now
              </Link>
              <Link
                href="/about"
                className="rounded-md border border-cream-50/40 px-5 py-3 text-sm font-medium text-cream-50 transition hover:bg-cream-50/10"
              >
                Learn about us
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-cream-50/15 bg-forest-700/40">
            <Image
              src="/gallery/welcome.png"
              alt="Welcome to Ulysses Private College"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 576px"
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <WaveDivider fill="#faf8f2" />

      {/* Quick links */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4">
          {quickLinks.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-lg border border-forest-100 bg-white p-5 transition hover:border-forest-500 hover:shadow-sm"
            >
              <h3 className="font-display text-lg text-forest-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-ink-500">{item.body}</p>
              <span className="mt-4 inline-block text-sm font-medium text-forest-700 group-hover:text-gold-700">
                Read more →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* About snippet */}
      <section className="bg-forest-50">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2">
          <div className="order-2 relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-forest-100 bg-white md:order-1">
            <Image                
              src="/gallery/lab.png"
              alt="Lab room image"
              fill
              sizes="(max-width: 768px) 100vw, 576px"
              className="object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <span className="eyebrow text-forest-700">About us</span>
            <h2 className="mt-3 font-display text-3xl font-medium text-forest-900">
              A school built on discipline, curiosity and care.
            </h2>
            <p className="mt-4 text-ink-700">
              Ulysses Private College prepares students for WAEC and NECO
              examinations while nurturing the character, confidence and
              curiosity they will need beyond the classroom. Replace this
              paragraph with the school&apos;s actual history, mission
              statement and founding story.
            </p>
            <Link
              href="/about"
              className="mt-5 inline-block text-sm font-medium text-forest-700 hover:text-gold-700"
            >
              Read our full story →
            </Link>
          </div>
        </div>
      </section>

      {/* Fast facts */}
      <section className="bg-forest-900">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-14 text-center md:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label}>
              <div className="font-display text-xl text-gold-400">
                {fact.value}
              </div>
              <div className="mt-1 text-xs uppercase tracking-wide text-forest-100/70">
                {fact.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Campus life slideshow */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <span className="eyebrow text-forest-700">Campus life</span>
        <h2 className="mt-3 font-display text-3xl font-medium text-forest-900">
          A look around Ulysses
        </h2>
        <div className="mt-8">
          <Slideshow slides={gallerySlides} />
        </div>
      </section>

      {/* News */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-3xl font-medium text-forest-900">
            News and events
          </h2>
          <Link
            href="/news"
            className="text-sm font-medium text-forest-700 hover:text-gold-700"
          >
            View all →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {news.map((item) => (
            <article
              key={item.title}
              className="rounded-lg border border-forest-100 bg-white p-5"
            >
              <span className="eyebrow text-forest-500">{item.date}</span>
              <h3 className="mt-2 font-display text-lg text-forest-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-ink-500">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold-500">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-14 text-center">
          <h2 className="font-display text-3xl font-medium text-forest-900">
            Ready to join Ulysses Private College?
          </h2>
          <p className="max-w-lg text-forest-900/80">
            Applications for the current session are open. Start the
            admissions process today.
          </p>
          <Link
            href="/admissions"
            className="mt-2 rounded-md bg-forest-900 px-6 py-3 text-sm font-medium text-cream-50 transition hover:bg-forest-700"
          >
            Start your application
          </Link>
        </div>
      </section>
    </>
  );
}
