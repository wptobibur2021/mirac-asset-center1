import type { Metadata } from "next";
import "./globals.css";

// Slick Carousel CSS
import Footer from "@/components/partials/Footer/Footer";
import HeroSection from "@/components/partials/hero/HeroSection";
import Setting from "@/components/ui/Setting";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export const metadata: Metadata = {
  title: "Mirac Asset Center",
  description: "Create by next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans text-gray-900">
        <HeroSection />
        {children}
        <Setting />
        <Footer />
      </body>
    </html>
  );
}
