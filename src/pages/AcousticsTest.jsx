// src/pages/AcousticsTest.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
import { accessoryProducts, productCategories } from '../data/microphoneProducts';

const formatText = (value) => value.split('\n').filter(Boolean).join(' / ');

function ProductCard({ product }) {
  const primaryFunctions = product.softwareFunctions.slice(0, 4);

  return (
    <article className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 border border-slate-100 overflow-hidden transition-all duration-300 flex flex-col">
      <div className="aspect-[4/3] bg-slate-50 border-b border-slate-100 overflow-hidden">
        <img
          src={product.image}
          alt={product.model}
          className="w-full h-full object-contain p-6"
          loading="lazy"
        />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="text-xs font-bold text-brand-blue tracking-widest uppercase mb-3">
          Microphone Test Solution
        </div>
        <h3 className="text-2xl font-black text-slate-900 mb-3">{product.model}</h3>
        <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line mb-5">
          {product.description}
        </p>

        <dl className="space-y-4 text-sm mb-6">
          <div>
            <dt className="font-bold text-slate-900 mb-1">支援麥克風類型</dt>
            <dd className="text-slate-600 whitespace-pre-line">{product.microphoneType}</dd>
          </div>
          <div>
            <dt className="font-bold text-slate-900 mb-1">最大測試站數</dt>
            <dd className="text-slate-600 whitespace-pre-line">{product.maxTestSite}</dd>
          </div>
          <div>
            <dt className="font-bold text-slate-900 mb-1">接頭種類</dt>
            <dd className="text-slate-600">{formatText(product.connectorType)}</dd>
          </div>
        </dl>

        <div className="flex flex-wrap gap-2 mb-6">
          {primaryFunctions.map((item) => (
            <span key={item} className="px-3 py-1 rounded-full bg-slate-50 text-slate-600 text-xs font-semibold border border-slate-100">
              {item}
            </span>
          ))}
        </div>

        <a
          href={`mailto:contact@hxt-tech.com?subject=${encodeURIComponent(`詢問 ${product.model}`)}`}
          className="mt-auto inline-flex items-center justify-center text-white bg-brand-blue px-5 py-3 rounded-full font-semibold hover:bg-brand-blue/90 hover:shadow-lg hover:shadow-brand-blue/20 transition-all"
        >
          聯絡詢價
          <span className="ml-2">→</span>
        </a>
      </div>
    </article>
  );
}

function AccessoryCard({ accessory }) {
  return (
    <article className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 border border-slate-100 overflow-hidden transition-all duration-300 flex flex-col">
      <div className="aspect-[4/3] bg-slate-50 border-b border-slate-100 overflow-hidden">
        <img
          src={accessory.image}
          alt={accessory.model}
          className="w-full h-full object-contain p-6"
          loading="lazy"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <span className="text-xs font-bold text-brand-blue tracking-widest uppercase mb-3">
          {accessory.type}
        </span>
        <h3 className="text-2xl font-black text-slate-900 mb-3">{accessory.model}</h3>
        <p className="text-sm text-slate-600 leading-relaxed mb-6">
          {accessory.description}
        </p>
        <a
          href={`mailto:contact@hxt-tech.com?subject=${encodeURIComponent(`詢問 ${accessory.model}`)}`}
          className="mt-auto inline-flex items-center justify-center text-white bg-brand-blue px-5 py-3 rounded-full font-semibold hover:bg-brand-blue/90 hover:shadow-lg hover:shadow-brand-blue/20 transition-all"
        >
          聯絡詢價
          <span className="ml-2">→</span>
        </a>
      </div>
    </article>
  );
}

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

      <div className="pb-20 px-6 max-w-7xl mx-auto relative z-10">
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

      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-14">
            <div className="text-brand-blue font-bold tracking-widest mb-4 uppercase text-sm">
              Product Series
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-5 tracking-tight">
              麥克風測試產品系列
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              依測試精度、通道數、音源配置與應用場景分類，提供完整文字規格與產品照片的聲學測試解決方案。
            </p>
          </div>

          <div className="space-y-20">
            {productCategories.map((category) => (
              <section key={category.title}>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-2">
                      {category.title}
                    </h3>
                    <p className="text-slate-500">
                      {category.products.length} 項產品
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {category.products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-14">
            <div className="text-brand-blue font-bold tracking-widest mb-4 uppercase text-sm">
              Test Chamber / Shielding Box
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-5 tracking-tight">
              相關測試箱體與屏蔽箱
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              搭配麥克風測試系統使用的測試箱體、音源與屏蔽箱，可依使用者應用情境整合，客製化治具另行配置。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {accessoryProducts.map((accessory) => (
              <AccessoryCard key={accessory.id} accessory={accessory} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
