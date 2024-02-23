import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { NextUiProviders } from "./providers";
import NavbarComponent from "@/components/navbar/NavbarComponent";
import FooterBar from "@/components/footer/FooterBar";

const inter = Poppins({ subsets: ["devanagari"], weight: ["100", "200", "300", "600", "800", "900"] })

export const metadata: Metadata = {
  title: "Gourav Joshi",
  description: "Data scientist portfolio for coding and programming jobs and freelancing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={`${inter.className}`}>
        <NextUiProviders>
          <NavbarComponent />
          {children}
          <FooterBar />
        </NextUiProviders>
      </body>
    </html>
  );
}
