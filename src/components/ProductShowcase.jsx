export default function ProductShowcase() {
  const showcases = [
    {
      id: 1,
      title: '單體麥克風零組件檢測',
      description: '針對各類型單體麥克風，提供業界最高精度的聲學頻率響應、靈敏度與總諧波失真 (THD) 量測，為您嚴格把關最源頭的上游零件品質。',
      image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=1000', 
      reverse: false,
    },
    {
      id: 2,
      title: 'FPC 軟性電路板麥克風模組',
      description: '專為高階消費性電子打造的自動化檢測系統。結合客製化載板與高速測試流程，精準驗證麥克風模組在組裝前的電聲特性與穩定度。',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000', 
      reverse: true,
    },
    {
      id: 3,
      title: '聲音成品與系統級驗證',
      description: '測試涵蓋智慧型手機、藍牙耳機 (TWS) 至智慧音箱等終端產品。我們提供無響室等級的背景噪音模擬與數位/類比音訊的全方位品質檢驗。',
      image: 'https://images.unsplash.com/photo-1612282130134-4b53fa4465aa?auto=format&fit=crop&q=80&w=1000', 
      reverse: false,
    }
  ];

  return (
    <section className="py-24 bg-white" id="products">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-32">
        {/* 引言區塊 */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-sm font-bold tracking-widest text-brand-blue uppercase mb-4">Core Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            打造完美音質的守門員
          </h3>
        </div>

        {/* 圖文交錯卡片 */}
        {showcases.map((item) => (
          <div 
            key={item.id} 
            className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${
              item.reverse ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div className="w-full md:w-1/2">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </div>
            </div>
            
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <div className="w-12 h-12 bg-slate-50 text-brand-blue flex items-center justify-center rounded-xl font-bold text-lg mb-6 border border-slate-100 shadow-sm">
                0{item.id}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                {item.title}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                {item.description}
              </p>
              <div>
                <a 
                  href="#contact" 
                  className="inline-flex items-center text-white bg-brand-blue px-6 py-3 rounded-full font-semibold hover:bg-brand-blue/90 hover:shadow-lg hover:shadow-brand-blue/20 transition-all"
                >
                  進一步了解 
                  <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}