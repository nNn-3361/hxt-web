// src/components/ContactCTA.jsx
export default function ContactCTA() {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="contact">
      {/* 背景裝飾光暈改為極淺的灰藍色，維持一點層次感 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-50 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="relative max-w-4xl mx-auto px-6 text-center z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6 tracking-tight">
          聯絡我們
        </h2>
        <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
          我們隨時準備為您提供最專業服務
        </p>
        
        <a
          href="mailto:contact@hxt-tech.com"
          className="inline-flex items-center justify-center bg-brand-blue text-white font-bold text-lg py-4 px-10 rounded-full hover:bg-brand-blue/90 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-blue/20 transition-all duration-300"
        >
          聯絡我們
        </a>
      </div>
    </section>
  );
}