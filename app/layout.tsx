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
  description: "افضل ورشة تفصيل مغاسل رخام وطاولات رخام ومصانع رخام بالرياض, تركيب وجلي رخام بأعلى جودة للتواصل الاتصال على: 0569962482",
  keywords: [
    "فني تركيب رخام",
    "مواصل رخام بالرياض",
    "تركيب رخام بارياض",
    "طاولات رخام",
    "تفصيل مغاسل رخام",
    "مغاسل رخام مودرن",
    "رخام صناعي الرياض",
    "رخام طبيعي الرياض",
    "معلم رخام الرياض",
    "تفصيل طاولات رخام بارياض",
    "تفصيل طاولات حسب الطلب",
    "طاولات رخام طعام",
    "تفصيل مغاسل فخمة",
    "مغاسل رخام فخمة",
    "صيانة مغاسل رخام",
    "جلي وتلميع رخام",
    "تركيب ارضيات رخام",
    "تركيب واجهات رخام",
    "رخام ميكانيكي بالرياض",
    "عمل لتفصيل رخام",
    "ورشة رخام الرياض",
    "معلم مغاسل رخام",
    "اسعار مغاسل الرخام الرياض"
  ],
  openGraph: {
    title: "تفصيل مغاسل رخام | طاولات رخام | تركيب رخام بالرياض",
    description: "افضل ورشة تفصيل مغاسل رخام وطاولات رخام ومصانع رخام بالرياض, تركيب وجلي رخام بأعلى جودة للتواصل الاتصال على: 0569962482",
    phoneNumbers: ["966569962482"],
    siteName: "تفصيل وتركيب رخام بالرياض",
  },
  formatDetection: { telephone: true },
  robots: { index: true, follow: true },
  referrer: "origin",
  verification: {
    google: "rhAv2USes0ZrFZvyWBW4JOFcxDrFQD69xeRia9jJQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" translate="no" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18379909725"
          strategy="afterInteractive"
        />
        <Script id="google-tag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18379909725');
          `}
        </Script>
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
