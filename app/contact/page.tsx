export const metadata = { title: "Contact | Ulysses Private College" };

export default function Contact() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <span className="eyebrow text-forest-700">Contact</span>
      <h1 className="mt-3 font-display text-4xl font-medium text-forest-900">
        Get in touch
      </h1>

      <div className="mt-10 grid gap-10 sm:grid-cols-2">
        <div>
          <h2 className="font-display text-lg text-forest-900">School office</h2>
          <p className="mt-3 text-sm text-ink-700">
            24 Olubunmi Johnson Street,
            <br />
            Fagbile Estate (Phase 1), Ijegun,
            <br />
            Ikotun, Lagos, Nigeria
          </p>
          <p className="mt-4 text-sm text-ink-700">
            0803 727 0102
            <br />
            0704 259 7572
            <br />
            info@ulyssesprivatecollege.com
          </p>
        </div>
        <div className="aspect-video rounded-lg border border-forest-100 bg-white">
          <div className="flex h-full items-center justify-center px-6 text-center text-sm text-ink-500">
            Embed a Google Map of the school here.
          </div>
        </div>
      </div>

      <form className="mt-14 grid gap-4 rounded-lg border border-forest-100 bg-white p-6 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label className="text-sm font-medium text-ink-700" htmlFor="name">
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="mt-1 w-full rounded-md border border-forest-100 px-3 py-2 text-sm focus:border-forest-500 focus:outline-none"
          />
        </div>
        <div className="sm:col-span-1">
          <label className="text-sm font-medium text-ink-700" htmlFor="email">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="mt-1 w-full rounded-md border border-forest-100 px-3 py-2 text-sm focus:border-forest-500 focus:outline-none"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="text-sm font-medium text-ink-700" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="mt-1 w-full rounded-md border border-forest-100 px-3 py-2 text-sm focus:border-forest-500 focus:outline-none"
          />
        </div>
        <div className="sm:col-span-2">
          <button
            type="submit"
            className="rounded-md bg-forest-700 px-5 py-3 text-sm font-medium text-cream-50 transition hover:bg-forest-900"
          >
            Send message
          </button>
          <p className="mt-2 text-xs text-ink-500">
            This form needs a backend connection (see the README) before it
            will send messages.
          </p>
        </div>
      </form>
    </div>
  );
}
