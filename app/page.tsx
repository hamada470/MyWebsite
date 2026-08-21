import React from 'react';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f9fafb', direction: 'rtl', paddingBottom: '80px', fontFamily: 'sans-serif' }}>
      
      {/* شريط الاتصال العلوي الثابت */}
      <div style={{ position: 'sticky', top: 0, zIndex: 100, padding: '15px 20px', backgroundColor: '#0f172a', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 5px rgba(0,0,0,0.2)' }}>
        <span style={{ fontWeight: 'bold', fontSize: '16px' }}>ورشة رخام الرياض</span>
        <a href="tel:0569962482" style={{ backgroundColor: '#059669', color: '#fff', padding: '10px 20px', borderRadius: '25px', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px' }}>
          📞 اتصل الآن
        </a>
      </div>

      {/* العنوان الرئيسي */}
      <section style={{ padding: '40px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '10px', color: '#1e293b' }}>تفصيل مغاسل رخام بالرياض وطاولات مودرن</h1>
        <p style={{ fontSize: '16px', color: '#4b5563' }}>جودة عالية وسرعة في التنفيذ لجميع أعمال الرخام الطبيعي والصناعي</p>
      </section>

      {/* الـ 6 أقسام للخدمات */}
      <section style={{ padding: '0 20px', maxWidth: '800px', margin: '0 auto', display: 'grid', gap: '20px' }}>
        
        <div style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid #e5e7eb' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1e293b', marginBottom: '10px' }}>1. تفصيل مغاسل رخام مودرن</h2>
          <p style={{ fontSize: '15px', color: '#4b5563', lineHeight: '1.6' }}>تصاميم عصرية وفخمة للمغاسل المعلقة والمجالس والضيوف بأرقى أنواع الرخام.</p>
        </div>

        <div style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid #e5e7eb' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1e293b', marginBottom: '10px' }}>2. تفصيل طاولات رخام</h2>
          <p style={{ fontSize: '15px', color: '#4b5563', lineHeight: '1.6' }}>طاولات طعام، طاولات خدمة ومجالس مصممة خصيصاً حسب المقاسات والطلب.</p>
        </div>

        <div style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid #e5e7eb' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1e293b', marginBottom: '10px' }}>3. تركيب رخام الواجهات</h2>
          <p style={{ fontSize: '15px', color: '#4b5563', lineHeight: '1.6' }}>تنفيذ وتركيب واجهات الفلل والمباني بأعلى معايير الأمان والتثبيت الميكانيكي.</p>
        </div>

        <div style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid #e5e7eb' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1e293b', marginBottom: '10px' }}>4. تركيب أرضيات رخام</h2>
          <p style={{ fontSize: '15px', color: '#4b5563', lineHeight: '1.6' }}>تركيب أرضيات القصور والفلل بدقة متناهية، مع ضبط المنسوب وتلميع الفواصل.</p>
        </div>

        <div style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid #e5e7eb' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1e293b', marginBottom: '10px' }}>5. تفصيل درج رخام</h2>
          <p style={{ fontSize: '15px', color: '#4b5563', lineHeight: '1.6' }}>قص وتشكيل وتركيب الدرج الداخلي والخارجي بتناسق تام للعروق والشكل الجمالي.</p>
        </div>

        <div style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid #e5e7eb' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1e293b', marginBottom: '10px' }}>6. جلي وتلميع الرخام</h2>
          <p style={{ fontSize: '15px', color: '#4b5563', lineHeight: '1.6' }}>إعادة البريق واللمعان للرخام القديم وإزالة الخدوش باستخدام أحدث التقنيات.</p>
        </div>

      </section>

      {/* زر الواتساب الدائري المهتز على شكل التطبيق */}
      <a 
        href="https://wa.me/966569962482" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '25px',
          right: '25px',
          backgroundColor: '#25D366',
          width: '65px',
          height: '65px',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
          zIndex: 1000,
          animation: 'whatsappShake 0.4s infinite alternate'
        }}
      >
        <svg style={{ width: '38px', height: '38px', fill: '#fff' }} viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      </a>

      <style>{`
        @keyframes whatsappShake {
          0% { transform: rotate(0deg) scale(1); }
          25% { transform: rotate(-15deg) scale(1.1); }
          50% { transform: rotate(15deg) scale(1); }
          75% { transform: rotate(-15deg) scale(1.1); }
          100% { transform: rotate(0deg) scale(1); }
        }
      `}</style>

    </main>
  );
}
