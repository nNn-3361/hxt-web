import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SEO from '../components/SEO';

export default function ImagingTest() {
  const location = useLocation();
  useEffect(() => window.scrollTo(0, 0), [location.pathname]);

  return (
    <div className="bg-slate-50 min-h-screen pt-16 font-sans text-slate-900">
      <SEO title="服務調整公告" description="宏相科技目前已停止提供影像相關服務，現階段聚焦聲學與音訊測試解決方案。" />

      <div className="py-24 md:py-32 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="text-brand-blue font-bold tracking-widest mb-4 uppercase text-sm">
            Products / Service Update
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight">
            影像相關服務已停止
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            宏相科技目前已停止提供影像、相機模組與視覺檢測相關服務。現階段我們聚焦於聲學與音訊測試解決方案。
          </p>
        </div>
      </div>

      <div className="pb-32 px-6 max-w-4xl mx-auto relative z-10">
        <div className="bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 md:p-12 text-center">
          <h2 className="text-3xl font-black text-slate-900 mb-4">查看目前提供的產品與服務</h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            如需麥克風測試、聲學量測或音訊自動化測試方案，請前往聲學與音訊測試頁面。
          </p>
          <Link
            to="/products/acoustics"
            className="inline-flex items-center justify-center bg-brand-blue text-white font-bold py-4 px-8 rounded-full hover:bg-brand-blue/90 hover:shadow-lg hover:shadow-brand-blue/20 transition-all"
          >
            前往聲學與音訊測試
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
