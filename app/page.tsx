import { Metadata } from 'next';
import Image from 'next/image';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'تفصيل مغاسل رخام بالرياض | أسعار خاصة وتصاميم حديثة 0569962482',
  description: 'أفضل ورشة تفصيل مغاسل رخام بالرياض. متخصصون في الرخام الطبيعي والصناعي، طاولات رخام، تركيب واجهات، أرضيات، وجلي رخام. جودة عالية وسرعة في التنفيذ. اتصل بنا: 0569962482',
  keywords: [
    'تفصيل مغاسل رخام بالرياض',
    'مغاسل رخام تفصيل',
    'أسعار مغاسل الرخام في الرياض',
    'معلم تركيب رخام بالرياض',
    'تفصيل طاولات رخام مودرن',
    'ورشة رخام بالرياض',
    'تركيب أرضيات رخام',
    'جلي وتلميع رخام بالرياض',
    'تفصيل مغاسل رخام صناعي',
    'أفضل محل تفصيل رخام في الرياض'
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
      description: 'نوفر تشكيلة واسعة من أحدث تصاميم مشبات الرخام للملاحق والمجالس التراثية والمودرن بالرياض. نجمع بين أصالة التراث وتطور الديكور المودرن باستخدام أجود أنواع الرخام المقاوم للحرارة العالية مع إمكانية إضافة إطارات حجرية أو خشبية.' 
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
      "addressLocality": "الرياض",
      "addressRegion": "منطقة الرياض",
      "addressCountry": "SA"
    },
    "areaServed": "الرياض",
    "priceRange": "$$"
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 dir-rtl">
      {/* Schema.org Script */}
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      {/* Google Ads Global Site Tag (gtag.js) - استبدل AW-YOUR_ID برقمك */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-YOUR_ID"
      />
      <Script id="google-ads-init">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-YOUR_ID');
        `}
      </Script>

      {/* زر الواتساب المهتز الكبير مع تتبع النقرات */}
      <a
        href="https://wa.me/966569962482"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          // كود تتبع إحالة جوجل (استبدل القيم حسب إعدادات حسابك)
          if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'conversion', {
              'send_to': 'AW-YOUR_ID/YOUR_LABEL'
            });
          }
        }}
        className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-6 rounded-full shadow-2xl hover:scale-110 transition-transform"
        style={{ animation: 'shake 0.3s infinite alternate' }}
      >
        <span className="text-4xl">📱</span>
        <style jsx>{`
          @keyframes shake {
            0% { transform: rotate(0deg) scale(1.2); }
            25% { transform: rotate(-10deg) scale(1.25); }
            50% { transform: rotate(10deg) scale(1.2); }
            75% { transform: rotate(-10deg) scale(1.25); }
            100% { transform: rotate(0deg) scale(1.2); }
          }
        `}</style>
      </a>

      {/* Header Section */}
      <section className="bg-slate-900 text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">تفصيل مغاسل رخام بالرياض وطاولات مودرن</h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            أفضل ورشة متخصصة في تفصيل المغاسل، طاولات الرخام، وتركيب الأرضيات والدرج بأعلى جودة.
          </p>
          <a
            href="tel:0569962482"
            onClick={() => {
              if (typeof window !== 'undefined' && (window as any).gtag) {
                (window as any).gtag('event', 'conversion', {
                  'send_to': 'AW-YOUR_ID/YOUR_LABEL'
                });
              }
            }}
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300"
          >
            اتصل الآن: 0569962482
          </a>
        </div>
      </section>

      {/* Articles / Services Section */}
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

      {/* Gallery Section with Error Handling */}
      <section className="py-12 px-4 max-w-7xl mx-auto bg-gray-100 rounded-3xl my-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-slate-800">معرض أعمالنا ورشة الرخام</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((imagePath, index) => (
            <div key={index} className="relative h-64 rounded-lg overflow-hidden shadow-sm bg-white border border-gray-200">
              <Image
                src={imagePath}
                alt={`مشروع رخام ومغاسل الرياض ${index + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                onError={(e: any) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 px-4 text-center mt-12">
        <p className="text-gray-400">جميع الحقوق محفوظة © 2026 - تفصيل مغاسل رخام بالرياض</p>
      </footer>
    </main>
  );
}
