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
      title: '目前暫無開放職缺',
      type: '暫不開放',
      location: '職缺尚未釋出',
      reqs: ['職缺資訊待公司確認後更新', '實際招募條件以正式公告為準'],
      desc: '宏相科技目前未公開招募職缺。此區保留職缺列表版型，未來有招募需求時可直接更新職務內容。'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-16 font-sans text-slate-900">
      <SEO title="加入 HXT" description="宏相科技目前暫無公開職缺，未來招募資訊將於本頁更新。" />
      
      <div className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="text-brand-blue font-bold tracking-widest mb-4 uppercase text-sm">Careers / Join Us</div>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">加入宏相科技</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            目前暫無公開職缺。未來有招募需求時，我們會在此更新職務內容與應徵方式。
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
                <div className="inline-flex bg-slate-100 text-slate-500 font-bold py-3 px-8 rounded-xl">
                  暫不開放應徵
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
