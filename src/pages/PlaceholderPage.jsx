// src/pages/PlaceholderPage.jsx
import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function PlaceholderPage({ title, subtitle }) {
  const location = useLocation();

  // 每次切換頁面時，自動捲動到最上方
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="bg-[#050505] min-h-screen pt-16 font-sans text-white">
      {/* 頂部主視覺 (純黑底色 + 簡約標題) */}
      <div className="py-32 px-6 relative overflow-hidden">
        {/* 深藍色微光暈特效 */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/20 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-brand-blue font-bold tracking-widest mb-4 uppercase text-sm">
            HXT / {location.pathname.split('/')[1]}
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            {title}
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            {subtitle || '這裡是預留的頁面副標題，您可以在這裡輸入關於此單元的簡短介紹，幫助使用者快速了解內容。'}
          </p>
        </div>
      </div>

      {/* 內容區塊 (不使用交錯排版，改用現代網格卡片) */}
      <div className="pb-32 px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div 
              key={item} 
              className="bg-[#0a0a0a] border border-slate-800 p-8 rounded-2xl hover:border-brand-blue transition-colors duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* 裝飾性 Icon 區塊 */}
                <div className="w-12 h-12 bg-brand-blue text-white rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">專業模組 {item}</h3>
                <p className="text-slate-400 leading-relaxed mb-8">
                  這是預留的內文區塊。採用黑色為主調，白色字體為輔，確保高質感的閱讀體驗，同時與首頁做出視覺區隔。
                </p>
              </div>
              
              {/* 深藍色按鈕 */}
              <Link 
                to="#"
                className="inline-flex items-center text-sm font-bold text-white bg-brand-blue hover:bg-brand-blue/80 py-3 px-6 rounded-full transition-colors w-fit"
              >
                了解更多 <span className="ml-2">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}