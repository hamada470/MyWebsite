import Image from 'next/image';
import { Phone, MessageCircle } from 'lucide-react';

export default function Home() {
  const keywords = [
    "تفصيل مغاسل رخام", "تركيب مغاسل رخام", "تفصيل طاولات رخام",
    "تركيب رخام صناعي", "تركيب رخام طبيعي", "تفصيل مغاسل رخام صناعي وطبيعي",
    "تركيب أرضيات رخام", "تركيب واجهات رخام", "معلم تركيب رخام",
    "مغاسل رخام مودرن", "مغاسل رخام فخمة", "تفصيل مغاسل بالرياض",
    "معلم رخام ممتاز", "تركيب درج رخام", "جلي ولميع رخام"
  ];

  const articles = [
    {
      title: "تفصيل مغاسل رخام مودرن وفخمة للمجالس والضيوف بالرياض",
      description: "أعلى مستويات الجودة الاحترافية، يتم التصميم عبر فريق من المهندسين والفنيين ذوي الخبرة الطويلة في تشكيل وقص الرخام باستخدام أحدث التقنيات."
    },
    {
      title: "تفصيل مغاسل رخام صناعي وطبيعي بأحدث التصاميم",
      description: "متخصصون في تفصيل مغاسل الرخام الفخمة، مع تقديم استشارات مجانية لاختيار نوع وألوان الرخام المناسبة لإضاءة ومساحة مجلسك."
    },
    {
      title: "تفصيل طاولات رخام طعام ومجالس واستقبال حسب الطلب",
      description: "تصميم طاولات رخام بقواعد حديد مذهب أو أسود أو قواعد رخامية بالكامل، مع معالجة سطح الرخام بسواد حماية إيطالية لمنع امتصاص السوائل والزيوت."
    },
    {
      title: "تفصيل وتصنيع وتركيب درج رخام داخلي وخارجي باحترافية",
      description: "تركيب وتفصيل درج الرخام الفخم بأعلى معايير السلامة والجودة، مع إضافة الإضاءات المخفية."
    },
    {
      title: "معلم تركيب رخام ممتاز بالرياض (أرضيات وجدران)",
      description: "أفضل معلم تركيب أرضيات رخام وجدران بالرياض مع مطابقة العروق والتقطير لضمان مظهر فخم بدون أي بروز."
    },
    {
      title: "تركيب واجهات رخام ميكانيكي وعادي للفلل والمباني",      description: "طريقة التركيب الميكانيكي يضمن أعلى درجات الثبات والأمان، بالإضافة إلى العزل الحراري خلف الرخام."
    },
    {
      title: "جلي وتلميع الرخام الطبيعي ومعالجة الكسور والفواصل",
      description: "خدمات جلي وتلميع الرخام باستخدام المواد الكريستالية التي تعيد للرخام بريقه ولمعانه الزجاجي."
    },
    {
      title: "ورشة تفصيل كل ما يخص الرخام والتصاميم الخاصة",
      description: "تفصيل بديل الرخام وبديل الخشب حسب الطلب، التزام تام بالسرعة في التنفيذ والدقة في المواعيد."
    }
  ];

  const galleryImages = [
    { src: '/unnamed (1).png', alt: 'تفصيل مغاسل رخام مودرن بالرياض للمجالس والضيوف' },
    { src: '/unnamed (2).png', alt: 'تفصيل طاولات رخام طعام ومجالس فخمة' },
    { src: '/unnamed (3).png', alt: 'معلم تركيب رخام أرضيات وجدران بالرياض' },
    { src: '/unnamed (4).png', alt: 'جلي وتلميع أرضيات ومغاسل الرخام الطبيعي' },
    { src: '/unnamed (5).png', alt: 'تركيب واجهات رخام ميكانيكي وعادي للفلل' },
    { src: '/unnamed (6).png', alt: 'تفصيل وتركيب درج رخام داخلي وخارجي' }
  ];

  return (
    <main className="min-h-screen bg-white text-gray-800 pb-16" style={{ direction: 'rtl', textAlign: 'right' }}>
      {/* الهيدر العلوي */}
      <header className="bg-gray-900 text-white py-3 px-4 flex justify-between items-center sticky top-0 z-40 shadow-md">
        <h1 className="text-base md:text-xl font-bold text-yellow-400">
          تفصيل مغاسل رخام | طاولات | مجالس | تركيب درج رخام بالرياض
        </h1>
        <a
          href="tel:0569962482"
          className="bg-yellow-400 hover:bg-yellow-500 text-black px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 text-sm"
        >
          <Phone className="w-4 h-4" />
          اتصل بنا
        </a>
      </header>

      {/* القسم الرئيسي / البنر */}
      <section className="bg-gray-800 text-white py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            أفضل ورشة تفصيل وتشكيل كافة أعمال الرخام بالرياض
          </h2>
          <p className="text-gray-300 text-base md:text-lg mb-6 leading-relaxed">
            متخصصون في تفصيل مجالس الرخام، تفصيل مغاسل رخام فخمة، تفصيل طاولات رخام، تركيب وتفصيل درج رخام، وتركيب وجلي كافة أنواع الرخام بأعلى جودة بمدينة الرياض.
          </p>
          <a
            href="tel:0569962482"
            className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-extrabold px-6 py-3 rounded-xl text-lg shadow-lg"
          >
            <Phone className="w-5 h-5" />
            اتصل الآن للحصول على استشارة ومقاسات مجانية: 0569962482
          </a>
        </div>
      </section>

      {/* الأيقونات العائمة (واتساب على اليمين والاتصال على اليسار) */}
      <div className="fixed bottom-12 left-0 right-0 px-4 flex justify-between items-center pointer-events-none z-50">
        {/* أيقونة الاتصال - على اليسار */}
        <a
          href="tel:0569962482"
          className="pointer-events-auto bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-2xl flex items-center justify-center gap-1.5 font-bold text-sm transform hover:scale-105 transition-all"
        >
          <Phone className="w-6 h-6" />
          <span>اطلب الآن</span>
        </a>

        {/* أيقونة الواتساب - على اليمين */}
        <a
          href="https://wa.me/966569962482"
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 rounded-full shadow-2xl flex items-center justify-center transform hover:scale-105 transition-all"
        >
          <MessageCircle className="w-7 h-7" />
        </a>
      </div>

      {/* الشريط السفلي الثابت (أنحف وأصغر مع سماعة اتصال بجانب الرقم) */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-950 text-white py-1.5 px-3 z-40 border-t border-gray-800 shadow-2xl text-center">
        <a
          href="tel:0569962482"
          className="inline-flex items-center justify-center gap-1.5 text-xs md:text-sm font-semibold hover:text-yellow-400 transition-colors"
        >
          <span>اتصل بنا الآن (معاينة واستشارة مجانية):</span>
          <span className="text-yellow-400 font-bold flex items-center gap-1 dir-ltr">
            <Phone className="w-3.5 h-3.5" />
            0569962482
          </span>
        </a>
      </div>
    </main>
  );
}
              <h4 className="text-lg font-bold text-yellow-600 mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* معرض الصور */}
      <section className="bg-gray-100 py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-xl md:text-2xl font-bold text-center text-gray-900 mb-6">
            صور من أعمالنا في تفصيل وتركيب الرخام
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="relative h-48 w-full rounded-lg overflow-hidden shadow">
                <Image 
                  src={img.src} 
                  alt={img.alt} 
                  fill 
                  className="object-cover hover:scale-105 transition-transform duration-300" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* الأيقونات العائمة (واتساب على اليمين - اتصال على اليسار) */}
      <div className="fixed bottom-12 left-0 right-0 z-50 pointer-events-none px-4 flex justify-between items-center max-w-screen-xl mx-auto">
        
        {/* أيقونة الواتساب - اليمين */}
        <a 
          href="https://wa.me/966569962482" 
          target="_blank" 
          rel="noopener noreferrer"
          className="pointer-events-auto bg-green-500 hover:bg-green-600 text-white p-3 md:p-4 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110"
          aria-label="تواصل عبر الواتساب"
        >
          <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
        </a>

        {/* أيقونة الاتصال - اليسار */}
        <a 
          href="tel:0569962482" 
          className="pointer-events-auto bg-green-600 hover:bg-green-700 text-white p-3 md:p-4 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110"
          aria-label="اتصل بنا"
        >
          <Phone className="w-6 h-6 md:w-7 md:h-7" />
        </a>

      </div>

      {/* الشريط الأسود الثابت السفلي (حجم أصغر وأرفع وغير عائق) */}
      <div className="fixed bottom-0 left-0 right-0 bg-black/90 text-white py-1.5 px-3 z-40 shadow-lg border-t border-gray-800">
        <div className="max-w-4xl mx-auto flex justify-between items-center text-xs md:text-sm">
          <span className="font-medium text-yellow-400 truncate">
            اتصل بنا الآن (معاينة واستشارة مجانية):
          </span>
          <a 
            href="tel:0569962482" 
            className="font-bold text-yellow-400 hover:underline tracking-wider ml-2"
          >
            0569962482
          </a>
        </div>
      </div>

    </main>
  );
}
