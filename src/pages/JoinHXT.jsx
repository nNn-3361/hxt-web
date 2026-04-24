// src/pages/JoinHXT.jsx
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SEO from '../components/SEO';

export default function JoinHXT() {
  const location = useLocation();
  const [activeJob, setActiveJob] = useState(null);
  useEffect(() => window.scrollTo(0, 0), [location.pathname]);

  const jobs = [
    {
      id: 1,
      title: '資深聲學測試工程師',
      type: '全職',
      location: '新竹總部',
      reqs: ['具備 3 年以上聲學量測實務經驗', '熟悉 SoundCheck 或 Audio Precision 操作', '了解電聲元件 (Speaker/Mic) 原理'],
      desc: '您將負責研發與導入最新的音訊測試方案，協助客戶解決高階消費性電子產品的音質問題。'
    },
    {
      id: 2,
      title: '自動化系統軟體工程師',
      type: '全職',
      location: '新竹總部',
      reqs: ['熟悉 C/C++ 或 C# 程式開發', '具備 NI LabVIEW 經驗者佳', '具備自動化機台控制與硬體溝通經驗'],
      desc: '您將參與打造全自動化的檢測系統，撰寫穩定的測試軟體架構，並整合各類精密儀器與機械手臂。'
    },
    {
      id: 3,
      title: '硬體研發工程師',
      type: '全職',
      location: '昆山辦事處',
      reqs: ['熟悉 PCB Layout 與電路設計', '具備示波器、頻譜分析儀使用經驗', '能獨立完成硬體除錯與訊號量測'],
      desc: '負責客製化測試載板與儀器硬體設計，從電路發想到實際打件、驗證，提供最穩定的硬體基石。'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-16 font-sans text-slate-900">
      <SEO title="加入 HXT" description="探索宏相科技最新的熱門職缺，與頂尖工程團隊一起挑戰科技邊界。" />
      
      <div className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="text-brand-blue font-bold tracking-widest mb-4 uppercase text-sm">Careers / Join Us</div>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">加入頂尖工程團隊</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            我們正在尋找對技術充滿熱忱的夥伴，一起解決全球科技大廠最具挑戰性的量測難題。
          </p>
        </div>
      </div>

      <div className="pb-32 px-6 max-w-4xl mx-auto relative z-10">
        <div className="space-y-4">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-100 overflow-hidden transition-all duration-300">
              {/* 職缺標題列 (點擊展開/收合) */}
              <button 
                onClick={() => setActiveJob(activeJob === job.id ? null : job.id)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50/50 transition-colors focus:outline-none"
              >
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{job.title}</h3>
                  <div className="flex gap-3 text-sm font-medium">
                    <span className="text-brand-blue bg-brand-blue/10 px-3 py-1 rounded-full">{job.type}</span>
                    <span className="text-slate-500 bg-slate-100 px-3 py-1 rounded-full">{job.location}</span>
                  </div>
                </div>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-slate-50 text-slate-400 transition-transform duration-300 ${activeJob === job.id ? 'rotate-180' : ''}`}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </div>
              </button>
              
              {/* 手風琴展開內容 */}
              <div className={`px-8 transition-all duration-500 ease-in-out ${activeJob === job.id ? 'max-h-[500px] opacity-100 pb-8' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className="w-full h-[1px] bg-slate-100 mb-6"></div>
                <p className="text-slate-600 leading-relaxed mb-6">{job.desc}</p>
                <h4 className="font-bold text-slate-900 mb-3">必備條件</h4>
                <ul className="list-disc list-inside space-y-2 text-slate-600 mb-8">
                  {job.reqs.map((req, i) => <li key={i}>{req}</li>)}
                </ul>
                <a href="mailto:hr@hxt-tech.com" className="inline-block bg-brand-blue text-white font-bold py-3 px-8 rounded-xl hover:bg-brand-blue/90 hover:shadow-lg hover:shadow-brand-blue/20 transition-all">
                  立即應徵
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}