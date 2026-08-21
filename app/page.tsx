import { Metadata } from 'next';
import Image from 'next/image';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Marble Washbasins Riyadh | 0569962482',
  description: 'Best marble workshop in Riyadh for custom marble washbasins, tables, flooring, and polishing. High quality and fast execution. Call us: 0569962482',
  keywords: [
    'marble washbasins riyadh',
    'custom marble',
    'marble tables riyadh'
  ],
  openGraph: {
    title: 'Marble Washbasins Riyadh | Custom Design',
    description: 'Custom marble work and washbasins in Riyadh with high quality.',
    locale: 'ar_SA',
    type: 'website',
  },
};

export default function Home() {
  const articles = [
    { 
      title: 'تفصيل مغاسل رخام مودرن بالرياض', 
      description: 'نقدم أعلى مستويات الجودة والاحترافية في تفصيل مغاسل رخام طبيعي وصناعي مخصصة للمجالس والصالات بمدينة الرياض بجودة عالية.' 
    },
    { 
      title: 'قسم تفصيل طاولات رخام بالرياض', 
      description: 'متخصصون في تفصيل طاولات رخام فاخرة ومخصصة بالكامل وفق المقاسات والمواصفات المطلوبة لتناسب منزلك الراقي.' 
    },
    { 
      title: 'قسم تركيب رخام الواجهات بالرياض', 
      description: 'نمتلك فريقاً احترافياً متكاملاً لخدمات تركيب رخام الواجهات والأعمدة والمداخل والجدران للمباني والفلل.' 
    },
    { 
      title: 'قسم تركيب أرضيات رخام بالرياض', 
      description: 'نوفر أحدث تقنيات تركيب أرضيات رخام طبيعي وصناعي بالرياض مع مراعاة دقة المنسوب والميول.' 
    }
  ];

  const galleryImages = [
    '/next.svg',
    '/vercel.svg',
    '/next.svg',
    '/vercel.svg'
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800" dir="rtl">
      {/* شريط عائم ثابت أعلى الشاشة لزر الاتصال */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 py-3 px-4 shadow-md flex justify-between items-center">
        <span className="text-white font-bold text-sm md:text-base">ورشة رخام الرياض</span>
        <a
          href="tel:0569962482"
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm md:text-base py-2 px-6 rounded-full shadow-lg transition-all flex items-center gap-2"
        >
          <span>📞</span>
          <span>اتصل الآن</span>
        </a>
      </div>

      {/* زر الواتساب المهتز الكبير جداً على شكل التطبيق */}
      <a
        href="https://wa.me/966569962482"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
        style={{ animation: 'shake 0.25s infinite alternate' }}
      >
        <svg className="w-12 h-12 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      </a>

      <style jsx global>{`
        @keyframes shake {
          0% { transform: rotate(0deg) scale(1.1); }
          25% { transform: rotate(-15deg) scale(1.2); }
          50% { transform: rotate(15deg) scale(1.1); }
          75% { transform: rotate(-15deg) scale(1.2); }
          100% { transform: rotate(0deg) scale(1.1); }
        }
      `}</style>

      {/* Header Section */}
      <section className="bg-slate-900 text-white pt-28 pb-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">تفصيل مغاسل رخام بالرياض وطاولات مودرن</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            أفضل ورشة متخصصة في تفصيل المغاسل، طاولات الرخام، وتركيب الأرضيات والدرج بأعلى جودة.
          </p>
          <a
            href="tel:0569962482"
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-lg py-4 px-10 rounded-full shadow-lg transition-all"
          >
            اتصل الآن: 0569962482
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 text-slate-800">خدماتنا وتخصصاتنا بالرياض</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-slate-800">{article.title}</h3>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">{article.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 px-4 max-w-7xl mx-auto bg-gray-100 rounded-3xl my-8">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 text-slate-800">معرض أعمالنا</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {galleryImages.map((imagePath, index) => (
            <div key={index} className="relative h-64 rounded-xl overflow-hidden shadow-md bg-white border border-gray-200">
              <Image
                src={imagePath}
                alt={`معرض أعمال رخام الرياض ${index + 1}`}
                fill
                className="object-contain p-4 hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 px-4 text-center mt-12">
        <p className="text-lg text-gray-400">جميع الحقوق محفوظة © 2026 - تفصيل مغاسل رخام بالرياض</p>
      </footer>
    </main>
  );
}
