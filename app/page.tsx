'use client'
import { useState } from 'react'

export default function Home() {
  const articles = [
    { title: 'مهارات تفصيل مغاسل الرخام', description: 'نعتمد على أحدث التقنيات لقص وتشكيل الرخام الطبيعي والصناعي بدقة عالية مع ضمان مظهر فندقي فاخر.' },
    { title: 'مهارات تفصيل طاولات الرخام', description: 'يتطلب تفصيل طاولات الرخام دقة متناهية، لتنفيذ طاولات المجالس والصالات وطاولات الطعام حسب المقاس المطلوب.' },
    { title: 'معلم تركيب رخام بالرياض', description: 'تركيب الرخام الصحيح يضمن استدامة وجمال الأرضيات والواجهات والمغاسل بخبرة واسعة.' },
    { title: 'تفصيل وتركيب درج رخام', description: 'ننفذ درج داخلي وخارجي للفلل والقصور بتصميمات هندسية دقيقة وأفضل أنواع الرخام.' },
    { title: 'تركيب واجهات رخام للفلل', description: 'خدمات تركيب واجهات رخام ميكانيكي وعادي للمباني مما يعطي مظهراً فخماً ويثبت بمتانة عالية.' },
    { title: 'جلي وتلميع الرخام والأرضيات', description: 'إزالة الخدوش والبقع واستعادة لمعان البريق الطبيعي للأرضيات والمغاسل لتصبح جديدة كلياً.' },
    { title: 'صيانة وترميم مغاسل وطاولات الرخام', description: 'نوفر خدمات الصيانة الشاملة، معالجة الكسور، وتعديل الفواصل، وتغيير الأحواض التالفة.' }
  ]

  const galleryImages = [
    { src: '/unnamed (1).png', alt: 'أعمال مغاسل الرخام' },
    { src: '/unnamed (2).png', alt: 'تصاميم طاولات رخام' },
    { src: '/unnamed (3).png', alt: 'تركيب رخام احترافي' },
    { src: '/unnamed (4).png', alt: 'جلي وتلميع رخام' },
    { src: '/unnamed (5).png', alt: 'واجهات رخام للفلل' },
    { src: '/unnamed (6).png', alt: 'تفصيل درج رخام' },
  ]

  return (
    <main className="min-h-screen bg-white text-gray-800 dir-rtl">
      <header className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold">تفصيل مغاسل وطاولات رخام</h1>
        <a href="tel:0569962482" className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-bold">0569962482</a>
      </header>

      <section className="bg-gray-800 text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">تفصيل مغاسل رخام وطاولات رخام بالرياض</h2>
          <a href="tel:0569962482" className="inline-block bg-yellow-400 text-black font-bold text-2xl px-8 py-3 rounded-lg shadow-lg">0569962482</a>
        </div>
      </section>

      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">معرض أعمالنا</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <div key={idx} className="overflow-hidden rounded-xl shadow-md border bg-gray-50 border-gray-200">
              <img src={img.src} alt={img.alt} className="w-full h-56 object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">خدماتنا</h2>
        <div className="space-y-8">
          {articles.map((item, index) => (
            <div key={index} className="border-b pb-6">
              <h3 className="text-2xl font-bold mb-3 text-yellow-600">{item.title}</h3>
              <p className="text-lg leading-relaxed text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
