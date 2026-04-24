// src/pages/AcousticsTest.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SEO from '../components/SEO';

export default function AcousticsTest() {
  const location = useLocation();
  useEffect(() => window.scrollTo(0, 0), [location.pathname]);

  const features = [
    { title: '單體麥克風檢測', desc: '提供高精度的頻率響應、靈敏度與總諧波失真 (THD) 量測，精準把關上游零件。' },
    { title: 'FPC 模組自動化測試', desc: '結合客製化載板與高速測試流程，驗證軟性電路板麥克風模組的電聲特性與穩定度。' },
    { title: '聲音成品系統級驗證', desc: '涵蓋智慧型手機、TWS 藍牙耳機至智慧音箱，提供無響室等級的全方位品質檢驗。' },
    { title: '背景噪音與環境模擬', desc: '精準模擬多種真實使用場景的背景噪音，測試降噪演算法 (ANC/ENC) 的實際表現。' },
    { title: '數位與類比音訊分析', desc: '支援多種通訊協定與音訊介面，進行深度數位訊號處理 (DSP) 與類比波形分析。' },
    { title: '客製化測試治具設計', desc: '由資深硬體團隊為您的特殊產品打造專屬的測試腔體與自動化量測治具。' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-16 font-sans text-slate-900">
      <SEO title="聲學與音訊測試" description="業界最精準的聲學檢測方案，涵蓋單體麥克風、FPC 模組至終端成品的系統級驗證。" />
      
      <div className="py-24 md:py-32 px-6 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="text-brand-blue font-bold tracking-widest mb-4 uppercase text-sm">
            Products / Acoustics
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight">
            聲學與音訊測試
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            業界最精準的聲學檢測方案，為您的消費性電子產品把關最高標準的完美音質。
          </p>
        </div>
      </div>

      <div className="pb-32 px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 border border-slate-100 p-8 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-blue mb-6 font-bold text-lg">
                0{index + 1}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}