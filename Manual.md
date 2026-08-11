# Ulysses Private College — website

Next.js 14 (App Router) + Tailwind CSS. Pages: Home, About, Academics,
Admissions, News, Contact.

Brand colors are in `tailwind.config.ts` (`forest`, `cream`, `gold`, `ink`),
pulled from the school logo. Fonts: Fraunces (headings) + Inter (body).

## Before you launch

Search the codebase for placeholder content and replace it:

```
grep -rn "Replace" app/
```

This covers: founding year, mission statement, leadership bios, exam
results, confirmed subject list, and required-document list. Also swap the
gray placeholder boxes for real photos (campus, students, events) — add
images to `/public` and reference them with `next/image`.

## 1. Run it locally

Requires Node.js 18.18+ (Node 20 recommended).

```bash
npm install
npm run dev
```

Visit http://localhost:3000. Edit any file in `app/` or `components/` —
changes hot-reload.

## 2. Push to GitHub

If you don't already have a repo:

```bash
cd ulysses-website
git init
git add .
git commit -m "Initial site"
```

Create a new empty repository on GitHub (github.com → New repository —
do NOT initialize it with a README, since you already have one). Then:

```bash
git remote add origin https://github.com/<your-username>/ulysses-website.git
git branch -M main
git push -u origin main
```

## 3. Deploy on Vercel

1. Go to vercel.com and sign in with your GitHub account.
2. Click "Add New… → Project".
3. Select the `ulysses-website` repo. Vercel auto-detects Next.js —
   leave the build settings on default (`next build`).
4. Click "Deploy". You'll get a live URL like
   `ulysses-website.vercel.app` within about a minute.

From now on, every `git push` to `main` auto-deploys. Pushes to other
branches get their own preview URL, so you can review changes before
merging.

## 4. Connect ulyssesprivatecollege.com

1. In the Vercel project, go to Settings → Domains → add
   `ulyssesprivatecollege.com` (and `www.ulyssesprivatecollege.com`).
2. Vercel shows the DNS records you need (usually an `A` record for the
   root domain and a `CNAME` for `www`).
3. In Namecheap: Domain List → Manage → Advanced DNS, and add the records
   Vercel gave you. Or, simpler: change Namecheap's nameservers to
   Cloudflare, then manage the same records in Cloudflare — this also
   gets you Cloudflare's free CDN/caching in front of Vercel, which helps
   load times in Nigeria.
4. DNS changes can take a few minutes to 24 hours to propagate. Vercel
   auto-issues a free SSL certificate once it verifies the domain.

## 5. Making the forms actually send email

The Admissions and Contact forms are currently static HTML — submitting
them does nothing yet. Two straightforward options:

- **Formspree** (formspree.io): create a free form endpoint, then set the
  form's `action` to that URL — no backend code needed.
- **Vercel API route + Resend**: create `app/api/contact/route.ts` that
  receives the POST and sends an email via resend.com's API. More setup,
  but keeps everything in your own codebase.

## 6. Letting non-technical staff edit content (recommended next step)

Right now, News and event updates require editing code and pushing to
GitHub. To let school staff post updates without touching code, connect
a headless CMS such as Sanity.io (free tier) — it gives a simple web
dashboard, and the Next.js app fetches content from it at build time.
Happy to scaffold this next if useful.

## Project structure

```
app/
  layout.tsx        global layout, fonts, metadata
  page.tsx           home page
  about/page.tsx
  academics/page.tsx
  admissions/page.tsx
  news/page.tsx
  contact/page.tsx
  globals.css
components/
  Header.tsx
  Footer.tsx
  Mark.tsx            logo mark (flask icon)
  WaveDivider.tsx      recurring wave motif between sections
```
