import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SEO from '../components/SEO';

export default function CompanyProfile() {
  const location = useLocation();
  useEffect(() => window.scrollTo(0, 0), [location.pathname]);

  return (
    // 🚀 背景改為極淺灰 bg-slate-50
    <div className="bg-slate-50 min-h-screen pt-16 font-sans text-slate-900">
      <SEO title="企業簡介" />
      
      <div className="py-24 md:py-32 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-brand-blue font-bold tracking-widest mb-4 uppercase text-sm">
            HXT / About Us
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight">
            企業簡介
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
            我們專精於消費性電子產品之聲音測試。
          </p>
        </div>
      </div>

      <div className="pb-32 px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* 🚀 卡片採用白底 + 柔和陰影 shadow-xl */}
          <div className="md:col-span-2 bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 p-10 transition-all duration-500 flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-500 text-[200px] font-black text-brand-blue pointer-events-none">
              2005
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-6 z-10">深耕科技領域十餘年</h3>
            <p className="text-slate-600 text-lg leading-relaxed z-10">
              宏相科技成立於 2005 年，研發團隊主要來自新竹科學園區的資深工程師。為了提供客戶更多、更好的測試品質與服務，我們於 2013 年在昆山成立辦事處，具備硬體設計、韌體與軟體函式庫的全方位開發能力。
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 p-10 transition-all duration-500 flex flex-col justify-between">
            <h4 className="text-slate-500 font-medium mb-2">國際級認證</h4>
            <div className="text-4xl font-black text-brand-blue mb-4">NI 會員</div>
            <p className="text-sm text-slate-600 leading-relaxed">
              自 2005 年起成為美商國家儀器 (National Instruments) 認證會員，提供專業工業系統整合。
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 p-10 transition-all duration-500 flex flex-col justify-between">
             <h4 className="text-slate-500 font-medium mb-2">核心價值</h4>
            <div className="text-3xl font-black text-slate-900 mb-4">專業・專注・真誠</div>
            <p className="text-sm text-slate-600 leading-relaxed">
              擅長整合硬體設計、韌體開發及測試程式，秉持為客戶提供優質服務的最高理念。
            </p>
          </div>

          {/* 深藍色強調卡片 */}
          <div className="md:col-span-2 bg-brand-blue shadow-xl shadow-brand-blue/20 p-10 rounded-3xl flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-white mb-4">專注聲學與音訊測試</h3>
            <p className="text-brand-blue-100 text-white/80 leading-relaxed">
              我們目前聚焦於麥克風、音訊模組與相關聲學測試解決方案，協助客戶完成從研發驗證到量產測試的品質把關。
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
