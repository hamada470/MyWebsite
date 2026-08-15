'use client'
import { useState } from 'react'

export default function Home() {
  const articles = [
    {
      title: 'مهارات تفصيل مغاسل الرخام',
      description: 'تعتبر مهارة تفصيل مغاسل الرخام بالرياض من أحدث صيحات الديكور المودرن. نعتمد على أحدث التقنيات لقص وتشكيل الرخام الطبيعي والصناعي بدقة عالية مع ضمان مظهر فندقي فاخر.'
    },
    {
      title: 'مهارات تفصيل طاولات الرخام',
      description: 'يتطلب تفصيل طاولات الرخام دقة متناهية في اختيار نوع الرخام وقص التشطيبات بأعلى معايير الجودة، لتنفيذ طاولات المجالس والصالات وطاولات الطعام حسب المقاس المطلوب.'
    },
    {
      title: 'معلم تركيب رخام بالرياض',
      description: 'تركيب الرخام الصحيح يضمن استدامة وجمال الأرضيات والواجهات والمغاسل. يمتلك كادرنا خبرة واسعة في تركيب الرخام وجليه وتلميعه بالرياض.'
    },
    {
      title: 'تفصيل وتركيب درج رخام',
      description: 'ننفذ درج داخلي وخارجي للفلل والقصور بالرياض بتصميمات هندسية دقيقة، مع قص الأطراف وتركيب البوستر والدرج السكني والتجاري بأفضل أنواع الرخام.'
    },
    {
      title: 'تركيب واجهات رخام للفلل',
      description: 'نقدم خدمات تركيب واجهات رخام ميكانيكي وعادي للمباني والفلل والقصور، مما يعطي مظهراً فخماً ويثبت بمتانة عالية لمقاومة العوامل الجوية.'
    },
    {
      title: 'جلي وتلميع الرخام والأرضيات',
      description: 'خدمة جلي وتلميع الرخام بالكريستال وإزالة الخدوش والبقع واستعادة لمعان البريق الطبيعي للأرضيات والمغاسل والسلالم القديمة لتصبح جديدة كلياً.'
    },
    {
      title: 'صيانة وترميم مغاسل وطاولات الرخام',
      description: 'نوفر خدمات الصيانة الشاملة، معالجة الكسور، وتعديل الفواصل، وتغيير الأحواض التالفة وإعادة تلميع مغاسل وطاولات الرخام بالمنزل.'
    }
  ]

  const galleryImages = [
    { src: '/img1.jpg', alt: 'تفصيل مغاسل رخام مودرن' },
    { src: '/img2.jpg', alt: 'طاولات رخام مجالس' },
    { src: '/img3.jpg', alt: 'تركيب وتفصيل رخام' },
    { src: '/image1.jfif', alt: 'تصاميم مغاسل رخام' },
    { src: '/image2.jfif', alt: 'طاولات طعام رخام' },
    { src: '/image3.jfif', alt: 'أعمال تركيب رخام بالرياض' },
  ]

  return (
    <main className="min-h-screen bg-white text-gray-800 dir-rtl">
      {/* هيدر علوي */}
      <header className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold">تفصيل مغاسل وطاولات رخام</h1>
        <a href="tel:0569962482" className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-bold">
          اتصل الآن: 0569962482
        </a>
      </header>

      {/* الواجهة الرئيسية */}
      <section className="bg-gray-800 text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            تفصيل مغاسل رخام وطاولات رخام بالرياض
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            أفضل ورشة تفصيل مغاسل رخام طبيعي وصناعي، طاولات مجالس وطعام، وتركيب جميع أنواع الرخام بأعلى جودة.
          </p>
          <a 
            href="tel:0569962482" 
            className="inline-block bg-yellow-400 text-black font-bold text-2xl px-8 py-3 rounded-lg shadow-lg"
          >
            0569962482
          </a>
        </div>
      </section>

      {/* معرض الصور المرفوعة */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">معرض أعمالنا</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <div key={idx} className="overflow-hidden rounded-xl shadow-md border bg-gray-50 border-gray-200">
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
              />
              <p className="p-3 text-center font-bold text-gray-700">{img.alt}</p>
            </div>
          ))}
        </div>
      </section>

      {/* قسم الخدمات والأوصاف */}
      <section className="py-12 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">خدماتنا بالتفصيل</h2>
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
