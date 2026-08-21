import React from 'react';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f9fafb', direction: 'rtl', textAlign: 'center' }}>
      
      {/* Top Bar */}
      <div style={{ padding: '20px', backgroundColor: '#0f172a', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span>ورشة رخام الرياض</span>
        <a href="tel:0569962482" style={{ backgroundColor: '#059669', color: '#fff', padding: '10px 20px', borderRadius: '20px', textDecoration: 'none', fontWeight: 'bold' }}>اتصل الآن</a>
      </div>

      {/* Main Content */}
      <section style={{ padding: '50px 20px' }}>
        <h1 style={{ fontSize: '32px', marginBottom: '20px' }}>تفصيل مغاسل رخام وطاولات</h1>
        <p style={{ fontSize: '18px', color: '#4b5563' }}>أفضل الخدمات في الرياض</p>
      </section>

      {/* Services List */}
      <section style={{ padding: '0 20px', maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ backgroundColor: '#fff', padding: '20px', marginBottom: '15px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <h2 style={{ fontSize: '20px' }}>تفصيل مغاسل رخام</h2>
        </div>
        <div style={{ backgroundColor: '#fff', padding: '20px', marginBottom: '15px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <h2 style={{ fontSize: '20px' }}>تفصيل طاولات رخام</h2>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a href="https://wa.me/966569962482" style={{ position: 'fixed', bottom: '30px', right: '30px', backgroundColor: '#25D366', color: '#fff', padding: '20px', borderRadius: '50%', boxShadow: '0 4px 10px rgba(0,0,0,0.3)', textDecoration: 'none', fontSize: '16px', fontWeight: 'bold' }}>
        واتساب
      </a>
    </main>
  );
}
