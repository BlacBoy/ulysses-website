const news = [
  {
    title: "2026/27 admissions now open",
    date: "Latest",
    body: "Applications for the new academic session are open across all classes, subject to entrance assessment.",
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
  {
    title: "Mid-term break notice",
    date: "Recent",
    body: "Replace with the school's actual calendar notices and event recaps.",
  },
];

export const metadata = { title: "News and events | Ulysses Private College" };

export default function News() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <span className="eyebrow text-forest-700">News and events</span>
      <h1 className="mt-3 font-display text-4xl font-medium text-forest-900">
        What&apos;s happening at Ulysses
      </h1>
      <p className="mt-6 text-ink-700">
        This page should be connected to a simple content system (see the
        README) so staff can post updates without editing code.
      </p>

      <div className="mt-10 space-y-6">
        {news.map((item) => (
          <article
            key={item.title}
            className="rounded-lg border border-forest-100 bg-white p-6"
          >
            <span className="eyebrow text-forest-500">{item.date}</span>
            <h2 className="mt-2 font-display text-xl text-forest-900">
              {item.title}
            </h2>
            <p className="mt-2 text-sm text-ink-700">{item.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
