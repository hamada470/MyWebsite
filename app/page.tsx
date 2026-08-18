import { Metadata } from 'next';
import Image from 'next/image';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'تفصيل مغاسل رخام بالرياض | معلم تركيب رخام وطاولات مودرن 0569962482',
  description: 'أفضل ورشة تفصيل مغاسل رخام طبيعي وصناعي بالرياض. متخصصون في تفصيل طاولات الرخام، تركيب الرخام، وتركيب أرضيات رخام بأعلى جودة واحترافية. اتصل الآن: 0569962482',
  keywords: [
    'تفصيل مغاسل رخام بالرياض',
    'تفصيل مغاسل رخام',
    'تفصيل طاولات رخام',
    'تركيب رخام',
    'تركيب أرضيات رخام',
    'معلم رخام بالرياض',
    'ورشة تفصيل رخام الرياض',
    'تركيب واجهات رخام',
    'تركيب درج رخام بالرياض',
    'جلي وتلميع رخام'
  ],
  openGraph: {
    title: 'تفصيل مغاسل رخام بالرياض | معلم تركيب رخام وطاولات مودرن',
    description: 'تفصيل وتصنيع كافة ديكورات الرخام والمغاسل وطاولات الرخام بالرياض بجودة عالية وأسعار تنافسية.',
    locale: 'ar_SA',
    type: 'website',
  },
};

export default function Home() {
  // قائمة الصور المرفوعة حديثاً على المشروع
  const galleryImages = [
    '/Screenshot_٢٠٠٨٣١_٢٠٣١٠٢_Instagram.jpg',
    '/Screenshot_٢٠٠٨٥٤_٢٠٣١٠٢_Instagram.jpg',
    '/Screenshot_٢٠٠٨٢٥_٢٠٣١٠٢_Instagram.jpg',
    '/Screenshot_٢٠٠٨١٨_٢٠٣١٠٢_WhatsApp.jpg',
    '/Screenshot_٢٠٠٨٣٥_٢٠٣١٠٢_WhatsApp.jpg',
    '/Screenshot_٢٠٠٨٥٦_٢٠٣١٠٢_WhatsApp.jpg',
    '/Screenshot_٢٠٠٩٠١_٢٠٣١٠٢_WhatsApp.jpg',
    '/Screenshot_٢٠٠٩٠٤_٢٠٣١٠٢_WhatsApp.jpg',
    '/Screenshot_٢٠٠٨١١_٢٠٣١٠٢_WhatsApp.jpg',
    '/Screenshot_٢٠٠٨٤٠_٢٠٣١٠٢_WhatsApp.jpg',
    '/Screenshot_٢٠٠٨٤٨_٢٠٣١٠٢_WhatsApp.jpg',
    '/Screenshot_٢٠٠٨٢١_٢٠٣١٠٢_WhatsApp.jpg',
    '/Screenshot_٠٠١٢٠٢_٢٠٣١٠٥_Instagram.jpg',
    '/Screenshot_٠٠١٢٠٨_٢٠٣١٠٥_Instagram.jpg',
    '/Screenshot_٠٠١٢١٦_٢٠٣١٠٥_Instagram.jpg',
    '/Screenshot_٠٠١٢٢٨_٢٠٣١٠٥_Instagram.jpg',
    '/Screenshot_٠٠١٢٣٨_٢٠٣١٠٥_Instagram.jpg',
    '/Screenshot_٠٠١٢٤٣_٢٠٣١٠٥_Instagram.jpg',
    '/Screenshot_٠٠١٤١٠_٢٠٣١٠٥_Instagram.jpg',
    '/Screenshot_٠٠١٤١٤_٢٠٣١٠٥_Instagram.jpg',
    '/Screenshot_٠٠١٤٢٧_٢٠٣١٠٥_Instagram.jpg',
    '/Screenshot_٠٠١٤٤٣_٢٠٣١٠٥_Instagram.jpg',
    '/Screenshot_٠٠١٤٣١_٢٠٣١٠٥_Instagram.jpg',
    '/Screenshot_٠٠١٥٠٤_٢٠٣١٠٥_Instagram.jpg',
    '/Screenshot_٠٠١٥٢١_٢٠٣١٠٥_Instagram.jpg',
    '/Screenshot_٠٠١٦٠٧_٢٠٣١٠٥_Instagram.jpg',
    '/Screenshot_٠٠١٦٣٩_٢٠٣١٠٥_Instagram.jpg'
  ];

  const articles = [
    { 
      title: 'تفصيل مغاسل رخام مودرن وفخمة للمجالس والضيوف بالرياض', 
      description: 'نقدم أعلى مستويات الجودة والاحترافية في تفصيل مغاسل رخام طبيعي وصناعي مخصصة للمجالس والصالات بمدينة الرياض. نحرص على تقديم تصاميم عصرية تتناسب مع أرقى الديكورات مع دمج الحفر الليزري والإضاءات المخفية (LED) وحفر الأسطح بدقة متناهية لتلبية تطلعات العملاء وتوفير لمسة فخامة فريدة تدوم طويلاً.' 
    },
    { 
      title: 'قسم تفصيل طاولات رخام طعام ومجالس واستقبال بالرياض', 
      description: 'متخصصون في تفصيل طاولات رخام فاخرة ومخصصة بالكامل وفق المقاسات والمواصفات المطلوبة. نوفر أرقى الأسطح الرخامية الطبيعية والصناعية مع قواعد حديد مذهب، ستانلس ستيل، أو قواعد رخامية بالكامل، بالإضافة إلى طلي السطح بمواد حماية إيطالية تمنع امتصاص السوائل وتمنحها بريقاً دائماً.' 
    },
    { 
      title: 'قسم تركيب رخام بأعلى المعايير الهندسيّة بالرياض', 
      description: 'نمتلك فريقاً احترافياً متكاملاً لخدمات تركيب رخام الواجهات والأعمدة والمداخل والجدران للمباني والفلل. نعتمد أفضل طرق التثبيت الميكانيكي والعادي للضمان والأمان التام، مع الاهتمام بفرز العروق وتناسق الرسمات الطبيعية للرخام لإبراز جمال المكان.' 
    },
    { 
      title: 'قسم تركيب أرضيات رخام للمنازل والقصور بالرياض', 
      description: 'نوفر أحدث تقنيات تركيب أرضيات رخام طبيعي وصناعي بالرياض مع مراعاة دقة المنسوب والميول وتطبيق نظام القص والتطبيق بالماكينات الحديثة (Bookmatch). نضمن عدم وجود أي بروز أو فراغات تحت الرخام واستخدام أفضل الخلطات ومواد الملاط المخصصة.' 
    },
    { 
      title: 'تفصيل مغاسل رخام صناعي وطبيعي بأحدث التصاميم العالمية', 
      description: 'متخصصون في تصميم وتفصيل مغاسل الرخام الفاخرة للمطابخ والحمامات ومجالس الرجال والنساء بالرياض. نوفر جميع أنواع الرخام الطبيعي مثل الكرارة والمجلى والروزا والستاتواريو، بالإضافة إلى أفضل أنواع الرخام الصناعي المقاوم للبقع والرطوبة.' 
    },
    { 
      title: 'تفصيل وقونطرات رخام ومقاطع استقبال وفنادق بالرياض', 
      description: 'نفذنا العديد من مشاريع تفصيل وتصنيع قونطرات الرخام الفاخرة ومكاتب الاستقبال للشركات، الفنادق، المستشفيات، والمطاعم بالرياض. نعتمد على أحدث ماكينات القص CNC لضمان تطابق العروق والزوايا بشكل هندسي دقيق.' 
    },
    { 
      title: 'تفصيل مشبات رخام وديكورات شعبية وفاخرة للملاحق', 
      description: 'نوفر تشكيلة واسعة من أحدث تصاميم مشبات الرخام للملاحق والمجالس التراثية والمودرن بالرياض. نجمع بين أصلة التراث وتطور الديكور المودرن باستخدام أجود أنواع الرخام المقاوم للحرارة العالية مع إمكانية إضافة إطارات حجرية أو خشبية.' 
    },
    { 
      title: 'تفصيل وتصنيع وتركيب درج رخام داخلي وخارجي باحترافية', 
      description: 'تركيب وتفصيل درج الرخام للمباني والفلل والقصور بالرياض بأعلى معايير السلامة والجودة. نهتم بتوفير شرائح الرخام المانعة للانزلاق، وتثبيت الإضاءات المخفية تحت الدرجات، بالإضافة إلى ضبط المنسوب بدقة متناهية.' 
    },
    { 
      title: 'جلي وتلميع الرخام الطبيعي ومعالجة الكسور والفواصل', 
      description: 'متخصصون في جلي وتلميع أرضيات ومغاسل الرخام باستعمال أحدث أقراص الألماس والمواد الكريستالية الفاخرة التي تعيد للرخام لمعانه وبريقه الطبيعي، مع معالجة وتعبئة الفواصل والكسور بمادة الجولي المقواة والمطابقة للون الرخام تماماً.' 
    },
    { 
      title: 'ورشة تفصيل كافة ديكورات الرخام والتصاميم الخاصة بالرياض', 
      description: 'نمتلك ورشة متكاملة ومجهزة بالكامل بالرياض لتفصيل بديل الرخام، الشواهد، الإطارات، والديكورات الجدارية والحلول المعمارية المخصصة. ملتزمون بتقديم أعلى مستويات الدقة والتسليم في المواعيد المحتسبة بأسعار منافسة.' 
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
    <main className="min-h-screen bg-gray-50 text-gray-800 pb-12" style={{ direction: 'rtl', textAlign: 'right' }}>
      
      <Script
        id="schema-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      {/* الهيدر العلوي */}
      <header className="bg-gray-900 text-white py-3 px-4 sticky top-0 z-50 shadow-md">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
          <span className="text-xs md:text-sm font-bold text-yellow-400 text-center md:text-right">
            تفصيل مغاسل رخام | طاولات رخام | تركيب رخام | تركيب أرضيات رخام بالرياض
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

      {/* قسم المقدمة الموسع */}
      <section className="bg-gray-800 text-white py-14 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-5">
          <h1 className="text-2xl md:text-4xl font-extrabold text-yellow-400 leading-tight">
            أفضل ورشة تفصيل مغاسل رخام، تفصيل طاولات، وتركيب أرضيات رخام بالرياض
          </h1>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            مرحباً بك في ورشتنا المتخصصة بالرياض. نضع بين يديك خبرة سنوات طويلة في تفصيل كافة أعمال الرخام الطبيعي والصناعي. سواء كنت تبحث عن تفصيل مغاسل رخام مودرن، تفصيل طاولات رخام، تركيب رخام واجهات، أو تركيب أرضيات رخام بدقة متناهية، فنحن نضمن لك جودة التصنيع، متانة المواد، والالتزام التام بالأسعار والمواعيد.
          </p>
        </div>
      </section>

      {/* قسم الخدمات والمقالات الموسع مع أحدث الصور المرفوعة */}
      <section className="max-w-5xl mx-auto py-12 px-4">
        <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
          خدماتنا المتميزة في تفصيل وطاولات وتركيب الرخام بالرياض
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((item, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition flex flex-col justify-between">
              
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-bold text-yellow-600 mb-3 leading-snug">{item.title}</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">{item.description}</p>
              </div>

              <div className="relative h-64 w-full mt-2">
                <Image 
                  src={galleryImages[index % galleryImages.length]} 
                  alt={item.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
