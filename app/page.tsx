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
    }
  ]

  return (
    <main className="min-h-screen bg-white text-gray-800 dir-rtl">
      {/* هيدر بسيط */}
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
