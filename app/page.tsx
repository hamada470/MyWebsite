import { Metadata } from 'next';
import Image from 'next/image';

// 1. إعدادات السيو والكلمات المفتاحية لمُحرّكات البحث (Metadata)
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
  // الكلمات المفتاحية موزعة باحترافية داخل الخدمات
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

  // بيانات Schema Markup لإجبار Google على إدراك النشاط بالرياض بدون خريطة
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
      
      {/* 2. إضافة كود البيانات المنظمة (JSON-LD Schema) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      {/* الهيدر العلوي */}
      <header className="bg-gray-900 text-white py-3 px-4 sticky top-0 z-50 shadow-md">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
          <span className="text-xs md:text-sm font-bold text-yellow-400 text-center md:text-right">
            تفصيل مغاسل رخام | طاولات | مجالس | تركيب درج رخام بالرياض
          </span>
          
          {/* زر الواتساب أعلى الشاشة (لأجهزة الكمبيوتر) */}
          <a 
            href="https://wa.me/966569962482" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-xl font-extrabold flex items-center justify-center gap-2 text-sm md:text-base shadow-lg transition duration-200 transform hover:scale-105 w-full md:w-auto"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            <span>راسلنا واتساب:</span>
            <span className="font-bold" style={{ direction: 'ltr' }}>0569962482</span>
          </a>
        </div>
      </header>

      {/* قسم المقدمة - مع وسم H1 الرئيسي للسيو */}
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

      {/* قسم المقالات مع الصور وأزرار الاتصال */}
      <section className="max-w-5xl mx-auto py-10 px-4">
        <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
          خدماتنا المتميزة في تفصيل وتركيب الرخام بالرياض
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((item, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition flex flex-col justify-between">
              
              {/* النص والأوصاف */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-yellow-600 mb-2 leading-snug">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>

              {/* الصورة وزر الاتصال فوق الصورة */}
              <div className="relative h-52 w-full mt-2">
                <Image 
                  src={galleryImages[index % galleryImages.length]} 
                  alt={item.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                
                {/* زر اتصال عائم يظهر أسفل كل صورة */}
                <a 
                  href="tel:0569962482" 
                  className="absolute bottom-3 left-3 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl shadow-md flex items-center gap-2 font-bold text-sm transition transform hover:scale-105"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.32-.56-3.55 0-.55-.45-1-1-1H3.5c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1z"/>
                  </svg>
                  <span>اتصل الآن</span>
                </a>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 3. شريط أزرار الاتصال الثابت السريع للجوال (Call to Action Bar) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 p-3 flex justify-around items-center md:hidden shadow-2xl">
        <a 
          href="tel:0569962482" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-3 rounded-xl flex items-center gap-2 text-sm w-[48%] justify-center shadow-md active:scale-95 transition"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.32-.56-3.55 0-.55-.45-1-1-1H3.5c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1z"/>
          </svg>
          <span>اتصال مباشر</span>
        </a>
        <a 
          href="https://wa.me/966569962482" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-3 rounded-xl flex items-center gap-2 text-sm w-[48%] justify-center shadow-md active:scale-95 transition"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
          <span>تواصل واتساب</span>
        </a>
      </div>

    </main>
  );
}
