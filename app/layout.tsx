import type { Metadata } from "next";
import { Bellefair, Barlow_Condensed, Barlow } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const bellefair = Bellefair({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bellefair",
  display: "swap",
});

const barlow_condensed = Barlow_Condensed({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const barlow = Barlow({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Space tourisim app",
  description: "Built by John paul larkin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${barlow_condensed.variable} ${bellefair.variable} ${barlow.variable}`}
    >
      <body className="relative z-[0] bg-black font-barlow text-white ">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
