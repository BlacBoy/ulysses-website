# Ulysses Private College — website

Next.js 14 (App Router) + Tailwind CSS. Pages: Home, About, Academics,
Admissions, News, Contact.

Brand colors are in `tailwind.config.ts` (`forest`, `cream`, `gold`, `ink`),
pulled from the school logo. Fonts: Fraunces (headings) + Inter (body).



# ROAD MAPS
## 1. Making the forms actually send email

The Admissions and Contact forms are currently static HTML — submitting
them does nothing yet.

## 2. Letting non-technical staff edit content (recommended next step)

Right now, News and event updates require editing code and pushing to
GitHub. To let school staff post updates without touching code, connect
a headless CMS
