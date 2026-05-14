// 在你原本的 Import 下方加入這三行
import AcousticsTest from './pages/AcousticsTest';
import JoinHXT from './pages/JoinHXT';
import CookieBanner from './components/CookieBanner';
import HeroCanvas from './components/HeroCanvas';
import ProductShowcase from './components/ProductShowcase';
import ContactCTA from './components/ContactCTA';
import Benefits from './pages/Benefits';
import CompanyProfile from './pages/CompanyProfile';
import CompanyInfo from './pages/CompanyInfo';
import CompanySystem from './pages/CompanySystem';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// 加入這兩行
import { HelmetProvider } from 'react-helmet-async';
import SEO from './components/SEO';
import { accessoryProducts, productCategories } from './data/microphoneProducts';

// (SearchIcon 和 MenuIcon 保持不變，放在 Navbar 外面)
const SearchIcon = ({ isSolid }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-colors ${isSolid ? 'text-slate-400' : 'text-white/60'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const microphoneSearchKeywords = [
  ...new Set([
    ...productCategories.flatMap((category) => [
      category.title,
      ...category.products.flatMap((product) => [
        product.model,
        product.microphoneType,
        product.connectorType,
        ...product.softwareFunctions,
      ]),
    ]),
    ...accessoryProducts.flatMap((accessory) => [accessory.model, accessory.type]),
    'ACH',
    'AMT',
    'test chamber',
    'shielding box',
    'PDM',
    'I2S',
    'Analog',
    'Digital',
    'CMT-5800',
    'CMT-5810',
    'MT-5338',
  ]),
];

function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false); 
  
  // 🚀 新增：儲存使用者輸入的搜尋字串
  const [searchQuery, setSearchQuery] = useState(''); 
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 關閉搜尋與選單的輔助函式
  const closeAllMenus = () => {
    setIsMobileOpen(false);
    setActiveMenu(null);
    setIsSearchOpen(false);
    setSearchQuery(''); // 關閉時清空搜尋字串
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeAllMenus();
    };
    if (isSearchOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen]);

  const menuData = {
    products: {
      title: '產品與服務',
      links: [
        { name: '聲學與音訊測試', href: '/products/acoustics' },
      ]
    },
    about: {
      title: '關於我們',
      links: [
        { name: '企業簡介', href: '/about/company' },
        { name: '公司基本資料', href: '/about/info' },
      ]
    },
    careers: {
      title: '人才招募',
      links: [
        { name: '公司福利', href: '/careers/benefits' },
        { name: '公司制度', href: '/careers/system' },
        { name: '加入HXT', href: '/careers/join' },
      ]
    }
  };

  const isSolid = isScrolled || activeMenu !== null;

  // 🚀 建立搜尋資料庫：包含標題、敘述與隱藏的觸發關鍵字
  const searchDatabase = [
    { id: 1, title: '聲學與音訊測試', category: '產品與服務', path: '/products/acoustics', desc: '數位與類比聲音訊號的頂尖測試解決方案。', keywords: ['麥克風', '聲音', '音訊', '聲學', '訊號', 'audio', '單體', 'fpc', '耳機', '喇叭'] },
    { id: 5, title: '麥克風測試產品系列', category: '產品與服務', path: '/products/acoustics', desc: 'CMT、LMT、MT 系列麥克風測試系統，以及 ACH 測試箱體與 AMT 屏蔽箱。', keywords: microphoneSearchKeywords },
    { id: 2, title: '企業簡介', category: '關於我們', path: '/about/company', desc: '宏相科技成立於 2005 年，提供全方位的開發能力與高標準測試。', keywords: ['關於我們', '企業簡介', '歷史', '理念', '宏相科技', 'hxt', '昆山', '介紹'] },
    { id: 6, title: '公司基本資料', category: '關於我們', path: '/about/info', desc: '公司名稱、負責人、企業沿革、辦公室地理位置等基本資料。', keywords: ['公司基本資料', '基本資料', '負責人', '沿革', '企業沿革', '地址', '辦公室', '地理位置', '統一編號'] },
    { id: 3, title: '公司福利', category: '人才招募', path: '/careers/benefits', desc: '提供優於業界的福利與彈性工時，重視每一位團隊夥伴。', keywords: ['福利', '薪資', '薪酬', '招募', '加入', '假勤', '健康檢查', '零食', 'careers'] },
    { id: 7, title: '公司制度', category: '人才招募', path: '/careers/system', desc: '工作制度、假勤制度、績效升遷、教育訓練與制度文件框架。', keywords: ['公司制度', '制度', '工作制度', '假勤制度', '績效', '升遷', '教育訓練', '員工手冊', '申請表單', '規範'] },
    { id: 4, title: '加入 HXT', category: '人才招募', path: '/careers/join', desc: '目前暫無公開職缺，未來招募資訊將在此更新。', keywords: ['職缺', '工作', '招募', '徵才', '應徵', '面試'] },
  ];

  // 🚀 實時過濾邏輯：如果沒有輸入，回傳空陣列；如果有輸入，比對標題、敘述或關鍵字
  const filteredResults = searchQuery.trim() === '' ? [] : searchDatabase.filter(item => {
    const query = searchQuery.toLowerCase();
    return item.title.toLowerCase().includes(query) ||
           item.desc.toLowerCase().includes(query) ||
           item.keywords.some(kw => kw.toLowerCase().includes(query));
  });

  // 在 src/App.jsx 中，找到 Navbar 元件裡的 return ( ... ) 並替換成以下：

  return (
    <>
      <nav 
        onMouseLeave={() => setActiveMenu(null)}
        // 🚀 透明狀態下不再是黑底，捲動時加上微微的陰影
        className={`fixed w-full z-40 transition-all duration-300 ${
          isMobileOpen ? 'bg-white' : (isSolid ? 'bg-white shadow-sm border-b border-slate-100' : 'bg-transparent border-transparent')
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold cursor-pointer text-brand-blue relative z-50">
            HXT
          </Link>
          
          <div className="hidden md:flex flex-1 justify-center h-full items-center gap-2">
            {Object.entries(menuData).map(([key, menu]) => (
              <div 
                key={key}
                className={`px-5 py-2 rounded-full cursor-pointer text-sm font-semibold transition-all duration-200 ${
                  activeMenu === key 
                    ? 'bg-slate-100 text-brand-blue' 
                    : 'text-slate-600 hover:bg-slate-50 hover:text-brand-blue'
                }`}
                onMouseEnter={() => setActiveMenu(key)}
              >
                {menu.title}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4 relative z-50">
            <div className="relative hidden md:flex items-center">
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center gap-2 text-sm rounded-full pl-4 pr-5 py-2 outline-none transition-all duration-300 bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-brand-blue"
              >
                <SearchIcon isSolid={true} />
                <span className="font-medium">搜尋</span>
              </button>
            </div>
            
            <button className="text-sm font-medium px-2 transition-colors hidden md:block text-slate-600 hover:text-brand-blue">
              EN
            </button>
            
            <button 
              className="md:hidden p-2 -mr-2 focus:outline-none"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
            >
              {/* 手機版漢堡換成深藍色 */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* 電腦版：隱藏式下拉面板 (白底) */}
        <div 
          className={`hidden md:block absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl overflow-hidden transition-all duration-300 ease-in-out origin-top ${
            activeMenu && !isMobileOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 py-8">
            {activeMenu && (
              <div>
                <h4 className="text-sm font-semibold text-slate-400 mb-5 tracking-wider">
                  探索 {menuData[activeMenu].title}
                </h4>
                <ul className="flex gap-12">
                  {menuData[activeMenu].links.map((link, index) => (
                    <li key={index}>
                      <Link 
                        to={link.href} 
                        onClick={closeAllMenus}
                        className="group relative inline-flex pb-1 text-lg text-slate-800 hover:text-brand-blue font-medium transition-colors"
                      >
                        {link.name}
                        <span className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-brand-blue transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* 手機版：全螢幕展開選單 (換成白底) */}
      <div className={`fixed inset-0 z-30 bg-white transition-transform duration-500 ease-in-out md:hidden flex flex-col pt-24 px-6 ${
        isMobileOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex-1 overflow-y-auto pb-12">
          {Object.entries(menuData).map(([key, menu]) => (
            <div key={key} className="mb-8">
              <h4 className="text-xs font-bold text-slate-400 mb-4 tracking-widest uppercase">{menu.title}</h4>
              <ul className="space-y-4">
                {menu.links.map((link, index) => (
                  <li key={index}>
                    <Link to={link.href} onClick={closeAllMenus} className="group relative inline-flex pb-1 text-2xl font-semibold text-slate-900 hover:text-brand-blue transition-colors">
                      {link.name}
                      <span className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-brand-blue transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* 🚀 搜尋面板 (換成明亮的白底霧面) */}
      <div 
        className={`fixed inset-0 z-50 bg-white/95 backdrop-blur-xl transition-all duration-500 ease-in-out flex flex-col pt-24 md:pt-32 px-6 ${
          isSearchOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button 
          onClick={closeAllMenus}
          className="absolute top-6 right-6 md:top-10 md:right-10 text-slate-400 hover:text-slate-800 transition-colors flex items-center gap-2 text-sm font-medium tracking-widest"
        >
          <span className="hidden md:block border border-slate-200 rounded px-2 py-0.5 text-xs">ESC</span>
          關閉 ✕
        </button>

        <div className="max-w-4xl mx-auto w-full flex flex-col h-full pb-20">
          <div className="relative mb-8 md:mb-12 group flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-8 md:h-12 md:w-12 text-slate-300 group-focus-within:text-brand-blue transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text" 
              placeholder="搜尋產品、職缺或關鍵字..." 
              autoFocus={isSearchOpen}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              // 🚀 搜尋框換成白底黑字風格
              className="w-full bg-transparent text-3xl md:text-5xl font-black text-slate-900 border-b-2 border-slate-200 focus:border-brand-blue pb-4 pl-12 md:pl-20 outline-none transition-colors placeholder:text-slate-300"
            />
          </div>

          <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
            {searchQuery.trim() !== '' && (
              <div>
                <h4 className="text-xs font-bold text-slate-400 mb-6 tracking-widest uppercase">
                  搜尋結果 ({filteredResults.length})
                </h4>
                
                {filteredResults.length > 0 ? (
                  <ul className="space-y-4">
                    {filteredResults.map(result => (
                      <li key={result.id}>
                        <Link 
                          to={result.path} 
                          onClick={closeAllMenus}
                          className="block bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-brand-blue/40 p-6 rounded-2xl transition-all duration-300 group"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <span className="text-xs font-bold text-brand-blue mb-2 block">{result.category}</span>
                              <h5 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-blue transition-colors">{result.title}</h5>
                              <p className="text-slate-500 text-sm leading-relaxed">{result.desc}</p>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-brand-blue/10 group-hover:text-brand-blue transition-colors flex-shrink-0">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                            </div>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="text-center py-20 border border-dashed border-slate-200 rounded-3xl">
                    <p className="text-slate-600 text-2xl font-bold mb-3">找不到符合「{searchQuery}」的結果</p>
                    <p className="text-slate-400">請嘗試使用其他關鍵字，例如「<span className="text-slate-500">音訊</span>」、「<span className="text-slate-500">麥克風</span>」、「<span className="text-slate-500">福利</span>」或「<span className="text-slate-500">客製化</span>」</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

function Footer() {
  return (
    // 🚀 換成統一的淺灰白底，消除切斷感
    <footer className="bg-slate-50 text-slate-500 py-12 text-sm border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-brand-blue text-lg font-bold mb-4">宏相科技 HXT</h4>
          <p>統編：27832148</p>
          <p>地址：新竹縣竹北市嘉豐十一路一段100號10樓之7</p>
          <p>電話：+886-3-658-3862</p>
          <p>傳真：+886-3-658-3762</p>
        </div>
        <div className="md:text-right flex flex-col md:items-end justify-center gap-2">
          <Link to="#" className="hover:text-brand-blue transition-colors">隱私權政策</Link>
          <Link to="#" className="hover:text-brand-blue transition-colors">服務條款</Link>
          <p className="mt-4 text-slate-400">© 2012-2026 HXT Co., Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// 提取首頁內容元件
function HomePage() {
  return (
    <>
      {/* 首頁專屬 SEO，不需傳入 title 讓它直接顯示品牌名 */}
      <SEO 
        description="宏相科技 HXT 官方網站。引領未來的科技先驅，提供最專業的軟硬體自動化測試解決方案。"
      />
      <HeroCanvas />
      <ProductShowcase />
      <ContactCTA />
    </>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="font-sans bg-slate-50 min-h-screen flex flex-col">
          <Navbar />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              
              {/* 🚀 更新產品路由 */}
              <Route path="/products/acoustics" element={<AcousticsTest />} />
              
              <Route path="/about/company" element={<CompanyProfile />} />
              
              {/* 🚀 更新職缺路由 */}
              <Route path="/careers/benefits" element={<Benefits />} />
              <Route path="/careers/join" element={<JoinHXT />} />
              
              {/* 其他預留空頁面可自行刪減或保留 */}
              <Route path="/about/info" element={<CompanyInfo />} />
              <Route path="/careers/system" element={<CompanySystem />} />
            </Routes>
          </main>

          <Footer />
          
          {/* 🚀 掛載 Cookie 同意橫幅 */}
          <CookieBanner />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}
