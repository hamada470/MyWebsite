import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'تفصيل مغاسل رخام بالرياض | 0569962482',
  description: 'أفضل ورشة تفصيل مغاسل رخام وطاولات بالرياض.',
};

export default function Home() {
  const articles = [
    { title: 'تفصيل مغاسل رخام مودرن', description: 'تصاميم عصرية للمغاسل بجودة عالية.' },
    { title: 'تفصيل طاولات رخام', description: 'طاولات رخام فاخرة ومخصصة بالكامل.' },
    { title: 'تركيب رخام الواجهات', description: 'تركيب احترافي للواجهات والأعمدة.' },
    { title: 'تركيب أرضيات رخام', description: 'تركيب أرضيات بدقة عالية ومنسوب ممتاز.' }
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800" dir="rtl">
      
      {/* شريط الاتصال العلوي */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-slate-900 py-3 px-4 shadow-md flex justify-between items-center">
        <span className="text-white font-bold">ورشة رخام الرياض</span>
        <a href="tel:0569962482" className="bg-emerald-600 text-white font-bold py-2 px-6 rounded-full">اتصل الآن</a>
      </div>

      {/* زر الواتساب المهتز */}
      <a href="https://wa.me/966569962482" target="_blank" rel="noopener noreferrer" 
         className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-5 rounded-full shadow-2xl"
         style={{ animation: 'shake 0.3s infinite alternate' }}>
        <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.219 0-5.859 2.641-5.859 5.859 0 1.031.281 2.016.797 2.859l-1.078 3.938 4.047-1.078c.844.469 1.828.719 2.859.719 3.219 0 5.859-2.641 5.859-5.859s-2.641-5.859-5.859-5.859zm0 0"/></svg>
      </a>

      <style jsx global>{`
        @keyframes shake {
          0% { transform: rotate(0deg) scale(1); }
          100% { transform: rotate(10deg) scale(1.1); }
        }
      `}</style>

      {/* المحتوى */}
      <section className="pt-28 pb-16 px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">تفصيل مغاسل رخام بالرياض</h1>
        <p className="text-lg text-gray-600">أفضل ورشة متخصصة في تفصيل المغاسل وطاولات الرخام.</p>
      </section>

      <section className="px-4 pb-12 max-w-4xl mx-auto">
        <div className="grid gap-6">
          {articles.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow">
              <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
              <p className="text-xl text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
