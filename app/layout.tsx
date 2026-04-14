import type { Metadata } from "next";
import { IBM_Plex_Sans, Space_Grotesk } from "next/font/google";

import "./globals.css";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { brandName, siteUrl } from "@/lib/site";

const heading = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${brandName} | Dispatch, Driver Workflow, Invoicing, and Pay`,
    template: `%s | ${brandName}`,
  },
  description:
    "FreightAxis is trucking software for dispatch, driver workflow, invoicing, pay statements, and customer management.",
  openGraph: {
    title: `${brandName} | Dispatch, Driver Workflow, Invoicing, and Pay`,
    description:
      "Run dispatch, driver workflow, invoicing, pay statements, and customer management from one modern freight platform.",
    url: siteUrl,
    siteName: brandName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${brandName} | Dispatch, Driver Workflow, Invoicing, and Pay`,
    description:
      "Modern trucking software for dispatch, drivers, invoicing, and driver pay statements.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body className="min-h-screen bg-graphite text-silver antialiased">
        <div className="relative flex min-h-screen flex-col">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(0,174,239,0.14),transparent_26%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_22%)]"
          />
          <SiteHeader />
          <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 pb-24 pt-10 sm:px-6 lg:px-8">
            {children}
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
