import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/data/portfolio";
import { hasPublicFile } from "@/lib/assets";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = siteConfig.siteUrl ? new URL(siteConfig.siteUrl) : undefined;
const pageTitle = `${siteConfig.name} | ${siteConfig.role}`;

export const metadata = {
  ...(siteUrl ? { metadataBase: siteUrl } : {}),
  title: {
    default: pageTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Pranto Chandro",
    "full-stack developer",
    "frontend developer",
    "React developer",
    "Next.js developer",
    "portfolio",
    "Dhaka",
    "Bangladesh",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    title: pageTitle,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  const hasResume = hasPublicFile(siteConfig.resumePath);

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-ink-950 text-slate-300 antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-brand-400 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink-950"
        >
          Skip to content
        </a>

        <Navbar hasResume={hasResume} />

        <main id="main" className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
