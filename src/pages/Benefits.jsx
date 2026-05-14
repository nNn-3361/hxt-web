import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Benefits() {
  const location = useLocation();
  useEffect(() => window.scrollTo(0, 0), [location.pathname]);

  const benefits = [
    {
      title: '優於業界的薪酬',
      desc: '具競爭力的底薪與豐厚的績效獎金、年終獎金，讓你的付出獲得實質回報。',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    },
    {
      title: '彈性工時與假勤',
      desc: '彈性上下班時間，優於勞基法的特休假制度，幫助你完美平衡工作與生活。',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    },
    {
      title: '健康與保險照護',
      desc: '每年全額補助高階健康檢查，並提供完善的團體保險（含眷屬），守護你與家人的健康。',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    },
    {
      title: '持續學習與成長',
      desc: '提供技術研討會、外部培訓課程全額補助，內部亦有定期的技術分享會。',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    },
    {
      title: '頂級辦公設備',
      desc: '配備最新型設備與雙螢幕，以及人體工學椅，打造最高效的開發環境。',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    },
    {
      title: '免費零食與聚餐',
      desc: '無限量供應的咖啡、零食飲料吧，以及每月的部門聚餐與 Team Building 活動。',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" />
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-16 font-sans text-slate-900">
      <SEO title="公司福利" />
      
      <div className="py-24 md:py-32 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="text-brand-blue font-bold tracking-widest mb-4 uppercase text-sm">
            Careers / Benefits
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight">
            公司福利
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            我們相信，照顧好每一位團隊成員，才能共同打造出世界級的產品。在宏相科技，你將擁有最佳的發揮舞台。
          </p>
        </div>
      </div>

      <div className="pb-24 px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 border border-slate-100 p-8 transition-all duration-300">
              <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center text-brand-blue mb-6 border border-slate-100">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {item.icon}
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 照片牆區塊 */}
      <div className="pb-32 px-6 max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/3">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">真實的辦公日常</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              加入我們，在充滿活力的開放式辦公空間中，與頂尖的工程師們一起探索科技的邊界。
            </p>
            <div className="inline-flex text-slate-500 bg-slate-100 px-6 py-3 rounded-full font-bold">
              目前暫無公開職缺
            </div>
          </div>
          <div className="w-full md:w-2/3 grid grid-cols-2 gap-4">
            <div className="aspect-[4/3] bg-slate-100 rounded-2xl flex items-center justify-center">
              <span className="text-slate-400 text-sm font-medium">辦公環境照預留位</span>
            </div>
            <div className="aspect-[4/3] bg-slate-100 rounded-2xl flex items-center justify-center mt-8">
              <span className="text-slate-400 text-sm font-medium">團隊合照預留位</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
