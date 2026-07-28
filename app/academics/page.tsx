const levels = [
  { name: "Junior secondary", detail: "JSS1 – JSS3" },
  { name: "Senior secondary", detail: "SS1 – SS3" },
];

const subjects = [
  "English language",
  "Mathematics",
  "Basic science",
  "Biology, chemistry, physics",
  "Economics, government, commerce",
  "Literature in English",
  "French",
  "Computer studies",
  "Civic education",
  "Agricultural science",
  "Fine art",
  "Physical and health education",
];

export const metadata = { title: "Academics | Ulysses Private College" };

export default function Academics() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <span className="eyebrow text-forest-700">Academics</span>
      <h1 className="mt-3 font-display text-4xl font-medium text-forest-900">
        A curriculum built for WAEC and NECO success
      </h1>
      <p className="mt-6 text-ink-700">
        Students progress from junior to senior secondary school, sitting
        for the West African Senior School Certificate Examination (WAEC)
        and the National Examinations Council (NECO) at the end of SS3.
        Replace this paragraph with details specific to the school&apos;s
        academic calendar and curriculum framework.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {levels.map((l) => (
          <div key={l.name} className="rounded-lg border border-forest-100 bg-white p-5">
            <h3 className="font-display text-lg text-forest-900">{l.name}</h3>
            <p className="mt-1 text-sm text-ink-500">{l.detail}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-14 font-display text-2xl font-medium text-forest-900">
        Subjects offered
      </h2>
      <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-ink-700 sm:grid-cols-3">
        {subjects.map((s) => (
          <li key={s} className="flex items-start gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
            {s}
          </li>
        ))}
      </ul>
      <p className="mt-6 text-xs text-ink-500">
        Replace this list with the school&apos;s confirmed subject offering.
      </p>

      <h2 className="mt-14 font-display text-2xl font-medium text-forest-900">
        Examination results
      </h2>
      <p className="mt-4 text-ink-700">
        Replace this section with recent WAEC/NECO pass rates or notable
        results, once confirmed.
      </p>
    </div>
  );
}
