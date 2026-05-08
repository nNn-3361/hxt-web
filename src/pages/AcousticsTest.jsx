// src/pages/AcousticsTest.jsx
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
import { accessoryProducts, productCategories } from '../data/microphoneProducts';

const formatText = (value = '') => value.split('\n').filter(Boolean).join(' / ');

const categoryConfig = [
  {
    id: 'best',
    label: 'Best Accuracy',
    description: '最高精度的單站麥克風測試配置，適合高要求的研發與品質驗證。',
    match: (title) => title.startsWith('Best accuracy'),
  },
  {
    id: 'good',
    label: 'Good Accuracy',
    description: '兼顧精度與彈性的主力測試系列，支援 digital、analog 與多種介面配置。',
    match: (title) => title.startsWith('Good accuracy'),
  },
  {
    id: 'cost',
    label: 'Cost Competitive',
    description: '面向量產與成本敏感應用的高效率方案，包含內建音源與基本測試配置。',
    match: (title) => title.startsWith('Cost Competitive'),
  },
  {
    id: 'multi',
    label: 'Multi-Site',
    description: '支援多站、多通道麥克風測試，適合大批量與多模組測試情境。',
    match: (title) => title.startsWith('Multi-Site'),
  },
];

const productGroups = [
  ...categoryConfig.map((config) => ({
    ...config,
    products: productCategories
      .filter((category) => config.match(category.title))
      .flatMap((category) =>
        category.products.map((product) => ({
          ...product,
          sourceCategory: category.title,
          itemType: 'product',
        })),
      ),
  })),
  {
    id: 'accessories',
    label: 'Accessories',
    description: '測試箱體、音源與屏蔽箱，搭配麥克風測試系統完成使用情境整合。',
    products: accessoryProducts.map((accessory) => ({
      ...accessory,
      itemType: 'accessory',
      sourceCategory: accessory.type,
      microphoneType: accessory.type,
      maxTestSite: accessory.description,
      softwareFunctions: [accessory.type],
    })),
  },
];

const specRows = [
  ['接頭種類', 'connectorType'],
  ['支援麥克風類型', 'microphoneType'],
  ['最大測試站數', 'maxTestSite'],
  ['治具', 'fixture'],
  ['測試箱體', 'testChamber'],
  ['屏蔽箱', 'shieldingBox'],
  ['校正方式', 'calibrationType'],
];

function ProductCard({ product, onSelect }) {
  const primaryFunctions = product.softwareFunctions.slice(0, 3);

  return (
    <article className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 border border-slate-100 overflow-hidden transition-all duration-200 flex flex-col min-h-[520px]">
      <div className="aspect-[4/3] bg-slate-50 border-b border-slate-100 overflow-hidden">
        <img
          src={product.image}
          alt={product.model}
          className="w-full h-full object-contain p-6"
          loading="lazy"
        />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="min-h-[34px] mb-4">
          <span className="inline-flex max-w-full px-3 py-1 rounded-full bg-slate-50 text-brand-blue text-xs font-bold border border-slate-100">
            <span className="truncate">{product.sourceCategory}</span>
          </span>
        </div>
        <h3 className="text-2xl font-black text-slate-900 mb-4 leading-tight">{product.model}</h3>

        <dl className="space-y-4 text-sm mb-5">
          <div>
            <dt className="font-bold text-slate-900 mb-1">支援類型</dt>
            <dd className="text-slate-600 leading-relaxed whitespace-pre-line max-h-12 overflow-hidden">
              {product.microphoneType}
            </dd>
          </div>
          <div>
            <dt className="font-bold text-slate-900 mb-1">測試站數</dt>
            <dd className="text-slate-600 leading-relaxed whitespace-pre-line max-h-[72px] overflow-hidden">
              {product.maxTestSite}
            </dd>
          </div>
        </dl>

        <div className="flex flex-wrap gap-2 mb-6 min-h-[64px] content-start">
          {primaryFunctions.map((item) => (
            <span key={item} className="px-3 py-1 rounded-full bg-slate-50 text-slate-600 text-xs font-semibold border border-slate-100">
              {item}
            </span>
          ))}
        </div>

        <div className="mt-auto grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => onSelect(product)}
            className="inline-flex items-center justify-center border border-slate-200 text-slate-700 bg-white px-4 py-3 rounded-full font-semibold hover:border-brand-blue/30 hover:text-brand-blue hover:bg-slate-50 transition-all"
          >
            查看規格
          </button>
          <a
            href={`mailto:contact@hxt-tech.com?subject=${encodeURIComponent(`詢問 ${product.model}`)}`}
            className="inline-flex items-center justify-center text-white bg-brand-blue px-4 py-3 rounded-full font-semibold hover:bg-brand-blue/90 hover:shadow-lg hover:shadow-brand-blue/20 transition-all"
          >
            聯絡詢價
          </a>
        </div>
      </div>
    </article>
  );
}

function SpecModal({ product, onClose }) {
  useEffect(() => {
    if (!product) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, product]);

  if (!product) return null;

  const isAccessory = product.itemType === 'accessory';

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/50 backdrop-blur-sm md:p-6" role="dialog" aria-modal="true" aria-label={`${product.model} 規格`}>
      <button
        type="button"
        aria-label="關閉規格視窗"
        className="absolute inset-0 w-full h-full cursor-default"
        onClick={onClose}
      />

      <div className="relative bg-white w-full h-full md:max-w-6xl md:max-h-[86vh] md:rounded-3xl md:shadow-2xl md:mx-auto md:mt-10 overflow-hidden flex flex-col">
        <div className="flex items-center justify-between gap-4 px-6 py-5 border-b border-slate-100">
          <div>
            <div className="text-xs font-bold text-brand-blue tracking-widest uppercase mb-1">
              {product.sourceCategory}
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-slate-900">{product.model}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-11 h-11 rounded-full border border-slate-200 text-slate-500 hover:text-brand-blue hover:border-brand-blue/30 hover:bg-slate-50 transition-colors flex items-center justify-center text-xl"
            aria-label="關閉"
          >
            ×
          </button>
        </div>

        <div className="overflow-y-auto p-6 md:p-8">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8">
            <div>
              <div className="aspect-[4/3] rounded-2xl bg-slate-50 border border-slate-100 overflow-hidden mb-5">
                <img src={product.image} alt={product.model} className="w-full h-full object-contain p-8" />
              </div>
              <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                {product.description}
              </p>
            </div>

            <div>
              <dl className="grid gap-4">
                {isAccessory ? (
                  <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                    <dt className="text-sm font-bold text-slate-900 mb-2">類型</dt>
                    <dd className="text-slate-600 leading-relaxed">{product.type}</dd>
                  </div>
                ) : (
                  specRows.map(([label, key]) => (
                    <div key={key} className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                      <dt className="text-sm font-bold text-slate-900 mb-2">{label}</dt>
                      <dd className="text-slate-600 leading-relaxed whitespace-pre-line">
                        {formatText(product[key])}
                      </dd>
                    </div>
                  ))
                )}

                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
                  <dt className="text-sm font-bold text-slate-900 mb-3">軟體功能</dt>
                  <dd className="flex flex-wrap gap-2">
                    {product.softwareFunctions.map((item) => (
                      <span key={item} className="px-3 py-1 rounded-full bg-white text-slate-600 text-xs font-semibold border border-slate-100">
                        {item}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>

              <a
                href={`mailto:contact@hxt-tech.com?subject=${encodeURIComponent(`詢問 ${product.model}`)}`}
                className="mt-6 inline-flex w-full md:w-auto items-center justify-center text-white bg-brand-blue px-7 py-4 rounded-full font-bold hover:bg-brand-blue/90 hover:shadow-lg hover:shadow-brand-blue/20 transition-all"
              >
                聯絡詢價
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AcousticsTest() {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState(productGroups[0].id);
  const [selectedProduct, setSelectedProduct] = useState(null);
  useEffect(() => window.scrollTo(0, 0), [location.pathname]);

  const activeGroup = productGroups.find((group) => group.id === activeCategory) ?? productGroups[0];

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
          <div className="max-w-3xl mb-10">
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

          <div className="sticky top-16 z-20 bg-white/95 backdrop-blur border-y border-slate-100 -mx-6 px-6 py-4 mb-10">
            <div className="max-w-7xl mx-auto overflow-x-auto">
              <div className="flex gap-2 min-w-max">
                {productGroups.map((group) => {
                  const isActive = activeCategory === group.id;

                  return (
                    <button
                      type="button"
                      key={group.id}
                      onClick={() => setActiveCategory(group.id)}
                      className={`h-12 min-w-[170px] px-5 rounded-full border text-sm font-bold transition-all duration-200 ${
                        isActive
                          ? 'bg-brand-blue text-white border-brand-blue shadow-lg shadow-brand-blue/15'
                          : 'bg-white text-slate-600 border-slate-200 hover:border-brand-blue/30 hover:text-brand-blue'
                      }`}
                    >
                      <span>{group.label}</span>
                      <span className={`ml-2 ${isActive ? 'text-white/70' : 'text-slate-400'}`}>
                        {group.products.length}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">
                {activeGroup.label}
              </h3>
              <p className="text-slate-600 max-w-3xl leading-relaxed">
                {activeGroup.description}
              </p>
            </div>
            <div className="text-sm font-bold text-brand-blue bg-slate-50 border border-slate-100 rounded-full px-4 py-2 w-fit">
              {activeGroup.products.length} 項產品
            </div>
          </div>

          <div key={activeGroup.id} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 transition-all duration-200">
            {activeGroup.products.map((product) => (
              <ProductCard key={`${product.sourceCategory}-${product.id}`} product={product} onSelect={setSelectedProduct} />
            ))}
          </div>
        </div>
      </section>

      <SpecModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  );
}
