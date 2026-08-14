import Script from "next/script";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import WhatsAppBtn from "../components/WhatsAppBtn";
import PhoneBtn from "../components/PhoneBtn";
import { Inter, Arima } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });
const arima = Arima({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "معلم سيراميك بالرياض | معلم سيراميك ورخام في الرياض | تركيب سيراميك | تركيب رخام | تركيب ارضيات سيراميك",
  description: "خبرة اكثر من 10 سنوات في مجال تركيبات السيراميك والرخام للتواصل الاتصال على: 0569962482",
  keywords: ["معلم سيراميك بالرياض", "معلم بلاط", "تركييب بلاط", "تركيب بلاط وسيراميك", "تركيب بلاط في الرياض", "ارخص معلم في الرياض", "مبلط رخام و بلاط", "مبلط"],
  openGraph: {
    title: "معلم سيراميك بالرياض | معلم سيراميك ورخام في الرياض | تركيب سيراميك | تركيب رخام | تركيب ارضيات سيراميك",
    description: "خبرة اكثر من 10 سنوات في مجال تركيبات السيراميك والرخام للتواصل الاتصال على: 0569962482",
    phoneNumbers: ['966569962482', '966569962482', '966569962482'],
    siteName: "معلم سيراميك بالرياض | معلم سيراميك ورخام في الرياض | تركيب سيراميك | تركيب رخام | تركيب ارضيات سيراميك",
    tags: ["معلم سيراميك بالرياض", "معلم بلاط", "مبلط", "معلم بلاط بالرياض", "تركيب بلاط في الرياض", "تركيب بلاط و سيراميك", "ارخص مبلط في الرياض"],
  },
  formatDetection: { telephone: true },
  robots: { index: true, follow: true },
  referrer: 'origin',
  verification: {
    google: 'nhAv2U5msrOZrFZVywbNh4j0FcxDrFQDG9xoRia9JjQ',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className='scroll-smooth' style={{ scrollBehavior: 'smooth', position: 'relative' }}>
      <head>
      </head>
      <body className={arima.className}>
        <SpeedInsights />
        <Analytics />
        {children}
        <WhatsAppBtn />
        <PhoneBtn />
      </body>
    </html>
  );
}
