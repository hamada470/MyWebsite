import type { Metadata } from 'next';
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
    <main style={{ minHeight: '100vh', backgroundColor: '#f8fafc', direction: 'rtl', paddingBottom: '80px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      
      {/* Google Tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-18411521630"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-18411521630');
        `}
      </Script>

      {/* Schema.org */}
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      {/* البنر العلوي الأصفر */}
      <div style={{ backgroundColor: '#eab308', color: '#0f172a', padding: '10px 15px', textAlign: 'center', fontWeight: 'bold', fontSize: '14px' }}>
        ⚡ عروض خاصة على تفصيل المغاسل والطاولات لفترة محدودة | للتواصل المباشر: <a href="tel:0569962482" style={{ color: '#0f172a', textDecoration: 'underline' }}>0569962482</a>
      </div>

      {/* الهيدر الرئيسي */}
      <header style={{ position: 'sticky', top: 0, zIndex: 100, padding: '14px 20px', backgroundColor: '#0f172a', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.15)' }}>
        <span style={{ fontWeight: 'bold', fontSize: '18px', color: '#ffffff' }}>ورشة رخام الرياض</span>
        <a href="tel:0569962482" style={{ backgroundColor: '#eab308', color: '#0f172a', padding: '8px 18px', borderRadius: '20px', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px' }}>
          📞 اتصل الآن
        </a>
      </header>

      {/* العنوان الرئيسي */}
      <section style={{ padding: '30px 20px 10px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '26px', fontWeight: '800', marginBottom: '10px', color: '#0f172a' }}>تفصيل مغاسل رخام بالرياض وطاولات مودرن</h1>
        <p style={{ fontSize: '15px', color: '#334155', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>جودة عالية وسرعة في التنفيذ لجميع أعمال الرخام الطبيعي والصناعي بمدينة الرياض</p>
      </section>

      {/* الأقسام الخمسة مع الأزرار الصفراء وبدون صور */}
      <section style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', display: 'grid', gap: '24px' }}>
        
        {/* القسم الأول */}
        <article style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.04)', border: '1px solid #e2e8f0' }}>
          <h2 style={{ fontSize: '19px', fontWeight: '700', color: '#0f172a', marginBottom: '10px' }}>1. تفصيل مغاسل رخام مودرن وفخمة للمجالس والضيوف</h2>
          <p style={{ fontSize: '14px', color: '#334155', lineHeight: '1.8', marginBottom: '18px' }}>
            نقدم أعلى مستويات الجودة والاحترافية في تفصيل مغاسل رخام طبيعي وصناعي مخصصة للمجالس والصالات والفلل بمدينة الرياض. نحرص تماماً على تقديم تصاميم عصرية ومبتكرة تتناسب مع أرقى الديكورات الحديثة، مع دمج تقنيات الحفر الليزري وإضاءات الليد المخفية لإبراز جمال عروق الرخام الطبيعي. نلبي كافة تطلعات العملاء ونوفر تصاميم معلقة وواقفة بتشكيلات هندسية فريدة.
          </p>
          <a href="tel:0569962482" style={{ display: 'block', textAlign: 'center', backgroundColor: '#eab308', color: '#0f172a', padding: '12px', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold', fontSize: '15px' }}>
            📞 طلب تفصيل مغسلة رخام - اتصل الآن
          </a>
        </article>

        {/* القسم الثاني */}
        <article style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.04)', border: '1px solid #e2e8f0' }}>
          <h2 style={{ fontSize: '19px', fontWeight: '700', color: '#0f172a', marginBottom: '10px' }}>2. قسم تفصيل طاولات رخام طعام ومجالس واستقبال</h2>
          <p style={{ fontSize: '14px', color: '#334155', lineHeight: '1.8', marginBottom: '18px' }}>
            متخصصون باحترافية كاملة في تفصيل طاولات رخام فاخرة ومصممة خصيصاً وفقاً للمقاسات والمواصفات الدقيقة التي يطلبها العميل. نوفر أرقى الأسطح الرخامية الطبيعية المستوردة والمحلية، بالإضافة إلى الرخام الصناعي المعالج، مع قواعد من الحديد المذهب الفاخر أو الستانلس ستيل المقاوم للصدأ أو القواعد الرخامية المتكاملة.
          </p>
          <a href="tel:0569962482" style={{ display: 'block', textAlign: 'center', backgroundColor: '#eab308', color: '#0f172a', padding: '12px', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold', fontSize: '15px' }}>
            📞 طلب تفصيل طاولة رخام - اتصل الآن
          </a>
        </article>

        {/* القسم الثالث */}
        <article style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.04)', border: '1px solid #e2e8f0' }}>
          <h2 style={{ fontSize: '19px', fontWeight: '700', color: '#0f172a', marginBottom: '10px' }}>3. قسم تركيب رخام الواجهات والمداخل الخارجية</h2>
          <p style={{ fontSize: '14px', color: '#334155', lineHeight: '1.8', marginBottom: '18px' }}>
            نمتلك فريقاً هندسياً وفنياً محترفاً ومتكاملاً لتقديم خدمات تركيب رخام الواجهات والأعمدة والمداخل والجدران الخارجية للمباني والفلل والقصور بالرياض. نعتمد بشكل أساسي على أفضل وأحدث طرق التثبيت الميكانيكي والعادي لضمان الأمان التام والثبات طويل الأمد.
          </p>
          <a href="tel:0569962482" style={{ display: 'block', textAlign: 'center', backgroundColor: '#eab308', color: '#0f172a', padding: '12px', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold', fontSize: '15px' }}>
            📞 حجز معلم تركيب واجهات - اتصل الآن
          </a>
        </article>

        {/* القسم الرابع */}
        <article style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.04)', border: '1px solid #e2e8f0' }}>
          <h2 style={{ fontSize: '19px', fontWeight: '700', color: '#0f172a', marginBottom: '10px' }}>4. قسم تركيب أرضيات رخام للمنازل والقصور</h2>
          <p style={{ fontSize: '14px', color: '#334155', lineHeight: '1.8', marginBottom: '18px' }}>
            نوفر أحدث تقنيات وأساليب تركيب أرضيات رخام طبيعي وصناعي بالرياض مع مراعاة دقة المنسوب والميول الهندسية المطلوبة بدقة متناهية. نطبق نظام القص والتطبيق باستخدام أحدث ماكينات الليزر والقص لضمان أفضل مظهر متناسق وجذاب للأرضيات.
          </p>
          <a href="tel:0569962482" style={{ display: 'block', textAlign: 'center', backgroundColor: '#eab308', color: '#0f172a', padding: '12px', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold', fontSize: '15px' }}>
            📞 استفسر عن أسعار تركيب الأرضيات
          </a>
        </article>

        {/* القسم الخامس */}
        <article style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.04)', border: '1px solid #e2e8f0' }}>
          <h2 style={{ fontSize: '19px', fontWeight: '700', color: '#0f172a', marginBottom: '10px' }}>5. قسم تفصيل وتصميم درج رخام داخلي وخارجي</h2>
          <p style={{ fontSize: '14px', color: '#334155', lineHeight: '1.8', marginBottom: '18px' }}>
            نقدم خدمات متكاملة في قص وتشحيم وتركيب درج الرخام الداخلي للفلل والقصور والدرج الخارجي للمداخل والمباني التجاريّة. نستخدم أجود أنواع الرخام الصلب المقاوم للاحتكاك والاستخدام المكثف، مع تنفيذ حواف دائرية أو مربعة حسب رغبة العميل.
          </p>
          <a href="tel:0569962482" style={{ display: 'block', textAlign: 'center', backgroundColor: '#eab308', color: '#0f172a', padding: '12px', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold', fontSize: '15px' }}>
            📞 طلب تفصيل درج رخام - اتصل الآن
          </a>
        </article>

      </section>
    </main>
  );
}
