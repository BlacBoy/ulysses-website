import FormspreeForm from "@/components/FormspreeForm";

const steps = [
  { title: "Enquire", body: "Contact the school office by phone or the form below." },
  { title: "Assessment", body: "Sit for the entrance assessment at the school." },
  { title: "Offer", body: "Receive an admission decision and fee schedule." },
  { title: "Enrol", body: "Submit documents and complete registration." },
];

export const metadata = { title: "Admissions | Ulysses Private College" };

export default function Admissions() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <span className="eyebrow text-forest-700">Admissions</span>
      <h1 className="mt-3 font-display text-4xl font-medium text-forest-900">
        Join Ulysses Private College
      </h1>
      <p className="mt-6 text-ink-700">
        Admissions are open for the current academic session across JSS1 to
        SS3, subject to space and entrance assessment. Replace this
        paragraph with confirmed intake dates and any age or grade
        requirements.
      </p>

      <h2 className="mt-14 font-display text-2xl font-medium text-forest-900">
        How to apply
      </h2>
      <ol className="mt-6 grid gap-5 sm:grid-cols-2">
        {steps.map((s, i) => (
          <li key={s.title} className="rounded-lg border border-forest-100 bg-white p-5">
            <span className="font-display text-sm text-gold-700">
              Step {i + 1}
            </span>
            <h3 className="mt-1 font-display text-lg text-forest-900">
              {s.title}
            </h3>
            <p className="mt-1 text-sm text-ink-500">{s.body}</p>
          </li>
        ))}
      </ol>

      <h2 className="mt-14 font-display text-2xl font-medium text-forest-900">
        Required documents
      </h2>
      <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-ink-700">
        <li>Completed application form</li>
        <li>Birth certificate or age declaration</li>
        <li>Previous school report card / transcript</li>
        <li>Passport photographs</li>
        <li>Transfer or testimonial letter, where applicable</li>
      </ul>
      <p className="mt-4 text-xs text-ink-500">
        Confirm and adjust this list with the school registrar before
        publishing.
      </p>

      <h2 className="mt-14 font-display text-2xl font-medium text-forest-900">
        Enquire about admissions
      </h2>
      <FormspreeForm
        endpoint="https://formspree.io/f/mqernogo"
        subject="New admissions enquiry"
        className="mt-6 grid gap-4 rounded-lg border border-forest-100 bg-white p-6 sm:grid-cols-2"
      >
        <div className="sm:col-span-1">
          <label className="text-sm font-medium text-ink-700" htmlFor="parentName">
            Parent / guardian name
          </label>
          <input
            id="parentName"
            name="parentName"
            type="text"
            required
            className="mt-1 w-full rounded-md border border-forest-100 px-3 py-2 text-sm focus:border-forest-500 focus:outline-none"
          />
        </div>
        <div className="sm:col-span-1">
          <label className="text-sm font-medium text-ink-700" htmlFor="phone">
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="mt-1 w-full rounded-md border border-forest-100 px-3 py-2 text-sm focus:border-forest-500 focus:outline-none"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="text-sm font-medium text-ink-700" htmlFor="email">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-md border border-forest-100 px-3 py-2 text-sm focus:border-forest-500 focus:outline-none"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="text-sm font-medium text-ink-700" htmlFor="message">
            Class applying for / message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="mt-1 w-full rounded-md border border-forest-100 px-3 py-2 text-sm focus:border-forest-500 focus:outline-none"
          />
        </div>
        {/* Honeypot field: hidden from real visitors, catches simple spam bots */}
        <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
        <div className="sm:col-span-2">
          <button
            type="submit"
            className="rounded-md bg-forest-700 px-5 py-3 text-sm font-medium text-cream-50 transition hover:bg-forest-900"
          >
            Submit enquiry
          </button>
        </div>
      </FormspreeForm>
    </div>
  );
}
