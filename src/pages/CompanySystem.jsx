import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SEO from '../components/SEO';

const systemSections = [
  {
    title: '出勤與休假',
    desc: '週休二日，並依制度提供特休 / 年假。',
    items: ['週休二日', '特休 / 年假'],
  },
  {
    title: '保險保障',
    desc: '依法提供基礎保險，並列有員工團保與職災保險。',
    items: ['勞保', '健保', '員工團保', '職災保險'],
  },
  {
    title: '獎金與禮品',
    desc: '公開人力銀行資料列有年終、三節與績效相關獎金項目。',
    items: ['年終獎金', '三節獎金 / 禮品', '績效獎金'],
  },
  {
    title: '學習與補助',
    desc: '列有員工進修補助與在職教育訓練等成長資源。',
    items: ['員工進修補助', '員工在職教育訓練'],
  },
  {
    title: '活動與凝聚',
    desc: '公開資料列有部門聚餐、國內旅遊與國外旅遊。',
    items: ['部門聚餐', '國內旅遊', '國外旅遊'],
  },
  {
    title: '生活支持',
    desc: '列有結婚禮金、生育津貼等補助項目。',
    items: ['結婚禮金', '生育津貼'],
  },
];

const notes = [
  '實際制度內容仍以公司正式公告與面談說明為準。',
  '不同職缺或任用條件可能適用不同制度細節。',
  '若後續取得公司內部正式資料，可再補上申請流程與文件下載。',
];

export default function CompanySystem() {
  const location = useLocation();
  useEffect(() => window.scrollTo(0, 0), [location.pathname]);

  return (
    <div className="bg-slate-50 min-h-screen pt-16 font-sans text-slate-900">
      <SEO title="公司制度" description="宏相科技 HXT 公司制度與公開福利資訊整理。" />

      <div className="py-24 md:py-32 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="text-brand-blue font-bold tracking-widest mb-4 uppercase text-sm">
            Careers / Company System
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight">
            公司制度
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            依公開人力銀行資料整理目前可確認的制度與福利項目；正式細節仍以公司公告與面談說明為準。
          </p>
        </div>
      </div>

      <main className="pb-32 px-6 max-w-7xl mx-auto relative z-10 space-y-16">
        <section>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <div className="text-brand-blue font-bold tracking-widest mb-3 uppercase text-sm">
                Confirmed Items
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900">公開制度項目</h2>
            </div>
            <span className="inline-flex items-center rounded-full bg-white border border-slate-100 px-4 py-2 text-sm font-bold text-slate-500">
              公開資料整理
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {systemSections.map((section, index) => (
              <article
                key={section.title}
                className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 border border-slate-100 p-8 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center text-brand-blue mb-6 border border-slate-100 font-black">
                  0{index + 1}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{section.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{section.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {section.items.map((item) => (
                    <span key={item} className="rounded-full bg-slate-50 border border-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-8">
          <div className="bg-brand-blue rounded-3xl shadow-xl shadow-brand-blue/20 p-8 md:p-10 text-white h-fit">
            <div className="text-white/60 font-bold tracking-widest mb-4 uppercase text-sm">
              Policy Notes
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-5">制度說明</h2>
            <p className="text-white/75 leading-relaxed">
              本頁不放未確認的內部細節，只呈現公開資料可支持的制度分類。後續可依公司提供的正式文件補齊申請流程、條件與適用範圍。
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 md:p-10">
            <div className="grid gap-4">
              {notes.map((note, index) => (
                <div key={note} className="flex items-start gap-5 rounded-2xl bg-slate-50 border border-slate-100 p-5">
                  <div className="w-11 h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center text-brand-blue font-black flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-slate-600 leading-relaxed pt-2">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr] gap-10 items-start">
              <div>
                <div className="text-brand-blue font-bold tracking-widest mb-3 uppercase text-sm">
                  Documents
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-5">正式文件待補</h2>
                <p className="text-slate-600 leading-relaxed">
                  目前未取得可公開的員工手冊、制度公告或申請表單。取得公司核准資料後，可集中放在此區。
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['員工手冊', '制度公告', '申請表單', '常見問題'].map((item) => (
                  <div key={item} className="rounded-2xl bg-slate-50 border border-slate-100 p-5">
                    <div className="font-bold text-slate-900 mb-2">{item}</div>
                    <div className="text-sm text-slate-400">待公司提供正式文件</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
