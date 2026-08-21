// قم بتحديث جزء الـ metadata في الكود لديك كالتالي:
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
  // ... بقية الـ metadata
};

// داخل الـ Home component، قم بتعديل جزء معرض الصور وزر الواتساب:

export default function Home() {
  // ... بقية المتغيرات

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 dir-rtl">
      
      {/* زر الواتساب المهتز الكبير */}
      <a
        href="https://wa.me/966569962482"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-6 rounded-full shadow-2xl hover:scale-110 transition-transform animate-[pulse_0.5s_infinite]"
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

      {/* ... بقية المحتوى */}

      {/* تعديل الصور لإخفاء المعطل منها */}
      <section className="py-12 px-4 max-w-7xl mx-auto bg-gray-100 rounded-3xl my-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-slate-800">معرض أعمالنا</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((imagePath, index) => (
            <div key={index} className="relative h-64 rounded-lg overflow-hidden shadow-sm bg-white border border-gray-200">
              <Image
                src={imagePath}
                alt="تفصيل مغاسل رخام بالرياض"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                onError={(e: any) => {
                  e.currentTarget.style.display = 'none'; // إخفاء الصورة في حال الفشل
                }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ... Footer */}
    </main>
  );
}
