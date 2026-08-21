import { Metadata } from 'next';
import Image from 'next/image';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Marble Washbasins Riyadh | 0569962482',
  description: 'Best marble workshop in Riyadh for custom marble washbasins, tables, flooring, and polishing. High quality and fast execution. Call us: 0569962482',
  keywords: [
    'تفصيل مغاسل رخام بالرياض',
    'مغاسل رخام تفصيل',
    'أسعار مغاسل الرخام في الرياض',
    'معلم تركيب رخام بالرياض'
  ],
  openGraph: {
    title: 'تفصيل مغاسل رخام بالرياض | معلم تركيب رخام وطاولات مودرن',
    description: 'تفصيل وتصنيع كافة ديكورات الرخام والمغاسل وطاولات الرخام بالرياض بجودة عالية وأسعار تنافسية.',
    locale: 'ar_SA',
    type: 'website',
  },
};

export default function Home() {
  const galleryImages = [
    '/vercel.svg',
    '/next.svg'
  ];

  const articles = [
    { 
      title: 'تفصيل مغاسل رخام مودرن وفخمة للمجالس والضيوف بالرياض', 
      description: 'نقدم أعلى مستويات الجودة والاحترافية في تفصيل مغاسل رخام طبيعي وصناعي مخصصة للمجالس والصالات بمدينة الرياض.' 
    },
    { 
      title: 'قسم تفصيل طاولات رخام طعام ومجالس واستقبال بالرياض', 
      description: 'متخصصون في تفصيل طاولات رخام فاخرة ومخصصة بالكامل وفق المقاسات والمواصفات المطلوبة.' 
    },
    { 
      title: 'قسم تركيب رخام بأعلى المعايير الهندسيّة بالرياض', 
      description: 'نمتلك فريقاً احترافياً متكاملاً لخدمات تركيب رخام الواجهات والأعمدة والمداخل والجدران للمباني والفلل.' 
    },
    { 
      title: 'قسم تركيب أرضيات رخام للمنازل والقصور بالرياض', 
      description: 'نوفر أحدث تقنيات تركيب أرضيات رخام طبيعي وصناعي بالرياض مع مراعاة دقة المنسوب والميول.' 
    }
  ];

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "ورشة تفصيل مغاسل رخام وطاولات وتركيب أرضيات بالرياض",
    "description": "تفصيل مغاسل رخام طبيعي وصناعي، تفصيل طاولات رخام، تركيب رخام، وتركيب أرضيات رخام بالرياض.",
    "telephone": "+966569962482",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "الرياض",
      "addressRegion": "منطقة الرياض",
      "addressCountry": "SA"
    },
    "areaServed": "الرياض",
    "priceRange": "$$"
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      <a
        href="https://wa.me/966569962482"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform"
      >
        <span className="text-2xl">📱</span>
      </a>

      <section className="bg-slate-900 text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">تفصيل مغاسل رخام بالرياض وطاولات مودرن</h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            أفضل ورشة متخصصة في تفصيل المغاسل، طاولات الرخام، وتركيب الأرضيات والدرج بأعلى جودة.
          </p>
          <a
            href="tel:0569962482"
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all"
          >
            اتصل الآن: 0569962482
          </a>
        </div>
      </section>

      <section className="py-12 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-slate-800">خدماتنا وتخصصاتنا بالرياض</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-slate-700">{article.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{article.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-8 px-4 text-center mt-12">
        <p className="text-gray-400">جميع الحقوق محفوظة © 2026 - تفصيل مغاسل رخام بالرياض</p>
      </footer>
    </main>
  );
}
