// src/pages/ImagingTest.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ImagingTest() {
  const location = useLocation();
  useEffect(() => window.scrollTo(0, 0), [location.pathname]);

  const features = [
    { title: 'CMOS 影像感測器測試', desc: '針對各類晶片提供高精密度的訊號擷取與畫質分析，確保感測器出廠品質。' },
    { title: '相機模組 (CCM) 檢驗', desc: '支援多種介面協議，進行光學對焦、色彩校正與缺陷像素偵測。' },
    { title: '鏡頭光學測試解決方案', desc: '提供 MTF (調變轉換函數) 測量、畸變分析及眩光測試等專業光學評估。' },
    { title: '機器視覺與運動控制', desc: '結合高精度馬達與視覺演算法，實現產線全自動化的精密檢測站。' },
    { title: 'LCD Panel 顯示器檢測', desc: '涵蓋亮度均勻度、色域分析及 Mura 瑕疵檢測的完整系統。' },
    { title: '客製化治具與韌體開發', desc: '依據客戶特殊需求，打造專屬的測試載板與硬體控制韌體。' },
  ];

  return (
    <div className="bg-[#050505] min-h-screen pt-16 font-sans text-white">
      <div className="py-24 md:py-32 px-6 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="text-brand-blue font-bold tracking-widest mb-4 uppercase text-sm">
            Products / Imaging & Vision
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            影像與視覺測試
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            業界最精準的影像檢測方案，為您的消費性電子產品把關最高標準的視覺呈現。
          </p>
        </div>
      </div>

      <div className="pb-32 px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-[#0a0a0a] border border-slate-800 p-8 rounded-2xl hover:bg-[#111] hover:border-brand-blue/40 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-brand-blue mb-6 font-bold text-sm">
                0{index + 1}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}