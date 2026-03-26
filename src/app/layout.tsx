import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { GoogleTagManager } from "@next/third-parties/google";
import { Toaster } from "sonner";

type Layout = {
  children: ReactNode;
};

const spaceGrotesk = Space_Grotesk({
  weight: ["400", "700"],
  display: "swap",
  subsets: ["latin"],
  variable: "--base-font",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://facu.dev/"),
  title: "Facundo Carbonel | Web Development",
  description: `I'm a Full-Stack TypeScript Developer and this is my web portfolio!`,
  icons: {
    icon: "/favicon.ico",
    apple: "/assets/images/logo192.png",
  },
  manifest: "/manifest.json",
  keywords: [
    "Facundo Carbonel",
    "Facundo",
    "Carbonel",
    "Dev",
    "Web Dev",
    "Full-Stack",
    "TypeScript Developer",
  ],
  creator: "F2BEAR",
  authors: [{ name: "F2BEAR", url: "https://github.com/F2BEAR" }],
  openGraph: {
    type: "website",
    title: "Facundo Carbonel | Web Development",
    description: `I'm a Full-Stack TypeScript Developer 🔥`,
    siteName: "facu.dev",
    url: "https://facu.dev/",
    images: [
      {
        url: "https://facu.dev/assets/images/logo192.png",
        width: 192,
        height: 192,
        alt: "Logo",
      },
      {
        url: "https://facu.dev/assets/images/logo512.png",
        width: 512,
        height: 512,
        alt: "Logo",
      },
    ],
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: Layout) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} flex flex-col items-center justify-center font-base text-white`}
      >
        <main className="bg-[#10131a] w-full blueprint-grid">{children}</main>
        <Footer />
        <Analytics mode="production" />
        <Toaster />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID ?? ""} />
    </html>
  );
}
