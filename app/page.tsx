import { Metadata } from 'next';
import Image from 'next/image';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'تفصيل مغاسل رخام بالرياض | معلم تركيب رخام وطاولات مودرن 0569962482',
  description: 'أفضل ورشة تفصيل مغاسل رخام طبيعي وصناعي بالرياض. متخصصون في تفصيل طاولات، مشبات، وقونطرات، وتركيب واجهات وأرضيات بأعلى جودة واحترافية. اتصل الآن: 0569962482',
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
      description: 'نقدم أعلى مستويات الجودة والاحترافية في تفصيل مغاسل رخام طبيعي وصناعي مخصصة للمجالس والصالات بمدينة الرياض. نحرص على تقديم تصاميم عصرية تتناسب مع أرقى الديكورات مع دمج الحفر الليزري والإضاءات المخفية (LED) وحفر الأسطح بدقة متناهية لتلبية تطلعات العملاء وتوفير لمسة فخامة فريدة تدوم طويلاً.' 
    },
    { 
      title: 'تفصيل مغاسل رخام صناعي وطبيعي بأحدث التصاميم العالمية', 
      description: 'متخصصون في تصميم وتفصيل مغاسل الرخام الفاخرة للمطابخ والحمامات ومجالس الرجال والنساء بالرياض. نوفر جميع أنواع الرخام الطبيعي مثل الكرارة والمجلى والروزا والستاتواريو، بالإضافة إلى أفضل أنواع الرخام الصناعي المقاوم للبقع والرطوبة مع تقديم استشارات مجانية لاختيار الألوان المناسبة لمكانك.' 
    },
    { 
      title: 'تفصيل طاولات رخام طعام ومجالس واستقبال حسب الطلب', 
      description: 'تصميم وتنفيذ طاولات رخام فاخرة ومخصصة بالكامل وفقاً للمساحات والمقاسات المطلوبة. نوفر قواعد حديد مذهب، ستانلس ستيل، أو قواعد رخامية بالكامل، مع قص وتقطيع حواف الرخام باحترافية عالية وطلي السطح بمواد حماية إيطالية تمنع امتصاص السوائل وتحافظ على البريق زجاجياً.' 
    },
    { 
      title: 'تفصيل وقونطرات رخام ومقاطع استقبال وفنادق بالرياض', 
      description: 'نفذنا العديد من مشاريع تفصيل وتصنيع قونطرات الرخام الفاخرة ومكاتب الاستقبال للشركات، الفنادق، المستشفيات، والمطاعم بالرياض. نعتمد على أحدث ماكينات القص CNC لضمان تطابق العروق والزوايا بشكل هندسي دقيق يمنح المدخل انطباعاً رسمياً وفخماً.' 
    },
    { 
      title: 'تفصيل مشبات رخام وديكورات شعبية وفاخرة للملاحق', 
      description: 'نوفر تشكيلة واسعة من أحدث تصاميم مشبات الرخام للملاحق والمجالس التراثية والمودرن بالرياض. نجمع بين أصلة التراث وتطور الديكور المودرن باستخدام أجود أنواع الرخام المقاوم للحرارة العالية مع إمكانية إضافة إطارات حجرية أو تطعيمات خشبية ومعدنية تعزز المظهر العام.' 
    },
    { 
      title: 'تفصيل وتصنيع وتركيب درج رخام داخلي وخارجي باحترافية', 
      description: 'تركيب وتفصيل درج الرخام للمباني والفلل والقصور بالرياض بأعلى معايير السلامة والجودة. نهتم بتوفير شرائح الرخام المانعة للانزلاق، وتثبيت الإضاءات المخفية تحت الدرجات، بالإضافة إلى ضبط المنسوب والميول بدقة تضمن المتانة والراحة عند الاستخدام.' 
    },
    { 
      title: 'معلم تركيب رخام ممتاز بالرياض للأرضيات والجدران', 
      description: 'أفضل معلم تركيب أرضيات وجدران رخام بمدينة الرياض يتمتع بخبرة طويلة في تركيب كافة المساحات. نضمن مطابقة العروق وتناسق الرسمات الطبيعية للرخام (Bookmatch)، واستخدام أحدث خلطات التثبيت ومواد الملاط المخصصة لتجنب أي هبوط أو بروز مستقبلي.' 
    },
    { 
      title: 'تركيب واجهات رخام ميكانيكي وعادي للمباني والفلل', 
      description: 'نقدم خدمات تركيب واجهات الرخام الفخمة بالرياض باستخدام نظام التركيب الميكانيكي بالحديد والأنكر المقاوم للصدأ لضمان الأمان التام والثبات الأبدي، مع توفير عزل حراري ومائي خلف الرخام لتخفيض استهلاك الطاقة وتحمل مختلف العوامل الجوية القاسية.' 
    },
    { 
      title: 'جلي وتلميع الرخام الطبيعي ومعالجة الكسور والفواصل', 
      description: 'متخصصون في جلي وتلميع أرضيات ومغاسل الرخام باستعمال أحدث أقراص الألماس والمواد الكريستالية الفاخرة التي تعيد للرخام لمعانه وبريقه الطبيعي، مع معالجة وتعبئة الفواصل والكسور بمادة الجولي المقواة والمطابقة للون الرخام تماماً.' 
    },
    { 
      title: 'ورشة تفصيل كافة ديكورات الرخام والتصاميم الخاصة بالرياض', 
      description: 'نمتلك ورشة متكاملة ومجهزة بالكامل بالرياض لتفصيل بديل الرخام، الشواهد، الإطارات، والديكورات الجدارية والحلول المعمارية المخصصة. ملتزمون بتقديم أعلى مستويات الدقة والتسليم في المواعيد المحتسبة بأسعار منافسة تناسب جميع الميزانيات.' 
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

      {/* قسم المقدمة الموسع */}
      <section className="bg-gray-800 text-white py-14 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-5">
          <h1 className="text-2xl md:text-4xl font-extrabold text-yellow-400 leading-tight">
            أفضل ورشة تفصيل مغاسل رخام ومعلم تركيب واجهات وأرضيات بالرياض
          </h1>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            مرحباً بك في ورشتنا المتخصصة بالرياض. نضع بين يديك خبرة سنوات طويلة في مجال تفصيل وتنفيذ كافة أعمال الرخام الطبيعي والصناعي. سواء كنت تبحث عن تفصيل مغاسل رخام مودرن للمجالس والصالات، أو تصميم طاولات وقونطرات ومشبات فاخرة، أو تركيب واجهات ودرج وأرضيات بدقة متناهية، فنحن نضمن لك جودة التصنيع، متانة المواد، والالتزام التام بجميع المواعيد والمواصفات المطلوبة.
          </p>
        </div>
      </section>

      {/* قسم الخدمات والمقالات الموسع */}
      <section className="max-w-5xl mx-auto py-12 px-4">
        <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
          خدماتنا المتميزة في تفصيل وتركيب الرخام بالرياض
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((item, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition flex flex-col justify-between">
              
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-bold text-yellow-600 mb-3 leading-snug">{item.title}</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">{item.description}</p>
              </div>

              <div className="relative h-56 w-full mt-2">
                <Image 
                  src={galleryImages[index % galleryImages.length]} 
                  alt={item.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                
                <a 
                  href="tel:0569962482" 
                  className="absolute bottom-3 left-3 bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-xl shadow-md flex items-center gap-2 font-bold text-sm transition transform hover:scale-105"
                >
                  <span>📞</span>
                  <span>اتصل الآن</span>
                </a>
              </div>

            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
