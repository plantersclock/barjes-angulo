import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import TopNav from "./components/navs/TopNav";
import Footer from "./components/navs/Footer";

const eloquiaDisplay = localFont({
  src: [
    {
      path: "../public/fonts/EloquiaDisplay-Hairline.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/EloquiaDisplay-HairlineItalic.otf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../public/fonts/EloquiaDisplay-Thin.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/EloquiaDisplay-ThinItalic.otf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../public/fonts/EloquiaDisplay-ExtraLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/EloquiaDisplay-ExtraLightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/EloquiaDisplay-Light.otf",
      weight: "350",
      style: "normal",
    },
    {
      path: "../public/fonts/EloquiaDisplay-LightItalic.otf",
      weight: "350",
      style: "italic",
    },
    {
      path: "../public/fonts/EloquiaDisplay-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/EloquiaDisplay-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/EloquiaDisplay-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/EloquiaDisplay-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/EloquiaDisplay-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/EloquiaDisplay-SemiBoldItalic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/fonts/EloquiaDisplay-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/EloquiaDisplay-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/EloquiaDisplay-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/EloquiaDisplay-ExtraBoldItalic.otf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../public/fonts/EloquiaDisplay-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/EloquiaDisplay-BlackItalic.otf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-eloquia-display",
});

const eloquiaText = localFont({
  src: [
    {
      path: "../public/fonts/EloquiaText-ExtraLight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/EloquiaText-ExtraLightItalic.otf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../public/fonts/EloquiaText-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/EloquiaText-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/EloquiaText-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/EloquiaText-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/EloquiaText-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/EloquiaText-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/EloquiaText-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/EloquiaText-SemiBoldItalic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/fonts/EloquiaText-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/EloquiaText-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/EloquiaText-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/EloquiaText-ExtraBoldItalic.otf",
      weight: "800",
      style: "italic",
    },
  ],
  variable: "--font-eloquia-text",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://barjes-angulo.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Barjes Angulo",
  description:
    "Whether you're approaching retirement or just preparing for whatever comes next, your money should support the life you've always envisioned.",
  openGraph: {
    title: "Barjes Angulo",
    description:
      "Whether you're approaching retirement or just preparing for whatever comes next, your money should support the life you've always envisioned.",
    url: siteUrl,
    siteName: "Barjes Angulo",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Barjes Angulo - Financial Advisor",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Barjes Angulo",
    description:
      "Whether you're approaching retirement or just preparing for whatever comes next, your money should support the life you've always envisioned.",
    images: ["/og-image.png"],
  },
  other: {
    "apple-mobile-web-app-title": "Barjes Angulo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${eloquiaDisplay.variable} ${eloquiaText.variable} antialiased`}
      >
        {/* Navigation */}
        <TopNav />

        {/* Main content */}
        <main>{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
