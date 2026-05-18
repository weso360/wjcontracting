import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "WJ Contracting | Building & Cleaning Contractors Oxfordshire",
    template: "%s | WJ Contracting"
  },
  description:
    "WJ Contracting provide high quality building and cleaning services for domestic and commercial customers across Oxfordshire and surrounding areas."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body className="font-sans antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
