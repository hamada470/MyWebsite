'use client';

import Image from 'next/image';

export default function Home() {
  const articles = [
    {
      title: 'تفصيل مغاسل رخام مودرن وفخمة للمجالس والضيوف بالرياض',
      description: 'نقدم أعلى مستويات الجودة الاحترافية في تفصيل مغاسل رخام طبيعي وصناعي للمجالس والصالات. يتم التصميم عبر فريق من المختصين والفنيين ذوي الخبرة الطويلة في تشكيل وقص الرخام بأحدث التقنيات لضمان الدقة والفخامة.'
    },
    {
      title: 'تفصيل مغاسل رخام صناعي وطبيعي بأحدث التصاميم',
      description: 'متخصصون في تفصيل مغاسل الرخام الفخمة للمطابخ والحمامات والمجالس، مع تقديم استشارات مجانية لاختيار نوع وألوان الرخام المناسبة لإضاءة ومساحة المكان. نضمن لك جودة عالية ومقاومة للماء والبقع.'
    },
    {
      title: 'تفصيل طاولات رخام طعام ومجالس واستقبال حسب الطلب',
      description: 'تصميم وتنفيذ طاولات رخام بقواعد حديد مذهب أو أسود أو قواعد رخامية بالكامل، مع معالجة سطح الرخام بمواد حماية إيطالية لمنع امتصاص السوائل والزيوت وللحفاظ على رونقها لأطول فترة ممكنة.'
    },
    {
      title: 'تفصيل وقونطرات رخام ومقاطع استقبال وفنادق',
      description: 'نقوم بتفصيل وتصنيع قونطرات الرخام الفاخرة للمكاتب، الشركات، والمطاعم بأعلى معايير الجودة والقص المعماري الدقيق مع دمج الإضاءات المخفية لتعطي مظهراً مودرن وفاخراً.'
    },
    {
      title: 'تفصيل مشبات رخام وديكورات شعبية وفاخرة',
      description: 'نوفر أفضل تصاميم تفصيل مشبات الرخام للملاحق والمجالس التراثية والمودرن بأشكال هندسية مميزة تتناسب مع الديكور العام وتتحمل درجات الحرارة العالية بأمان تام.'
    },
    {
      title: 'تفصيل وتصنيع وتركيب درج رخام داخلي وخارجي باحترافية',
      description: 'تركيب وتفصيل درج الرخام بأعلى معايير السلامة والجودة، مع إضافة الإضاءات المخفية والقص الليزري المميز للدرجات والبسطات ليعطي لمسة جمالية راقية للمبنى.'
    },
    {
      title: 'معلم تركيب رخام ممتاز بالرياض أرضيات وجدران',
      description: 'أفضل معلم تركيب أرضيات رخام وجدران بالرياض مع مطابقة العروق والتعتيق لضمان مظهر فخم بدون أي بروز، واستخدام أفضل أنواع الغراء والمواد اللاصقة لضمان الثبات والتحمل.'
    },
    {
      title: 'تركيب واجهات رخام ميكانيكي وعادي للمباني والفلل',
      description: 'تركيب واجهات رخام ممتازة ضمن أعلى درجات الثبات والأمان، بالإضافة إلى العزل الحراري خلف الرخام وتوفير تشكيلات فخمة تناسب الواجهات المودرن والشيخية.'
    },
    {
      title: 'جلي وتلميع الرخام الطبيعي ومعالجة الكسور والفواصل',
      description: 'خدمات جلي وتلميع الرخام باستخدام المواد الكريستالية التي تعيد للرخام بريقه ولمعانه الزجاجي، مع معالجة الفواصل والشقوق بأجود أنواع الجولي الإيطالي.'
    },
    {
      title: 'ورشة تفصيل كل ما يخص الرخام والتصاميم الخاصة',
      description: 'نمتلك ورشة متكاملة لتفصيل بديل الرخام والشواهد وجميع الديكورات الرخامية حسب الطلب، مع التزام تام بالسرعة في التنفيذ والدقة في المواعيد بأسعار تنافسية.'
    }
  ];

  const galleryImages = [
    { src: '/unnamed (1).png', alt: 'تفصيل مغاسل رخام مودرن بالرياض' },
    { src: '/unnamed (2).png', alt: 'تفصيل طاولات رخام طعام ومجالس' },
    { src: '/unnamed (3).png', alt: 'معلم تركيب رخام أرضيات وجدران' },
    { src: '/unnamed (4).png', alt: 'جلي وتلميع أرضيات ومغاسل الرخام' },
    { src: '/unnamed (5).png', alt: 'تركيب واجهات رخام ميكانيكي' },
    { src: '/unnamed (6).png', alt: 'تفصيل تركيب درج رخام داخلي وخارجي' }
  ];

  return (
    <main className="min-h-screen bg-white text-gray-800 pb-20" style={{ direction: 'rtl', textAlign: 'right' }}>
      
      {/* الهيدر العلوي */}
      <header className="bg-gray-900 text-white py-3 px-4 flex justify-between items-center sticky top-0 z-40 shadow-md">
        <h1 className="text-sm md:text-xl font-bold text-yellow-400">
          تفصيل مغاسل رخام | طاولات | مجالس | تركيب درج رخام بالرياض
        </h1>
        <a 
          href="tel:0569962482" 
          className="bg-yellow-400 hover:bg-yellow-500 text-black px-3 py-1.5 rounded-lg font-bold flex items-center gap-1 text-xs md:text-sm transition"
        >
          اتصل بنا
        </a>
      </header>

      {/* القسم الرئيسي */}
      <section className="bg-gray-800 text-white py-10 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <h2 className="text-xl md:text-3xl font-extrabold text-yellow-400">
            أفضل معلم تركيب وتفصيل رخام بالرياض
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            مهما كانت فكرتك أو التصميم الذي ترغب في تطبيقه من الرخام، فإن ورشتنا بالرياض مستعدة لتحويله لواقع. نقدم خدمات تفصيل مغاسل رخام طبيعي وصناعي، تفصيل طاولات رخام، تفصيل قونطرات، تفصيل مشبات، وشبابيك وإطارات الرخام، بالإضافة إلى تركيب أرضيات ودرج وواجهات الرخام وصيانة وتعديل القطع القديمة وتغيير الأحواض التالفة.
          </p>
        </div>
      </section>

      {/* قسم المقالات والأوصاف */}
      <section className="max-w-5xl mx-auto py-10 px-4">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center">
          خدماتنا المتميزة في تفصيل وتركيب الرخام
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((item, index) => (
            <div key={index} className="bg-gray-50 border border-gray-200 p-5 rounded-xl shadow-sm hover:shadow-md transition">
              <h4 className="text-lg font-bold text-yellow-600 mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* معرض الصور */}
      <section className="bg-gray-100 py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center">
            معرض الأعمال والتصاميم
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="relative h-48 md:h-64 rounded-lg overflow-hidden shadow">
                <Image 
                  src={img.src} 
                  alt={img.alt} 
                  fill 
                  className="object-cover hover:scale-105 transition duration-300" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* زر الواتساب العائم */}
      <a 
        href="https://wa.me/966569962482" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-12 right-4 z-50 bg-green-600 hover:bg-green-700 text-white p-3.5 rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110"
        aria-label="Whatsapp"
      >
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
        </svg>
      </a>

      {/* زر الاتصال العائم */}
      <a 
        href="tel:0569962482" 
        className="fixed bottom-12 left-4 z-50 bg-green-600 hover:bg-green-700 text-white p-3.5 rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110"
        aria-label="Call"
      >
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
          <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
      </a>

      {/* الشريط السفلي */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-gray-900 text-white py-1.5 px-3 text-center shadow-lg border-t border-gray-800">
        <a 
          href="tel:0569962482" 
          className="text-xs md:text-sm font-semibold text-yellow-400 hover:underline inline-flex items-center justify-center gap-2"
        >
          <span>اتصل بنا الآن (معاينة واستشارة مجانية):</span>
          <span className="font-bold tracking-wider" style={{ direction: 'ltr' }}>0569962482</span>
        </a>
      </div>

    </main>
  );
}

