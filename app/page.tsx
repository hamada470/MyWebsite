'use client'
import Navbar from '@/components/Navbar'
import Nav from '../components/Nav'
import { useState } from 'react'
import { TbTruckDelivery } from 'react-icons/tb'
import { GrConfigure } from 'react-icons/gr'
import { FaBoxes } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')

  const articles = [
    {
      title: 'مهارات تفصيل مغاسل الرخام',
      description: (
        <p className='text-xl leading-[3rem]'>
          تعتبر مهارة <strong>تفصيل مغاسل الرخام</strong> بالرياض من أحدث صيحات الديكور المودرن. يجب أن يكون الفني على دراية كاملة بأحدث التقنيات لقص وتشكيل الرخام الطبيعي والصناعي بدقة عالية، مع ضمان تجنب التشققات والانحرافات أثناء التركيب للحصول على مظهر فندقي فاخر.
        </p>
      )
    },
    {
      title: 'مهارات تفصيل طاولات الرخام',
      description: (
        <p className='text-xl leading-[3rem]'>
          يتطلب <strong>تفصيل طاولات الرخام</strong> دقة متناهية في اختيار نوع الرخام المناسب وقص حواف الطاولة وتشطيبها بأعلى معايير الجودة. نضمن تنفيذ جميع أشكال طاولات المجالس والصالات والطعام حسب الطلب وبالمقاسات الدقيقة.
        </p>
      )
    },
    {
      title: 'معلم تركيب رخام بالرياض',
      description: (
        <p className='text-xl leading-[3rem]'>
          يعتبر <strong>تركيب الرخام الصحيح</strong> جزءاً أساسياً لضمان استدامة وجمال الأرضيات والواجهات والمغاسل. يمتلك كادرنا خبرة واسعة في تركيب كافة أنواع الرخام مع تقديم خدمات الجلي والتلميع والصيانة الدورية بالرياض.
        </p>
      )
    }
  ]

  return (
    <main className="min-h-screen bg-white text-gray-800 dir-rtl">
      <Navbar />
      <Nav />

      {/* القسم الرئيسي */}
      <section id="home" className="relative bg-gray-900 text-white py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            تفصيل مغاسل رخام وطاولات رخام بالرياض
          </motion.h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            أفضل ورشة تفصيل مغاسل رخام طبيعي وصناعي، طاولات مجالس وطعام، وتركيب جميع أنواع الرخام بأعلى جودة.
          </p>
          <div className="inline-block bg-yellow-400 text-black font-bold text-2xl px-8 py-3 rounded-lg shadow-lg">
            0569962482
          </div>
        </div>
      </section>

      {/* المميزات */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-xl shadow-sm flex flex-col items-center">
            <TbTruckDelivery className="text-5xl text-yellow-500 mb-4" />
            <h3 className="font-bold text-xl mb-2">سرعة التوصيل والتركيب</h3>
            <p className="text-gray-600 text-sm">التزام تام بالمواعيد ونقل آمن لجميع أعمال الرخام.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm flex flex-col items-center">
            <GrConfigure className="text-5xl text-yellow-500 mb-4" />
            <h3 className="font-bold text-xl mb-2">تصاميم حسب الطلب</h3>
            <p className="text-gray-600 text-sm">تفصيل مغاسل وطاولات رخام بكافة المقاسات والأشكال المودرن.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm flex flex-col items-center">
            <FaBoxes className="text-5xl text-yellow-500 mb-4" />
            <h3 className="font-bold text-xl mb-2">جودة الرخام</h3>
            <p className="text-gray-600 text-sm">نوفر أجود أنواع الرخام الطبيعي والصناعي لضمان أعلى جودة.</p>
          </div>
        </div>
      </section>

      {/* قسم المقالات والأوصاف */}
      <section id="aboutUs" className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">خدماتنا بالتفصيل</h2>
        <div className="space-y-12">
          {articles.map((item, index) => (
            <div key={index} className="border-b pb-8">
              <h3 className="text-2xl font-bold mb-4 text-yellow-600">{item.title}</h3>
              {item.description}
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
