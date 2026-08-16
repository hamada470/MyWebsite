import Image from 'next/image';
import { Phone, MessageCircle } from 'lucide-react'; // تأكد من تثبيت lucide-react أو استخدام svg بديل

export default function Home() {
  // قائمة الكلمات المفتاحية والخدمات المفصلة مع محتوى غني بالـ SEO
  const keywords = [
    "تفصيل مغاسل رخام", "تركيب مغاسل رخام", "تفصيل طاولات رخام", 
    "تركيب رخام صناعي", "تركيب رخام طبيعي", "تفصيل مغاسل رخام صناعي وطبيعي", 
    "تركيب أرضيات رخام", "تركيب واجهات رخام", "معلم تركيب رخام", 
    "مغاسل رخام مودرن", "مغاسل رخام فخمة", "تفصيل مغاسل بالرياض",
    "معلم رخام ممتاز", "تركيب درج رخام", "جلي وتلميع رخام"
  ];

  const articles = [
    {
      title: "تفصيل مغاسل رخام مودرن وفخمة للمجالس والضيوف بالرياض",
      description: "مستويات الجودة والاحترافية. يتم التصميم عبر فريق من المهندسين والفنيين ذوي الخبرة الطويلة في تشكيل وقص الرخام باستخدام أحدث تقنيات Waterjet والفيزر لضمان زوايا حادة وحواف ناعمة. نقدم خدمة متكاملة تبدأ من أخذ المقاسات الدقيقة في موقعك، مروراً بالقص والتفصيل داخل ورشتنا، وصولاً إلى التركيب النهائي في موقعك مع ضمان شامل على الأعمال."
    },
    {
      title: "تفصيل مغاسل رخام صناعي وطبيعي بأحدث التصاميم",
      description: "تفصيل مجالس الرخام والديكورات الرخامية الفاخرة للصالات والمجالس. نوفر أفضل أنواع الرخام الطبيعي مثل الكالكاتا، الستاتواريو، والإمبيرادور، بالإضافة إلى الرخام الصناعي المقاوم للبقع والحرارة لضمان سهولة التنظيف والمحافظة على المظهر الجذاب، مع تقديم استشارات مجانية لاختيار نوع وألوان الرخام المناسبة لإضاءة ومساحة مجلسك."
    },
    {
      title: "تفصيل طاولات رخام طعام ومجالس واستقبال حسب الطلب",
      description: "نتميز بتفصيل طاولات رخام طعام ومجالس واستقبال حسب المقاسات والأشكال المطلوبة (دائري، مستطيل، بيضاوي). ندمج الرخام الطبيعي مع القواعد الحديدية الذهبية، حديد فورفورجيه، حديد مدهون، ستانلس ستيل ذهبي أو أسود، أو قواعد رخامية بالكامل، مع معالجة سطح الرخام بمواد حماية إيطالية لمنع امتصاص السوائل والزيوت."
    },
    {
      title: "تفصيل وتصنيع وتركيب درج رخام داخلي وخارجي باحترافية",
      description: "تركيب وتفصيل درجات الرخام للفلل والقصور بالرياض بكفاءة عالية. تشكيل الدرج الدائري، المستثيم، والدرج المعلق مع عمل بروفايلات حواف دائرية أو شطف ليزر، بالإضافة إلى تركيب الدرابزين الدائرية المضاءة لضمان سلامة أفراد الأسرة. كما نصمم الدرج الدائري والمعلق والمضيء باستخدام الإضاءات المخفية (LED)."
    },
    {
      title: "معلم تركيب رخام ممتاز بالرياض (أرضيات وجدران)",
      description: "أفضل معلم تركيب أرضيات رخام وجدران بالرياض مع مطابقة العروق والتطشير (Book-match). نستخدم أفضل خلطات التركيب وسيمينت بورد ومواد الغراء المخصصة التي تمنع ظهور التزهير أو بقع الرطوبة تحت الرخام مستقبلاً، لضمان استواء السطح تماماً بدون أي بروز أو تفاوت بين الألواح."
    },
    {
      title: "تركيب واجهات رخام ميكانيكي وعادي للفلل والمباني",
      description: "متخصصون في تركيب واجهات الرخام الميكانيكي والعادي بأعلى درجات الأمان والثبات باستخدام الزوايا والبراغي المفتوحة المجلفنة المقاومة للصدأ. تضمن طريقة التركيب الميكانيكي أقصى درجات الثبات والأمان، بالإضافة إلى إمكانية تركيب العزل الحراري خلف الرخام لتخفيض استهلاك الطاقة."
    },
    {
      title: "جلي وتلميع الرخام الطبيعي ومعالجة الكسور والفواصل",
      description: "خدمات جلي وتلميع الأرضيات والمغاسل الرخامية بالماس والكريستال. نعالج الحفر والشكوك باستخدام مادة الجلاكسي أو الإيبوكسي المقوى المصممة خصيصاً بمادة الجولي الملونة التي تطابق لون الرخام تماماً، وأخيراً التلميع بالكريستال الإيطالي الذي يعيد للرخام بريقه ولمعانه الزجاجي الساحر."
    },
    {
      title: "ورشة تفصيل كل ما يخص الرخام والتصاميم الخاصة",
      description: "نمتلك ورشة متكاملة لتفصيل المغاسل، الطاولات، المداخل، والقطع الديكورية، ونقوم أيضاً بتصنيع بديل الرخام وبديل الخشب حسب الطلب. نلتزم دائماً بالسرعة في التنفيذ، دقة المواعد، وتقديم أسعار تنافسية مدروسة تناسب كافة ميزانيات مشاريعكم."
    }
  ];

  const galleryImages = [
    { src: '/unnamed (1).png', alt: 'تفصيل مغاسل رخام مودرن بالرياض للمجالس والضيوف' },
    { src: '/unnamed (2).png', alt: 'تفصيل طاولات رخام طعام ومجالس فاخرة' },
    { src: '/unnamed (3).png', alt: 'معلم تركيب رخام أرضيات وجدران بالرياض' },
    { src: '/unnamed (4).png', alt: 'جلي وتلميع أرضيات ومغاسل الرخام الطبيعي' },
    { src: '/unnamed (5).png', alt: 'تركيب واجهات رخام ميكانيكي وعادي للفلل' },
    { src: '/unnamed (6).png', alt: 'تفصيل وتكريب درج رخام داخلي وخارجي' },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-800 pb-20" style={{ direction: 'rtl', textAlign: 'right' }}>
      
      {/* الهيدر العلوي */}
      <header className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center sticky top-0 z-40 shadow-md">
        <h1 className="text-base md:text-xl font-bold text-yellow-400">
          تفصيل مغاسل رخام | طاولات | مجالس | تركيب درج رخام بالرياض
        </h1>
        <a 
          href="tel:0569962482" 
          className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg font-bold flex items-center gap-2 text-sm transition-all"
        >
          اتصل بنا
        </a>
      </header>

      {/* القسم الرئيسي / البنر */}
      <section className="bg-gray-800 text-white py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            أفضل ورشة تفصيل وتشكيل كافة أعمال الرخام بالرياض
          </h2>
          <p className="text-sm md:text-lg text-gray-300 leading-relaxed mb-6">
            تفصيل مغاسل الرخام، تفصيل مغاسل رخام فخمة، تفصيل طاولات رخام، تركيب رخام صناعي وطبيعي، تركيب أرضيات رخام، تركيب واجهات رخام بالرياض بأعلى جودة وأفضل أسعار.
          </p>

          {/* وسوم الكلمات المفتاحية (SEO Tags) */}
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {keywords.map((tag, index) => (
              <span key={index} className="bg-gray-700 text-yellow-300 text-xs px-3 py-1 rounded-full border border-gray-600">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* قسم المقالات والخدمات المفصلة */}
      <section className="max-w-5xl mx-auto py-10 px-4">
        <h3 className="text-xl md:text-2xl font-bold text-center text-gray-900 mb-8 border-b pb-2">
          دليل خدماتنا التفصيلي لمشاريع الرخام بالرياض
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((item, idx) => (
            <div key={idx} className="bg-gray-50 border border-gray-200 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
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
