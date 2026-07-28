export const metadata = { title: "About | Ulysses Private College" };

const values = [
  { title: "Discipline", body: "Structure and consistency that build strong habits." },
  { title: "Excellence", body: "High expectations in and out of the classroom." },
  { title: "Character", body: "Honesty, respect and responsibility, modelled daily." },
  { title: "Community", body: "A close relationship between staff, students and parents." },
];

export default function About() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <span className="eyebrow text-forest-700">About us</span>
      <h1 className="mt-3 font-display text-4xl font-medium text-forest-900">
        Our story
      </h1>
      <p className="mt-6 text-ink-700">
        Ulysses Private College, popularly known as Pacesetter, is a private
        secondary school located at 24 Olubunmi Johnson Street, Fagbile
        Estate (Phase 1), Ijegun, Ikotun, Lagos. Replace this paragraph with
        the school&apos;s founding story, year established, and founder or
        proprietor information.
      </p>
      <p className="mt-4 text-ink-700">
        Replace this paragraph with the school&apos;s mission and vision
        statements.
      </p>

      <h2 className="mt-14 font-display text-2xl font-medium text-forest-900">
        What we stand for
      </h2>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {values.map((v) => (
          <div key={v.title} className="rounded-lg border border-forest-100 bg-white p-5">
            <h3 className="font-display text-lg text-forest-900">{v.title}</h3>
            <p className="mt-1 text-sm text-ink-500">{v.body}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-14 font-display text-2xl font-medium text-forest-900">
        Leadership
      </h2>
      <p className="mt-4 text-ink-700">
        Replace this section with a short profile of the proprietor,
        principal and/or vice principal, including names, photos and a
        short welcome message.
      </p>
    </div>
  );
}
