import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import "material-symbols/outlined.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Mush & Co. | The Luxury of Giving",
  description: "Handmade Luxury — Artisanship in every stitch",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorantGaramond.variable} ${montserrat.variable} bg-background-light dark:bg-background-dark text-brand-brown dark:text-background-light font-sans transition-colors duration-300`}
      >
        {children}
      </body>
    </html>

  );
}
