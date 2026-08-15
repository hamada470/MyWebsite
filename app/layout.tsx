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
  title: "تفصيل مغاسل رخام | طاولات رخام | تركيب رخام بالرياض",
  description: "افضل ورشة تفصيل مغاسل رخام وطاولات رخام طبيعي ومصناعي بالرياض، تركيب وجلي رخام بأعلى جودة للتواصل الاتصال على: 0569962482",
  keywords: [
    "تفصيل مغاسل رخام", "طاولات رخام", "تركيب رخام بالرياض", "مغاسل رخام بالرياض", "فني تركيب رخام", 
    "تفصيل طاولات رخام بالرياض", "معلم رخام الرياض", "رخام طبيعي الرياض", "رخام صناعي الرياض", "مغاسل رخام مودرن", 
    "مغاسل رخام فخمة", "تفصيل مغاسل فندقية", "طاولات رخام مجالس", "طاولات رخام طعام", "تفصيل طاولات حسب الطلب", 
    "تركيب واجهات رخام", "تركيب ارضيات رخام", "تركيب درج رخام", "جلي وتلميع رخام", "صيانة مغاسل رخام", 
    "اسعار مغاسل الرخام الرياض", "معلم مغاسل رخام", "ورشة رخام الرياض", "محل تفصيل رخام", "رخام ميكانيكي بالرياض"
  ],
  openGraph: {
    title: "تفصيل مغاسل رخام | طاولات رخام | تركيب رخام بالرياض",
    description: "افضل ورشة تفصيل مغاسل رخام وطاولات رخام طبيعي ومصناعي بالرياض، تركيب وجلي رخام بأعلى جودة للتواصل الاتصال على: 0569962482",
    phoneNumbers: ['966569962482', '966569962482', '966569962482'],
    siteName: "تفصيل وتركيب رخام بالرياض",
    tags: [
      "تفصيل مغاسل رخام", "طاولات رخام", "تركيب رخام بالرياض", "مغاسل رخام", "طاولات رخام بالرياض",
      "معلم رخام", "رخام طبيعي", "رخام صناعي", "مغاسل مودرن", "تفصيل رخام بالرياض"
    ]
  },
  formatDetection: { telephone: true },
  robots: { index: true, follow: true },
  referrer: 'origin',
  verification: {
    google: 'nhAv2U5esr02rFZvywbW4j0FcxDrFQDG9xeRia9jJQ',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" translate="no" className="scroll-smooth" style={{ scrollBehavior: 'smooth' }}>
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
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        {/* هذا هو الكود المسؤول عن إصلاح حجم الموقع على الهواتف */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
