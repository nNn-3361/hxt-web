// src/components/CookieBanner.jsx
import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 檢查 LocalStorage 是否已經有使用者同意的紀錄
    const hasConsented = localStorage.getItem('hxt-cookie-consent');
    if (!hasConsented) {
      // 為了不要一進網頁就彈出嚇人，延遲 1.5 秒後再顯示
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('hxt-cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-8 md:right-auto md:w-[360px] bg-white p-6 rounded-2xl shadow-2xl shadow-brand-blue/10 border border-slate-100 z-[60] animate-in slide-in-from-bottom-5 fade-in duration-500">
      <h4 className="text-slate-900 font-bold mb-2 flex items-center gap-2">
        <span></span> 隱私權與 Cookie 設定
      </h4>
      <p className="text-slate-500 text-sm leading-relaxed mb-6">
        我們使用 Cookie 來優化您的瀏覽體驗並分析網站流量。繼續瀏覽即表示您同意我們的隱私權政策。
      </p>
      <div className="flex gap-3">
        <button 
          onClick={handleAccept}
          className="flex-1 bg-brand-blue text-white font-bold py-2.5 rounded-xl hover:bg-brand-blue/90 transition-colors text-sm"
        >
          我同意
        </button>
        <button 
          onClick={() => setIsVisible(false)}
          className="flex-1 bg-slate-100 text-slate-600 font-bold py-2.5 rounded-xl hover:bg-slate-200 transition-colors text-sm"
        >
          僅必要
        </button>
      </div>
    </div>
  );
}