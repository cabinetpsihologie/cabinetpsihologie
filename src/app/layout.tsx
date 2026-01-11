import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Slowly Glowing | Professional Wedding Photography in Hungary",
  description:
    "Capture your special moments with artistic vision and timeless elegance. Professional wedding photography services in Hungary.",
  keywords:
    "wedding photography, Hungary wedding photographer, professional photography, wedding videography, Slowly Glowing",
  openGraph: {
    title: "Slowly Glowing | Professional Wedding Photography in Hungary",
    description:
      "Capture your special moments with artistic vision and timeless elegance",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Slowly Glowing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Slowly Glowing | Professional Wedding Photography in Hungary",
    description: "Professional wedding photography services in Hungary",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
        <Script id="calendly-init" strategy="afterInteractive">
          {`
    function initCalendly() {
      if (typeof Calendly !== "undefined") {
        Calendly.initBadgeWidget({
          url: 'https://calendly.com/cabinetpsihologiefeketeandrea/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=ffdeb3&text_color=000000&primary_color=5d8801',
          text: 'Foglalj időpontot',
          color: '#6B9B8A',
          textColor: '#000000',
          branding: true
        });
      } else {
        setTimeout(initCalendly, 300);
      }
    }
    initCalendly();
  `}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <SpeedInsights />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
