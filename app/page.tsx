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

      {/* البنر العلوي باللون الأصفر */}
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

      {/* الأقسام مع الصور المستقرة والأزرار */}
      <section style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', display: 'grid', gap: '24px' }}>
        
        {/* القسم الأول: مغاسل الرخام */}
        <article style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.04)', border: '1px solid #e2e8f0' }}>
          <img 
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80" 
            alt="تفصيل مغاسل رخام مودرن بالرياض"
            style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '12px', marginBottom: '16px', display: 'block' }}
          />
          <h2 style={{ fontSize: '19px', fontWeight: '700', color: '#0f172a', marginBottom: '10px' }}>1. تفصيل مغاسل رخام مودرن وفخمة للمجالس والضيوف</h2>
          <p style={{ fontSize: '14px', color: '#334155', lineHeight: '1.8', marginBottom: '16px' }}>
            نقدم أعلى مستويات الجودة والاحترافية في تفصيل مغاسل رخام طبيعي وصناعي مخصصة للمجالس والصالات والفلل بمدينة الرياض. نحرص على تقديم تصاميم عصرية ومبتكرة تتناسب مع أرقى الديكورات الحديثة، مع دمج تقنيات الحفر وإضاءات الليد المخفية.
          </p>
          <a href="tel:0569962482" style={{ display: 'block', textAlign: 'center', backgroundColor: '#eab308', color: '#0f172a', padding: '12px', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold', fontSize: '15px' }}>
            📞 طلب تفصيل مغسلة رخام - اتصل الآن
          </a>
        </article>

        {/* القسم الثاني: طاولات وألواح الرخام */}
        <article style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.04)', border: '1px solid #e2e8f0' }}>
          <img 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80" 
            alt="ألواح رخام فاخرة وطاولات رخام طعام بالرياض"
            style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '12px', marginBottom: '16px', display: 'block' }}
          />
          <h2 style={{ fontSize: '19px', fontWeight: '700', color: '#0f172a', marginBottom: '10px' }}>2. تفصيل طاولات رخام وتوريد ألواح رخام فاخرة</h2>
          <p style={{ fontSize: '14px', color: '#334155', lineHeight: '1.8', marginBottom: '16px' }}>
            متخصصون باحترافية كاملة في تفصيل طاولات رخام فاخرة وتوريد أجود أنواع ألواح الرخام الطبيعي والصناعي بمختلف المقاسات مع قواعد مذهبة أو ستانلس ستيل تناسب المداخل والصالونات.
          </p>
          <a href="tel:0569962482" style={{ display: 'block', textAlign: 'center', backgroundColor: '#eab308', color: '#0f172a', padding: '12px', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold', fontSize: '15px' }}>
            📞 طلب تفصيل طاولة أو ألواح رخام - اتصل الآن
          </a>
        </article>

        {/* القسم الثالث: الواجهات */}
        <article style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.04)', border: '1px solid #e2e8f0' }}>
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" 
            alt="تركيب واجهات ألواح رخام خارجي بالرياض"
            style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '12px', marginBottom: '16px', display: 'block' }}
          />
          <h2 style={{ fontSize: '19px', fontWeight: '700', color: '#0f172a', marginBottom: '10px' }}>3. تركيب واجهات ألواح رخام ومداخل خارجية</h2>
          <p style={{ fontSize: '14px', color: '#334155', lineHeight: '1.8', marginBottom: '16px' }}>
            نمتلك فريقاً هندسياً وفنياً محترفاً ومتكاملاً لتقديم خدمات تركيب ألواح رخام الواجهات والأعمدة والمداخل والجدران الخارجية للمباني والفلل بالرياض بالتثبيت الميكانيكي والعادي.
          </p>
          <a href="tel:0569962482" style={{ display: 'block', textAlign: 'center', backgroundColor: '#eab308', color: '#0f172a', padding: '12px', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold', fontSize: '15px' }}>
            📞 حجز معلم تركيب واجهات - اتصل الآن
          </a>
        </article>

        {/* القسم الرابع: أرضيات رخام */}
        <article style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.04)', border: '1px solid #e2e8f0' }}>
          <img 
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80" 
            alt="تركيب أرضيات رخام بالرياض"
            style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '12px', marginBottom: '16px', display: 'block' }}
          />
          <h2 style={{ fontSize: '19px', fontWeight: '700', color: '#0f172a', marginBottom: '10px' }}>4. تركيب أرضيات رخام للمنازل والقصور</h2>
          <p style={{ fontSize: '14px', color: '#334155', lineHeight: '1.8', marginBottom: '16px' }}>
            نوفر أحدث تقنيات وأساليب تركيب أرضيات رخام طبيعي وصناعي بالرياض مع مراعاة دقة المنسوب والميول الهندسية بدقة متناهية ونظام تطبيق ليزري عالي الجودة.
          </p>
          <a href="tel:0569962482" style={{ display: 'block', textAlign: 'center', backgroundColor: '#eab308', color: '#0f172a', padding: '12px', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold', fontSize: '15px' }}>
            📞 استفسر عن أسعار تركيب الأرضيات
          </a>
        </article>

        {/* القسم الخامس: درج رخام */}
        <article style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.04)', border: '1px solid #e2e8f0' }}>
          <img 
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80" 
            alt="تفصيل وتصميم درج رخام داخلي وخارجي بالرياض"
            style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '12px', marginBottom: '16px', display: 'block' }}
          />
          <h2 style={{ fontSize: '19px', fontWeight: '700', color: '#0f172a', marginBottom: '10px' }}>5. تفصيل وتصميم درج رخام داخلي وخارجي</h2>
          <p style={{ fontSize: '14px', color: '#334155', lineHeight: '1.8', marginBottom: '16px' }}>
            خدمات متكاملة في قص وتشحيم وتركيب درج الرخام الداخلي للفلل والقصور والدرج الخارجي للمداخل. أجود أنواع الرخام الصلب المقاوم للاحتكاك.
          </p>
          <a href="tel:0569962482" style={{ display: 'block', textAlign: 'center', backgroundColor: '#eab308', color: '#0f172a', padding: '12px', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold', fontSize: '15px' }}>
            📞 طلب تفصيل درج رخام - اتصل الآن
          </a>
        </article>

      </section>
    </main>
  );
}
