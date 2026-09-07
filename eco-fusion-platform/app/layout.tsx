import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ZoneProvider } from "@/lib/contexts/ZoneContext";
import { UnitProvider } from "@/lib/contexts/UnitContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EcoFusion - Sustainable Agriculture Platform",
  description: "EcoFusion is an integrated platform for sustainable agriculture, aquaponics management, and agricultural education.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <UnitProvider>
          <ZoneProvider>
            {children}
          </ZoneProvider>
        </UnitProvider>
      </body>
    </html>
  );
}
