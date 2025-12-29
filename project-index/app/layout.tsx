import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ThemeToggle from "./components/ThemeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mathew Belmont - Portfolio",
  description: "Personal coding projects and software work",
  keywords: ["Software Development", "Quality Assurance", "Test Automation", "Machine Learning", "Blockchain"],
  authors: [{ name: "Mathew Belmont" }],
  creator: "Mathew Belmont",
  openGraph: {
    title: "Mathew Belmont - Portfolio",
    description: "Personal coding projects and software work",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fef7ed" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1410" },
  ],
};

const themeScript = `
  (function() {
    const theme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    // Default to dark mode if no preference is set
    const shouldBeDark = theme === 'dark' || (theme !== 'light' && prefersDark);

    // Server renders with 'dark' class by default, so only change if we need light mode
    if (!shouldBeDark) {
      document.documentElement.classList.remove('dark');
    }
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script id="theme-script" strategy="beforeInteractive">
          {themeScript}
        </Script>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-retro-brown focus:text-retro-cream dark:focus:bg-retro-cream dark:focus:text-retro-brown focus:rounded-lg focus:font-medium"
        >
          Skip to main content
        </a>
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
