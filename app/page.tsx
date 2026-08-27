import type { Metadata } from 'next';
import Script from 'next/script';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'تفصيل مغاسل رخام بالرياض | أسعار خاصة وتصاميم حديثة 0569962482',
  description: 'أفضل ورشة تفصيل مغاسل رخام بالرياض. متخصصون في الرخام الطبيعي والصناعي، طاولات رخام، تركيب واجهات، أرضيات، وجلي رخام. جودة عالية وسرعة في التنفيذ. اتصل بنا: 0569962482',
  keywords: [
    'تفصيل مغاسل رخام بالرياض',
    'مغاسل رخام تفصيل',
    'أسعار مغاسل الرخام في الرياض',
    'معلم تركيب رخام بالرياض',
    'تركيب أرضيات رخام',
    'درج رخام بالرياض'
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
      
      {/* Google Ads Tag (gtag.js) */}
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

      {/* 1. البنر العلوي باللون الأصفر */}
      <div style={{ backgroundColor: '#eab308', color: '#0f172a', padding: '10px 15px', textAlign: 'center', fontWeight: 'bold', fontSize: '14px' }}>
        ⚡ عروض خاصة على تفصيل المغاسل والطاولات لفترة محدودة | للتواصل المباشر: <a href="tel:0569962482" style={{ color: '#0f172a', textDecoration: 'underline' }}>0569962482</a>
      </div>

      {/* 2. الهيدر الرئيسي */}
      <header style={{ position: 'sticky', top: 0, zIndex: 100, padding: '14px 20px', backgroundColor: '#0f172a', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.15)' }}>
        <span style={{ fontWeight: 'bold', fontSize: '18px', color: '#ffffff' }}>ورشة رخام الرياض</span>
        <a href="tel:0569962482" style={{ backgroundColor: '#eab308', color: '#0f172a', padding: '8px 18px', borderRadius: '20px', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px' }}>
          📞 اتصل الآن
        </a>
      </header>

      {/* العنوان الرئيسي */}
      <section style={{ padding: '40px 20px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '28px', fontWeight: '800', marginBottom: '12px', color: '#0f172a' }}>تفصيل مغاسل رخام بالرياض وطاولات مودرن</h1>
        <p style={{ fontSize: '16px', color: '#334155', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>جودة عالية وسرعة في التنفيذ لجميع أعمال الرخام الطبيعي والصناعي بمدينة الرياض</p>
      </section>

      {/* الأقسام مع الصور والأزرار */}
      <section style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', display: 'grid', gap: '24px' }}>
        
        {/* القسم الأول: مغاسل الرخام */}
        <article style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.04)', border: '1px solid #e2e8f0' }}>
          <div style={{ position: 'relative', width: '100%', height: '240px', borderRadius: '12px', overflow: 'hidden', marginBottom: '16px' }}>
            <Image 
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop" 
              alt="تفصيل مغاسل رخام مودرن فخمة بالرياض"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#0f172a', marginBottom: '12px' }}>1. تفصيل مغاسل رخام مودرن وفخمة للمجالس والضيوف</h2>
          <p style={{ fontSize: '15px', color: '#334155', lineHeight: '1.8', marginBottom: '20px' }}>
            نقدم أعلى مستويات الجودة والاحترافية في تفصيل مغاسل رخام طبيعي وصناعي مخصصة للمجالس والصالات والفلل بمدينة الرياض. نحرص تماماً على تقديم تصاميم عصرية ومبتكرة تتناسب مع أرقى الديكورات الحديثة، مع دمج تقنيات الحفر الليزري وإضاءات الليد المخفية لإبراز جمال عروق الرخام الطبيعي. نلبي كافة تطلعات العملاء ونوفر تصاميم معلقة وواقفة بتشكيلات هندسية فريدة تمنح منزلك لمسة فخامة لا تُضاهى وتدوم طويلاً بكفاءة عالية ومقاومة تامة للمياه والرطوبة.
          </p>
          <a href="tel:0569962482" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '100%', backgroundColor: '#eab308', color: '#0f172a', padding: '12px', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold', fontSize: '15px' }}>
            📞 طلب تفصيل مغسلة رخام - اتصل الآن
          </a>
        </article>

        {/* القسم الثاني: طاولات وألواح الرخام */}
        <article style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.04)', border: '1px solid #e2e8f0' }}>
          <div style={{ position: 'relative', width: '100%', height: '240px', borderRadius: '12px', overflow: 'hidden', marginBottom: '16px' }}>
            <Image 
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop" 
              alt="ألواح رخام فاخرة وطاولات رخام طعام بالرياض"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#0f172a', marginBottom: '12px' }}>2. تفصيل طاولات رخام وتوريد ألواح رخام فاخرة</h2>
          <p style={{ fontSize: '15px', color: '#334155', lineHeight: '1.8', marginBottom: '20px' }}>
            متخصصون باحترافية كاملة في تفصيل طاولات رخام فاخرة وتوريد أجود أنواع ألواح الرخام الطبيعي والصناعي بمختلف المقاسات. نوفر أسطح رخام مستوردة ومحلية فائقة النقاء مع قواعد من الحديد المذهب الفاخر أو الستانلس ستيل المقاوم للصدأ. تناسب طاولاتنا وألواحنا غرف الطعام، الصالونات، ومجالس الاستقبال لتضفي طابعاً فريداً بأسعار تنافسية وممتازة.
          </p>
          <a href="tel:0569962482" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '100%', backgroundColor: '#eab308', color: '#0f172a', padding: '12px', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold', fontSize: '15px' }}>
            📞 طلب تفصيل طاولة أو ألواح رخام - اتصل الآن
          </a>
        </article>

        {/* القسم الثالث: الواجهات والألواح الرخامية */}
        <article style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.04)', border: '1px solid #e2e8f0' }}>
          <div style={{ position: 'relative', width: '100%', height: '240px', borderRadius: '12px', overflow: 'hidden', marginBottom: '16px' }}>
            <Image 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop" 
              alt="تركيب واجهات وألواح رخام خارجي بالرياض"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#0f172a', marginBottom: '12px' }}>3. تركيب واجهات ألواح رخام ومداخل خارجية</h2>
          <p style={{ fontSize: '15px', color: '#334155', lineHeight: '1.8', marginBottom: '20px' }}>
            نمتلك فريقاً هندسياً وفنياً محترفاً ومتكاملاً لتقديم خدمات تركيب ألواح رخام الواجهات والأعمدة والمداخل والجدران الخارجية للمباني والفلل بالرياض. نعتمد بشكل أساسي على أفضل وأحدث طرق التثبيت الميكانيكي والعادي لضمان الأمان التام والثبات طويل الأمد، مع فرز العروق وتناسق الرسمات الهندسية للرخام لتتحمل كافة العوامل الجوية.
          </p>
          <a href="tel:0569962482" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '100%', backgroundColor: '#eab308', color: '#0f172a', padding: '12px', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold', fontSize: '15px' }}>
            📞 حجز معلم تركيب واجهات - اتصل الآن
          </a>
        </article>

        {/* القسم الرابع: أرضيات رخام */}
        <article style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.04)', border: '1px solid #e2e8f0' }}>
          <div style={{ position: 'relative', width: '100%', height: '240px', borderRadius: '12px', overflow: 'hidden', marginBottom: '16px' }}>
            <Image 
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop" 
              alt="تركيب أرضيات رخام بالرياض للمنازل والقصور"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#0f172a', marginBottom: '12px' }}>4. تركيب أرضيات رخام للمنازل والقصور</h2>
          <p style={{ fontSize: '15px', color: '#334155', lineHeight: '1.8', marginBottom: '20px' }}>
            نوفر أحدث تقنيات وأساليب تركيب أرضيات رخام طبيعي وصناعي بالرياض مع مراعاة دقة المنسوب والميول الهندسية المطلوبة بدقة متناهية. نطبق نظام القص والتطبيق باستخدام أحدث ماكينات الليزر لضمان مظهر متناسق وجذاب مع معالجة الفواصل وتلميعها لتظهر الأرضية كقطعة واحدة متصلة.
          </p>
          <a href="tel:0569962482" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '100%', backgroundColor: '#eab308', color: '#0f172a', padding: '12px', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold', fontSize: '15px' }}>
            📞 استفسر عن أسعار تركيب الأرضيات
          </a>
        </article>

        {/* القسم الخامس: درج رخام */}
        <article style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.04)', border: '1px solid #e2e8f0' }}>
          <div style={{ position: 'relative', width: '100%', height: '240px', borderRadius: '12px', overflow: 'hidden', marginBottom: '16px' }}>
            <Image 
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop" 
              alt="تفصيل وتصميم درج رخام داخلي وخارجي بالرياض"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#0f172a', marginBottom: '12px' }}>5. تفصيل وتصميم درج رخام داخلي وخارجي</h2>
          <p style={{ fontSize: '15px', color: '#334155', lineHeight: '1.8', marginBottom: '20px' }}>
            نقدم خدمات متكاملة في قص وتشحيم وتركيب درج الرخام الداخلي للفلل والقصور والدرج الخارجي للمداخل والمباني التجارية. نستخدم أجود أنواع الرخام الصلب المقاوم للاحتكاك والاستخدام المكثف، مع تنفيذ حواف دائرية أو مربعة وتنسيق اتجاه عروق الرخام ليظهر الدرج كتحفة فنية معمارية.
          </p>
          <a href="tel:0569962482" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '100%', backgroundColor: '#eab308', color: '#0f172a', padding: '12px', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold', fontSize: '15px' }}>
            📞 طلب تفصيل درج رخام - اتصل الآن
          </a>
        </article>

      </section>
    </main>
  );
}
