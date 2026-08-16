import Image from 'next/image';

export default function Home() {
  const articles = [
    {
      title: 'تفصيل مغاسل رخام مودرن وفخمة للمجالس',
      description: 'نحن متخصصون في تفصيل مغاسل رخام طبيعي وصناعي للمجالس والفلل بأحدث التصاميم المودرن والهيدروليك. نصلك لأي مكان بالرياض لأخذ المقاسات وتصميم أحواض رخام مخفية ومزدوجة ومغاسل ضيوف فاخرة حسب الطلب.'
    },
    {
      title: 'تفصيل مجالس الرخام والديكورات الرخامية',
      description: 'نقدم تفصيل كافة ديكورات ومجالس الرخام الفاخرة، بما يشمل الشواهد، الجلسات، كاونترات الرخام، وشاشات الجبس والرخام المدمجة لتضفي لمسة فخامة استثنائية على مجلسك.'
    },
    {
      title: 'تفصيل طاولات رخام طعام ومجالس واستقبال',
      description: 'تصميم وتفصيل كافة أنواع طاولات الرخام الطبيعي والصناعي (طاولات طعام رخام، طاولات مجالس، طاولات خدمة، طاولات قهوة ورخام كاونتر واستقبال) بأجود أنواع الرخام مثل الكالكاتا والإمبيرادور والرمادي.'
    },
    {
      title: 'تفصيل وتركيب درج رخام داخلي وخارجي',
      description: 'نوفر أحدث تصاميم تفصيل وتركيب درج الرخام الدائري والمستقيم (درج رخام داخلي، درج خارجي للمباني) مع عمل البرم والشطف وإضافة شرائح المانع للانزلاق بأدق المقاسات بمدينة الرياض.'
    },
    {
      title: 'معلم تركيب رخام ممتاز بالرياض (أرضيات وجدران)',
      description: 'خدمات تركيب رخام أرضيات وجدران للمنازل والقصور والمحلات التجارية على أيدي معلم تركيب رخام محترف. نستخدم أحدث أجهزة الليزر لضمان استواء السطح ومنع التفاوت أو الفواصل المزعجة.'
    },
    {
      title: 'تركيب واجهات رخام ميكانيكي وعادي بالرياض',
      description: 'تنفيذ وتركيب واجهات رخام ميكانيكي وعادي للمباني والفلل والعمائر باحترافية عالية تضمن الأمان الصلب ومقاومة العوامل الجوية والحرارة العالية مع ضمان على جودة التركيب.'
    },
    {
      title: 'جلي وتلميع الرخام الطبيعي ومعالجة الفواصل',
      description: 'خدمات جلي وتلميع أرضيات الرخام والمغاسل والدرج مع معالجة الكسور والفواصل والجلي بالألماس والتلميع بمادة الكريستال الإيطالي لإعادة لمعان بريق الرخام وكأنه جديد تماماً.'
    },
    {
      title: 'ورشة تفصيل كل ما يخص الرخام بالرياض',
      description: 'نلبي كافة طلبات تفصيل وتشكيل الرخام: شبابيك رخام، إطارات ومداخل رخام، شواهد ومجالس رخام، مطابخ رخام صناعي وطبيعي، وصيانة وتعديل كافة أعمال الرخام بأقل الأسعار.'
    }
  ];

  const galleryImages = [
    { src: '/unnamed (1).png', alt: 'تفصيل مغاسل رخام مودرن بالرياض للمجالس والضيوف' },
    { src: '/unnamed (2).png', alt: 'تفصيل طاولات رخام طعام ومجالس فاخرة' },
    { src: '/unnamed (3).png', alt: 'معلم تركيب رخام أرضيات وجدران بالرياض' },
    { src: '/unnamed (4).png', alt: 'جلي وتلميع أرضيات ومغاسل الرخام الطبيعي' },
    { src: '/unnamed (5).png', alt: 'تركيب واجهات رخام ميكانيكي وعادي للفلل' },
    { src: '/unnamed (6).png', alt: 'تفصيل وتركيب درج رخام داخلي وخارجي' }
  ];

  return (
    <main className="min-h-screen bg-white text-gray-800" style={{ direction: 'rtl', textAlign: 'right' }}>
      
      {/* الهيدر العلوي */}
      <header className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center sticky top-0 z-40 shadow-md">
        <h1 className="text-base md:text-xl font-bold text-yellow-400">
          تفصيل مغاسل رخام | طاولات | مجالس | تركيب درج رخام بالرياض
        </h1>
        <a 
          href="tel:0569962402" 
          className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg font-bold flex items-center gap-2 transition-all text-sm md:text-base shrink-0"
        >
          اتصل بنا
        </a>
      </header>

      {/* قسم Hero الرئيسي */}
      <section className="bg-gray-800 text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
            أفضل ورشة تفصيل وتشكيل كافة أعمال الرخام بالرياض
          </h2>
          <p className="mb-8 text-gray-300 text-lg md:text-xl leading-relaxed">
            متخصصون في تفصيل مجالس الرخام، تفصيل مغاسل رخام فخمة، تفصيل طاولات رخام، تركيب وتفصيل درج رخام، وتركيب وجلي كافة أنواع الرخام بأعلى جودة بمدينة الرياض.
          </p>
          <a 
            href="tel:0569962402" 
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-xl md:text-2xl px-8 py-4 rounded-xl shadow-lg transition-transform hover:scale-105"
          >
            اتصل الآن للحصول على استشارة ومقاسات مجانية: 0569962402
          </a>
        </div>
      </section>

      {/* معرض الأعمال */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-3 text-gray-900">معرض أعمال تفصيل وتركيب الرخام بالرياض</h2>
        <p className="text-center text-gray-600 mb-10">نستعرض لكم صور واقعية من أعمال تفصيل المغاسل والمجالس والطاولات والدرج والتركيب والجلي</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <div key={idx} className="overflow-hidden rounded-xl shadow-lg border border-gray-200 relative h-64 group">
              <Image 
                src={img.src} 
                alt={img.alt} 
                fill 
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </section>

      {/* تفاصيل الخدمات والكلمات المفتاحية */}
      <section className="py-12 px-6 max-w-4xl mx-auto bg-gray-50 rounded-2xl my-8 border border-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">خدماتنا الشاملة في تفصيل وتشكيل وتركيب الرخام</h2>
        <div className="space-y-8">
          {articles.map((item, index) => (
            <article key={index} className="border-b border-gray-200 pb-6 last:border-0">
              <h3 className="text-2xl font-bold mb-3 text-yellow-600">{item.title}</h3>
              <p className="text-lg leading-relaxed text-gray-700">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* فقرة الـ SEO المحلي */}
      <section className="py-8 px-6 max-w-4xl mx-auto text-gray-600 text-sm leading-relaxed">
        <p>
          نحن في ورشتنا نقدم حلولاً متكاملة في <strong>تفصيل كل ما يخص الرخام بالرياض</strong>. سواء كنت تبحث عن <strong>تفصيل مجالس رخام</strong>، أو <strong>تفصيل مغاسل رخام</strong> طبيعي وصناعي للمجالس والصالات، أو <strong>تفصيل طاولات رخام</strong> طعام واستقبال، بالإضافة إلى خدمات <strong>تفصيل وتركيب درج رخام</strong>، وتوفير خيرة خبرات <strong>معلم تركيب رخام بالرياض</strong> للواجهات والأرضيات والجدران مع خدمات الجلي والتلميع.
        </p>
      </section>

      {/* زر الاتصال الثابت */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gray-900 text-white text-center shadow-2xl z-50 border-t border-yellow-500">
        <a href="tel:0569962402" className="flex justify-center items-center gap-2 font-bold text-lg md:text-xl text-yellow-400">
          <span>اتصل بنا الآن (معاينة واستشارة مجانية): 0569962402</span>
        </a>
      </div>

      <div className="h-20"></div>
    </main>
  );
}
