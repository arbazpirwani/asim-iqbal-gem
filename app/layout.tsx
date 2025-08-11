import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Asim Iqbal Gem - Timeless Elegance, Crafted to Perfection",
  description: "Discover exquisite jewelry pieces crafted with precision and passion. From timeless classics to contemporary designs.",
  keywords: "jewelry, luxury, diamonds, gems, handcrafted, Asim Iqbal",
  openGraph: {
    title: "Asim Iqbal Gem",
    description: "Timeless Elegance, Crafted to Perfection",
    type: "website",
    locale: "en_US",
    url: "https://asimiqbalgem.com",
    siteName: "Asim Iqbal Gem",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
