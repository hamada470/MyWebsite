import { Metadata } from 'next';
import Image from 'next/image';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'تفصيل مغاسل رخام بالرياض | معلم تركيب رخام وطاولات مودرن 0569962482',
  description: 'أفضل ورشة تفصيل مغاسل رخام طبيعي وصناعي بالرياض. تفصيل طاولات، مشبات، وقونطرات، وتركيب واجهات وأرضيات بأعلى جودة واحترافية. اتصل الآن: 0569962482',
  keywords: [
    'تفصيل مغاسل رخام بالرياض',
    'تفصيل مغاسل رخام',
    'مغاسل رخام مودرن',
    'مغاسل رخام طبيعي',
    'معلم رخام بالرياض',
    'ورشة تفصيل رخام الرياض',
    'تفصيل طاولات رخام',
    'تركيب واجهات رخام',
    'تركيب درج رخام بالرياض',
    'جلي وتلميع رخام'
  ],
  openGraph: {
    title: 'تفصيل مغاسل رخام بالرياض | معلم تركيب رخام وطاولات مودرن',
    description: 'تفصيل وتصنيع كافة ديكورات الرخام والمغاسل بالرياض بجودة عالية وأسعار تنافسية.',
    locale: 'ar_SA',
    type: 'website',
  },
};

export default function Home() {
  const articles = [
    { 
      title: 'تفصيل مغاسل رخام مودرن وفخمة للمجالس والضيوف بالرياض', 
      description: 'نقدم أعلى مستويات الجودة الاحترافية في تفصيل مغاسل رخام طبيعي وصناعي للمجالس والصالات بمدينة الرياض. يتم التصميم عبر فريق من المختصين والفنيين ذوي الخبرة العالية.' 
    },
    { 
      title: 'تفصيل مغاسل رخام صناعي وطبيعي بأحدث التصاميم', 
      description: 'متخصصون في تفصيل مغاسل الرخام الفخمة للمطابخ والحمامات والمجالس بالرياض، مع تقديم استشارات مجانية لاختيار نوع وألوان الرخام المناسبة لمعايير المكان.' 
    },
    { 
      title: 'تفصيل طاولات رخام طعام ومجالس واستقبال حسب الطلب', 
      description: 'تصميم وتنفيذ طاولات رخام بقواعد حديد مذهب أو أسود أو قواعد رخامية بالكامل، مع معالجة سطح الرخام بمواد حماية إيطالية فاخرة لضمان المتانة.' 
    },
    { 
      title: 'تفصيل وقونطرات رخام ومقاطع استقبال وفنادق بالرياض', 
      description: 'نقوم بتفصيل وتصنيع قونطرات الرخام الفاخرة للمكاتب، الشركات، والمطاعم بأعلى معايير الجودة والقص المعماري الدقيق والمخصص.' 
    },
    { 
      title: 'تفصيل مشبات رخام وديكورات شعبية وفاخرة', 
      description: 'نوفر أفضل تصاميم تفصيل مشبات الرخام للملاحق والمجالس التراثية والمودرن بأشكال هندسية مميزة تتناسب مع باقي الديكور العام للمنزل.' 
    },
    { 
      title: 'تفصيل وتصنيع وتركيب درج رخام داخلي وخارجي باحترافية', 
      description: 'تركيب وتفصيل درج الرخام بمدينة الرياض بأعلى معايير السلامة والجودة، مع إضافة الإضاءات المخفية والقص الليزري المتقن.' 
    },
    { 
      title: 'معلم تركيب رخام ممتاز بالرياض أرضيات وجدران', 
      description: 'أفضل معلم تركيب أرضيات رخام وجدران بالرياض مع مطابقة العروق والتعتيق لضمان مظهر فخم وبدون أي بروز أو عيوب تركيبية.' 
    },
    { 
      title: 'تركيب واجهات رخام ميكانيكي وعادي للمباني والفلل', 
      description: 'تركيب واجهات رخام ممتازة ضمن أعلى درجات الثبات والأمان، بالإضافة إلى توفير العزل الحراري خلف الرخام وتوفير تشكيلات فخمة راقية.' 
    },
    { 
      title: 'جلي وتلميع الرخام الطبيعي ومعالجة الكسور والفواصل', 
      description: 'خدمات جلي وتلميع الرخام باستخدام المواد الكريستالية التي تعيد للرخام بريقه ولمعانه الزجاجي، مع معالجة الفواصل والشقوق بمهارة.' 
    },
    { 
      title: 'ورشة تفصيل كل ما يخص الرخام والتصاميم الخاصة بالرياض', 
      description: 'نمتلك ورشة متكاملة بالرياض لتفصيل بديل الرخام والشواهد وجميع الديكورات الرخامية حسب الطلب، مع التزام تام بالسرعة والدقة والتسليم.' 
    }
  ];

  const galleryImages = [
    '/unnamed (1).png',
    '/unnamed (2).png',
    '/unnamed (3).png',
    '/unnamed (4).png',
    '/unnamed (5).png',
    '/unnamed (6).png'
  ];

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "ورشة تفصيل مغاسل رخام بالرياض",
    "description": "تفصيل مغاسل رخام طبيعي وصناعي، طاولات رخام، وتركيب واجهات وأرضيات بالرياض.",
    "telephone": "+966569962482",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Riyadh",
      "addressRegion": "Riyadh",
      "addressCountry": "SA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 24.7136,
      "longitude": 46.6753
    },
    "priceRange": "$$"
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 pb-24 md:pb-16" style={{ direction: 'rtl', textAlign: 'right' }}>
      
      <Script
        id="schema-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      {/* الهيدر العلوي */}
      <header className="bg-gray-900 text-white py-3 px-4 sticky top-0 z-50 shadow-md">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
          <span className="text-xs md:text-sm font-bold text-yellow-400 text-center md:text-right">
            تفصيل مغاسل رخام | طاولات | مجالس | تركيب درج رخام بالرياض
          </span>
          
          <a 
            href="https://wa.me/966569962482" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-xl font-extrabold flex items-center justify-center gap-2 text-sm md:text-base shadow-lg transition duration-200 transform hover:scale-105 w-full md:w-auto"
          >
            <span>💬</span>
            <span>راسلنا واتساب:</span>
            <span className="font-bold" style={{ direction: 'ltr' }}>0569962482</span>
          </a>
        </div>
      </header>

      {/* قسم المقدمة */}
      <section className="bg-gray-800 text-white py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <h1 className="text-2xl md:text-4xl font-extrabold text-yellow-400 leading-tight">
            أفضل ورشة تفصيل مغاسل رخام ومعلم تركيب بالرياض
          </h1>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            مهما كانت فكرتك أو التصميم الذي ترغب في تطبيقه من الرخام، فإن ورشتنا بالرياض مستعدة لتحويله إلى واقع باحترافية عالية. نقدم أفضل خدمات تفصيل مغاسل رخام، طاولات، مشبات، وقونطرات، بالإضافة إلى تركيب أرضيات ودرج وواجهات الرخام بأعلى معايير الجودة.
          </p>
        </div>
      </section>

      {/* قسم الخدمات والمقالات */}
      <section className="max-w-5xl mx-auto py-10 px-4">
        <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
          خدماتنا المتميزة في تفصيل وتركيب الرخام بالرياض
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((item, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition flex flex-col justify-between">
              
              <div className="p-5">
                <h3 className="text-lg font-bold text-yellow-600 mb-2 leading-snug">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>

              <div className="relative h-52 w-full mt-2">
                <Image 
                  src={galleryImages[index % galleryImages.length]} 
                  alt={item.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                
                <a 
                  href="tel:0569962482" 
                  className="absolute bottom-3 left-3 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl shadow-md flex items-center gap-2 font-bold text-sm transition transform hover:scale-105"
                >
                  <span>📞</span>
                  <span>اتصل الآن</span>
                </a>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* شريط الاتصال السريع المخصص للجوال */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 p-3 flex justify-around items-center md:hidden shadow-2xl">
        <a 
          href="tel:0569962482" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-3 rounded-xl flex items-center gap-2 text-sm w-[48%] justify-center shadow-md active:scale-95 transition"
        >
          <span>📞</span>
          <span>اتصال مباشر</span>
        </a>
        <a 
          href="https://wa.me/966569962482" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-3 rounded-xl flex items-center gap-2 text-sm w-[48%] justify-center shadow-md active:scale-95 transition"
        >
          <span>💬</span>
          <span>تواصل واتساب</span>
        </a>
      </div>

    </main>
  );
}
