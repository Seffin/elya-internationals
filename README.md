# Elya International — Global Export Landing Page

A modern, SEO-optimized landing page for **Elya International LLP**, a global export company based in Kerala, India.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Theming:** next-themes (light / dark / system)

## Features

- Responsive design (mobile-first)
- Dark / Light / System theme toggle
- SEO metadata with Open Graph & Twitter Cards
- LocalBusiness JSON-LD structured data
- Auto-generated sitemap & robots.txt
- Clickable contact links (phone, email, WhatsApp)
- Performance-optimized images via `next/image`

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/
  layout.tsx        # Root layout with SEO metadata & structured data
  page.tsx          # Homepage
  sitemap.ts        # Dynamic sitemap generation
  robots.ts         # Robots.txt configuration
  globals.css       # Global styles
components/
  Navbar.tsx        # Navigation bar
  Hero.tsx          # Hero section
  Products.tsx      # Product categories
  Features.tsx      # Why choose us
  Markets.tsx       # Global markets
  Process.tsx       # Export process
  Testimonials.tsx  # Client testimonials
  CTA.tsx           # Contact / Call to action
  Footer.tsx        # Footer with contact info
  ThemeToggle.tsx   # Theme switcher
  ThemeProvider.tsx  # Theme context provider
public/
  elya-logo.png     # Company logo
```

## Deployment

### Vercel (Recommended)

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click **"Add New Project"** → Import your GitHub repo
4. Framework will be auto-detected as **Next.js**
5. Click **Deploy**

### Environment Notes

- Replace `YOUR_GOOGLE_VERIFICATION_CODE` in `app/layout.tsx` with your actual Google Search Console verification code
- Update the domain in `sitemap.ts`, `robots.ts`, and `layout.tsx` metadata once your domain is finalized

## License

Private — Elya International LLP
