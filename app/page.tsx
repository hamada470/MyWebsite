import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'تفصيل مغاسل رخام بالرياض | أسعار خاصة وتصاميم حديثة 0569962482',
  description: 'أفضل ورشة تفصيل مغاسل رخام بالرياض. متخصصون في الرخام الطبيعي والصناعي، طاولات رخام، تركيب واجهات، أرضيات، وجلي رخام. جودة عالية وسرعة في التنفيذ. اتصل بنا: 0569962482',
  keywords: [
    'تفصيل مغاسل رخام بالرياض',
    'مغاسل رخام تفصيل',
    'أسعار مغاسل الرخام في الرياض',
    'معلم تركيب رخام بالرياض'
  ],
  openGraph: {
    title: 'تفصيل مغاسل رخام بالرياض | معلم تركيب رخام وطاولات مودرن',
    description: 'تفصيل وتصنيع كافة ديكورات الرخام والمغاسل وطاولات الرخام بالرياض بجودة عالية وأسعار تنافسية.',
    locale: 'ar_SA',
    type: 'website',
  },
};

export default function Home() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "ورشة تفصيل مغاسل رخام وطاولات وتركيب أرضيات بالرياض",
    "description": "تفصيل مغاسل رخام طبيعي وصناعي، تفصيل طاولات رخام، تركيب رخام، وتركيب أرضيات رخام بالرياض.",
    "telephone": "+966569962482",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "الرياض",
      "addressRegion": "منطقة الرياض",
      "addressCountry": "SA"
    },
    "areaServed": "الرياض",
    "priceRange": "$$"
  };

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f9fafb', direction: 'rtl', paddingBottom: '80px', fontFamily: 'sans-serif' }}>
      
      {/* سكربت التتبع والـ Schema */}
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

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
        <p style={{ fontSize: '16px', color: '#4b5563' }}>جودة عالية وسرعة في التنفيذ لجميع أعمال الرخام الطبيعي والصناعي بمدينة الرياض</p>
      </section>

      {/* الـ 6 أقسام بأوصاف مفصلة وكبيرة */}
      <section style={{ padding: '0 20px', maxWidth: '800px', margin: '0 auto', display: 'grid', gap: '20px' }}>
        
        <div style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid #e5e7eb' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1e293b', marginBottom: '10px' }}>1. تفصيل مغاسل رخام مودرن وفخمة للمجالس والضيوف</h2>
          <p style={{ fontSize: '15px', color: '#4b5563', lineHeight: '1.8' }}>
            نقدم أعلى مستويات الجودة والاحترافية في تفصيل مغاسل رخام طبيعي وصناعي مخصصة للمجالس والصالات والفلل بمدينة الرياض. نحرص تماماً على تقديم تصاميم عصرية ومبتكرة تتناسب مع أرقى الديكورات الحديثة، مع دمج تقنيات الحفر الليزري وإضاءات الليد المخفية لإبراز جمال عروق الرخام الطبيعي. نلبي كافة تطلعات العملاء ونوفر تصاميم معلقة وواقفة بتشكيلات هندسية فريدة تمنح منزلك لمسة فخامة لا تُضاهى وتدوم طويلاً بكفاءة عالية ومقاومة تامة للمياه والرطوبة.
          </p>
        </div>

        <div style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid #e5e7eb' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1e293b', marginBottom: '10px' }}>2. قسم تفصيل طاولات رخام طعام ومجالس واستقبال</h2>
          <p style={{ fontSize: '15px', color: '#4b5563', lineHeight: '1.8' }}>
            متخصصون باحترافية كاملة في تفصيل طاولات رخام فاخرة ومصممة خصيصاً وفقاً للمقاسات والمواصفات الدقيقة التي يطلبها العميل. نوفر أرقى الأسطح الرخامية الطبيعية المستوردة والمحلية، بالإضافة إلى الرخام الصناعي المعالج، مع قواعد من الحديد المذهب الفاخر أو الستانلس ستيل المقاوم للصدأ أو القواعد الرخامية المتكاملة. تناسب طاولاتنا غرف الطعام، طاولات الصالونات، ومجالس الاستقبال لتضفي طابعاً من الرقي والفخامة على منزلك الراقي بأسعار تنافسية وممتازة.
          </p>
        </div>

        <div style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid #e5e7eb' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1e293b', marginBottom: '10px' }}>3. قسم تركيب رخام الواجهات والمداخل الخارجية</h2>
          <p style={{ fontSize: '15px', color: '#4b5563', lineHeight: '1.8' }}>
            نمتلك فريقاً هندسياً وفنياً محترفاً ومتكاملاً لتقديم خدمات تركيب رخام الواجهات والأعمدة والمداخل والجدران الخارجية للمباني والفلل والقصور بالرياض. نعتمد بشكل أساسي على أفضل وأحدث طرق التثبيت الميكانيكي والعادي لضمان الأمان التام والثبات طويل الأمد. كما نولي اهتماماً بالغاً بفرز العروق وتناسق الرسمات الهندسية للرخام لإعطاء واجهة منزلك مظهراً مهيباً وخلاباً يعكس الذوق الرفيع ويتحمل كافة قسوة العوامل الجوية المختلفة على مدار العام.
          </p>
        </div>

        <div style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid #e5e7eb' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1e293b', marginBottom: '10px' }}>4. قسم تركيب أرضيات رخام للمنازل والقصور</h2>
          <p style={{ fontSize: '15px', color: '#4b5563', lineHeight: '1.8' }}>
            نوفر أحدث تقنيات وأساليب تركيب أرضيات رخام طبيعي وصناعي بالرياض مع مراعاة دقة المنسوب والميول الهندسية المطلوبة بدقة متناهية. نطبق نظام القص والتطبيق باستخدام أحدث ماكينات الليزر والقص لضمان أفضل مظهر متناسق وجذاب للأرضيات. يهتم فريقنا بمعالجة الفواصل وتعبئتها بمواد خاصة متطابقة مع لون الرخام، ومن ثم تلميعها لتظهر الأرضية كقطعة واحدة متصلة ومنسجمة تزيد من اتساع المكان وفخامته المطلقة.
          </p>
        </div>

        <div style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid #e5e7eb' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1e293b', marginBottom: '10px' }}>5. قسم تفصيل وتصميم درج رخام داخلي وخارجي</h2>
          <p style={{ fontSize: '15px', color: '#4b5563', lineHeight: '1.8' }}>
            نقدم خدمات متكاملة في قص وتشحيم وتركيب درج الرخام الداخلي للفلل والقصور والدرج الخارجي للمداخل والمباني التجاريّة. نستخدم أجود أنواع الرخام الصلب المقاوم للاحتكاك والاستخدام المكثف، مع تنفيذ حواف دائرية أو مربعة حسب رغبة العميل. نضمن لكم تركيباً مستقراً وآمناً مع تنسيق دقيق لاتجاه عروق الرخام على القوائم والنائم ليظهر الدرج بتحفة فنية معمارية متكاملة تسر الناظرين وتتحمل الاستخدام الشاق لسنين طويلة.
          </p>
        </div>

        <div style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid #e5e7eb' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1e293b', marginBottom: '10px' }}>6. قسم جلي وتلميع وصيانة الرخام القديم</h2>
          <p style={{ fontSize: '15px', color: '#4b5563', lineHeight: '1.8' }}>
            نقدم خدمة إعادة البريق واللمعان للرخام القديم والمطفأ وإزالة الخدوش والبقع المستعصية باستخدام أحدث أجهزة الجلي بالألماس والكريستال بمدينة الرياض. نقوم بمعالجة الفراغات والكسور بمادة الجلص الملون المطابق للرخام تماماً، ثم صقله وتلميعه ليشع بالنظافة ويعود كأنه تم تركيبه حديثاً. هذه الخدمة تضمن الحفاظ على الاستثمار الخاص بديكورات الرخام بمنزلك وتطيل من عمره الافتراضي بشكل ملحوظ وبنتائج مذهلة ترضي كافة عملائنا الكرام.
          </p>
        </div>

        {/* قسم الخريطة التفاعلية */}
        <div style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid #e5e7eb' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1e293b', marginBottom: '10px' }}>📍 موقعنا على الخريطة</h2>
          <p style={{ fontSize: '15px', color: '#4b5563', lineHeight: '1.8', marginBottom: '15px' }}>
            تفضل بزيارتنا أو تواصل معنا لمعاينة أحدث تصاميم وعينات الرخام بمدينة الرياض:
          </p>
          <div style={{ width: '100%', height: '300px', borderRadius: '10px', overflow: 'hidden', border: '2px solid #e5e7eb' }}>
            <iframe 
              src="https://maps.google.com/maps?q=24.7136,46.6753&hl=ar&z=14&output=embed" 
              style={{ width: '100%', height: '100%', border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
            ></iframe>
          </div>
          <div style={{ marginTop: '15px', textAlign: 'center' }}>
            <a 
              href="https://maps.app.goo.gl/snPp4ESnECJ6MnGMA" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ display: 'inline-block', backgroundColor: '#2563eb', color: '#fff', padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px' }}
            >
              📍 فتح الموقع في خرائط جوجل
            </a>
          </div>
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
