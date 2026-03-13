import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elyainternational.com"),
  title: "Elya International | Global Export Company",
  description:
    "Elya International exports high quality goods including spices, agricultural products, textiles, and industrial materials to global markets.",
  keywords: [
    "export company",
    "global export",
    "spices export",
    "agricultural export",
    "textile export",
    "Elya International",
    "India export",
    "Kerala spices",
  ],
  authors: [{ name: "Elya International LLP" }],
  openGraph: {
    title: "Elya International | Global Export Company",
    description:
      "Elya International exports high quality goods including spices, agricultural products, textiles, and industrial materials to global markets.",
    url: "https://elyainternational.com",
    siteName: "Elya International",
    images: [
      {
        url: "/elya-logo.png",
        width: 512,
        height: 512,
        alt: "Elya International Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elya International | Global Export Company",
    description:
      "Elya International exports high quality goods including spices, agricultural products, textiles, and industrial materials to global markets.",
    images: ["/elya-logo.png"],
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Elya International LLP",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Pottakuzhi, Pattom P.O",
    addressLocality: "Trivandrum",
    addressRegion: "Kerala",
    addressCountry: "India",
  },
  telephone: ["+919567712264", "+919847721964"],
  email: "elyainternationalllp@gmail.com",
  url: "https://elyainternational.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
